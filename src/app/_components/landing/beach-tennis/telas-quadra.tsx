import {
  ArrowLeft,
  Bell,
  CalendarCheck,
  Check,
  Clock,
  MapPin,
  ShieldCheck,
  Sun,
  Sunrise,
  Moon,
} from "lucide-react";
import { AppLogo } from "../shared/app-logo";

/**
 * Telas da reserva de quadra no app do cliente, no fluxo real do PWA
 * (`app/e/[slug]/reservar/reservar-quadra.tsx`): vitrine da arena, escolha de
 * dia → turno → quadra → horários e a reserva feita. Os dados são de exemplo.
 */

const ARENA = "Arena Pé na Areia";
const MUTED = "text-lf-muted";

/** Foto da quadra (miniatura leve, 640px), como a foto que o dono sobe no app. */
function MiniQuadra({ noite = false, className = "" }: { noite?: boolean; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url(/images/beach/${noite ? "quadra-noite-mini" : "quadra-mini"}.webp)`,
      }}
    />
  );
}

function CabecalhoReserva({ passo }: { passo: 1 | 2 }) {
  return (
    <>
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b border-lf-border">
        <span className={`flex items-center gap-1 text-[10px] ${MUTED}`}>
          <ArrowLeft size={11} />
          {ARENA}
        </span>
        <AppLogo size={13} />
      </div>
      <div className="flex gap-1.5 px-4 py-2 border-b border-lf-border">
        {[1, 2].map((i) => (
          <span key={i} className={`flex-1 h-[3px] rounded-full ${i <= passo ? "bg-lf-accent" : "bg-lf-border"}`} />
        ))}
      </div>
    </>
  );
}

// ── 1. Vitrine da arena ─────────────────────────────────────────────

const QUADRAS_VITRINE = [
  { nome: "Quadra 1", detalhe: "Coberta · iluminada", preco: "a partir de R$ 90/h", noite: false },
  { nome: "Quadra 2", detalhe: "Iluminada", preco: "a partir de R$ 80/h", noite: true },
  { nome: "Quadra 3", detalhe: "Iluminada", preco: "a partir de R$ 80/h", noite: false },
];

export function VitrineArenaScreen() {
  return (
    <>
      <MiniQuadra className="h-[112px] shrink-0" />
      <div className="flex-1 flex flex-col px-4 pb-4">
        <span className="-mt-7 w-14 h-14 rounded-2xl border-[3px] border-lf-base bg-lf-accent text-lf-base grid place-items-center text-[15px] font-extrabold">
          PA
        </span>
        <p className="mt-2 text-[16px] font-bold tracking-tight text-lf-primary">{ARENA}</p>
        <p className={`mt-0.5 flex items-center gap-1 text-[10px] ${MUTED}`}>
          <MapPin size={10} />
          Beach tennis · 3 quadras
        </p>
        <span className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-lf-success">
          <span className="w-1.5 h-1.5 rounded-full bg-lf-success" />
          Aberto · fecha às 23:00
        </span>

        <p className="mt-4 text-[12px] font-bold text-lf-primary">Quadras</p>
        <div className="mt-2 space-y-2">
          {QUADRAS_VITRINE.map((q) => (
            <div key={q.nome} className="flex items-center gap-3 rounded-xl border border-lf-border bg-lf-card p-2">
              <MiniQuadra noite={q.noite} className="w-14 h-11 rounded-lg shrink-0" />
              <div className="min-w-0">
                <p className="text-[12px] font-semibold text-lf-primary">{q.nome}</p>
                <p className={`text-[9.5px] ${MUTED}`}>{q.detalhe}</p>
                <p className="text-[9.5px] font-semibold text-lf-accent">{q.preco}</p>
              </div>
            </div>
          ))}
        </div>

        <span className="mt-auto h-11 rounded-xl bg-lf-accent text-lf-base text-[13px] font-semibold grid place-items-center">
          Reservar quadra
        </span>
      </div>
    </>
  );
}

// ── 2. Escolher dia, turno, quadra e horários ───────────────────────

const DIAS = [
  { sem: "Qui", dia: 20 },
  { sem: "Sex", dia: 21 },
  { sem: "Sáb", dia: 22, ativo: true },
  { sem: "Dom", dia: 23 },
  { sem: "Seg", dia: 24 },
];

const TURNOS = [
  { id: "Manhã", icone: Sunrise },
  { id: "Tarde", icone: Sun },
  { id: "Noite", icone: Moon, ativo: true },
];

type Slot = { h: string; estado: "livre" | "ocupado" | "escolhido" };

const QUADRAS_TURNO: { nome: string; preco: string; slots: Slot[] }[] = [
  {
    nome: "Quadra 1",
    preco: "R$ 130/h",
    slots: [
      { h: "17:00", estado: "ocupado" },
      { h: "18:00", estado: "livre" },
      { h: "19:00", estado: "ocupado" },
      { h: "20:00", estado: "ocupado" },
      { h: "21:00", estado: "livre" },
      { h: "22:00", estado: "livre" },
    ],
  },
  {
    nome: "Quadra 2",
    preco: "R$ 120/h",
    slots: [
      { h: "17:00", estado: "livre" },
      { h: "18:00", estado: "ocupado" },
      { h: "19:00", estado: "escolhido" },
      { h: "20:00", estado: "escolhido" },
      { h: "21:00", estado: "livre" },
      { h: "22:00", estado: "ocupado" },
    ],
  },
];

export function ReservarQuadraScreen() {
  return (
    <>
      <CabecalhoReserva passo={1} />
      <div className="flex-1 flex flex-col px-4 pt-3 pb-4 min-h-0">
        <p className="text-[14px] font-bold text-lf-primary">Quando você quer jogar?</p>
        <p className={`mt-0.5 text-[10px] ${MUTED}`}>Toque nos horários. Dá para marcar mais de um.</p>

        <div className="mt-3 grid grid-cols-5 gap-1.5">
          {DIAS.map((d) => (
            <span
              key={d.dia}
              className={`rounded-xl py-1.5 text-center border ${
                d.ativo ? "bg-lf-accent border-lf-accent text-lf-base" : "border-lf-border text-lf-secondary"
              }`}
            >
              <span className="block text-[8.5px] font-semibold uppercase">{d.sem}</span>
              <span className={`block text-[14px] font-bold ${d.ativo ? "" : "text-lf-primary"}`}>{d.dia}</span>
            </span>
          ))}
        </div>

        <div className="mt-2.5 flex gap-1 p-1 rounded-xl bg-lf-elevated">
          {TURNOS.map(({ id, icone: Icone, ativo }) => (
            <span
              key={id}
              className={`flex-1 h-7 rounded-lg flex items-center justify-center gap-1 text-[10.5px] font-semibold ${
                ativo ? "bg-lf-card text-lf-primary shadow-sm" : "text-lf-muted"
              }`}
            >
              <Icone size={11} />
              {id}
            </span>
          ))}
        </div>

        <div className="mt-2.5 space-y-2">
          {QUADRAS_TURNO.map((q) => (
            <div
              key={q.nome}
              className={`rounded-xl border p-2.5 ${
                q.slots.some((s) => s.estado === "escolhido")
                  ? "border-lf-accent/50 bg-lf-accent/[0.06]"
                  : "border-lf-border bg-lf-card"
              }`}
            >
              <div className="flex items-center gap-2">
                <MiniQuadra noite className="w-9 h-7 rounded-md shrink-0" />
                <span className="flex-1 text-[11.5px] font-semibold text-lf-primary">{q.nome}</span>
                <span className="text-[9.5px] font-semibold text-lf-accent">{q.preco}</span>
              </div>
              <div className="mt-2 grid grid-cols-3 gap-1">
                {q.slots.map((s) => (
                  <span
                    key={s.h}
                    className={`rounded-lg py-1 text-center font-mono text-[10px] border ${
                      s.estado === "escolhido"
                        ? "border-lf-accent bg-lf-accent text-lf-base font-bold"
                        : s.estado === "ocupado"
                          ? "border-transparent bg-lf-elevated text-lf-muted line-through"
                          : "border-lf-border text-lf-secondary"
                    }`}
                  >
                    {s.h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-2.5 flex items-center gap-3 border-t border-lf-border">
          <div className="min-w-0 flex-1">
            <p className={`text-[9.5px] ${MUTED}`}>2 horários · Quadra 2</p>
            <p className="font-mono text-[15px] font-bold text-lf-primary">R$ 240,00</p>
          </div>
          <span className="h-10 px-4 rounded-xl bg-lf-accent text-lf-base text-[12px] font-semibold grid place-items-center">
            Continuar
          </span>
        </div>
      </div>
    </>
  );
}

// ── 3. Reserva feita ────────────────────────────────────────────────

export function ReservaFeitaScreen() {
  return (
    <>
      <CabecalhoReserva passo={2} />
      <div className="flex-1 flex flex-col px-4 pt-5 pb-4">
        <div className="flex flex-col items-center text-center">
          <span className="relative grid place-items-center w-20 h-20">
            <span className="absolute inset-0 rounded-full bg-lf-success/15 animate-ping-live" />
            <span className="relative w-14 h-14 rounded-full bg-lf-success/20 grid place-items-center">
              <Check size={26} strokeWidth={3} className="text-lf-success" />
            </span>
          </span>
          <p className="mt-3 text-[20px] font-bold tracking-tight text-lf-primary">Reserva feita!</p>
          <p className="mt-1 text-[10.5px] text-lf-secondary">Te esperamos na areia.</p>
        </div>

        <div className="mt-4 rounded-xl border border-lf-border bg-lf-card overflow-hidden">
          <MiniQuadra noite className="h-16" />
          <div className="p-3 space-y-1.5">
            <p className="text-[12.5px] font-semibold text-lf-primary">Quadra 2 · {ARENA}</p>
            <p className="flex items-center gap-1.5 text-[10.5px] text-lf-secondary">
              <Clock size={11} className="text-lf-muted" />
              Sábado, 22/11 · 19:00 às 21:00
            </p>
            <div className="pt-1.5 mt-1.5 border-t border-lf-border space-y-1 font-mono text-[10px]">
              <p className="flex justify-between text-lf-secondary">
                <span>19:00 – 20:00</span>
                <span>R$ 120,00</span>
              </p>
              <p className="flex justify-between text-lf-secondary">
                <span>20:00 – 21:00</span>
                <span>R$ 120,00</span>
              </p>
              <p className="flex justify-between text-[11.5px] font-bold text-lf-primary pt-1">
                <span className="font-sans">Total</span>
                <span>R$ 240,00</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-2 flex gap-2 rounded-xl border border-lf-border bg-lf-accent/10 px-3 py-2.5">
          <Bell size={12} className="text-lf-accent shrink-0 mt-px" />
          <p className="text-[10px] leading-snug text-lf-secondary">
            Você recebe um <strong className="text-lf-primary">lembrete no WhatsApp</strong> antes do jogo.
          </p>
        </div>
        <p className={`mt-2 flex items-center gap-1.5 text-[9.5px] ${MUTED}`}>
          <ShieldCheck size={11} />
          Política da arena: cancelamento até 12 h antes.
        </p>

        <div className="mt-auto flex flex-col gap-1.5">
          <span className="h-10 rounded-xl bg-lf-accent text-lf-base text-[12px] font-semibold flex items-center justify-center gap-1.5">
            <CalendarCheck size={13} />
            Ver reserva e confirmar presença
          </span>
          <span className="h-10 rounded-xl border border-lf-border text-lf-secondary text-[12px] font-medium grid place-items-center">
            Reservar outra quadra
          </span>
        </div>
      </div>
    </>
  );
}
