import { ArrowDown, ArrowRight, Sparkles, Zap } from "lucide-react";
import { PhoneFrame } from "./shared/phone-frame";
import { FeedPreview } from "./social";
import { WaitingScreen } from "./app-demo";

const SIGNUP_URL = "https://lineflow.mpdev.pro.br/auth/cadastrar-empresa";

/**
 * Hero em card colorido, com os celulares do app do cliente saindo pela
 * borda de baixo e uma seta desenhada à mão levando o olho até o botão.
 * Pensada para tráfego de anúncio: uma promessa, um botão.
 */
/**
 * O PhoneFrame tem 300×624px. `scale` não encolhe o espaço que o elemento
 * ocupa no layout, então a caixa de fora já tem o tamanho reduzido e o
 * celular escala a partir do canto de cima.
 */
function ScaledPhone({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative shrink-0 w-[180px] h-[374px] sm:w-[216px] sm:h-[449px] lg:w-[234px] lg:h-[487px] drop-shadow-[0_30px_50px_rgba(3,25,38,0.45)] ${className}`}
    >
      <div className="absolute top-0 left-0 origin-top-left scale-[0.6] sm:scale-[0.72] lg:scale-[0.78]">
        {children}
      </div>
    </div>
  );
}

export function HeroCard() {
  return (
    <section
      id="main-content"
      className="relative px-4 sm:px-6 pt-4 pb-[210px] sm:pb-[240px] lg:pb-32"
    >
      <div className="relative max-w-6xl mx-auto">
        {/* Card colorido */}
        <div className="relative rounded-[32px] bg-gradient-to-br from-[#c6e6df] via-[#9fcfc5] to-[#77aca2] px-7 py-12 sm:px-12 md:py-16 lg:min-h-[560px] overflow-visible">
          {/* Textura sutil de pontos, como no hero antigo */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[32px] opacity-[0.12] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #031926 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="relative max-w-[520px] animate-fade-up">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-lf-base text-[#c6e6df] text-xs font-semibold px-3 py-1.5">
              <Sparkles size={12} />
              Novo: seu negócio no feed do cliente
            </span>

            <h1 className="mt-6 text-[42px] sm:text-[56px] lg:text-[64px] font-bold tracking-tight leading-[1.02] text-lf-base">
              Todo o seu atendimento, em um só fluxo.
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-lf-base/75 max-w-[460px]">
              Fila, agenda, fidelidade e financeiro no mesmo painel. O cliente
              entra pelo QR Code e acompanha a vez no celular, sem baixar app.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 rounded-xl bg-lf-base text-lf-primary font-bold px-7 py-4 text-base shadow-[0_12px_32px_rgba(3,25,38,0.35)] hover:bg-[#0b2d42] hover:-translate-y-0.5 transition-all duration-200"
              >
                Criar conta grátis
                <ArrowRight size={17} strokeWidth={2.5} />
              </a>
            </div>

            <p className="mt-6 flex items-center gap-1.5 text-sm text-lf-base/70">
              <Zap size={14} className="fill-lf-base text-lf-base" />
              14 dias de Pro grátis · sem cartão de crédito
            </p>

            <a
              href="#como-funciona"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-lf-base/80 hover:text-lf-base transition-colors"
            >
              Ver como funciona
              <ArrowDown size={15} />
            </a>
          </div>

          {/* Seta desenhada à mão: dos celulares até o botão */}
<svg
            aria-hidden="true"
            viewBox="0 0 360 170"
            fill="none"
            className="hidden lg:block absolute left-[385px] top-[330px] w-[330px] text-lf-base"
          >
            <path
              d="M352 4 C 335 60, 300 92, 252 100 C 206 108, 200 68, 226 60 C 256 51, 266 112, 200 140 C 150 161, 75 160, 14 152"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
            <path
              d="M30 139 L 12 152 L 31 163"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Celulares: no celular ficam abaixo do texto e vazam pela borda
              de baixo; no desktop vão para a direita do card. */}
          <div
            className="relative mt-10 -mb-[170px] sm:-mb-[200px] flex justify-center lg:absolute lg:mt-0 lg:mb-0 lg:right-8 lg:top-[230px] animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            <ScaledPhone className="-rotate-[5deg] mt-8 -mr-10 sm:-mr-8 z-0">
              <FeedPreview />
            </ScaledPhone>
            <ScaledPhone className="rotate-[4deg] z-10">
              <PhoneFrame>
                <WaitingScreen />
              </PhoneFrame>
            </ScaledPhone>
          </div>
        </div>
      </div>
    </section>
  );
}
