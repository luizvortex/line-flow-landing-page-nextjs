"use client";

import { useState } from "react";
import { Bell, CalendarCheck, Check, Scissors } from "lucide-react";
import { PhoneFrame } from "./phone-frame";

/**
 * Tela de agendamento do app do cliente, no mesmo fluxo do PWA: escolhe o
 * dia, escolhe o horário, confirma e recebe "Horário agendado!".
 */

const DAYS = [
  { weekday: "Seg", day: 15 },
  { weekday: "Ter", day: 16 },
  { weekday: "Qua", day: 17 },
  { weekday: "Qui", day: 18 },
  { weekday: "Sex", day: 19 },
];

const SLOTS = [
  { time: "09:00", taken: true },
  { time: "09:30", taken: false },
  { time: "10:00", taken: true },
  { time: "10:30", taken: false },
  { time: "11:00", taken: false },
  { time: "14:00", taken: true },
  { time: "14:30", taken: false },
  { time: "15:00", taken: false },
  { time: "16:00", taken: false },
  { time: "16:30", taken: true },
  { time: "17:00", taken: false },
  { time: "17:30", taken: false },
];

export function BookingAppPreview() {
  const [day, setDay] = useState(1);
  const [slot, setSlot] = useState<string | null>("10:30");
  const [confirmed, setConfirmed] = useState(false);

  const chosenDay = DAYS[day];

  return (
    <PhoneFrame>
      {/* Cabeçalho da empresa */}
      <div className="px-5 pt-3 pb-4 border-b border-lf-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-lf-accent/15 flex items-center justify-center">
            <Scissors size={18} className="text-lf-accent" />
          </div>
          <div>
            <p className="text-sm font-semibold text-lf-primary">
              Barbearia Silva
            </p>
            <p className="text-[11px] text-lf-muted">Coloração · 1h</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mt-3">
          <span className="w-1.5 h-1.5 rounded-full bg-lf-success" />
          <span className="text-[11px] text-lf-success font-medium">
            Agenda aberta
          </span>
        </div>
      </div>

      {confirmed ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="w-16 h-16 rounded-full bg-lf-success/15 flex items-center justify-center">
            <CalendarCheck size={28} className="text-lf-success" />
          </div>
          <p className="mt-4 text-lg font-bold text-lf-primary">
            Horário agendado!
          </p>
          <p className="mt-1 text-xs text-lf-secondary">
            {chosenDay.weekday}, {chosenDay.day} · {slot}
          </p>

          <div className="mt-6 w-full bg-lf-card border border-lf-border rounded-xl p-3.5 flex items-center gap-3 text-left">
            <div className="w-8 h-8 rounded-lg bg-lf-accent/15 flex items-center justify-center shrink-0">
              <Bell size={14} className="text-lf-accent" />
            </div>
            <p className="text-[11px] text-lf-secondary leading-snug">
              Você recebe um lembrete antes do horário.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setConfirmed(false)}
            className="mt-4 text-[11px] text-lf-accent underline underline-offset-2 cursor-pointer"
          >
            Fazer outro agendamento
          </button>
        </div>
      ) : (
        <div className="flex-1 flex flex-col px-5 pt-4 pb-4">
          <p className="text-[11px] uppercase tracking-[0.12em] text-lf-muted font-medium">
            Escolha o dia
          </p>
          <div className="mt-2 grid grid-cols-5 gap-1.5">
            {DAYS.map((d, i) => (
              <button
                key={d.day}
                type="button"
                onClick={() => {
                  setDay(i);
                  setSlot(null);
                }}
                className={`rounded-xl py-2 flex flex-col items-center border cursor-pointer transition-colors ${
                  i === day
                    ? "bg-lf-accent border-lf-accent text-lf-base"
                    : "bg-lf-card border-lf-border text-lf-secondary hover:border-lf-border-strong"
                }`}
              >
                <span className="text-[9px] uppercase">{d.weekday}</span>
                <span className="text-sm font-bold font-mono">{d.day}</span>
              </button>
            ))}
          </div>

          <p className="mt-5 text-[11px] uppercase tracking-[0.12em] text-lf-muted font-medium">
            Horários livres
          </p>
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {SLOTS.map((s) => (
              <button
                key={s.time}
                type="button"
                disabled={s.taken}
                onClick={() => setSlot(s.time)}
                className={`rounded-lg py-2 text-xs font-mono border transition-colors ${
                  s.taken
                    ? "border-lf-border/50 text-lf-muted/50 line-through cursor-not-allowed"
                    : slot === s.time
                      ? "bg-lf-accent/20 border-lf-accent text-lf-accent font-bold cursor-pointer"
                      : "border-lf-border text-lf-secondary hover:border-lf-border-strong cursor-pointer"
                }`}
              >
                {s.time}
              </button>
            ))}
          </div>

          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-3 bg-lf-card border border-lf-border rounded-lg px-3 py-2">
              <Bell size={12} className="text-lf-accent shrink-0" />
              <p className="text-[10px] text-lf-secondary">
                Lembrete automático antes do horário
              </p>
            </div>
            <div className="flex items-center justify-between text-[11px] mb-2.5 px-0.5">
              <span className="text-lf-muted">Seu horário</span>
              <span className="text-lf-primary font-medium">
                {slot ? `${chosenDay.weekday}, ${chosenDay.day} · ${slot}` : "—"}
              </span>
            </div>
            <button
              type="button"
              disabled={!slot}
              onClick={() => setConfirmed(true)}
              className="w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold bg-lf-accent text-lf-base disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed transition-opacity"
            >
              <Check size={16} strokeWidth={2.5} />
              Confirmar
            </button>
          </div>
        </div>
      )}
    </PhoneFrame>
  );
}
