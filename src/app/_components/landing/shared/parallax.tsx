"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Desloca o conteúdo para cima conforme a página rola: `speed` 0,2 sobe 20%
 * além da rolagem. Valores diferentes em elementos vizinhos dão a sensação
 * de profundidade. Pensado para o topo da página: em repouso (scroll 0) não
 * há deslocamento. Escreve direto no style a cada quadro, para de calcular
 * quando o elemento já saiu da tela e fica parado para quem pede menos
 * movimento.
 */
export function Parallax({
  speed,
  children,
  className = "",
}: {
  speed: number;
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      // Passou bem do fim da tela: o deslocamento não aparece mais.
      if (window.scrollY > window.innerHeight * 1.5) return;
      el.style.transform = `translate3d(0, ${(-window.scrollY * speed).toFixed(1)}px, 0)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [speed]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
