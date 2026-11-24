import Image from "next/image";

/**
 * Banner de respiro entre os benefícios e o passo a passo: a foto da quadra
 * de fundo, uma frase de cada lado e, no meio, a raquete do LineFlow num
 * cartão de vidro. No celular as frases ficam acima e abaixo da raquete.
 */

/** Contorno da cabeça, quase redonda como nas raquetes de beach tennis (viewBox 220×420). */
const CABECA =
  "M110 10 C168 10 206 52 206 110 C206 160 176 200 134 214 L86 214 C44 200 14 160 14 110 C14 52 52 10 110 10 Z";

/** Furos da face em quincôncio, cobrindo a cabeça inteira (inclusive entre as letras). */
const FUROS: [number, number][] = [];
for (let linha = 0; linha < 14; linha++) {
  const y = 28 + linha * 13;
  const desloca = linha % 2 ? 6.5 : 0;
  for (let x = 30 + desloca; x <= 190; x += 13) {
    const dx = (x - 110) / 86;
    const dy = (y - 112) / 92;
    // Fora das letras (margem de 4): os furos ficam em volta e entre as
    // linhas, sem serrilhar a marca.
    const naLinha1 = y > 74 && y < 122 && x > 46 && x < 174;
    const naLinha2 = y > 124 && y < 172 && x > 40 && x < 180;
    if (dx * dx + dy * dy < 0.82 && !naLinha1 && !naLinha2) FUROS.push([x, y]);
  }
}

/**
 * Raquete de beach tennis no estilo chapado da referência: cabeça preta fosca
 * com a marca e os furos vazados (o cartão de vidro aparece por eles),
 * garganta fina em V com filetes claros e cabo fino.
 */
function RaqueteLineFlow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 420" className={className} role="img" aria-label="Raquete de beach tennis com a marca LineFlow vazada">
      <defs>
        <mask id="rq-vazado" maskUnits="userSpaceOnUse" x="0" y="0" width="220" height="420">
          <rect width="220" height="420" fill="#fff" />
          {FUROS.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="2.4" fill="#000" />
          ))}
          <g
            fill="#000"
            fontFamily="var(--font-geist-sans), system-ui, sans-serif"
            fontWeight="900"
            textAnchor="middle"
            style={{ letterSpacing: "-1px" }}
          >
            <text x="110" y="116" fontSize="50">
              LINE
            </text>
            <text x="110" y="166" fontSize="50">
              FLOW
            </text>
          </g>
        </mask>
      </defs>

      {/* Garganta fina em V, com o vão no meio e filetes claros */}
      <path d="M90 206 L130 206 L117 300 L103 300 Z M101 220 L119 220 L110 282 Z" fill="#0c0d0e" fillRule="evenodd" />
      <path d="M100 216 L108 286" stroke="#cfeee3" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M120 216 L112 286" stroke="#cfeee3" strokeWidth="1.6" strokeLinecap="round" />

      {/* Cabeça preta fosca com a marca e os furos vazados */}
      <path d={CABECA} fill="#0c0d0e" stroke="#1f2224" strokeWidth="3" mask="url(#rq-vazado)" />

      {/* Cabo fino */}
      <rect x="103" y="296" width="14" height="108" rx="5" fill="#0c0d0e" />
      {Array.from({ length: 9 }, (_, i) => (
        <path key={i} d={`M103 ${308 + i * 10} L117 ${303 + i * 10}`} stroke="rgba(255,255,255,0.08)" strokeWidth="1.6" />
      ))}
      <rect x="101" y="400" width="18" height="10" rx="4" fill="#0c0d0e" />
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
            <RaqueteLineFlow className="w-[120px] md:w-[150px] h-auto drop-shadow-[0_14px_20px_rgba(0,0,0,0.45)]" />
          </div>

          <p className="max-w-[10ch] text-center md:text-right md:ml-auto text-[26px] md:text-[32px] lg:text-[40px] font-black uppercase tracking-tight leading-[0.95] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)] md:flex-1">
            {direita}
          </p>
        </div>
      </div>
    </section>
  );
}
