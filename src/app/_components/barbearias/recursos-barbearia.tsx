import {
  BarChart2,
  Gift,
  HandCoins,
  MessageCircle,
  Package,
  Repeat,
  Scissors,
  Tv,
  type LucideIcon,
} from "lucide-react";
import { EyebrowLabel } from "../landing/shared/eyebrow-label";
import { GlassCard } from "../landing/shared/glass-card";

const features: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Scissors,
    title: "Uma fila para cada barbeiro",
    desc: "Cada fila tem seu QR Code, seu barbeiro e sua espera estimada. O cliente escolhe com quem quer cortar.",
  },
  {
    icon: HandCoins,
    title: "Comissão por serviço",
    desc: "Defina a comissão de cada serviço e acompanhe quanto cada barbeiro tem a receber, com controle de repasses.",
  },
  {
    icon: Repeat,
    title: "Lembrete de retorno",
    desc: "Corte a cada 30 dias, barba a cada 15: o cliente é lembrado no prazo do serviço que fez.",
  },
  {
    icon: Gift,
    title: "Fidelidade e indicação",
    desc: "Cada corte concluído vira um selo no cartão. Quem indica um amigo também ganha recompensa.",
  },
  {
    icon: Package,
    title: "Venda de produtos",
    desc: "Pomada, óleo e shampoo vendidos no balcão, com baixa automática no estoque.",
  },
  {
    icon: Tv,
    title: "Painel de TV na espera",
    desc: "A senha chamada aparece na TV da barbearia, e quem está esperando sabe quando é a vez dele.",
  },
  {
    icon: MessageCircle,
    title: "Relatório semanal no WhatsApp",
    desc: "Atendimentos, agenda e desempenho da equipe chegam no seu celular, no dia e hora que você escolher.",
  },
  {
    icon: BarChart2,
    title: "Horário de pico e desistência",
    desc: "Veja os horários de maior movimento, a espera média e a receita por serviço para escalar a equipe.",
  },
];

export function RecursosBarbearia() {
  return (
    <section id="recursos" className="bg-lf-base py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <EyebrowLabel>Feito para barbearia</EyebrowLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-lf-primary max-w-2xl">
          Tudo o que a sua barbearia usa no dia a dia
        </h2>
        <p className="mt-4 text-lf-secondary text-lg max-w-2xl">
          Do primeiro corte da manhã ao fechamento do caixa, sem planilha e
          sem caderno.
        </p>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <GlassCard key={title} as="article" className="p-6">
              <span className="w-10 h-10 rounded-lg bg-lf-accent/15 grid place-items-center">
                <Icon size={18} strokeWidth={1.5} className="text-lf-accent" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-lf-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm text-lf-secondary leading-relaxed">
                {desc}
              </p>
            </GlassCard>
          ))}
        </div>

        <p className="mt-8 text-xs text-lf-muted">
          Alguns recursos dependem do plano — veja a comparação em{" "}
          <a
            href="#planos"
            className="text-lf-accent hover:text-lf-accent-hover underline underline-offset-2 transition-colors"
          >
            Planos
          </a>
          .
        </p>
      </div>
    </section>
  );
}
