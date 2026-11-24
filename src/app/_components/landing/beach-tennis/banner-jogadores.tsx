import Image from "next/image";
import { ArrowRight, Zap } from "lucide-react";

const SIGNUP_URL = "https://lineflow.mpdev.pro.br/auth/cadastrar-empresa";

/**
 * Faixa de conversão do meio da página de beach tennis: texto e botão à
 * esquerda e os jogadores à direita, em pé na base do banner e "vazando" pela
 * borda de cima. No celular, os jogadores vêm acima do texto, também saindo
 * pela borda.
 */
export function BannerJogadores({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section id="equipe" className="px-4 sm:px-6 pt-36 pb-16 md:pt-40 md:pb-24">
      <div className="relative max-w-6xl mx-auto rounded-[28px] border border-lf-border-strong bg-gradient-to-br from-[var(--lf-band-from)] via-[var(--lf-band-via)] to-[var(--lf-band-to)] lg:min-h-[400px]">
        {/* O brilho fica num recorte próprio: o card não pode ter overflow
            escondido, senão corta as cabeças que passam da borda. */}
        <div aria-hidden="true" className="absolute inset-0 rounded-[28px] overflow-hidden pointer-events-none">
          <div className="absolute -left-32 -top-32 w-[520px] h-[520px] rounded-full bg-[radial-gradient(circle,rgba(119,172,162,0.22)_0%,transparent_65%)]" />
        </div>

        {/* Jogadores: no celular, no topo do card e saindo por cima dele; no
            desktop, à direita, com os pés na base. */}
        <div className="relative flex justify-center -mt-32 sm:-mt-36 lg:mt-0 lg:absolute lg:right-14 lg:bottom-0">
          <Image
            src="/images/beach/jogadores.webp"
            alt="Professor de beach tennis com a raquete no ombro e uma jogadora reservando a quadra pelo celular"
            width={829}
            height={1066}
            sizes="(max-width: 1024px) 300px, 420px"
            className="w-[240px] sm:w-[280px] lg:w-[420px] h-auto drop-shadow-[0_24px_30px_rgba(3,25,38,0.28)]"
          />
        </div>

        <div className="relative px-6 pt-6 pb-8 sm:px-12 md:pb-12 lg:py-16 lg:max-w-[480px]">
          <h2 className="text-[26px] md:text-[42px] font-bold tracking-tight leading-[1.1] text-lf-primary">
            {title}
          </h2>
          <p className="mt-3 md:mt-5 text-[15px] md:text-lg leading-relaxed text-lf-secondary">{subtitle}</p>

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
      </div>
    </section>
  );
}
