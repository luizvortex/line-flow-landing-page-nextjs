import {
  CalendarCheck,
  ChevronDown,
  ChevronRight,
  CircleCheck,
  Clock,
  DollarSign,
  ExternalLink,
  Gift,
  LayoutDashboard,
  ListOrdered,
  type LucideIcon,
  Megaphone,
  MessageCircle,
  Package,
  PanelLeft,
  Plus,
  Scissors,
  ShoppingCart,
  Users,
  Grid3x3,
} from "lucide-react";
import { AppLogo } from "./app-logo";

/**
 * A "Visão geral" do painel do dono, espelhando
 * `app/dashboard/_visao-geral/visao-geral.tsx` e a sidebar do PWA.
 *
 * Tem largura fixa (DASHBOARD_WIDTH) e layout sempre de desktop: quem usa
 * encolhe o mockup inteiro com `scale`, em vez de deixá-lo virar o layout de
 * celular do painel.
 */
export const DASHBOARD_WIDTH = 980;
export const DASHBOARD_HEIGHT = 700;

/** `--text-muted` e `--bg-brand` do app, um tom diferente dos da landing. */
const MUTED = "text-[#73a0a6]";
const BRAND_BG = "bg-[#020f18]";

type NavItem = { label: string; icon: LucideIcon; active?: boolean; badge?: string };

const ROOT: NavItem[] = [
  { label: "Visão geral", icon: LayoutDashboard, active: true },
  { label: "Filas", icon: ListOrdered },
  { label: "Meus atendimentos", icon: CircleCheck },
  { label: "Clientes", icon: Users },
];

const FOLDERS: { label: string; open: boolean; items: NavItem[] }[] = [
  {
    label: "Vendas",
    open: true,
    items: [
      { label: "Vendas", icon: ShoppingCart },
      { label: "Estoque", icon: Package },
      { label: "Serviços", icon: Scissors },
      { label: "Campanhas", icon: Megaphone },
      { label: "Fidelidade", icon: Gift },
    ],
  },
  {
    label: "Social",
    open: true,
    items: [
      { label: "Mensagens", icon: MessageCircle, badge: "3" },
      { label: "Perfil social", icon: Grid3x3 },
    ],
  },
  { label: "Gestão", open: false, items: [] },
];

function NavRow({ item, indent = false }: { item: NavItem; indent?: boolean }) {
  const Icon = item.icon;
  return (
    <div
      className={`flex items-center gap-2.5 rounded-lg py-[7px] text-[12.5px] ${indent ? "pl-7 pr-2.5" : "px-2.5"} ${
        item.active ? "bg-lf-accent/15 text-lf-accent font-semibold" : "text-lf-secondary"
      }`}
    >
      <Icon size={15} strokeWidth={1.75} />
      <span className="flex-1">{item.label}</span>
      {item.badge && (
        <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-lf-accent text-lf-base text-[10px] font-bold grid place-items-center">
          {item.badge}
        </span>
      )}
    </div>
  );
}

