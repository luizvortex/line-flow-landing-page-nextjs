"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { PhoneFrame } from "./shared/phone-frame";
import { CalledScreen, JoinScreen, WaitingScreen } from "./app-demo";

/**
 * "Comece em minutos" no formato do Spoke: a seção fica presa na tela
 * enquanto a página rola, cada trecho de rolagem acende um passo e o
 * celular troca para a tela daquele passo.
 */

const steps: { title: string; desc: string; screen: ReactNode }[] = [
  {
    title: "O cliente entra pelo QR Code",
    desc: "Ele aponta a câmera, vê a posição e a espera estimada e entra na fila. Sem baixar app, sem cadastro.",
    screen: <JoinScreen />,
  },
  {
    title: "Acompanha a vez pelo celular",
    desc: "A posição e a espera atualizam sozinhas. Ele pode sair, tomar um café e voltar na hora certa.",
    screen: <WaitingScreen />,
  },
  {
    title: "É chamado na hora certa",
    desc: "Você chama com um toque no painel e o celular do cliente avisa na hora.",
    screen: <CalledScreen />,
  },
];

/** Altura de rolagem dedicada a cada passo, em vh. */
const VH_PER_STEP = 70;

export function PassoAPasso() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.999);
      setActive(Math.floor(progress * steps.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="comece"
      ref={sectionRef}
      className="relative"
      style={{ height: `${steps.length * VH_PER_STEP + 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center px-4 sm:px-6 pt-16 overflow-hidden">
        <div className="max-w-6xl w-full mx-auto">
          <h2 className="text-center text-3xl md:text-[44px] font-bold tracking-tight text-lf-primary">
            Comece a atender em <span className="text-lf-accent">minutos</span>
          </h2>

          <div className="mt-6 md:mt-10 grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            {/* Celular: as três telas empilhadas, só a do passo ativo aparece */}
            <div className="flex justify-center">
              <div className="relative w-[180px] h-[374px] sm:w-[216px] sm:h-[449px] lg:w-[255px] lg:h-[530px] shrink-0">
                <div className="absolute top-0 left-0 origin-top-left scale-[0.6] sm:scale-[0.72] lg:scale-[0.85]">
                  <PhoneFrame>
                    <div className="relative flex-1">
                      {steps.map((s, i) => (
                        <div
                          key={s.title}
                          aria-hidden={i !== active}
                          className={`absolute inset-0 flex flex-col transition-opacity duration-500 ${
                            i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                          }`}
                        >
                          {s.screen}
                        </div>
                      ))}
                    </div>
                  </PhoneFrame>
                </div>
              </div>
            </div>

            {/* Passos: no celular só o ativo aparece; no desktop, os três */}
            <ol className="relative max-w-lg mx-auto lg:mx-0">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className={`relative gap-5 pb-8 last:pb-0 transition-opacity duration-500 ${
                    i === active ? "flex opacity-100" : "hidden lg:flex lg:opacity-35"
                  }`}
                >
                  {/* Linha entre os números */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute left-[17px] top-11 bottom-1 w-px bg-lf-border-strong"
                    />
                  )}
                  <span
                    className={`relative z-10 w-9 h-9 shrink-0 rounded-full grid place-items-center font-mono text-sm font-bold transition-colors duration-500 ${
                      i === active
                        ? "bg-lf-accent text-lf-base"
                        : "bg-lf-card border border-lf-border-strong text-lf-secondary"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl md:text-[26px] font-bold tracking-tight text-lf-primary leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[15px] md:text-base leading-relaxed text-lf-secondary">
                      {s.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
