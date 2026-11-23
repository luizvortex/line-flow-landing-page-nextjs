import Image from "next/image";

/**
 * Peças dos cards de benefícios, no modelo do Spoke: os largos são uma foto
 * de cenário com um pedaço real da interface flutuando por cima; os estreitos
 * são claros, com a interface desenhada limpa. O texto fica sempre embaixo à
 * esquerda e nenhum card tem botão próprio. Usadas na home e nas páginas de
 * nicho (barbearias, beach tennis).
 */

/** Fundo dos cards claros (o "azul-clarinho" do Spoke, no verde da marca). */
const LIGHT = "bg-[#dcefea]";

export function CardTitle({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <h3
      className={`relative text-[22px] md:text-[24px] font-semibold tracking-tight leading-[1.15] max-w-[320px] ${
        light ? "text-lf-base" : "text-white"
      }`}
    >
      {children}
    </h3>
  );
}

/** Card largo: foto de cenário, degradê para o texto e a interface por cima. */
export function PhotoCard({
  src,
  alt,
  title,
  overlay,
}: {
  src: string;
  alt: string;
  title: string;
  overlay: React.ReactNode;
}) {
  return (
    <article className="relative min-h-[420px] md:min-h-[360px] rounded-[24px] overflow-hidden flex flex-col justify-end p-7 md:p-8">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 760px"
        className="object-cover"
        unoptimized={src.endsWith(".svg")}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent"
      />
      <div className="absolute right-5 top-5 md:right-8 md:top-8 w-[230px] md:w-[260px]">
        {overlay}
      </div>
      <CardTitle>{title}</CardTitle>
    </article>
  );
}

/** Card estreito e claro: a interface limpa em cima, o texto escuro embaixo. */
export function LightCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article
      className={`lf-dark ${LIGHT} min-h-[340px] md:min-h-[360px] rounded-[24px] overflow-hidden flex flex-col justify-between p-7 md:p-8`}
    >
      <div className="flex-1 flex items-center justify-center pb-6">{children}</div>
      <CardTitle light>{title}</CardTitle>
    </article>
  );
}

/** Pedaço de interface flutuando sobre a foto, no visual escuro do app. */
export function UiCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="lf-app rounded-2xl border border-lf-border bg-lf-card/95 backdrop-blur p-4 shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
      {children}
    </div>
  );
}

