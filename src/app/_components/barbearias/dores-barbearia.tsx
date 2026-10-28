import {
  ArrowRight,
  CalendarX2,
  Calculator,
  UserMinus,
  Users,
  type LucideIcon,
} from "lucide-react";
import { EyebrowLabel } from "../landing/shared/eyebrow-label";
import { GlassCard } from "../landing/shared/glass-card";

/** Cada dor comum de barbearia e o que o LineFlow faz com ela. */
const pains: {
  icon: LucideIcon;
  pain: string;
  detail: string;
  fix: string;
}[] = [
  {
    icon: Users,
    pain: "Recepção lotada no sábado",
    detail: "O cliente chega, vê cinco na frente e vai embora.",
    fix: "Ele entra na fila pelo QR Code, sai para resolver a vida e o celular avisa quando estiver chegando a vez.",
  },
  {
    icon: CalendarX2,
    pain: "Agenda no caderno e no WhatsApp",
    detail: "Horário duplicado, cliente que esquece e cadeira vazia.",
    fix: "O cliente marca pelo app ou pelo WhatsApp, recebe lembrete antes do horário e entra na lista de espera se a agenda lotar.",
  },
  {
    icon: Calculator,
    pain: "Fechar comissão no fim do mês",
    detail: "Horas somando corte por corte de cada barbeiro.",
    fix: "A comissão sai por serviço, para cada barbeiro, junto do financeiro e das despesas da casa.",
  },
  {
    icon: UserMinus,
    pain: "Cliente que some depois do corte",
    detail: "Ele gostou, mas só lembra de voltar quando o cabelo já passou do ponto.",
    fix: "Lembrete de retorno no prazo de cada serviço, cartão fidelidade e indique e ganhe trazem ele de volta.",
  },
];

export function DoresBarbearia() {
  return (
    <section id="dores" className="bg-lf-card/30 py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <EyebrowLabel>O dia a dia da barbearia</EyebrowLabel>
        <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-lf-primary max-w-2xl">
          Os problemas de sempre, resolvidos no mesmo painel
        </h2>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {pains.map(({ icon: Icon, pain, detail, fix }) => (
            <GlassCard key={pain} as="article" className="p-7 flex flex-col">
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-lf-error/10 grid place-items-center shrink-0">
                  <Icon size={18} strokeWidth={1.5} className="text-lf-error" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-lf-primary">
                    {pain}
                  </h3>
                  <p className="text-sm text-lf-muted mt-1">{detail}</p>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-lf-border flex gap-3">
                <ArrowRight
                  size={16}
                  className="text-lf-accent shrink-0 mt-0.5"
                />
                <p className="text-sm text-lf-secondary leading-relaxed">
                  {fix}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
