import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import type { Plan } from "@/src/lib/plans";

const SIGNUP_URL = "https://lineflow.mpdev.pro.br/auth/cadastrar-empresa";

const brl = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

/**
 * Planos resumidos para a página de anúncio: três cards com o Pro em
 * destaque e o Pro Plus numa faixa à parte. Preços vêm de `plans.ts`; os
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
};

const SHOWN = ["free", "starter", "pro"];

function PlanCard({ plan }: { plan: Plan }) {
  const highlight = HIGHLIGHTS[plan.id];
  const featured = !!plan.popular;
  const annualMonthly = plan.annual !== null ? plan.annual / 12 : null;

  return (
    <article
      className={`relative flex flex-col rounded-[24px] p-7 md:p-8 ${
        featured
          ? "order-first md:order-none bg-gradient-to-br from-[#c6e6df] via-[#9fcfc5] to-[#77aca2] text-lf-base md:-my-4 md:py-11 shadow-[0_30px_60px_rgba(3,25,38,0.45)]"
          : "bg-lf-card border border-lf-border text-lf-primary"
      }`}
    >
      {featured && (
        <span className="absolute top-5 right-5 rounded-full bg-lf-base text-[#c6e6df] text-[10px] font-bold uppercase tracking-widest px-3 py-1">
          Mais escolhido
        </span>
      )}

      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <p className={`mt-1 text-sm leading-snug ${featured ? "text-lf-base/70" : "text-lf-secondary"}`}>
        {plan.desc}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="font-mono text-[40px] font-bold tracking-tight leading-none">
          {plan.monthly === 0 ? "R$ 0" : brl(plan.monthly)}
        </span>
        <span className={`text-sm ${featured ? "text-lf-base/60" : "text-lf-muted"}`}>/mês</span>
      </div>
      <p className={`mt-2 text-xs min-h-4 ${featured ? "text-lf-base/70" : "text-lf-muted"}`}>
        {annualMonthly !== null
          ? `ou ${brl(annualMonthly)}/mês no plano anual`
          : "Grátis para sempre"}
      </p>

      <ul className="mt-7 space-y-3 flex-1">
        {highlight.intro && (
          <li className={`text-xs font-semibold uppercase tracking-wide ${featured ? "text-lf-base/60" : "text-lf-muted"}`}>
            {highlight.intro}
          </li>
        )}
        {highlight.items.map((item) => (
          <li key={item} className="flex gap-2.5 text-[15px] leading-snug">
            <Check
              size={17}
              strokeWidth={2.5}
              className={`shrink-0 mt-0.5 ${featured ? "text-lf-base" : "text-lf-accent"}`}
            />
            <span className={featured ? "" : "text-lf-secondary"}>{item}</span>
          </li>
        ))}
      </ul>

      <a
        href={SIGNUP_URL}
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5 ${
          featured
            ? "bg-lf-base text-lf-primary hover:bg-[#0b2d42] shadow-[0_12px_28px_rgba(3,25,38,0.35)]"
            : "border border-lf-border-strong text-lf-primary hover:border-lf-accent"
        }`}
      >
        {plan.monthly === 0 ? "Começar grátis" : `Começar com o ${plan.name}`}
        <ArrowRight size={16} strokeWidth={2.5} />
      </a>
    </article>
  );
}

export function PlanosResumo({ plans }: { plans: Plan[] }) {
  const shown = SHOWN.map((id) => plans.find((p) => p.id === id)).filter(
    (p): p is Plan => !!p,
  );
  const proPlus = plans.find((p) => p.id === "pro-plus");

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

        <div className="mt-14 grid md:grid-cols-3 gap-5 md:gap-4 items-stretch">
          {shown.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>

        {proPlus && (
          <div className="mt-10 md:mt-12 flex flex-col md:flex-row md:items-center justify-between gap-4 rounded-[20px] border border-lf-border bg-lf-card/60 px-7 py-5">
            <p className="text-[15px] text-lf-secondary">
              <span className="font-semibold text-lf-primary">Operação maior?</span>{" "}
              O {proPlus.name} tem 50 filas, dono + 20 operadores e IA que executa
              ações, por {brl(proPlus.monthly)}/mês.
            </p>
            <a
              href={SIGNUP_URL}
              className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-lf-accent hover:text-lf-accent-hover transition-colors"
            >
              Começar com o {proPlus.name}
              <ArrowRight size={15} />
            </a>
          </div>
        )}

        <p className="mt-8 flex items-center justify-center gap-2 text-sm text-lf-muted">
          <ShieldCheck size={16} className="text-lf-accent" />
          Comece sem cartão de crédito e cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
