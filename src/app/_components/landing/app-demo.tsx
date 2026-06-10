"use client";

import { useState } from "react";
import {
  Scissors,
  Users,
  Clock,
  ListOrdered,
  UserCheck,
  Bell,
  CheckCircle2,
  Wifi,
  Battery,
  Check,
} from "lucide-react";
import { EyebrowLabel } from "./shared/eyebrow-label";
import { GradientDot } from "./shared/gradient-dot";

const C = {
  base: "#031926",
  card: "#072233",
  border: "#1a3d52",
  fg1: "#e8f2f1",
  fg2: "#8bb5b0",
  fg3: "#4d7a80",
  accent: "#77ACA2",
  accentMuted: "rgba(119,172,162,0.15)",
  success: "#4ade80",
  successMuted: "rgba(74,222,128,0.12)",
};

const mono = "'Geist Mono', monospace";

function JoinScreen({ onJoin }: { onJoin: () => void }) {
  return (
    <div
      style={{
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        minHeight: 720,
        background: C.base,
      }}
    >
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: C.accentMuted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Scissors size={20} color={C.accent} />
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600, color: C.fg1 }}>
              Barbearia Silva
            </div>
            <div style={{ fontSize: 12, color: C.fg3 }}>Corte Masculino</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: C.success,
              display: "inline-block",
            }}
          />
          <span style={{ fontSize: 12, color: C.success, fontWeight: 500 }}>
            Fila aberta
          </span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          marginBottom: 24,
        }}
      >
        {(
          [
            ["Na fila", "14", <Users size={14} color={C.fg3} />],
            ["Espera estimada", "~22min", <Clock size={14} color={C.fg3} />],
          ] as const
        ).map(([label, val, icon]) => (
          <div
            key={label}
            style={{
              background: C.card,
              border: `1px solid ${C.border}`,
              borderRadius: 14,
              padding: "16px 14px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                marginBottom: 8,
              }}
            >
              {icon}
              <span style={{ fontSize: 11, color: C.fg3, fontWeight: 500 }}>
                {label}
              </span>
            </div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 700,
                fontFamily: mono,
                color: C.fg1,
              }}
            >
              {val}
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          padding: "16px",
          marginBottom: 28,
        }}
      >
        <div
          style={{ fontSize: 12, fontWeight: 600, color: C.fg2, marginBottom: 10 }}
        >
          Como funciona
        </div>
        {[
          ["1", "Entre na fila tocando no botão abaixo"],
          ["2", "Acompanhe sua posição nesta página"],
          ["3", "Você será notificado quando for chamado"],
        ].map(([n, t]) => (
          <div
            key={n}
            style={{
              display: "flex",
              gap: 10,
              alignItems: "flex-start",
              marginBottom: 10,
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: C.accentMuted,
                color: C.accent,
                fontSize: 11,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {n}
            </span>
            <span style={{ fontSize: 13, color: C.fg2, lineHeight: 1.5 }}>
              {t}
            </span>
          </div>
        ))}
      </div>

      <div style={{ flex: 1 }} />
      <button
        onClick={onJoin}
        style={{
          width: "100%",
          padding: "16px",
          borderRadius: 14,
          border: "none",
          cursor: "pointer",
          background: C.accent,
          color: "#fff",
          fontSize: 16,
          fontWeight: 600,
          fontFamily: "'Geist',sans-serif",
        }}
      >
        Entrar na fila
      </button>
    </div>
  );
}

