"use client";

import { useState } from "react";
import { BellRing, CalendarPlus, MessageCircle } from "lucide-react";
import { GlassCard } from "./shared/glass-card";
import { EyebrowLabel } from "./shared/eyebrow-label";

/**
 * Os dois modos vendidos na landing. O backend tem um terceiro (HYBRID, em
 * `SchedulingMode`), que fica de fora por decisão de posicionamento — se
 * voltar a ser vendido, basta acrescentar uma entrada em `views`.
 */
type Mode = "queue" | "timeSlot";

type Tone = "success" | "accent" | "muted";

interface Row {
  /** Senha (#001) no modo fila, ou horário na agenda. `~` = estimado. */
  slot: string;
  name: string;
  status: string;
  tone: Tone;
  cta?: boolean;
}

interface ModeView {
  id: Mode;
  label: string;
  title: string;
  subtitle: string;
  liveLabel: string;
  rows: Row[];
  footer: string;
}

const views: ModeView[] = [
  {
    id: "queue",
    label: "Ordem de chegada",
    title: "Corte masculino",
    subtitle: "Entra quem chegou primeiro",
    liveLabel: "Ao vivo",
    rows: [
      { slot: "#001", name: "Rafael M.", status: "Chamado", tone: "success" },
      { slot: "#002", name: "Ana Costa", status: "Na fila", tone: "accent", cta: true },
      { slot: "#003", name: "Carlos Lima", status: "Na fila", tone: "accent" },
      { slot: "#004", name: "Julia P.", status: "Na fila", tone: "accent" },
    ],
    footer:
      "Senha automática por ordem de chegada, com espera estimada em tempo real.",
  },
  {
    id: "timeSlot",
    label: "Horário marcado",
    title: "Coloração",
    subtitle: "Terça, 16 de agosto",
    liveLabel: "Agenda do dia",
    rows: [
      { slot: "09:00", name: "Ana Costa", status: "Confirmado", tone: "success" },
      { slot: "09:30", name: "—", status: "Livre", tone: "muted" },
      { slot: "10:00", name: "Rafael Mendes", status: "Confirmado", tone: "success" },
      { slot: "10:30", name: "Julia Prado", status: "Lembrete enviado", tone: "accent" },
      { slot: "11:00", name: "—", status: "Livre", tone: "muted" },
    ],
    footer:
      "Cada cliente tem a hora dele — ninguém espera em pé na recepção.",
  },
];

const toneClasses: Record<Tone, string> = {
  success: "bg-lf-success/10 text-lf-success",
  accent: "bg-lf-accent/10 text-lf-accent",
  muted: "bg-lf-border/40 text-lf-muted",
};

const comoMarca = [
  {
    icon: MessageCircle,
    title: "O cliente marca pelo WhatsApp",
    desc: "Ele pede o horário na conversa e recebe a confirmação na hora. Sem app, sem cadastro, sem ligar para a recepção.",
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
];

export function Agendamento() {
  // Começa no horário marcado: é a novidade que a seção veio apresentar.
  const [mode, setMode] = useState<Mode>("timeSlot");
  const view = views.find((v) => v.id === mode) ?? views[0];

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

        {/* Sem items-start: as colunas esticam juntas e o card da esquerda
            acompanha a altura da pilha de cards da direita. */}
        <div className="mt-12 grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Alternador de modo + prévia */}
          <div className="flex flex-col">
            <div
              role="tablist"
              aria-label="Modo de atendimento da fila"
              className="flex gap-2 flex-wrap"
            >
              {views.map((v) => (
                <button
                  key={v.id}
                  role="tab"
                  aria-selected={mode === v.id}
                  aria-controls="preview-modo"
                  onClick={() => setMode(v.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border cursor-pointer transition-all duration-150 ${
                    mode === v.id
                      ? "border-lf-accent bg-lf-accent/15 text-lf-accent"
                      : "border-lf-border bg-transparent text-lf-muted hover:text-lf-secondary hover:border-lf-border-strong"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>

            {/* id/role no wrapper: GlassCard só aceita children/className/as. */}
            <div id="preview-modo" role="tabpanel" className="mt-5 flex-1 flex">
              <GlassCard className="p-5 md:p-6 w-full flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-lf-primary truncate">
                      {view.title}
                    </p>
                    <p className="text-[10px] text-lf-muted mt-0.5">
                      {view.subtitle}
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 bg-lf-accent/10 border border-lf-accent/20 rounded-full px-2.5 py-1 shrink-0">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping-live absolute inline-flex h-full w-full rounded-full bg-lf-accent opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lf-accent" />
                    </span>
                    <span className="text-[10px] text-lf-accent font-medium">
                      {view.liveLabel}
                    </span>
                  </span>
                </div>

                {/* flex-1 absorve a sobra de altura; min-h é só o piso */}
                <div className="space-y-1.5 min-h-[212px] flex-1">
                  {view.rows.map((row) => (
                    <div
                      key={row.slot}
                      className="flex items-center justify-between gap-3 bg-lf-base/40 rounded-lg px-3 py-2.5 border border-transparent hover:border-lf-border/60 transition-colors"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`font-mono text-xs font-bold shrink-0 ${
                            row.tone === "muted"
                              ? "text-lf-muted"
                              : "text-lf-accent"
                          }`}
                        >
                          {row.slot}
                        </span>
                        <span
                          className={`text-xs truncate ${
                            row.tone === "muted"
                              ? "text-lf-muted"
                              : "text-lf-secondary"
                          }`}
                        >
                          {row.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full ${
                            toneClasses[row.tone]
                          }`}
                        >
                          {row.status}
                        </span>
                        {row.cta && (
                          <span className="text-[10px] bg-lf-accent text-lf-base px-2 py-0.5 rounded font-bold">
                            Chamar
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Legenda dentro do card: fica junto da tabela que explica e
                    deixa a coluna com um filho só, livre para esticar. */}
                <div className="mt-4 pt-4 border-t border-lf-border">
                  <p className="text-[11px] text-lf-muted leading-relaxed">
                    {view.footer}
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Como o horário é marcado */}
          <div>
            <h3 className="text-xl font-semibold text-lf-primary">
              Como o horário é marcado
            </h3>
            <p className="mt-2 text-lf-secondary text-sm leading-relaxed">
              Nos modos com horário o cliente não tira senha. Ele reserva a hora
              dele por WhatsApp ou direto com você.
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
