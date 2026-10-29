import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import type { Plan } from "@/src/lib/plans";

const SIGNUP_URL = "https://lineflow.mpdev.pro.br/auth/cadastrar-empresa";

const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

/**
 * Planos resumidos para a página de anúncio: os quatro planos lado a lado,
 * compactos, com o Pro em destaque. Preços vêm de `plans.ts`; os
 * destaques de cada card são só o que diferencia o plano do anterior. No
 * celular o card em destaque sobe para o topo da lista.
 */
const HIGHLIGHTS: Record<string, { intro?: string; items: string[] }> = {
  free: {
    items: [
      "1 fila ativa e 15 entradas por dia",
      "Painel de TV e notificações push",
      "Financeiro e comissões",
      "14 dias com os recursos do Pro",
    ],
  },
  starter: {
    intro: "Tudo do Free, mais:",
    items: [
      "3 filas e 50 entradas por dia",
      "Dono + 1 operador",
      "Agendamento com horário marcado",
      "Cliente entra pelo WhatsApp",
    ],
  },
  pro: {
    intro: "Tudo do Starter, mais:",
    items: [
      "25 filas e dono + 10 operadores",
      "WhatsApp com número próprio",
      "Analytics e métricas",
      "Assistente de IA e marca própria",
    ],
  },
  "pro-plus": {
    intro: "Tudo do Pro, mais:",
    items: [
      "50 filas ativas",
      "Dono + 20 operadores",
      "IA que consulta e executa ações",
      "Posts sem limite e vídeos no perfil",
    ],
  },
};

const SHOWN = ["free", "starter", "pro", "pro-plus"];

function PlanCard({ plan }: { plan: Plan }) {
  const highlight = HIGHLIGHTS[plan.id];
  const featured = !!plan.popular;
  const annualMonthly = plan.annual !== null ? plan.annual / 12 : null;

  return (
    <article
      className={`relative flex flex-col rounded-[22px] p-6 ${
        featured
          ? "order-first md:order-none bg-gradient-to-br from-[#c6e6df] via-[#9fcfc5] to-[#77aca2] text-lf-base lg:-my-3 lg:py-9 shadow-[0_30px_60px_rgba(3,25,38,0.45)]"
          : "bg-lf-card border border-lf-border text-lf-primary"
      }`}
    >
      {featured && (
        <span className="absolute top-5 right-5 rounded-full bg-lf-base text-[#c6e6df] text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
          Mais escolhido
        </span>
      )}

      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <p className={`mt-1 text-[13px] leading-snug min-h-[34px] ${featured ? "text-lf-base/70" : "text-lf-secondary"}`}>
        {plan.desc}
      </p>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="font-mono text-[30px] font-bold tracking-tight leading-none whitespace-nowrap">
          {plan.monthly === 0 ? "R$ 0" : brl(plan.monthly)}
        </span>
        <span className={`text-sm ${featured ? "text-lf-base/60" : "text-lf-muted"}`}>/mês</span>
      </div>
      <p className={`mt-2 text-[11px] min-h-4 ${featured ? "text-lf-base/70" : "text-lf-muted"}`}>
        {annualMonthly !== null
          ? `ou ${brl(annualMonthly)}/mês no plano anual`
          : "Grátis para sempre"}
      </p>

      <ul className="mt-5 space-y-2.5 flex-1">
        {highlight.intro && (
          <li className={`text-[10.5px] font-semibold uppercase tracking-wide ${featured ? "text-lf-base/60" : "text-lf-muted"}`}>
            {highlight.intro}
          </li>
        )}
        {highlight.items.map((item) => (
          <li key={item} className="flex gap-2 text-[13.5px] leading-snug">
            <Check
              size={15}
              strokeWidth={2.5}
              className={`shrink-0 mt-0.5 ${featured ? "text-lf-base" : "text-lf-accent"}`}
            />
            <span className={featured ? "" : "text-lf-secondary"}>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={SIGNUP_URL}
        className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-xl py-3 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${
          featured
            ? "bg-lf-base text-lf-primary hover:bg-[#0b2d42] shadow-[0_12px_28px_rgba(3,25,38,0.35)]"
            : "border border-lf-border-strong text-lf-primary hover:border-lf-accent"
        }`}
      >
        {plan.monthly === 0 ? "Começar grátis" : `Assinar ${plan.name}`}
        <ArrowRight size={15} strokeWidth={2.5} />
      </a>
    </article>
  );
}

export function PlanosResumo({ plans }: { plans: Plan[] }) {
  const shown = SHOWN.map((id) => plans.find((p) => p.id === id)).filter(
    (p): p is Plan => !!p,
  );

  return (
    <section id="planos" className="px-4 sm:px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-[44px] font-bold tracking-tight leading-[1.1] text-lf-primary">
            Comece grátis. <span className="text-lf-accent">Cresça no seu ritmo.</span>
          </h2>
          <p className="mt-4 text-lg text-lf-secondary">
            Sem taxa de setup e sem fidelidade. Troque de plano quando quiser.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {shown.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        <p className="mt-10 flex items-center justify-center gap-2 text-sm text-lf-muted">
          <ShieldCheck size={16} className="text-lf-accent" />
          Comece sem cartão de crédito e cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