/** O `MetricaCard` do app: rótulo em maiúsculas, ícone no quadradinho, valor em mono. */
function Metric({
  label,
  value,
  sub,
  icon: Icon,
  highlight = false,
}: {
  label: string;
  value: string;
  sub: string;
  icon: LucideIcon;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        highlight ? "bg-lf-accent/[0.08] border-lf-accent/30" : "bg-lf-card border-lf-border"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-[10.5px] font-semibold uppercase tracking-wide ${MUTED}`}>{label}</span>
        <span className="w-8 h-8 rounded-[10px] bg-lf-accent/15 text-lf-accent grid place-items-center">
          <Icon size={15} />
        </span>
      </div>
      <p className="mt-2 font-mono text-[24px] font-bold tracking-tight text-lf-primary leading-tight">
        {value}
      </p>
      <p className={`mt-1 text-[11px] ${MUTED}`}>{sub}</p>
    </div>
  );
}

function GroupLabel({ children }: { children: string }) {
  return (
    <p className={`mb-2.5 text-[10.5px] font-semibold uppercase tracking-[0.06em] ${MUTED}`}>
      {children}
    </p>
  );
}

const PANEL = [
  { pos: "#021", name: "Rafael M.", service: "Degradê", queue: "Fila do Bruno", status: "Em atendimento", tone: "accent", wait: "—" },
  { pos: "#022", name: "Ana Costa", service: "Corte + barba", queue: "Fila do Léo", status: "Chamado", tone: "success", wait: "—" },
  { pos: "#023", name: "Carlos Lima", service: "Barba", queue: "Fila do Bruno", status: "Aguardando", tone: "neutral", wait: "~8min" },
  { pos: "#024", name: "Julia P.", service: "Corte feminino", queue: "Fila do Léo", status: "Aguardando", tone: "neutral", wait: "~15min" },
] as const;

const BADGE: Record<(typeof PANEL)[number]["tone"], string> = {
  accent: "bg-lf-accent/15 text-lf-accent",
  success: "bg-lf-success/15 text-lf-success",
  neutral: "bg-white/5 text-lf-secondary",
};

export function DashboardMockup() {
  return (
    <div
      className="lf-dark rounded-2xl overflow-hidden bg-lf-base border border-lf-border"
      style={{ width: DASHBOARD_WIDTH, height: DASHBOARD_HEIGHT }}
    >
      {/* Barra do navegador */}
      <div className="flex items-center gap-2 px-4 h-10 bg-[#020f18] border-b border-lf-border">
        <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80]/70" />
        <span className="ml-3 rounded-md bg-lf-base px-3 py-1 font-mono text-[10px] text-lf-muted w-[260px]">
          lineflow.mpdev.pro.br/dashboard
        </span>
      </div>

      <div className="flex h-[calc(100%-40px)]">
        {/* Sidebar */}
        <aside className={`w-[210px] shrink-0 ${BRAND_BG} border-r border-lf-border flex flex-col`}>
          <div className="px-4 h-14 flex items-center">
            <AppLogo size={15} />
          </div>
          <nav className="flex-1 px-2.5 space-y-0.5">
            {ROOT.map((item) => (
              <NavRow key={item.label} item={item} />
            ))}
            {FOLDERS.map((f) => (
              <div key={f.label} className="pt-1">
                <div className="flex items-center gap-2 px-2.5 py-[7px] text-[12.5px] text-lf-secondary">
                  {f.open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  {f.label}
                </div>
                {f.items.map((item) => (
                  <NavRow key={item.label} item={item} indent />
                ))}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-2.5 px-4 py-3 border-t border-lf-border">
            <span className="w-8 h-8 rounded-full bg-lf-accent/15 text-lf-accent grid place-items-center text-xs font-bold">
              LS
            </span>
            <div>
              <p className="text-xs font-semibold text-lf-primary">Lucas Silva</p>
              <p className={`text-[11px] ${MUTED}`}>Dono</p>
            </div>
          </div>
        </aside>

        {/* Conteúdo */}
        <div className="flex-1 min-w-0 flex flex-col">
          <div className="h-12 flex items-center justify-between px-5 border-b border-lf-border/60">
            <PanelLeft size={16} className="text-lf-secondary" />
            <span className="flex items-center gap-2 rounded-lg border border-lf-border bg-lf-card px-3 py-1.5 text-xs text-lf-primary">
              <span className="w-5 h-5 rounded-md bg-lf-accent text-lf-base grid place-items-center text-[9px] font-bold">
                BS
              </span>
              Barbearia Silva
              <ChevronDown size={13} className="text-lf-muted" />
            </span>
          </div>

          <div className="flex-1 px-6 pt-5 space-y-5 overflow-hidden">
            {/* Cabeçalho */}
            <div className="flex items-end justify-between">
              <div>
                <p className={`text-[10.5px] font-semibold uppercase tracking-[0.06em] ${MUTED}`}>Dashboard</p>
                <p className="mt-1 text-[21px] font-bold tracking-tight text-lf-primary">Olá, Lucas</p>
                <p className="mt-0.5 text-xs text-lf-secondary">Outubro · dia 29 de 31</p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 rounded-lg border border-lf-border bg-lf-card px-3 py-2 text-xs font-medium text-lf-primary">
                  <ExternalLink size={13} />
                  Página do cliente
                </span>
                <span className="flex items-center gap-1.5 rounded-lg bg-lf-accent px-3 py-2 text-xs font-semibold text-lf-base">
                  <Plus size={13} />
                  Nova entrada
                </span>
              </div>
            </div>

            <div>
              <GroupLabel>Operação hoje</GroupLabel>
              <div className="grid grid-cols-3 gap-3">
                <Metric label="Na fila agora" value="8" sub="Todas as filas" icon={ListOrdered} highlight />
                <Metric label="Atendidos hoje" value="31" sub="Todas as filas" icon={CircleCheck} />
                <Metric label="Espera média hoje" value="12 min" sub="Tempo médio na fila" icon={Clock} />
              </div>
            </div>

            <div>
              <GroupLabel>Financeiro do dia</GroupLabel>
              <div className="grid grid-cols-2 gap-3">
                <Metric label="Lucro bruto do dia" value="R$ 1.840,00" sub="Total a receber hoje" icon={DollarSign} />
                <Metric label="Líquido do dia" value="R$ 1.320,00" sub="Já pago (atendidos)" icon={DollarSign} highlight />
              </div>
            </div>

            <div className="grid grid-cols-[1.5fr_1fr] gap-3">
              {/* Painel de filas ao vivo */}
              <div className="rounded-2xl border border-lf-border bg-lf-card overflow-hidden">
                <div className="px-4 py-3 border-b border-lf-border flex items-center gap-2">
                  <span className="text-[13px] font-semibold text-lf-primary">Painel de filas ao vivo</span>
                  <span className="flex items-center gap-1 rounded-full bg-lf-success/15 px-2 py-0.5 text-[9px] font-bold text-lf-success">
                    <span className="w-1.5 h-1.5 rounded-full bg-lf-success" />
                    AO VIVO
                  </span>
                </div>
                {PANEL.map((row, i) => (
                  <div
                    key={row.pos}
                    className={`grid grid-cols-[48px_1fr_auto_52px] items-center gap-3 px-4 py-2.5 ${
                      i ? "border-t border-lf-border" : ""
                    } ${row.tone !== "neutral" ? "bg-lf-accent/[0.06]" : ""}`}
                  >
                    <span
                      className={`font-mono text-[13px] font-bold ${row.tone !== "neutral" ? "text-lf-accent" : MUTED}`}
                    >
                      {row.pos}
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-lf-primary truncate">{row.name}</p>
                      <p className={`text-[10.5px] truncate ${MUTED}`}>
                        <span className="text-lf-secondary font-medium">{row.service}</span> · {row.queue}
                      </p>
                    </div>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${BADGE[row.tone]}`}>
                      {row.status}
                    </span>
                    <span className={`text-right font-mono text-[10.5px] ${MUTED}`}>{row.wait}</span>
                  </div>
                ))}
              </div>

              {/* Próximos */}
              <div className="rounded-2xl border border-lf-border bg-lf-card p-4">
                <p className="text-[13px] font-semibold text-lf-primary">Próximos horários</p>
                <p className={`text-[11px] ${MUTED}`}>Ordenados por horário</p>
                {[
                  ["15:00", "Marcos A.", "Coloração"],
                  ["15:30", "Fernanda S.", "Escova"],
                  ["16:15", "Pedro H.", "Corte + barba"],
                ].map(([time, name, service]) => (
                  <div key={time} className="flex items-center gap-2.5 py-2 border-b border-lf-border last:border-0">
                    <CalendarCheck size={13} className="text-lf-accent shrink-0" />
                    <span className={`font-mono text-[11px] w-9 ${MUTED}`}>{time}</span>
                    <div className="min-w-0">
                      <p className="text-xs text-lf-primary truncate">{name}</p>
                      <p className={`text-[10.5px] truncate ${MUTED}`}>{service}</p>
                    </div>
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
