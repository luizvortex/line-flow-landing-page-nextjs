import { ArrowRight, Scissors, Zap } from "lucide-react";
import { GradientDot } from "../landing/shared/gradient-dot";
import { AnimatedFlow } from "../landing/shared/animated-flow";
import { EyebrowLabel } from "../landing/shared/eyebrow-label";

const SIGNUP_URL = "https://lineflow.mpdev.pro.br/auth/cadastrar-empresa";

/** Uma fila por barbeiro: é assim que a maioria das barbearias configura. */
const BARBERS = [
  {
    name: "Bruno",
    initials: "BR",
    kind: "Fila",
    nowLabel: "Atendendo",
    now: "#021",
    service: "Degradê",
    waiting: 3,
    wait: "~25 min",
  },
  {
    name: "Léo",
    initials: "LE",
    kind: "Fila",
    nowLabel: "Atendendo",
    now: "#034",
    service: "Corte + barba",
    waiting: 2,
    wait: "~30 min",
  },
  {
    name: "Rafa",
    initials: "RA",
    kind: "Agenda",
    nowLabel: "Próximo",
    now: "15:30",
    service: "Barba",
    waiting: 4,
    wait: "horários hoje",
  },
];

export function HeroBarbearia() {
  return (
    <section
      id="main-content"
      className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28"
    >
      <AnimatedFlow />
      <GradientDot
        size={900}
        color="#77aca2"
        opacity={0.12}
        className="-left-56 -top-56"
      />
      <GradientDot
        size={600}
        color="#468189"
        opacity={0.08}
        className="-right-32 -top-24"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        {/* Texto */}
        <div className="animate-fade-up">
          <EyebrowLabel icon={<Scissors size={12} strokeWidth={1.5} />}>
            LineFlow para barbearias
          </EyebrowLabel>

          <h1
            className="mt-5 text-[40px] md:text-[56px] font-bold tracking-tight leading-[1.05]"
            style={{
              background:
                "linear-gradient(160deg, #e8f2f1 25%, #9fc8c2 65%, #77aca2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Cadeira cheia,
            <br />
            ninguém esperando{" "}
            <span className="relative inline-block">
              <span
                className="relative z-20"
                style={{ WebkitTextFillColor: "initial" }}
              >
                em pé.
              </span>
              <svg
                aria-hidden="true"
                className="absolute -bottom-1 left-0 w-full overflow-visible"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,6 Q25,1 50,6 Q75,11 100,4"
                  stroke="#77aca2"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 text-lf-secondary text-lg leading-relaxed max-w-xl">
            Fila por barbeiro, horário marcado, comissão calculada sozinha e
            cliente que volta. O cliente acompanha a vez pelo celular e chega
            na hora do corte — sem lotar a recepção.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={SIGNUP_URL}
              className="flex items-center gap-2 bg-lf-accent hover:bg-lf-accent-hover text-lf-base font-bold px-7 py-3.5 rounded-lg text-base shadow-[0_0_28px_rgba(119,172,162,.35)] hover:shadow-[0_0_48px_rgba(119,172,162,.45)] transition-all duration-200"
            >
              Criar conta grátis
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#app-demo"
              className="flex items-center gap-2 border border-lf-border-strong hover:border-lf-accent text-lf-secondary hover:text-lf-primary px-7 py-3.5 rounded-lg text-base font-medium transition-colors duration-200"
            >
              Ver como funciona
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 md:gap-5 text-xs text-lf-muted">
            <span className="flex items-center gap-1.5">
              <Zap
                size={12}
                strokeWidth={1.5}
                className="fill-lf-warning text-lf-warning"
              />
              <span className="text-lf-secondary">
                14 dias de Pro no plano grátis
              </span>
            </span>
            <span aria-hidden="true" className="text-lf-border-strong">
              ·
            </span>
            <span>Sem cartão para começar</span>
          </div>
        </div>

        {/* Painel: fila de cada barbeiro */}
        <div
          className="relative animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(119,172,162,0.16)_0%,transparent_70%)] blur-2xl"
          />
          <div className="relative rounded-[18px] p-[1.5px] bg-gradient-to-b from-[#2d637a] via-lf-border to-lf-border/20 shadow-[0_40px_80px_rgba(3,25,38,0.65)]">
            <div className="rounded-2xl bg-lf-card p-5 md:p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-sm font-semibold text-lf-primary">
                    Barbearia Silva
                  </p>
                  <p className="text-[11px] text-lf-muted mt-0.5">
                    Sábado, 10:42
                  </p>
                </div>
                <span className="flex items-center gap-1.5 bg-lf-accent/10 border border-lf-accent/20 rounded-full px-2.5 py-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping-live absolute inline-flex h-full w-full rounded-full bg-lf-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lf-accent" />
                  </span>
                  <span className="text-[10px] text-lf-accent font-medium">
                    Ao vivo
                  </span>
                </span>
              </div>

              <div className="space-y-2.5">
                {BARBERS.map((b) => (
                  <div
                    key={b.name}
                    className="flex items-center gap-3 rounded-xl border border-lf-border bg-lf-base/50 px-4 py-3"
                  >
                    <span className="w-10 h-10 rounded-full bg-lf-accent text-lf-base grid place-items-center text-xs font-bold shrink-0">
                      {b.initials}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-lf-primary">
                        {b.kind} do {b.name}
                      </p>
                      <p className="text-[11px] text-lf-muted truncate">
                        {b.nowLabel}{" "}
                        <span className="font-mono text-lf-accent">
                          {b.now}
                        </span>{" "}
                        · {b.service}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono text-lg font-bold text-lf-primary leading-none">
                        {b.waiting}
                      </p>
                      <p className="text-[10px] text-lf-muted mt-1">
                        {b.kind === "Fila" ? `aguardando · ${b.wait}` : b.wait}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {[
                  { label: "Cortes hoje", value: "38" },
                  { label: "Faturamento", value: "R$ 1.920" },
                  { label: "Comissões", value: "R$ 768" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-lf-border bg-lf-base/40 px-3 py-2.5"
                  >
                    <p className="text-[10px] text-lf-muted">{m.label}</p>
                    <p className="font-mono text-sm md:text-base font-bold text-lf-primary mt-0.5">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Notificação flutuante: o que o cliente recebe */}
          <div className="absolute -bottom-12 -left-2 md:-left-10 flex items-center gap-3 rounded-xl border border-lf-border-strong bg-lf-elevated/95 backdrop-blur px-4 py-3 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <span className="w-8 h-8 rounded-lg bg-lf-success/15 grid place-items-center">
              <Scissors size={14} className="text-lf-success" />
            </span>
            <div>
              <p className="text-xs font-semibold text-lf-primary">
                É a sua vez!
              </p>
              <p className="text-[11px] text-lf-secondary">
                Senha #022 · Fila do Bruno
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
