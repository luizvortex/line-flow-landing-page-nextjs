"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock,
  ExternalLink,
  Info,
  ListOrdered,
  Star,
  Users,
} from "lucide-react";
import { EyebrowLabel } from "./shared/eyebrow-label";
import { GradientDot } from "./shared/gradient-dot";
import { PhoneFrame } from "./shared/phone-frame";
import { AppLogo } from "./shared/app-logo";

/**
 * Fluxo de pegar a senha, com as telas do PWA: entrada na fila
 * (`passo-informacoes.tsx`), ticket aguardando, chamado e concluído
 * (`pagina-ticket.tsx`). Os números são de exemplo.
 */

const COMPANY = "Barbearia Silva";
const QUEUE = "Corte masculino";
const POSITION = 15;
const TICKET = `#${String(POSITION).padStart(3, "0")}`;

/** `--text-muted` do app, um tom acima do da landing. */
const MUTED = "text-[#73a0a6]";

/** Cabeçalho do ticket: logo e o link para a página da empresa. */
function TicketHeader() {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-lf-border">
      <AppLogo size={14} />
      <span className={`flex items-center gap-1 text-[10px] ${MUTED}`}>
        {COMPANY}
        <ExternalLink size={9} />
      </span>
    </div>
  );
}

export function JoinScreen({ onNext }: { onNext?: () => void }) {
  return (
    <>
      {/* Cabeçalho da entrada: logo, empresa e fila */}
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-lf-border">
        <AppLogo size={14} />
        <div className="text-right min-w-0">
          <p className="text-[11px] font-semibold text-lf-primary truncate">
            {COMPANY}
          </p>
          <p className={`text-[9px] truncate ${MUTED}`}>{QUEUE}</p>
        </div>
      </div>

      {/* Barra de passos */}
      <div className="flex gap-1.5 px-4 py-2 border-b border-lf-border">
        {[true, false, false].map((done, i) => (
          <span
            key={i}
            className={`flex-1 h-[3px] rounded-full ${done ? "bg-lf-accent" : "bg-lf-border"}`}
          />
        ))}
      </div>

      <div className="flex-1 flex flex-col px-4 pt-3 pb-4">
        <span className={`flex items-center gap-1 text-[10px] ${MUTED}`}>
          <ArrowLeft size={11} />
          Voltar às filas
        </span>

        <div className="mt-3 flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-[10px] bg-lf-accent/15 grid place-items-center shrink-0">
            <ListOrdered size={16} className="text-lf-accent" />
          </span>
          <div className="min-w-0">
            <p className="text-[13px] font-semibold text-lf-primary">{QUEUE}</p>
            <p className={`text-[10px] ${MUTED}`}>{COMPANY}</p>
          </div>
        </div>
        <span className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-lf-success">
          <span className="w-1.5 h-1.5 rounded-full bg-lf-success" />
          Fila aberta
        </span>

        <p className="mt-4 text-[15px] font-bold text-lf-primary">
          Como está a fila agora
        </p>
        <p className="mt-0.5 text-[10.5px] leading-snug text-lf-secondary">
          Confira o movimento e reserve seu lugar.
        </p>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-lf-accent/30 bg-lf-accent/[0.08] px-3.5 py-3">
          <span className="flex items-center gap-1.5 text-[10.5px] font-medium text-lf-secondary">
            <ListOrdered size={12} className="text-[#73a0a6]" />
            Sua posição
          </span>
          <span className="font-mono text-[27px] font-bold leading-none text-lf-accent">
            {POSITION}º
          </span>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2">
          {[
            { label: "Na fila agora", value: String(POSITION - 1), icon: Users },
            { label: "Espera estimada", value: "~22min", icon: Clock },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-xl border border-lf-border bg-lf-card px-3 py-2.5">
              <span className={`flex items-center gap-1 text-[9px] font-medium ${MUTED}`}>
                <Icon size={10} />
                {label}
              </span>
              <p className="mt-1.5 font-mono text-[18px] font-bold leading-none text-lf-primary">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-2 flex gap-2 rounded-xl border border-lf-border bg-lf-accent/15 px-3 py-2.5">
          <Info size={12} className="text-lf-accent shrink-0 mt-px" />
          <p className="text-[10px] leading-snug text-lf-secondary">
            Você entra na posição{" "}
            <strong className="text-lf-primary">{POSITION}º</strong> e a espera
            estimada é de cerca de <strong className="text-lf-primary">22min</strong>.
          </p>
        </div>

        <button
          type="button"
          onClick={onNext}
          className="mt-auto h-11 rounded-xl bg-lf-accent text-lf-base text-[13px] font-semibold cursor-pointer hover:bg-lf-accent-hover transition-colors"
        >
          Entrar na fila
        </button>
      </div>
    </>
  );
}

export function WaitingScreen() {
  // Barra de 10 segmentos como no ticket: verdes já atendidos, o seu em destaque.
  const filled = 3;

  return (
    <>
      <TicketHeader />
      <div className="flex-1 flex flex-col gap-3 px-4 pt-4">
        <span className="flex items-center gap-2 text-[10.5px] text-lf-secondary">
          <ListOrdered size={13} className="text-[#73a0a6]" />
          {QUEUE} · {COMPANY}
        </span>

        <div className="text-center pt-2">
          <p className={`text-[9px] font-semibold uppercase tracking-[0.1em] ${MUTED}`}>
            Sua posição
          </p>
          <p className="mt-2.5 font-mono text-[68px] font-bold leading-none tracking-tight text-lf-accent">
            {TICKET}
          </p>
          <p className="mt-2.5 text-[11px] text-lf-secondary">~22 min de espera</p>
        </div>

        <div className="rounded-xl border border-lf-border bg-lf-card p-3">
          <div className={`flex justify-between text-[10px] mb-2 ${MUTED}`}>
            <span>Atendendo agora</span>
            <span>Você</span>
          </div>
          <div className="flex gap-[3px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className={`flex-1 h-[5px] rounded-full ${
                  i < filled ? "bg-lf-success" : i === filled ? "bg-lf-accent" : "bg-lf-border"
                }`}
              />
            ))}
          </div>
          <div className={`flex justify-between text-[9.5px] mt-2 ${MUTED}`}>
            <div>
              <p className="font-mono">#014</p>
              <p className="text-[8.5px] mt-0.5">à sua frente</p>
            </div>
            <div className="text-right">
              <p className="font-mono">{TICKET}</p>
              <p className="text-[8.5px] mt-0.5">sua senha</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {/* Senhas à frente */}
          <div className="rounded-xl border border-lf-border bg-lf-card p-3 flex flex-col justify-between gap-2 min-h-[84px]">
            <div className="relative h-7">
              {[12, 13, 14].map((n, i) => (
                <span
                  key={n}
                  className={`absolute top-0 h-7 px-2 rounded-md border font-mono text-[10px] font-bold grid place-items-center ${
                    i === 0
                      ? "bg-[#0b3a45] border-lf-accent/40 text-lf-accent"
                      : "bg-lf-elevated border-lf-border text-transparent"
                  }`}
                  // Pilha: a próxima senha na frente, as outras espiando atrás.
                  style={{ left: i * 7, zIndex: 3 - i, transform: `scale(${1 - i * 0.08})` }}
                >
                  #{String(n).padStart(3, "0")}
                </span>
              ))}
            </div>
            <span className="flex items-end justify-between text-[9.5px] leading-tight text-lf-secondary">
              <span>
                <strong className="text-lf-primary">3</strong> pessoas na sua frente
              </span>
              <ChevronRight size={10} className="text-[#73a0a6] shrink-0" />
            </span>
          </div>

          {/* Estado do ticket */}
          <div className="rounded-xl border border-lf-border bg-lf-elevated p-3 flex flex-col justify-center gap-2 min-h-[84px]">
            <span className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-md bg-white/5 grid place-items-center">
                <Clock size={12} className="text-lf-secondary" />
              </span>
              <span className="text-[11px] font-semibold text-lf-secondary">Aguardando</span>
            </span>
            <p className="text-[9.5px] leading-snug text-lf-secondary">
              Fique tranquilo, te avisaremos quando chegar sua vez.
            </p>
          </div>
        </div>

        <span className={`mt-auto mb-4 text-center text-[10px] underline decoration-dotted underline-offset-2 ${MUTED}`}>
          Sair da fila
        </span>
      </div>
    </>
  );
}

export function CalledScreen({ onNext }: { onNext?: () => void }) {
  return (
    <>
      <TicketHeader />
      <div className="flex-1 flex flex-col px-4 pt-4 pb-4">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          {/* No app é uma animação Lottie; aqui, o sino pulsando. */}
          <span className="relative grid place-items-center w-24 h-24">
            <span className="absolute inset-0 rounded-full bg-lf-success/15 animate-ping-live" />
            <span className="relative w-16 h-16 rounded-full bg-lf-success/20 grid place-items-center">
              <Bell size={28} className="text-lf-success" />
            </span>
          </span>
          <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.1em] text-lf-success">
            É a sua vez!
          </p>
          <p className="mt-2 text-[22px] font-bold tracking-tight text-lf-primary">
            Você foi chamado
          </p>
          <p className="mt-1.5 max-w-[220px] text-[11px] leading-relaxed text-lf-secondary">
            Dirija-se ao atendimento agora · você foi chamado às{" "}
            <strong className="text-lf-primary">14:32</strong>.
          </p>
          <p className={`mt-5 text-[9.5px] font-semibold uppercase tracking-[0.08em] ${MUTED}`}>
            Sua senha
          </p>
          <p className="mt-1.5 font-mono text-[58px] font-extrabold leading-none tracking-tight text-lf-success">
            {TICKET}
          </p>
          <p className="mt-2 text-[10px] text-lf-secondary">
            {COMPANY} · {QUEUE}
          </p>
        </div>

        <div className="flex flex-col gap-1.5">
          <button
            type="button"
            onClick={onNext}
            className="h-11 rounded-xl bg-lf-success text-white text-[13px] font-semibold cursor-pointer hover:brightness-110 transition"
          >
            Estou indo
          </button>
          <span className="h-10 rounded-xl text-lf-secondary text-[12px] font-medium grid place-items-center">
            Não posso comparecer
          </span>
        </div>
      </div>
    </>
  );
}

function DoneScreen({ onReset }: { onReset: () => void }) {
  const [rating, setRating] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <>
      <TicketHeader />
      <div className="flex-1 flex flex-col px-4 pt-4 pb-4">
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <span className="w-20 h-20 rounded-full bg-lf-success/15 grid place-items-center">
            <CheckCircle2 size={38} className="text-lf-success" />
          </span>
          <p className="mt-4 text-[19px] font-bold tracking-tight text-lf-primary">
            Atendimento concluído
          </p>
          <p className="mt-1.5 text-[11px] text-lf-secondary">
            Obrigado pela visita à {COMPANY}!
          </p>

          {sent ? (
            <div className="mt-6 w-full flex items-center justify-center gap-2 rounded-xl border border-lf-success/25 bg-lf-success/10 py-3 text-[11px] font-medium text-lf-success">
              <CheckCircle2 size={13} />
              Avaliação enviada. Até logo!
            </div>
          ) : (
            <div className="mt-6 w-full">
              <p className="text-[11px] font-medium text-lf-secondary">
                Como foi o atendimento?
              </p>
              <div className="mt-3 flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    aria-label={`${n} estrela${n > 1 ? "s" : ""}`}
                    className={`w-10 h-10 rounded-[10px] border grid place-items-center cursor-pointer transition-colors ${
                      rating >= n
                        ? "border-lf-accent bg-lf-accent/15 text-lf-accent"
                        : "border-lf-border bg-lf-card text-[#73a0a6]"
                    }`}
                  >
                    <Star size={16} className={rating >= n ? "fill-current" : ""} />
                  </button>
                ))}
              </div>
              <button
                type="button"
                disabled={!rating}
                onClick={() => setSent(true)}
                className="mt-4 w-full h-11 rounded-xl bg-lf-accent text-lf-base text-[13px] font-semibold cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
              >
                Enviar avaliação
              </button>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onReset}
          className="h-10 rounded-xl border border-lf-border text-[11.5px] font-medium text-lf-secondary cursor-pointer hover:border-lf-border-strong transition-colors"
        >
          Voltar para {COMPANY}
        </button>
      </div>
    </>
  );
}

const STEPS = ["Entrar", "Aguardando", "Chamado!", "Concluído"];

export function AppDemo() {
  const [step, setStep] = useState(0);

  return (
    <section id="app-demo" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <GradientDot size={700} color="#77aca2" opacity={0.07} className="-right-40 top-20" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <EyebrowLabel>App do Cliente</EyebrowLabel>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#e8f2f1]">
            Experiência que encanta do começo ao fim
          </h2>
          <p className="mt-4 text-[#8bb5b0] text-lg max-w-2xl mx-auto">
            Sem download, sem cadastro. O cliente abre o link no celular e já
            está na fila — acompanhando a posição em tempo real.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Step navigation pills */}
          <div className="flex gap-2 flex-wrap justify-center">
            {STEPS.map((s, i) => (
              <button
                key={s}
                onClick={() => setStep(i)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border cursor-pointer transition-all duration-150 ${
                  i === step
                    ? "border-[#77aca2] bg-[rgba(119,172,162,0.15)] text-[#77aca2]"
                    : "border-[#1a3d52] bg-transparent text-[#4d7a80] hover:text-[#8bb5b0] hover:border-[#255068]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <PhoneFrame>
            {step === 0 && <JoinScreen onNext={() => setStep(1)} />}
            {step === 1 && <WaitingScreen />}
            {step === 2 && <CalledScreen onNext={() => setStep(3)} />}
            {step === 3 && <DoneScreen onReset={() => setStep(0)} />}
          </PhoneFrame>

          {step === 1 && (
            <button
              type="button"
              onClick={() => setStep(2)}
              className="text-xs text-[#77aca2] underline underline-offset-2 cursor-pointer"
            >
              Simular a chamada
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
