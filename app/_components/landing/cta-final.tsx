import { Sparkles } from "lucide-react";
import { GradientDot } from "./shared/gradient-dot";
import { EyebrowLabel } from "./shared/eyebrow-label";
import { GlassCard } from "./shared/glass-card";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36 px-6">
      <GradientDot
        size={1000}
        color="#77aca2"
        opacity={0.07}
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <GradientDot
        size={600}
        color="#5d9990"
        opacity={0.06}
        className="bottom-0 left-1/2 -translate-x-1/2"
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <EyebrowLabel icon={<Sparkles size={12} strokeWidth={1.5} />}>
          Comece hoje mesmo
        </EyebrowLabel>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-[#e8f2f1] leading-tight">
          Sua fila mais inteligente
          <br />
          começa com um{" "}
          <span className="text-[#77aca2]">QR Code.</span>
        </h2>

        <p className="mt-6 text-[#8bb5b0] text-lg leading-relaxed">
          Configuração em menos de 3 minutos. Sem cartão de crédito.
          Sem compromisso. Só você e sua primeira fila digital.
        </p>

        {/* CTA cards */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <GlassCard className="p-6 text-left flex-1 max-w-xs mx-auto sm:mx-0 cursor-pointer group hover:border-[#77aca2]">
            <EyebrowLabel>Plano Free</EyebrowLabel>
            <h3 className="text-[#e8f2f1] font-semibold mt-2 group-hover:text-[#77aca2] transition-colors">
              Criar conta grátis
            </h3>
            <p className="text-[#8bb5b0] text-sm mt-2">
              Sem cartão · 1 fila · 30 entradas/dia
            </p>
            <a
              href="#"
              className="mt-4 block text-center border border-[#77aca2] text-[#77aca2] hover:bg-[#77aca2] hover:text-[#031926] py-2.5 rounded-lg text-sm font-semibold transition-all duration-150"
            >
              Começar agora →
            </a>
          </GlassCard>

          <GlassCard className="p-6 text-left flex-1 max-w-xs mx-auto sm:mx-0 bg-[rgba(119,172,162,0.08)] border-[#77aca2]/30">
            <EyebrowLabel>Ao vivo</EyebrowLabel>
            <h3 className="text-[#e8f2f1] font-semibold mt-2">
              Ver demo interativo
            </h3>
            <p className="text-[#8bb5b0] text-sm mt-2">
              Experimente sem cadastro · 2 minutos
            </p>
            <a
              href="#"
              className="mt-4 block text-center bg-[#77aca2] hover:bg-[#5d9990] text-[#031926] font-bold py-2.5 rounded-lg text-sm transition-all duration-150"
            >
              Abrir demo →
            </a>
          </GlassCard>
        </div>

        <p className="mt-10 text-[#4d7a80] text-xs">
          ★★★★★ Mais de 300 negócios já processaram 2 milhões de atendimentos.
        </p>
      </div>
    </section>
  );
}
