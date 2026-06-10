import { ArrowRight, Star, Zap } from "lucide-react";
import { GradientDot } from "./shared/gradient-dot";

export function Hero() {
  return (
    <section
      id="main-content"
      className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-36"
    >
      {/* Background decorations */}
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
          Chega de cliente
          <br />
          perdido na{" "}
          <span className="relative inline-block">
            <span className="relative z-20" style={{ WebkitTextFillColor: "initial" }}>fila.</span>
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
          Seu cliente entra pela porta, escaneia o QR Code e acompanha a
          posição no celular. Você gerencia tudo em tempo real no dashboard.
          Sem papel, sem confusão — só atendimento.
        </p>

        {/* CTAs */}
        <div
          className="mt-10 flex flex-wrap gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="https://lineflow.mpdev.pro.br"
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
            <Star
              size={12}
              strokeWidth={1.5}
              className="fill-[#fbbf24] text-[#fbbf24]"
            />
            <span className="font-mono text-[#8bb5b0]">4.9</span>
            <span className="text-[#4d7a80]">· 300+ negócios</span>
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
                  app.lineflow.com.br/dashboard
                </div>
              </div>

              {/* Dashboard body */}
              <div className="flex min-h-[260px] md:min-h-[320px]">
                {/* Sidebar */}
                <div className="hidden md:flex w-[172px] bg-[#031926]/80 border-r border-[#1a3d52] flex-col p-4 gap-1.5 shrink-0">
                  <div className="text-sm font-bold text-[#e8f2f1] mb-3 px-2">
                    Line<span className="text-[#77aca2]">Flow</span>
                  </div>
                  {[
                    { label: "Filas ao vivo", active: true },
                    { label: "Relatórios", active: false },
                    { label: "Clientes", active: false },
                    { label: "Configurações", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`text-xs px-3 py-2 rounded-lg transition-colors ${
                        item.active
                          ? "bg-[rgba(119,172,162,0.15)] text-[#77aca2] font-medium"
                          : "text-[#4d7a80] hover:text-[#8bb5b0]"
                      }`}
                    >
                      {item.label}
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-5 md:p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-sm font-semibold text-[#e8f2f1]">
                        Filas ao vivo
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
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { label: "Entradas hoje", value: "47" },
                      { label: "Atendidos", value: "31" },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="bg-[#031926]/60 rounded-xl p-3 border border-[#1a3d52]"
                      >
                        <div className="font-mono font-bold text-[#77aca2] text-xl">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-[#4d7a80] mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Queue table */}
                  <div className="space-y-1.5">
                    {[
                      {
                        name: "Rafael M.",
                        pos: "#001",
                        status: "Chamado",
                        color: "text-[#4ade80]",
                        bg: "bg-[#4ade80]/10",
                        cta: false,
                      },
                      {
                        name: "Ana Costa",
                        pos: "#002",
                        status: "Na fila",
                        color: "text-[#77aca2]",
                        bg: "bg-[#77aca2]/10",
                        cta: true,
                      },
                      {
                        name: "Carlos Lima",
                        pos: "#003",
                        status: "Na fila",
                        color: "text-[#77aca2]",
                        bg: "bg-[#77aca2]/10",
                        cta: false,
                      },
                      {
                        name: "Julia P.",
                        pos: "#004",
                        status: "Na fila",
                        color: "text-[#77aca2]",
                        bg: "bg-[#77aca2]/10",
                        cta: false,
                      },
                      {
                        name: "Marcos A.",
                        pos: "#005",
                        status: "Na fila",
                        color: "text-[#77aca2]",
                        bg: "bg-[#77aca2]/10",
                        cta: false,
                      },
                    ].map((row) => (
                      <div
                        key={row.pos}
                        className="flex items-center justify-between bg-[#031926]/40 rounded-lg px-3 py-2 border border-transparent hover:border-[#1a3d52]/60 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-bold text-[#77aca2]">
                            {row.pos}
                          </span>
                          <span className="text-xs text-[#8bb5b0]">
                            {row.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full ${row.bg} ${row.color}`}
                          >
                            {row.status}
                          </span>
                          {row.cta && (
                            <span className="text-[10px] bg-[#77aca2] text-[#031926] px-2 py-0.5 rounded font-bold">
                              Chamar
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Phone mockup — floating */}
            <div
              className="absolute right-0 md:-right-4 bottom-0 w-[120px] md:w-[152px]"
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
