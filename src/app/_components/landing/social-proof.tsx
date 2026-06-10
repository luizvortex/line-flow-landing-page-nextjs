"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";
import { GlassCard } from "./shared/glass-card";
import { EyebrowLabel } from "./shared/eyebrow-label";

function useCounter(end: number, duration = 1400, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [end, duration, started]);

  return count;
}

const testimonials = [
  {
    quote:
      "Antes eu perdia 30% dos clientes porque eles desistiam da fila. Com o LineFlow, o cancelamento caiu pra quase zero. O pessoal fica na rua esperando a notificação.",
    name: "Carlos Mendes",
    role: "Dono · Barbearia do Carlão",
    location: "SP",
    initials: "CM",
  },
  {
    quote:
      "A tela de TV na sala de espera foi o que me convenceu. Parece coisa de aeroporto. Os clientes adoram e me perguntam qual sistema é esse.",
    name: "Fernanda Souza",
    role: "Sócia · Studio Hair Bela",
    location: "RJ",
    initials: "FS",
  },
  {
    quote:
      "Em 20 minutos já estava funcionando. Imprimi o QR Code, colei na recepção e pronto. Nunca mais tive cliente reclamando de fila.",
    name: "Dr. Ricardo Lima",
    role: "Médico/Gestor · Clínica VidaSaúde",
    location: "BH",
    initials: "RL",
  },
];

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const countBusinesses = useCounter(300, 1200, started);
  const countRating = useCounter(49, 900, started);
  const countSetup = useCounter(3, 700, started);

  return (
    <section id="depoimentos" className="bg-[#072233]/30 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <EyebrowLabel
          icon={
            <Star
              size={11}
              strokeWidth={1.5}
              className="fill-[#fbbf24] text-[#fbbf24]"
            />
          }
        >
          Depoimentos
        </EyebrowLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#e8f2f1]">
          300+ negócios confiam no LineFlow
        </h2>

        {/* Logo strip */}
        <div className="mt-12 mb-16 flex justify-center flex-wrap gap-6 md:gap-10 opacity-30">
          {[
            "Barbearia Silva",
            "Clínica Bem-Estar",
            "Rest. Mar & Terra",
            "Studio Hair",
            "LabClinic",
            "PetShop VetCare",
          ].map((name) => (
            <span
              key={name}
              className="text-[#8bb5b0] font-semibold text-xs uppercase tracking-wider"
            >
              {name}
            </span>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <GlassCard key={t.name} className="p-7" as="article">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    strokeWidth={1.5}
                    className="fill-[#fbbf24] text-[#fbbf24]"
                  />
                ))}
              </div>
              <p className="mt-4 text-[#8bb5b0] text-[15px] leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 mb-4 border-t border-[#1a3d52]" />
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[rgba(119,172,162,0.15)] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#77aca2] font-bold text-sm">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-[#e8f2f1] text-sm">
                    {t.name}
                  </p>
                  <p className="text-[#4d7a80] text-xs">
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Metrics */}
        <div ref={ref} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <GlassCard className="py-8 px-4 text-center">
            <div className="font-mono font-bold text-4xl text-[#77aca2]">
              {countBusinesses}+
            </div>
            <div className="text-[#4d7a80] text-xs uppercase tracking-wider mt-2">
              Negócios ativos
            </div>
          </GlassCard>

          <GlassCard className="py-8 px-4 text-center">
            <div className="font-mono font-bold text-4xl text-[#77aca2]">
              2.1M+
            </div>
            <div className="text-[#4d7a80] text-xs uppercase tracking-wider mt-2">
              Entradas processadas
            </div>
          </GlassCard>

          <GlassCard className="py-8 px-4 text-center">
            <div className="font-mono font-bold text-4xl text-[#77aca2]">
              {(countRating / 10).toFixed(1)}★
            </div>
            <div className="text-[#4d7a80] text-xs uppercase tracking-wider mt-2">
              Avaliação média
            </div>
          </GlassCard>

          <GlassCard className="py-8 px-4 text-center">
            <div className="font-mono font-bold text-4xl text-[#77aca2]">
              &lt;&nbsp;{countSetup}&nbsp;min
            </div>
            <div className="text-[#4d7a80] text-xs uppercase tracking-wider mt-2">
              Setup inicial
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
