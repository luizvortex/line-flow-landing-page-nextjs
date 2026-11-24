import Image from "next/image";

/**
 * Banner de respiro entre os benefícios e o passo a passo: a foto da quadra
 * de fundo, uma frase de cada lado e, no meio, a raquete do LineFlow num
 * cartão de vidro. No celular as frases ficam acima e abaixo da raquete.
 */

export function BannerQuadra({
  esquerda,
  direita,
}: {
  esquerda: string;
  direita: string;
}) {
  return (
    <section className="px-4 sm:px-6 py-10 md:py-16">
      <div className="relative max-w-6xl mx-auto overflow-hidden rounded-[28px] min-h-[520px] md:min-h-[440px] flex items-center justify-center">
        <Image
          src="/images/beach/quadra-banner-2.webp"
          alt="Quadra de beach tennis de areia vista do alto, com a rede na diagonal e gramado em volta"
          fill
          sizes="(max-width: 1200px) 100vw, 1152px"
          className="object-cover object-[82%_62%]"
        />
        {/* Leve escurecida para as frases brancas lerem bem sobre o gramado */}
        <div aria-hidden="true" className="absolute inset-0 bg-[#031926]/15" />

        <div className="relative w-full px-6 py-10 flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8 md:px-12">
          <p className="max-w-[10ch] text-center md:text-left md:mr-auto text-[26px] md:text-[32px] lg:text-[40px] font-black uppercase tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:flex-1">
            {esquerda}
          </p>

          {/* Raquete no cartão de vidro */}
          <div className="shrink-0 rounded-[22px] border border-white/50 bg-[#dff3ec]/55 backdrop-blur-[1.5px] shadow-[0_20px_50px_rgba(3,25,38,0.3)] px-7 py-6">
            <Image
              src="/images/beach/raquete-lineflow.webp"
              alt="Raquete de beach tennis preta com a marca LineFlow vazada"
              width={415}
              height={880}
              sizes="160px"
              className="w-[120px] md:w-[150px] h-auto drop-shadow-[0_14px_20px_rgba(0,0,0,0.45)]"
            />
          </div>

          <p className="max-w-[10ch] text-center md:text-right md:ml-auto text-[26px] md:text-[32px] lg:text-[40px] font-black uppercase tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:flex-1">
            {direita}
          </p>
        </div>
      </div>
    </section>
  );
}
