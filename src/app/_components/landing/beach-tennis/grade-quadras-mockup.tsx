import {
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  type LucideIcon,
  PanelLeft,
  Plus,
  Repeat,
  Users,
} from "lucide-react";
import { AppLogo } from "../shared/app-logo";
import { DASHBOARD_HEIGHT, DASHBOARD_WIDTH } from "../shared/dashboard-mockup";

/**
 * A "Grade das quadras" do painel do modo quadras
 * (`app/dashboard/grade-quadras`): colunas = quadras, linhas = horários, e o
 * que ocupa cada horário. Mesmo tamanho do `DashboardMockup`, para caber no
 * mesmo lugar da faixa da equipe.
 */

const MUTED = "text-lf-muted";

const NAV: { label: string; icon: LucideIcon; active?: boolean }[] = [
  { label: "Visão geral", icon: LayoutDashboard },
  { label: "Grade das quadras", icon: CalendarDays, active: true },
  { label: "Horários fixos", icon: Repeat },
  { label: "Aulas", icon: GraduationCap },
  { label: "Clientes", icon: Users },
  { label: "Comandas", icon: ClipboardList },
  { label: "Financeiro", icon: CircleDollarSign },
];

type Item = { tipo: "avulsa" | "fixa" | "aula" | "bloqueio"; nome: string; info: string; span?: number };

const QUADRAS = ["Quadra 1", "Quadra 2", "Quadra 3", "Quadra 4"];
const HORAS = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

/** [hora][quadra] → item que começa ali (span = horários que ocupa). */
const OCUPACAO: Record<string, Record<number, Item>> = {
  "17:00": {
    0: { tipo: "aula", nome: "Turma Intermediária", info: "Prof. Diego · 6/8", span: 1 },
    2: { tipo: "avulsa", nome: "Marina Costa", info: "Pago · R$ 80" },
  },
  "18:00": {
    1: { tipo: "avulsa", nome: "Lucas e amigos", info: "Confirmada", span: 2 },
    3: { tipo: "bloqueio", nome: "Torneio interno", info: "Bloqueada", span: 4 },
  },
  "19:00": {
    0: { tipo: "fixa", nome: "Grupo do Rafa", info: "Mensalista · toda qua", span: 2 },
    2: { tipo: "avulsa", nome: "Ana Paula", info: "Pendente" },
  },
  "20:00": {
    1: { tipo: "avulsa", nome: "Pedro H.", info: "Confirmada" },
    2: { tipo: "fixa", nome: "Carla e Bia", info: "Mensalista · toda qua", span: 2 },
  },
  "21:00": {
    0: { tipo: "avulsa", nome: "Bruno S.", info: "Confirmada", span: 2 },
  },
  "22:00": {},
};

const ESTILO: Record<Item["tipo"], string> = {
  avulsa: "bg-lf-accent/20 border-lf-accent/50 text-lf-primary",
  fixa: "bg-[#3b5bdb]/20 border-[#3b5bdb]/50 text-lf-primary",
  aula: "bg-[#e3a857]/25 border-[#e3a857]/60 text-lf-primary",
  bloqueio:
    "border-lf-border text-lf-secondary bg-[repeating-linear-gradient(135deg,rgba(255,255,255,.06)_0_6px,transparent_6px_12px)]",
};

const ROTULO: Record<Item["tipo"], string> = {
  avulsa: "Avulsa",
  fixa: "Mensalista",
  aula: "Aula",
  bloqueio: "Bloqueio",
};

const ALTURA_LINHA = 76;