function WaitingScreen({ onCalled }: { onCalled: () => void }) {
  const [pos, setPos] = useState(7);
  return (
    <div
      style={{
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        minHeight: 720,
        background: C.base,
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 28 }}
      >
        <ListOrdered size={16} color={C.fg3} />
        <span style={{ fontSize: 13, color: C.fg2 }}>
          Corte Masculino · Barbearia Silva
        </span>
      </div>

      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: C.fg3,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          Sua posição
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: C.accent,
            fontFamily: mono,
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          #{String(pos).padStart(3, "0")}
        </div>
        <div style={{ fontSize: 13, color: C.fg2, marginTop: 12 }}>
          ~{pos * 3} min de espera
        </div>
      </div>

      <div
        style={{
          background: C.card,
          border: `1px solid ${C.border}`,
          borderRadius: 14,
          padding: "16px",
          marginBottom: 16,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 12,
            color: C.fg3,
            marginBottom: 10,
          }}
        >
          <span>Atendendo agora</span>
          <span>Você</span>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 6,
                borderRadius: 3,
                background:
                  i < 10 - pos
                    ? C.success
                    : i === 10 - pos
                    ? C.accent
                    : C.border,
              }}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            color: C.fg3,
            marginTop: 8,
          }}
        >
          <span style={{ fontFamily: mono }}>#001</span>
          <span style={{ fontFamily: mono }}>#{String(pos).padStart(3, "0")}</span>
        </div>
      </div>

      <div
        style={{
          background: C.successMuted,
          border: "1px solid rgba(34,197,94,0.2)",
          borderRadius: 14,
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          marginBottom: 28,
        }}
      >
        <UserCheck size={18} color={C.success} />
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: C.success }}>
            Em atendimento
          </div>
          <div
            style={{
              fontFamily: mono,
              fontSize: 14,
              fontWeight: 700,
              color: C.fg1,
            }}
          >
            #001
          </div>
        </div>
      </div>

      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", gap: 8 }}>
        <button
          onClick={onCalled}
          style={{
            flex: 1,
            padding: "14px",
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            background: C.accent,
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
            fontFamily: "'Geist',sans-serif",
          }}
        >
          Simular chamada →
        </button>
        <button
          onClick={() => setPos(Math.max(1, pos - 1))}
          style={{
            padding: "14px 16px",
            borderRadius: 12,
            border: `1px solid ${C.border}`,
            cursor: "pointer",
            background: C.card,
            color: C.fg2,
            fontSize: 14,
            fontFamily: "'Geist',sans-serif",
          }}
        >
          −1
        </button>
      </div>
    </div>
  );
}

function CalledScreen({ onDone }: { onDone: () => void }) {
  return (
    <div
      style={{
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: 720,
        background: C.base,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ position: "relative", marginBottom: 32 }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: C.successMuted,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: C.success,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Bell size={32} color="#fff" />
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: C.success,
            letterSpacing: "0.10em",
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          É a sua vez!
        </div>
        <h2
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: C.fg1,
            marginBottom: 8,
          }}
        >
          Você foi chamado
        </h2>
        <p
          style={{
            fontSize: 14,
            color: C.fg2,
            lineHeight: 1.6,
            maxWidth: 280,
          }}
        >
          Dirija-se ao balcão agora. Sua vaga será reservada por{" "}
          <strong style={{ color: C.fg1 }}>5 minutos</strong>.
        </p>
        <div
          style={{
            background: C.card,
            border: `1px solid ${C.border}`,
            borderRadius: 16,
            padding: "20px 28px",
            marginTop: 32,
          }}
        >
          <div style={{ fontSize: 12, color: C.fg3, marginBottom: 6 }}>
            Sua senha
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              fontFamily: mono,
              color: C.accent,
              letterSpacing: "-0.03em",
            }}
          >
            #007
          </div>
          <div style={{ fontSize: 12, color: C.fg2, marginTop: 6 }}>
            Barbearia Silva · Corte Masculino
          </div>
        </div>
      </div>
      <div
        style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}
      >
        <button
          onClick={onDone}
          style={{
            width: "100%",
            padding: "15px",
            borderRadius: 12,
            border: "none",
            cursor: "pointer",
            background: C.success,
            color: "#fff",
            fontSize: 15,
            fontWeight: 600,
            fontFamily: "'Geist',sans-serif",
          }}
        >
          Estou indo
        </button>
        <button
          style={{
            width: "100%",
            padding: "13px",
            borderRadius: 12,
            border: `1px solid ${C.border}`,
            cursor: "pointer",
            background: "transparent",
            color: C.fg2,
            fontSize: 14,
            fontFamily: "'Geist',sans-serif",
          }}
        >
          Não posso comparecer
        </button>
      </div>
    </div>
  );
}

