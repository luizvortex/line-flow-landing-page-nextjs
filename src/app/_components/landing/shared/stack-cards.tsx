"use client";

import { useEffect, useRef, type ReactNode } from "react";

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
 * apaga. No desktop é a grade normal de 3 colunas.
 *
 * O efeito escreve direto no `style` dos cards a cada quadro de rolagem, sem
 * passar pelo estado do React, para não renderizar a grade inteira de novo.
 */
export function StackCards({ items }: { items: StackItem[] }) {
  const wrappers = useRef<(HTMLDivElement | null)[]>([]);

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
          className={`sticky md:static ${item.wide ? "md:col-span-2" : ""}`}
          style={{ top: STICKY_TOP }}
        >
          <div className="origin-top will-change-transform md:will-change-auto">
            {item.node}
          </div>
        </div>
      ))}
    </div>
  );
}
