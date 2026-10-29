"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { PhoneFrame } from "./shared/phone-frame";
import { CalledScreen, JoinScreen, WaitingScreen } from "./app-demo";

/**
 * "Comece em minutos" no formato do Spoke. No desktop a seção fica presa na
 * tela enquanto a página rola e cada trecho acende um passo; no celular vira
 * um carrossel horizontal que passa sozinho.
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

function Title() {
  return (
    <h2 className="text-center text-3xl md:text-[44px] font-bold tracking-tight text-lf-primary">
      Comece a atender em <span className="text-lf-accent">minutos</span>
    </h2>
  );
}

/** Desktop: a seção fica presa na tela e a rolagem da página troca o passo. */
function StickySteps() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = wrapperRef.current;
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
    <div
      ref={wrapperRef}
      className="relative"
      style={{ height: `${steps.length * VH_PER_STEP + 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">
        <div className="max-w-6xl w-full mx-auto">
          <Title />

          <div className="mt-10 grid grid-cols-2 gap-16 items-center">
            {/* Celular: as três telas empilhadas, só a do passo ativo aparece */}
            <div className="flex justify-center">
              <div className="relative w-[255px] h-[530px] shrink-0">
                <div className="absolute top-0 left-0 origin-top-left scale-[0.85]">
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

            <ol className="relative max-w-lg">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className={`relative flex gap-5 pb-8 last:pb-0 transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "opacity-35"
                  }`}
                >
                  {/* Linha entre os números */}
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute left-[17px] top-11 bottom-1 w-px bg-lf-border-strong"
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
                    <h3 className="text-[26px] font-bold tracking-tight text-lf-primary leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-lf-secondary">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Tempo de cada passo no carrossel automático e a pausa depois de um toque. */
const AUTOPLAY_MS = 4000;
const RESUME_AFTER_TOUCH_MS = 6000;

/**
 * Celular e tablet: carrossel horizontal no formato do Spoke mobile. O passo
 * ativo fica no centro e as bordas dos celulares vizinhos aparecem nas
 * laterais. Passa sozinho enquanto está na tela, pausa quando a pessoa
 * arrasta e respeita quem pediu para reduzir movimento.
 */
function CarouselSteps() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  const lastTouch = useRef(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const slide = track?.children[i] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    // O slide mais perto do centro do trilho é o ativo.
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearest = 0;
    let best = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft + el.offsetWidth / 2 - center);
      if (distance < best) {
        best = distance;
        nearest = i;
      }
    });
    activeRef.current = nearest;
    setActive(nearest);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let visible = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.5 },
    );
    observer.observe(track);

    const markTouch = () => {
      lastTouch.current = Date.now();
    };
    track.addEventListener("pointerdown", markTouch);
    track.addEventListener("touchstart", markTouch, { passive: true });

    const timer = window.setInterval(() => {
      if (!visible || Date.now() - lastTouch.current < RESUME_AFTER_TOUCH_MS) return;
      goTo((activeRef.current + 1) % steps.length);
    }, AUTOPLAY_MS);

    return () => {
      observer.disconnect();
      track.removeEventListener("pointerdown", markTouch);
      track.removeEventListener("touchstart", markTouch);
      window.clearInterval(timer);
    };
  }, []);

  const step = steps[active];

  return (
    <div className="py-16">
      <div className="px-4">
        <Title />
      </div>

      {/* Trilho: o espaço nas pontas centraliza o primeiro e o último celular */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory px-[calc(50%-108px)] sm:px-[calc(50%-126px)] pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Passo a passo no app do cliente"
      >
        {steps.map((s, i) => (
          <div
            key={s.title}
            className={`snap-center shrink-0 transition-all duration-300 ${
              i === active ? "opacity-100 scale-100" : "opacity-45 scale-[0.92]"
            }`}
          >
            <div className="relative w-[216px] h-[449px] sm:w-[252px] sm:h-[524px]">
              <div className="absolute top-0 left-0 origin-top-left scale-[0.72] sm:scale-[0.84]">
                <PhoneFrame>{s.screen}</PhoneFrame>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Passo ativo */}
      <div className="mt-6 px-6 max-w-md mx-auto">
        <div className="flex justify-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => {
                lastTouch.current = Date.now();
                goTo(i);
              }}
              aria-label={`Ir para o passo ${i + 1}`}
              aria-current={i === active ? "step" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-lf-accent" : "w-2 bg-lf-border-strong"
              }`}
            />
          ))}
        </div>

        <div className="mt-6 flex gap-4" aria-live="polite">
          <span className="w-9 h-9 shrink-0 rounded-full grid place-items-center font-mono text-sm font-bold bg-lf-accent text-lf-base">
            {active + 1}
          </span>
          <div className="min-h-[104px]">
            <h3 className="text-xl font-bold tracking-tight text-lf-primary leading-tight">
              {step.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-lf-secondary">{step.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PassoAPasso() {
  return (
    <section id="comece" className="relative">
      <div className="hidden lg:block">
        <StickySteps />
      </div>
      <div className="lg:hidden">
        <CarouselSteps />
      </div>
    </section>
  );
}
