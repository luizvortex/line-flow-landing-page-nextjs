import { Boxes, HandCoins, MessageCircle, Receipt, Users } from "lucide-react";
import { GlassCard } from "./shared/glass-card";
import { EyebrowLabel } from "./shared/eyebrow-label";

const items = [
  {
    icon: Receipt,
    title: "Financeiro e despesas",
    desc: "Veja entradas, despesas e o resumo do período sem planilha paralela.",
  },
  {
    icon: HandCoins,
    title: "Comissões da equipe",
    desc: "A comissão de cada operador é calculada por serviço, com controle de repasses.",
  },
  {
    icon: Boxes,
    title: "Vendas e estoque",
    desc: "Venda produtos e serviços no balcão, e o estoque baixa sozinho.",
  },
  {
    icon: Users,
    title: "Clientes e histórico",
    desc: "Quem é o cliente, quando veio e o que consumiu, tudo no cadastro.",
  },
];

export function Gestao() {
  return (
    <section id="gestao" className="bg-[#031926] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <EyebrowLabel>Gestão do negócio</EyebrowLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#e8f2f1] max-w-2xl">
          Do balcão ao caixa, tudo no mesmo painel
        </h2>
        <p className="mt-4 text-[#8bb5b0] max-w-xl leading-relaxed">
          O que acontece na fila vira número no financeiro, e o resumo da
          semana chega até você.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map(({ icon: Icon, title, desc }) => (
              <GlassCard key={title} className="p-7">
                <Icon size={18} strokeWidth={1.5} className="text-[#77aca2]" />
                <h3 className="text-base font-semibold text-[#e8f2f1] mt-3">
                  {title}
                </h3>
                <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2">
                  {desc}
                </p>
              </GlassCard>
            ))}
          </div>

          {/* Relatório semanal */}
          <GlassCard className="md:col-span-5 p-8">
            <div className="flex items-center gap-2 text-[#77aca2]">
              <MessageCircle size={16} strokeWidth={1.5} />
              <span className="text-[11px] uppercase tracking-[0.10em] font-medium">
                Relatório semanal
              </span>
            </div>
            <h3 className="text-xl font-semibold text-[#e8f2f1] mt-2">
              O resumo da semana no seu WhatsApp
            </h3>
            <p className="text-[#8bb5b0] text-sm leading-relaxed mt-2">
              Você escolhe o dia e a hora, e quem recebe: o dono, a equipe ou
              outros números.
            </p>
            <div className="mt-6 bg-[#031926] rounded-xl p-4 border border-[#1a3d52]">
              <p className="text-[10px] text-[#4d7a80] mb-2">
                Domingo · 20:00
              </p>
              <div className="bg-[#072233] rounded-lg rounded-tl-none p-3 text-xs text-[#8bb5b0] leading-relaxed">
                <p className="text-[#e8f2f1] font-semibold mb-1">
                  Resumo da semana
                </p>
                Atendimentos, agenda e desempenho da sua equipe, direto no
                celular.
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