function DoneScreen({ onReset }: { onReset: () => void }) {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  return (
    <div
      style={{
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: 720,
        background: C.base,
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: C.accentMuted,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <CheckCircle2 size={36} color={C.accent} />
        </div>
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: C.fg1,
            marginBottom: 8,
          }}
        >
          Atendimento concluído
        </h2>
        <p style={{ fontSize: 14, color: C.fg2, lineHeight: 1.6 }}>
          Obrigado pela visita à Barbearia Silva!
        </p>

        {!submitted ? (
          <div style={{ marginTop: 32, width: "100%" }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: C.fg2,
                marginBottom: 14,
              }}
            >
              Como foi o atendimento?
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                marginBottom: 20,
              }}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setRating(n)}
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    border: `1px solid ${rating >= n ? C.accent : C.border}`,
                    background: rating >= n ? C.accentMuted : C.card,
                    cursor: "pointer",
                    fontSize: 20,
                  }}
                >
                  ★
                </button>
              ))}
            </div>
            <button
              onClick={() => setSubmitted(true)}
              disabled={!rating}
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: 12,
                border: "none",
                cursor: rating ? "pointer" : "not-allowed",
                background: rating ? C.accent : C.border,
                color: rating ? "#fff" : C.fg3,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "'Geist',sans-serif",
              }}
            >
              Enviar avaliação
            </button>
          </div>
        ) : (
          <div
            style={{
              marginTop: 24,
              background: C.successMuted,
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 12,
              padding: "14px 20px",
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Check size={16} color={C.success} />
            <span style={{ fontSize: 13, color: C.success, fontWeight: 500 }}>
              Avaliação enviada. Até logo!
            </span>
          </div>
        )}
      </div>
      <button
        onClick={onReset}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: 12,
          border: `1px solid ${C.border}`,
          background: "transparent",
          color: C.fg2,
          fontSize: 13,
          fontFamily: "'Geist',sans-serif",
          cursor: "pointer",
        }}
      >
        Ver outra fila
      </button>
    </div>
  );
}

const STEPS = ["Entrar", "Aguardando", "Chamado!", "Concluído"];

export function AppDemo() {
  const [step, setStep] = useState(0);

  return (
    <section id="app-demo" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <GradientDot size={700} color="#77aca2" opacity={0.07} className="-right-40 top-20" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-150 ${
                  i === step
                    ? "border-[#77aca2] bg-[rgba(119,172,162,0.15)] text-[#77aca2]"
                    : "border-[#1a3d52] bg-transparent text-[#4d7a80] hover:text-[#8bb5b0] hover:border-[#255068]"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Phone shell */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[44px] bg-[#77aca2]/10 blur-3xl scale-110 pointer-events-none"
            />
            <div
              style={{
                width: 375,
                background: C.base,
                borderRadius: 44,
                border: `2px solid ${C.border}`,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6)",
                position: "relative",
              }}
            >
              {/* Status bar */}
              <div
                style={{
                  height: 44,
                  background: C.base,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 24px",
                  position: "relative",
                }}
              >
                <span
                  style={{ fontFamily: mono, fontSize: 12, color: C.fg3 }}
                >
                  9:41
                </span>
                <div
                  style={{
                    width: 120,
                    height: 30,
                    background: C.base,
                    borderRadius: "0 0 18px 18px",
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    borderBottom: `2px solid ${C.border}`,
                  }}
                />
                <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <Wifi size={14} color={C.fg3} />
                  <Battery size={14} color={C.fg3} />
                </div>
              </div>

              {/* Screen content */}
              <div style={{ minHeight: 720, background: C.base }}>
                {step === 0 && <JoinScreen onJoin={() => setStep(1)} />}
                {step === 1 && <WaitingScreen onCalled={() => setStep(2)} />}
                {step === 2 && <CalledScreen onDone={() => setStep(3)} />}
                {step === 3 && <DoneScreen onReset={() => setStep(0)} />}
              </div>

              {/* Home indicator */}
              <div
                style={{
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: C.base,
                }}
              >
                <div
                  style={{
                    width: 120,
                    height: 4,
                    borderRadius: 2,
                    background: C.border,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
