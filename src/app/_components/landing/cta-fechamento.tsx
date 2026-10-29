import { ArrowRight, Zap } from "lucide-react";

const SIGNUP_URL = "https://lineflow.mpdev.pro.br/auth/cadastrar-empresa";

/**
 * Fechamento da página no formato do Spoke: posicionamento de um lado e o
 * botão do outro, no mesmo card verde-água da hero.
 */
export function CtaFechamento({
  title = "O sistema de atendimento para barbearias, salões e clínicas.",
}: {
  title?: string;
}) {
  return (
    <section id="comecar" className="px-4 sm:px-6 pt-8 pb-20 md:pb-28">
      <div className="lf-dark relative max-w-6xl mx-auto overflow-hidden rounded-[32px] bg-gradient-to-br from-[#c6e6df] via-[#9fcfc5] to-[#77aca2] px-7 py-12 sm:px-12 md:py-16">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #031926 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <h2 className="text-[32px] sm:text-[44px] font-bold tracking-tight leading-[1.08] text-lf-base max-w-2xl">
            {title}
          </h2>

          <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center gap-2 rounded-xl bg-lf-base text-lf-primary font-bold px-8 py-4 text-base shadow-[0_12px_32px_rgba(3,25,38,0.35)] hover:bg-[#0b2d42] hover:-translate-y-0.5 transition-all duration-200"
            >
              Criar conta grátis
              <ArrowRight size={17} strokeWidth={2.5} />
            </a>
            <p className="flex items-center gap-1.5 text-sm text-lf-base/70">
              <Zap size={14} className="fill-lf-base text-lf-base" />
              14 dias de Pro grátis · sem cartão de crédito
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
