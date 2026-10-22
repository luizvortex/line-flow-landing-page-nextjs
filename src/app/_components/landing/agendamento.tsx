"use client";

import { useState } from "react";
import {
  BellRing,
  CalendarPlus,
  ListChecks,
  Smartphone,
} from "lucide-react";
import { GlassCard } from "./shared/glass-card";
import { EyebrowLabel } from "./shared/eyebrow-label";
import { BookingAppPreview } from "./shared/booking-app-preview";

/** Duas vistas do mesmo agendamento: o que o cliente vê e o que você vê. */
type View = "client" | "panel";

type Tone = "success" | "accent" | "muted";

interface Row {
  time: string;
  name: string;
  status: string;
  tone: Tone;
}

const tabs: { id: View; label: string }[] = [
  { id: "client", label: "No app do cliente" },
  { id: "panel", label: "No seu painel" },
];

const agenda: Row[] = [
  { time: "09:00", name: "Ana Costa", status: "Confirmado", tone: "success" },
  { time: "09:30", name: "—", status: "Livre", tone: "muted" },
  { time: "10:00", name: "Rafael Mendes", status: "Confirmado", tone: "success" },
  { time: "10:30", name: "Julia Prado", status: "Lembrete enviado", tone: "accent" },
  { time: "11:00", name: "—", status: "Livre", tone: "muted" },
  { time: "11:30", name: "Pedro H.", status: "Confirmado", tone: "success" },
];

const toneClasses: Record<Tone, string> = {
  success: "bg-lf-success/10 text-lf-success",
  accent: "bg-lf-accent/10 text-lf-accent",
  muted: "bg-lf-border/40 text-lf-muted",
};

const comoMarca = [
  {
    icon: Smartphone,
    title: "O cliente marca pelo app ou pelo WhatsApp",
    desc: "No link da sua empresa ele escolhe o serviço, o dia e o horário livre. Se preferir, pede na conversa do WhatsApp e recebe a confirmação na hora.",
  },
  {
    icon: CalendarPlus,
    title: "Ou você encaixa pelo painel",
    desc: "Ligou ou apareceu no balcão? O atendente vê os horários livres do dia e encaixa em dois cliques.",
  },
  {
    icon: BellRing,
    title: "Lembrete automático antes da hora",
    desc: "O cliente é avisado antes do horário marcado. Menos falta, menos horário vago no fim do dia.",
  },
  {
    icon: ListChecks,
    title: "Lista de espera quando a agenda lota",
    desc: "Sem horário no dia? O cliente entra na lista de espera e é avisado assim que uma vaga abrir.",
  },
];

export function Agendamento() {
  const [view, setView] = useState<View>("client");

  return (
    <section id="agendamento" className="bg-lf-card/30 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <EyebrowLabel>Dois modos</EyebrowLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-lf-primary">
          Nem todo negócio atende por ordem de chegada
        </h2>
        <p className="mt-4 text-lf-secondary text-lg max-w-2xl">
          Cada fila funciona do jeito dela: por ordem de chegada, como sempre,
          ou com horário marcado. Você escolhe fila a fila — e pode ter as duas
          no mesmo negócio.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Alternador de vista + prévia */}
          <div className="flex flex-col">
            <div
              role="tablist"
              aria-label="Vista do agendamento"
              className="flex gap-2 flex-wrap"
            >
              {tabs.map((t) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={view === t.id}
                  aria-controls="preview-agendamento"
                  onClick={() => setView(t.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border cursor-pointer transition-all duration-150 ${
                    view === t.id
                      ? "border-lf-accent bg-lf-accent/15 text-lf-accent"
                      : "border-lf-border bg-transparent text-lf-muted hover:text-lf-secondary hover:border-lf-border-strong"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Altura mínima igual à do celular: trocar de aba não faz a
                página pular. */}
            <div
              id="preview-agendamento"
              role="tabpanel"
              className="mt-5 flex-1 flex justify-center items-start min-h-[640px]"
            >
              {view === "client" ? (
                <BookingAppPreview />
              ) : (
                <GlassCard className="p-5 md:p-6 w-full">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-lf-primary truncate">
                        Coloração
                      </p>
                      <p className="text-[10px] text-lf-muted mt-0.5">
                        Terça, 16 de agosto
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 bg-lf-accent/10 border border-lf-accent/20 rounded-full px-2.5 py-1 shrink-0">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping-live absolute inline-flex h-full w-full rounded-full bg-lf-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lf-accent" />
                      </span>
                      <span className="text-[10px] text-lf-accent font-medium">
                        Agenda do dia
                      </span>
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {agenda.map((row) => (
                      <div
                        key={row.time}
                        className="flex items-center justify-between gap-3 bg-lf-base/40 rounded-lg px-3 py-2.5 border border-transparent hover:border-lf-border/60 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`font-mono text-xs font-bold shrink-0 ${
                              row.tone === "muted" ? "text-lf-muted" : "text-lf-accent"
                            }`}
                          >
                            {row.time}
                          </span>
                          <span
                            className={`text-xs truncate ${
                              row.tone === "muted" ? "text-lf-muted" : "text-lf-secondary"
                            }`}
                          >
                            {row.name}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full shrink-0 ${toneClasses[row.tone]}`}
                        >
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-lf-border">
                    <p className="text-[11px] text-lf-muted leading-relaxed">
                      O horário que o cliente marcou no app cai aqui na hora.
                      Os livres você encaixa pelo balcão em dois cliques.
                    </p>
                  </div>
                </GlassCard>
              )}
            </div>
          </div>

          {/* Como o horário é marcado */}
          <div>
            <h3 className="text-xl font-semibold text-lf-primary">
              Como o horário é marcado
            </h3>
            <p className="mt-2 text-lf-secondary text-sm leading-relaxed">
              Nos modos com horário o cliente não tira senha. Ele reserva a hora
              dele pelo app, pelo WhatsApp ou direto com você.
            </p>

            <div className="mt-7 space-y-4">
              {comoMarca.map(({ icon: Icon, title, desc }) => (
                <GlassCard key={title} className="p-5 flex gap-4" as="article">
                  <div className="w-10 h-10 rounded-lg bg-lf-accent/15 flex items-center justify-center shrink-0">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-lf-accent"
                    />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-semibold text-lf-primary">
                      {title}
                    </h4>
                    <p className="text-lf-secondary text-sm leading-relaxed mt-1">
                      {desc}
                    </p>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>

        {/* Fora do grid: vale para a seção inteira e, se ficasse na coluna da
            direita, empurraria a base dela para fora do alinhamento. */}
        <p className="mt-8 text-xs text-lf-muted">
          Agendamento disponível a partir do plano{" "}
          <a
            href="#planos"
            className="text-lf-accent hover:text-lf-accent-hover underline underline-offset-2 transition-colors"
          >
            Starter
          </a>
          .
        </p>
      </div>
    </section>
  );
}
