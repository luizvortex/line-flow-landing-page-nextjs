import { ArrowRight, Zap } from "lucide-react";
import { DashboardMockup } from "./shared/dashboard-mockup";

const SIGNUP_URL = "https://lineflow.mpdev.pro.br/auth/cadastrar-empresa";

/**
 * Faixa de conversão do meio da página (o "Part of a courier team?" do
 * Spoke): fala com o dono que tem equipe e mostra o painel saindo pela borda
 * do banner, com o mesmo botão de sempre.
 */
export function EquipeCta({
  title = "Tem uma equipe de profissionais?",
}: {
  title?: string;
}) {
  return (
    <section id="equipe" className="px-4 sm:px-6 py-16 md:py-24">
      <div className="relative max-w-6xl mx-auto rounded-[28px] overflow-hidden border border-lf-border-strong bg-gradient-to-br from-[#0f3450] via-[#0b2d42] to-lf-card lg:min-h-[480px]">
        {/* Brilho verde-água atrás do texto */}
        <div
          aria-hidden="true"
          className="absolute -left-32 -top-32 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(119,172,162,0.22)_0%,transparent_65%)]"
        />

        <div className="relative px-6 pt-8 sm:px-12 md:pt-16 lg:pb-16 lg:max-w-[440px]">
          <h2 className="text-[26px] md:text-[42px] font-bold tracking-tight leading-[1.1] text-lf-primary">
            {title}
          </h2>
          <p className="mt-3 md:mt-5 text-[15px] md:text-lg leading-relaxed text-lf-secondary">
            Acompanhe a fila de cada um, as comissões e o caixa do dia em
            tempo real, de qualquer lugar.
          </p>

          <a
            href={SIGNUP_URL}
            className="mt-6 md:mt-9 inline-flex items-center gap-2 rounded-xl bg-lf-accent hover:bg-lf-accent-hover text-lf-base font-bold px-6 py-3 md:px-7 md:py-4 text-[15px] md:text-base shadow-[0_12px_32px_rgba(119,172,162,0.3)] hover:-translate-y-0.5 transition-all duration-200"
          >
            Criar conta grátis
            <ArrowRight size={17} strokeWidth={2.5} />
          </a>
          <p className="mt-3 md:mt-5 flex items-center gap-1.5 text-xs md:text-sm text-lf-muted">
            <Zap size={14} className="fill-lf-warning text-lf-warning" />
            14 dias de Pro grátis · sem cartão
          </p>
        </div>

        {/* Painel: no celular, uma miniatura embaixo do texto cortada pela
            borda de baixo; no desktop, à direita, cortado pela borda do
            banner. O mockup tem tamanho fixo e só muda de escala. */}
        <div className="relative mt-7 ml-6 sm:ml-12 h-[190px] sm:h-[260px] lg:absolute lg:m-0 lg:left-[47%] lg:top-14 lg:w-[823px] lg:h-[588px]">
          <div className="absolute top-0 left-0 origin-top-left scale-[0.42] sm:scale-[0.55] lg:scale-[0.84] shadow-[0_40px_80px_rgba(3,25,38,0.6)] rounded-2xl">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