export function GradeQuadrasMockup() {
  // Células cobertas por um item de vários horários não desenham nada.
  const coberta = new Set<string>();
  HORAS.forEach((h, hi) =>
    Object.entries(OCUPACAO[h] ?? {}).forEach(([q, item]) => {
      for (let k = 1; k < (item.span ?? 1); k++) coberta.add(`${hi + k}-${q}`);
    }),
  );

  return (
    <div
      className="lf-app rounded-2xl overflow-hidden bg-lf-base border border-lf-border"
      style={{ width: DASHBOARD_WIDTH, height: DASHBOARD_HEIGHT }}
    >
      <div className="flex items-center gap-2 px-4 h-10 bg-[var(--lf-app-brand)] border-b border-lf-border">
        <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80]/70" />
        <span className="ml-3 rounded-md bg-lf-base px-3 py-1 font-mono text-[10px] text-lf-muted w-[300px]">
          lineflow.mpdev.pro.br/dashboard/grade-quadras
        </span>
      </div>

      <div className="flex h-[calc(100%-40px)]">
        <aside className="w-[210px] shrink-0 bg-[var(--lf-app-brand)] border-r border-lf-border flex flex-col">
          <div className="px-4 h-14 flex items-center">
            <AppLogo size={15} />
          </div>
          <nav className="flex-1 px-2.5 space-y-0.5">
            {NAV.map(({ label, icon: Icon, active }) => (
              <div
                key={label}
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-[7px] text-[12.5px] ${
                  active ? "bg-lf-accent/15 text-lf-accent font-semibold" : "text-lf-secondary"
                }`}
              >
                <Icon size={15} strokeWidth={1.75} />
                {label}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-2.5 px-4 py-3 border-t border-lf-border">
            <span className="w-8 h-8 rounded-full bg-lf-accent/15 text-lf-accent grid place-items-center text-xs font-bold">
              PA
            </span>
            <div>
              <p className="text-xs font-semibold text-lf-primary">Arena Pé na Areia</p>
              <p className={`text-[11px] ${MUTED}`}>Dono</p>
            </div>
          </div>
        </aside>

        <div className="flex-1 min-w-0 flex flex-col">
          <div className="h-12 flex items-center justify-between px-5 border-b border-lf-border/60">
            <PanelLeft size={16} className="text-lf-secondary" />
            <span className="flex items-center gap-2 rounded-lg border border-lf-border bg-lf-card px-3 py-1.5 text-xs text-lf-primary">
              Arena Pé na Areia
              <ChevronDown size={13} className="text-lf-muted" />
            </span>
          </div>

          <div className="flex-1 px-6 pt-5 overflow-hidden">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[21px] font-bold tracking-tight text-lf-primary">Grade das quadras</p>
                <p className="mt-0.5 text-xs text-lf-secondary">Quarta, 19 de novembro · 14 reservas hoje</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center rounded-lg border border-lf-border bg-lf-card text-lf-secondary">
                  <ChevronLeft size={15} className="mx-1.5" />
                  <span className="px-2 py-1.5 text-xs font-medium text-lf-primary border-x border-lf-border">
                    Hoje
                  </span>
                  <ChevronRight size={15} className="mx-1.5" />
                </span>
                <span className="flex items-center gap-1.5 rounded-lg bg-lf-accent px-3 py-2 text-xs font-semibold text-lf-base">
                  <Plus size={13} />
                  Nova reserva
                </span>
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-lf-border bg-lf-card overflow-hidden">
              <div className="grid grid-cols-[64px_repeat(4,1fr)] border-b border-lf-border">
                <span />
                {QUADRAS.map((q) => (
                  <span key={q} className="py-2.5 text-center text-[12px] font-semibold text-lf-primary border-l border-lf-border">
                    {q}
                  </span>
                ))}
              </div>
              <div
                className="relative grid grid-cols-[64px_repeat(4,1fr)]"
                style={{ gridTemplateRows: `repeat(${HORAS.length}, ${ALTURA_LINHA}px)` }}
              >
                {HORAS.map((h, hi) => (
                  <div key={h} className="contents">
                    <span
                      className={`px-3 pt-2 font-mono text-[11px] ${MUTED} ${hi ? "border-t border-lf-border" : ""}`}
                      style={{ gridRow: hi + 1, gridColumn: 1 }}
                    >
                      {h}
                    </span>
                    {QUADRAS.map((_, qi) => {
                      if (coberta.has(`${hi}-${qi}`)) return null;
                      const item = OCUPACAO[h]?.[qi];
                      return (
                        <div
                          key={qi}
                          className={`p-1.5 border-l border-lf-border ${hi ? "border-t" : ""}`}
                          style={{ gridRow: `${hi + 1} / span ${item?.span ?? 1}`, gridColumn: qi + 2 }}
                        >
                          {item ? (
                            <div className={`h-full rounded-lg border px-2.5 py-2 ${ESTILO[item.tipo]}`}>
                              <p className="text-[9px] font-semibold uppercase tracking-wide opacity-70">
                                {ROTULO[item.tipo]}
                              </p>
                              <p className="mt-0.5 text-[12px] font-semibold truncate">{item.nome}</p>
                              <p className={`text-[10.5px] truncate ${MUTED}`}>{item.info}</p>
                            </div>
                          ) : (
                            <div className="h-full rounded-lg border border-dashed border-lf-border/70 grid place-items-center text-[10.5px] text-lf-muted">
                              Livre
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
