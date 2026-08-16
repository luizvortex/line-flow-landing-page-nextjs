/**
 * Planos da landing page — dados estáticos.
 *
 * Fonte da verdade hoje: a tabela de planos hospedada na Coolify, transcrita
 * manualmente aqui. Quando a landing passar a ler da tabela de assinatura,
 * basta trocar o import em `src/app/page.tsx` por uma consulta que devolva
 * `Plan[]` — o componente `<Planos />` não muda.
 */

export interface Feature {
  text: string;
  included: boolean;
}

export interface Plan {
  id: string;
  name: string;
  /** Preço por mês na cobrança mensal, em reais. */
  monthly: number;
  /** Total cobrado de uma vez na cobrança anual. `null` = plano sem opção anual. */
  annual: number | null;
  desc: string;
  /** Selo curto exibido abaixo do preço (ex.: período de teste). */
  note?: string;
  cta: string;
  style: "outline" | "accent" | "primary";
  popular?: boolean;
  features: Feature[];
}

export const plans: Plan[] = [
  {
    id: "free",
    name: "Free",
    monthly: 0,
    annual: null,
    desc: "Para colocar a primeira fila no ar e sentir como funciona.",
    note: "14 dias com os recursos do Pro",
    cta: "Começar grátis",
    style: "outline",
    features: [
      { text: "1 fila ativa", included: true },
      { text: "15 entradas por dia", included: true },
      { text: "Somente o dono (sem operadores)", included: true },
      { text: "Painel de TV e notificações push", included: true },
      { text: "Financeiro e comissões", included: true },
      { text: "Cliente entra pelo WhatsApp", included: false },
      { text: "Agendamento por horário marcado", included: false },
      { text: "WhatsApp com número próprio", included: false },
      { text: "Analytics e métricas", included: false },
      { text: "Assistente de IA", included: false },
      { text: "White-label com sua marca", included: false },
      { text: "Chat de suporte", included: false },
    ],
  },
  {
    id: "starter",
    name: "Starter",
    monthly: 49.9,
    annual: 449.9,
    desc: "Para quem já atende todo dia e precisa organizar a espera.",
    cta: "Assinar Starter",
    style: "accent",
    features: [
      { text: "3 filas ativas", included: true },
      { text: "50 entradas por dia", included: true },
      { text: "Dono + 1 operador", included: true },
      { text: "Painel de TV e notificações push", included: true },
      { text: "Financeiro e comissões", included: true },
      { text: "Cliente entra pelo WhatsApp", included: true },
      { text: "Agendamento por horário marcado", included: true },
      { text: "Chat de suporte (limitado)", included: true },
      { text: "WhatsApp com número próprio", included: false },
      { text: "Analytics e métricas", included: false },
      { text: "Assistente de IA", included: false },
      { text: "White-label com sua marca", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    monthly: 99.9,
    annual: 899.9,
    desc: "O completo: equipe, marca própria e dados para decidir.",
    cta: "Assinar Pro",
    style: "primary",
    popular: true,
    features: [
      { text: "25 filas ativas", included: true },
      { text: "100.000 entradas por dia", included: true },
      { text: "Dono + 10 operadores", included: true },
      { text: "Painel de TV e notificações push", included: true },
      { text: "Financeiro e comissões", included: true },
      { text: "Cliente entra pelo WhatsApp", included: true },
      { text: "Agendamento por horário marcado", included: true },
      { text: "WhatsApp com número próprio", included: true },
      { text: "Analytics e métricas", included: true },
      { text: "Assistente de IA (consulta)", included: true },
      { text: "White-label com sua marca", included: true },
      { text: "Chat de suporte", included: true },
    ],
  },
  {
    id: "pro-plus",
    name: "Pro Plus",
    monthly: 299.9,
    annual: 3238.9,
    desc: "Para operações maiores, com equipe grande e muitas filas.",
    cta: "Assinar Pro Plus",
    style: "outline",
    features: [
      { text: "50 filas ativas", included: true },
      { text: "100.000 entradas por dia", included: true },
      { text: "Dono + 20 operadores", included: true },
      { text: "Painel de TV e notificações push", included: true },
      { text: "Financeiro e comissões", included: true },
      { text: "Cliente entra pelo WhatsApp", included: true },
      { text: "Agendamento por horário marcado", included: true },
      { text: "WhatsApp com número próprio", included: true },
      { text: "Analytics e métricas", included: true },
      { text: "Assistente de IA (consulta e ações)", included: true },
      { text: "White-label com sua marca", included: true },
      { text: "Chat de suporte", included: true },
    ],
  },
];
