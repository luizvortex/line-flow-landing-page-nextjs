import {
  ChartColumn,
  CircleCheck,
  DollarSign,
  Gift,
  LayoutDashboard,
  ListOrdered,
  type LucideIcon,
  MessageCircle,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react";

/**
 * Mockup do painel do dono, espelhando o menu e a Visão geral reais do
 * sistema. Era a imagem da hero antiga; hoje aparece na faixa da equipe.
 */

type SidebarItem = {
  label: string;
  icon: LucideIcon;
  active?: boolean;
  badge?: string;
};

const SIDEBAR: { title?: string; items: SidebarItem[] }[] = [
  {
    items: [
      { label: "Visão geral", icon: LayoutDashboard, active: true },
      { label: "Filas", icon: ListOrdered },
      { label: "Meus atendimentos", icon: CircleCheck },
      { label: "Clientes", icon: Users },
    ],
  },
  {
    title: "Vendas",
    items: [
      { label: "Vendas", icon: ShoppingCart },
      { label: "Estoque", icon: Package },
      { label: "Fidelidade", icon: Gift },
    ],
  },
  {
    title: "Social",
    items: [{ label: "Mensagens", icon: MessageCircle, badge: "3" }],
  },
  {
    title: "Gestão",
    items: [
      { label: "Financeiro", icon: DollarSign },
      { label: "Métricas", icon: ChartColumn },
    ],
  },
];

const METRICS = [
  { label: "Entradas hoje", value: "47", trend: "+12% vs. ontem" },
  { label: "Atendidos", value: "31", trend: "+8% vs. ontem" },
  { label: "Faturamento", value: "R$ 1.840", trend: "+15% vs. ontem" },
  { label: "Espera média", value: "12 min", trend: "−3 min vs. ontem" },
];

const QUEUE = [
  { pos: "#001", name: "Rafael M.", service: "Corte · Bruno", called: true },
  { pos: "#002", name: "Ana Costa", service: "Corte + barba", next: true },
  { pos: "#003", name: "Carlos Lima", service: "Barba", wait: "~8 min" },
  { pos: "#004", name: "Julia P.", service: "Corte feminino", wait: "~15 min" },
];

const AGENDA = [
  { time: "15:00", name: "Marcos A.", service: "Coloração" },
  { time: "15:30", name: "Fernanda S.", service: "Escova" },
  { time: "16:15", name: "Pedro H.", service: "Corte + barba" },
];


export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full rounded-2xl overflow-hidden bg-[#072233] ${className}`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#031926]/80 border-b border-[#1a3d52]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80]/70" />
        <div className="ml-3 bg-[#031926] rounded-md px-3 py-1 text-[10px] text-[#4d7a80] font-mono max-w-[260px] w-full tracking-wide">
          lineflow.mpdev.pro.br/dashboard
        </div>
      </div>

      {/* Dashboard body */}
      <div className="flex min-h-[300px] md:min-h-[380px]">
        {/* Sidebar — espelha o menu real do painel */}
        <div className="hidden md:flex w-[180px] bg-[#031926]/80 border-r border-[#1a3d52] flex-col p-4 gap-0.5 shrink-0">
          <div className="text-sm font-bold text-[#e8f2f1] mb-3 px-2">
            Line<span className="text-[#77aca2]">Flow</span>
          </div>
          {SIDEBAR.map((group) => (
            <div key={group.title ?? "raiz"} className={group.title ? "mt-3" : ""}>
              {group.title && (
                <p className="text-[9px] uppercase tracking-[0.15em] text-[#255068] font-semibold px-2.5 mb-1">
                  {group.title}
                </p>
              )}
              {group.items.map(({ label, icon: Icon, active, badge }) => (
                <div
                  key={label}
                  className={`flex items-center gap-2 text-[11px] px-2.5 py-1.5 rounded-lg ${
                    active
                      ? "bg-[rgba(119,172,162,0.15)] text-[#77aca2] font-medium"
                      : "text-[#4d7a80]"
                  }`}
                >
                  <Icon size={12} strokeWidth={1.75} />
                  <span className="flex-1">{label}</span>
                  {badge && (
                    <span className="text-[9px] bg-[#77aca2] text-[#031926] font-bold rounded-full px-1.5 leading-4">
                      {badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0 p-5 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-semibold text-[#e8f2f1]">
                Visão geral
              </h2>
              <p className="text-[10px] text-[#4d7a80] mt-0.5">
                Hoje, 14:32
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-[#77aca2]/10 border border-[#77aca2]/20 rounded-full px-2.5 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping-live absolute inline-flex h-full w-full rounded-full bg-[#77aca2] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#77aca2]" />
              </span>
              <span className="text-[10px] text-[#77aca2] font-medium">
                Ao vivo
              </span>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {METRICS.map((m) => (
              <div
                key={m.label}
                className="bg-[#031926]/60 rounded-xl p-3 border border-[#1a3d52]"
              >
                <div className="text-[10px] text-[#4d7a80]">
                  {m.label}
                </div>
                <div className="font-mono font-bold text-[#e8f2f1] text-lg mt-0.5">
                  {m.value}
                </div>
                <div className="text-[9px] text-[#4ade80] mt-0.5">
                  {m.trend}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* Fila agora */}
            <div className="md:col-span-3 bg-[#031926]/40 rounded-xl border border-[#1a3d52] p-3">
              <div className="flex items-center justify-between mb-2 px-1">
                <p className="text-[11px] font-semibold text-[#e8f2f1]">
                  Fila agora
                </p>
                <p className="text-[10px] text-[#4d7a80]">
                  4 aguardando
                </p>
              </div>
              <div className="space-y-1">
                {QUEUE.map((row) => (
                  <div
                    key={row.pos}
                    className="flex items-center justify-between bg-[#072233]/70 rounded-lg px-3 py-2"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="font-mono text-xs font-bold text-[#77aca2]">
                        {row.pos}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs text-[#e8f2f1] truncate">
                          {row.name}
                        </p>
                        <p className="text-[9px] text-[#4d7a80] truncate">
                          {row.service}
                        </p>
                      </div>
                    </div>
                    {row.called ? (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#4ade80]/10 text-[#4ade80] shrink-0">
                        Em atendimento
                      </span>
                    ) : row.next ? (
                      <span className="text-[10px] bg-[#77aca2] text-[#031926] px-2.5 py-0.5 rounded font-bold shrink-0">
                        Chamar
                      </span>
                    ) : (
                      <span className="text-[10px] text-[#4d7a80] shrink-0">
                        {row.wait}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Agenda + fidelidade */}
            <div className="hidden md:flex md:col-span-2 flex-col gap-3">
              <div className="bg-[#77aca2]/10 rounded-xl border border-[#77aca2]/20 p-3 flex items-center gap-2.5">
                <Gift size={14} strokeWidth={1.75} className="text-[#77aca2] shrink-0" />
                <p className="text-[10px] text-[#8bb5b0] leading-snug">
                  <span className="text-[#e8f2f1] font-semibold">3 clientes</span>{" "}
                  com recompensa para resgatar
                </p>
              </div>
              <div className="bg-[#031926]/40 rounded-xl border border-[#1a3d52] p-3 flex-1">
                <p className="text-[11px] font-semibold text-[#e8f2f1] mb-2 px-1">
                  Próximos horários
                </p>
                <div className="space-y-1.5">
                  {AGENDA.map((a) => (
                    <div key={a.time} className="flex items-center gap-2.5 px-1">
                      <span className="font-mono text-[10px] text-[#77aca2] w-9 shrink-0">
                        {a.time}
                      </span>
                      <div className="min-w-0 border-l border-[#1a3d52] pl-2.5">
                        <p className="text-[11px] text-[#e8f2f1] truncate">
                          {a.name}
                        </p>
                        <p className="text-[9px] text-[#4d7a80] truncate">
                          {a.service}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
