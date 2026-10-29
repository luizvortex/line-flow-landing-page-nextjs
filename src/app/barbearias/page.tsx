import type { Metadata } from "next";
import { Navbar } from "@/src/app/_components/landing/navbar";
import { HeroCard } from "@/src/app/_components/landing/hero-card";
import { Beneficios } from "@/src/app/_components/landing/beneficios";
import { PassoAPasso } from "@/src/app/_components/landing/passo-a-passo";
import { EquipeCta } from "@/src/app/_components/landing/equipe-cta";
import { PlanosResumo } from "@/src/app/_components/landing/planos-resumo";
import { FaqResumo, type FaqItem } from "@/src/app/_components/landing/faq-resumo";
import { CtaFechamento } from "@/src/app/_components/landing/cta-fechamento";
import { Footer } from "@/src/app/_components/landing/footer";
import { plans } from "@/src/lib/plans";

export const metadata: Metadata = {
  title: "LineFlow para barbearias — fila, agenda e comissão em um só lugar",
  description:
    "Fila por barbeiro, horário marcado, comissão por serviço, fidelidade e lembrete de retorno. O cliente acompanha a vez pelo celular, sem baixar app.",
  keywords: [
    "sistema para barbearia",
    "fila virtual barbearia",
    "agendamento barbearia",
    "comissão de barbeiro",
    "cartão fidelidade barbearia",
    "app para barbearia",
  ],
  alternates: {
    canonical: "/barbearias",
  },
  openGraph: {
    title: "LineFlow para barbearias",
    description:
      "Cadeira cheia, ninguém esperando em pé. Fila por barbeiro, agenda, comissão e fidelidade.",
    url: "/barbearias",
    siteName: "LineFlow",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LineFlow para barbearias",
    description: "Fila por barbeiro, agenda, comissão e fidelidade.",
  },
};

/** As dúvidas de quem tem barbearia, no lugar do FAQ geral da home. */
const faqs: FaqItem[] = [
  {
    q: "Dá para ter uma fila para cada barbeiro?",
    a: "Sim. Cada fila tem seu QR Code, seu barbeiro e sua espera estimada, então o cliente escolhe com quem quer cortar. A quantidade depende do plano: 1 fila no Free, 3 no Starter, 25 no Pro e 50 no Pro Plus.",
  },
  {
    q: "O cliente pode marcar horário em vez de pegar fila?",
    a: "Pode. Cada fila funciona por ordem de chegada ou com horário marcado, e dá para ter as duas na mesma barbearia. O cliente marca pelo app ou pelo WhatsApp e recebe lembrete antes do horário. Agendamento a partir do plano Starter.",
  },
  {
    q: "Como funciona a comissão dos barbeiros?",
    a: "Você define a comissão em cada serviço. Conforme os atendimentos são concluídos, o LineFlow calcula quanto cada barbeiro tem a receber e você controla os repasses no painel.",
  },
  {
    q: "Meu cliente precisa baixar algum aplicativo?",
    a: "Não. Ele escaneia o QR Code ou abre o link da barbearia no celular e já entra na fila ou marca o horário, sem passar pela loja de apps.",
  },
  {
    q: "Como faço o cliente voltar?",
    a: "Configure o prazo de retorno de cada serviço e o cliente é lembrado quando chegar a hora. Ligue também o cartão fidelidade e o indique e ganhe para premiar quem volta e quem traz amigos.",
  },
  {
    q: "Funciona para barbearia com um barbeiro só?",
    a: "Funciona. O plano Free tem 1 fila, não pede cartão e, nos primeiros 14 dias, libera os recursos do Pro para você testar tudo.",
  },
];

export default function BarbeariasPage() {
  return (
    <main className="bg-lf-base min-h-screen">
      <Navbar />
      <HeroCard
        title="Cadeira cheia, ninguém esperando em pé."
        subtitle="Fila por barbeiro, horário marcado, comissão calculada sozinha e cliente que volta. O cliente acompanha a vez pelo celular e chega na hora do corte."
      />
      <Beneficios />
      <PassoAPasso />
      <EquipeCta title="Tem uma equipe de barbeiros?" />
      <PlanosResumo plans={plans} />
      <FaqResumo
        items={faqs}
        title={
          <>
            Dúvidas de quem tem <span className="text-lf-accent">barbearia</span>
          </>
        }
      />
      <CtaFechamento title="O sistema de atendimento feito para barbearias." />
      <Footer />
    </main>
  );
}
