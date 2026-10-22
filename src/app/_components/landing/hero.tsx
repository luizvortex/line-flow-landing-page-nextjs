import {
  ArrowRight,
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
  Zap,
} from "lucide-react";
import { GradientDot } from "./shared/gradient-dot";
import { AnimatedFlow } from "./shared/animated-flow";

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

export function Hero() {
  return (
    <section
      id="main-content"
      className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-36"
    >
      {/* Background decorations */}
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
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #77aca2 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        {/* Animated badge — inspired by AnimatedBadge from 21st.dev */}
        <div
          className="animate-fade-up flex justify-center"
          style={{ animationDelay: "0ms" }}
        >
        </div>

        {/* Headline with gradient text — inspired by HeroSection & SaaS Template from 21st.dev */}
        <h1
          className="mt-6 text-[44px] md:text-[60px] lg:text-[72px] font-bold tracking-tight leading-[1.05] animate-fade-up"
          style={{
            animationDelay: "80ms",
            background:
              "linear-gradient(160deg, #e8f2f1 25%, #9fc8c2 65%, #77aca2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Todo o seu atendimento,
          <br />
          em um só{" "}
          <span className="relative inline-block">
            <span className="relative z-20" style={{ WebkitTextFillColor: "initial" }}>fluxo.</span>
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

        <p
          className="mt-6 text-[#8bb5b0] text-lg leading-relaxed max-w-xl mx-auto animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          Fila virtual, agenda, fidelidade e financeiro no mesmo painel. O
          cliente entra pelo QR Code ou WhatsApp, acompanha pelo celular e
          volta sempre. Sem papel, sem app — só atendimento.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="https://lineflow.mpdev.pro.br/auth/cadastrar-empresa"
            className="flex items-center gap-2 bg-[#77aca2] hover:bg-[#5d9990] text-[#031926] font-bold px-7 py-3.5 rounded-lg text-base shadow-[0_0_28px_rgba(119,172,162,.35)] hover:shadow-[0_0_48px_rgba(119,172,162,.45)] transition-all duration-200"
          >
            Criar conta grátis
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>

        {/* Social proof bar */}
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[#4d7a80] text-xs animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <span className="flex items-center gap-1.5">
            <Zap
              size={12}
              strokeWidth={1.5}
              className="fill-[#fbbf24] text-[#fbbf24]"
            />
            <span className="text-[#8bb5b0]">14 dias de Pro no plano grátis</span>
          </span>
          <span aria-hidden="true" className="text-[#255068]">·</span>
          <span>Sem cartão para começar</span>
          <span aria-hidden="true" className="text-[#255068]">·</span>
          <span>Cancele quando quiser</span>
        </div>
      </div>

      {/* Hero Mockup */}
      <div
        className="relative z-10 mt-16 max-w-5xl mx-auto px-6 animate-fade-up"
        style={{ animationDelay: "420ms" }}
      >
        {/* Radial glow behind mockup — inspired by SaaS Template & HeroSection from 21st.dev */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 pointer-events-none overflow-hidden"
        >
          <div className="absolute left-1/2 -translate-x-1/2 -top-16 h-[280px] w-[75%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(119,172,162,0.18)_0%,transparent_70%)] blur-2xl" />
        </div>

        {/* MockupFrame with gradient border — inspired by Mockup component from 21st.dev */}
        <div className="relative rounded-[18px] p-[1.5px] bg-gradient-to-b from-[#2d637a] via-[#1a3d52] to-[#1a3d52]/20 shadow-[0_0_100px_rgba(119,172,162,0.08),0_40px_80px_rgba(3,25,38,0.65)]">
          <div className="relative w-full" style={{ perspective: "1200px" }}>
            {/* Dashboard — main layer */}
            <div
              className="w-full rounded-2xl overflow-hidden bg-[#072233]"
              style={{ transform: "rotateX(4deg)" }}
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
            {/* Phone mockup — floating */}
            <div
              className="hidden sm:block absolute right-0 md:-right-4 bottom-0 w-[120px] md:w-[152px]"
              style={{ filter: "drop-shadow(0 24px 48px rgba(3,25,38,.90))" }}
            >
              <div className="rounded-[22px] border-2 border-[#255068] bg-[#072233] overflow-hidden shadow-[0_0_24px_rgba(119,172,162,0.10)]">
                <div className="bg-[#031926]/90 px-3 pt-3 pb-2 border-b border-[#1a3d52]">
                  <p className="text-[8px] font-semibold text-[#e8f2f1] text-center truncate">
                    Barbearia Silva · Corte
                  </p>
                </div>
                <div className="p-3 text-center">
                  <p className="text-[8px] text-[#4d7a80] uppercase tracking-widest mb-0.5">
                    Sua senha
                  </p>
                  <p className="font-mono font-bold text-[40px] leading-none text-[#77aca2] tracking-tight">
                    007
                  </p>
                  <p className="text-[8px] text-[#4d7a80] mt-1">
                    ~21 min de espera
                  </p>
                  <div className="mt-2 h-1 bg-[#031926] rounded-full overflow-hidden">
                    <div className="h-full w-1/3 bg-[#77aca2] rounded-full" />
                  </div>
                  <button className="mt-2 w-full text-[8px] bg-[rgba(119,172,162,0.15)] text-[#77aca2] py-1.5 rounded-full font-medium">
                    Receber notificação
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom fade overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#031926] to-transparent pointer-events-none rounded-b-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
