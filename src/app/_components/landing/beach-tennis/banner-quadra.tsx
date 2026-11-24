import Image from "next/image";

/**
 * Banner de respiro entre os benefícios e o passo a passo: a foto da quadra
 * de fundo, uma frase de cada lado e, no meio, a raquete do LineFlow num
 * cartão de vidro. No celular as frases ficam acima e abaixo da raquete.
 */

/** Furinhos da face, fora da faixa do texto. */
const FUROS: [number, number][] = [];
for (let linha = 0; linha < 13; linha++) {
  const y = 32 + linha * 15;
  if (y > 74 && y < 184) continue; // faixa do "LINE / FLOW"
  const desloca = linha % 2 ? 7.5 : 0;
  for (let x = 22 + desloca; x <= 178; x += 15) {
    const dx = (x - 100) / 84;
    const dy = (y - 116) / 104;
    if (dx * dx + dy * dy < 0.8) FUROS.push([x, y]);
  }
}

/** Raquete de beach tennis preta com "LINE FLOW" na face, em SVG. */
function RaqueteLineFlow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 400" className={className} role="img" aria-label="Raquete de beach tennis com a marca LineFlow">
      <defs>
        <radialGradient id="rq-face" cx="38%" cy="30%" r="80%">
          <stop offset="0" stopColor="#2b2f31" />
          <stop offset="0.55" stopColor="#141617" />
          <stop offset="1" stopColor="#070808" />
        </radialGradient>
        <linearGradient id="rq-cabo" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0c0d0e" />
          <stop offset="0.5" stopColor="#26292b" />
          <stop offset="1" stopColor="#0c0d0e" />
        </linearGradient>
        {/* "LINE FLOW" vazado: a face some onde estão as letras */}
        <mask id="rq-vazado" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="400">
          <rect width="200" height="400" fill="#fff" />
          <g
            fill="#000"
            fontFamily="var(--font-geist-sans), system-ui, sans-serif"
            fontWeight="900"
            textAnchor="middle"
            style={{ letterSpacing: "-0.5px" }}
          >
            <text x="100" y="124" fontSize="52">
              LINE
            </text>
            <text x="100" y="172" fontSize="52">
              FLOW
            </text>
          </g>
        </mask>
        <pattern id="rq-trama" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="3" height="6" fill="rgba(255,255,255,0.025)" />
        </pattern>
      </defs>

      {/* Garganta: dois braços em triângulo, com o vão no meio */}
      <path
        d="M78 214 L122 214 L109 276 L91 276 Z M92 226 L108 226 L100 262 Z"
        fill="#111314"
        fillRule="evenodd"
      />
      <path d="M86 222 L95 268" stroke="#b9efdc" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      <path d="M114 222 L105 268" stroke="#b9efdc" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />

      {/* Cabeça (com a marca vazada) */}
      <g mask="url(#rq-vazado)">
      <path
        d="M100 6 C162 6 194 56 194 114 C194 170 160 214 120 226 L80 226 C40 214 6 170 6 114 C6 56 38 6 100 6 Z"
        fill="url(#rq-face)"
        stroke="#33383b"
        strokeWidth="3"
      />
      <path
        d="M100 6 C162 6 194 56 194 114 C194 170 160 214 120 226 L80 226 C40 214 6 170 6 114 C6 56 38 6 100 6 Z"
        fill="url(#rq-trama)"
      />
      {/* Brilho da borda */}
      <path d="M40 40 C58 20 80 12 100 11" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {FUROS.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3.1" fill="#020303" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
      ))}
      </g>

      {/* Cabo com grip */}
      <rect x="89" y="272" width="22" height="116" rx="7" fill="url(#rq-cabo)" />
      {Array.from({ length: 9 }, (_, i) => (
        <path key={i} d={`M89 ${284 + i * 11} L111 ${278 + i * 11}`} stroke="rgba(255,255,255,0.09)" strokeWidth="2" />
      ))}
      <rect x="87" y="382" width="26" height="12" rx="5" fill="#77aca2" />
    </svg>
  );
}

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
          src="/images/beach/quadra-banner.webp"
          alt="Quadra de beach tennis de areia vista do alto, com a rede na diagonal e gramado em volta"
          fill
          sizes="(max-width: 1200px) 100vw, 1152px"
          className="object-cover object-[70%_50%]"
        />
        {/* Leve escurecida para as frases brancas lerem bem sobre o gramado */}
        <div aria-hidden="true" className="absolute inset-0 bg-[#031926]/15" />

        <div className="relative w-full px-6 py-10 flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8 md:px-12">
          <p className="max-w-[10ch] text-center md:text-left md:mr-auto text-[26px] md:text-[32px] lg:text-[40px] font-black uppercase tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:flex-1">
            {esquerda}
          </p>

          {/* Raquete no cartão de vidro */}
          <div className="shrink-0 rounded-[22px] border border-white/35 bg-white/10 backdrop-blur-[3px] shadow-[0_20px_50px_rgba(3,25,38,0.3)] px-7 py-6">
            <RaqueteLineFlow className="w-[110px] md:w-[130px] h-auto drop-shadow-[0_14px_20px_rgba(0,0,0,0.45)]" />
          </div>

          <p className="max-w-[10ch] text-center md:text-right md:ml-auto text-[26px] md:text-[32px] lg:text-[40px] font-black uppercase tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:flex-1">
            {direita}
          </p>
        </div>
      </div>
    </section>
  );
}
