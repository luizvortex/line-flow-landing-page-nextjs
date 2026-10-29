"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export interface StackItem {
  key: string;
  node: ReactNode;
  /** Ocupa duas colunas na grade do desktop. */
  wide?: boolean;
}

/** Abaixo da navbar fixa (h-16) com uma folga. */
const STICKY_TOP = 76;
/** Até onde o card de baixo encolhe e apaga quando é coberto por inteiro. */
const MIN_SCALE = 0.92;
const MIN_OPACITY = 0.35;

/**
 * Grade que, no celular, vira uma pilha como a do Spoke: cada card fica preso
 * no topo e o próximo sobe por cima dele, enquanto o de baixo encolhe e
 * apaga. No desktop é a grade normal de 3 colunas, e cada card entra
 * deslizando quando aparece na tela: a coluna da esquerda vem da esquerda e
 * a da direita, da direita.
 *
 * O efeito escreve direto no `style` dos cards a cada quadro de rolagem, sem
 * passar pelo estado do React, para não renderizar a grade inteira de novo.
 */
export function StackCards({ items }: { items: StackItem[] }) {
  const wrappers = useRef<(HTMLDivElement | null)[]>([]);
  const [shown, setShown] = useState<boolean[]>(() => items.map(() => false));

  // Entrada no desktop: marca cada card como visível na primeira vez que ele
  // aparece e para de observá-lo.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const i = wrappers.current.indexOf(entry.target as HTMLDivElement);
          observer.unobserve(entry.target);
          setShown((prev) => (prev[i] ? prev : prev.map((v, j) => v || j === i)));
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" },
    );
    wrappers.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;
    const mobile = window.matchMedia("(max-width: 767px)");

    const update = () => {
      frame = 0;
      const els = wrappers.current;
      els.forEach((el, i) => {
        const card = el?.firstElementChild as HTMLElement | null;
        if (!el || !card) return;
        const next = els[i + 1];
        if (!mobile.matches || !next) {
          card.style.transform = "";
          card.style.opacity = "";
          return;
        }
        // 0 quando o próximo card só encosta embaixo; 1 quando já cobriu tudo.
        const height = el.offsetHeight;
        const nextTop = next.getBoundingClientRect().top;
        const covered = Math.min(Math.max((STICKY_TOP + height - nextTop) / height, 0), 1);
        card.style.transform = `scale(${1 - (1 - MIN_SCALE) * covered})`;
        card.style.opacity = String(1 - (1 - MIN_OPACITY) * covered);
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    mobile.addEventListener("change", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      mobile.removeEventListener("change", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
      {items.map((item, i) => (
        <div
          key={item.key}
          ref={(el) => {
            wrappers.current[i] = el;
          }}
          className={`sticky md:static md:transition-[opacity,translate] md:duration-700 md:ease-out ${
            item.wide ? "md:col-span-2" : ""
          } ${
            shown[i]
              ? "md:opacity-100 md:translate-x-0"
              : `md:opacity-0 ${i % 2 === 0 ? "md:-translate-x-24" : "md:translate-x-24"}`
          }`}
          style={{ top: STICKY_TOP, transitionDelay: i % 2 === 1 ? "120ms" : undefined }}
        >
          <div className="origin-top will-change-transform md:will-change-auto">
            {item.node}
          </div>
        </div>
      ))}
    </div>
  );
}
