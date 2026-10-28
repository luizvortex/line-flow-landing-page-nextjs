import type { Metadata } from "next";
import { Navbar, type NavLink } from "@/src/app/_components/landing/navbar";
import { HeroBarbearia } from "@/src/app/_components/barbearias/hero-barbearia";
import { DoresBarbearia } from "@/src/app/_components/barbearias/dores-barbearia";
import { AppDemo } from "@/src/app/_components/landing/app-demo";
import { Agendamento } from "@/src/app/_components/landing/agendamento";
import { Social } from "@/src/app/_components/landing/social";
import { RecursosBarbearia } from "@/src/app/_components/barbearias/recursos-barbearia";
import { Planos } from "@/src/app/_components/landing/planos";
import { FAQ, type FaqItem } from "@/src/app/_components/landing/faq";
import { CTAFinal } from "@/src/app/_components/landing/cta-final";
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

const links: NavLink[] = [
  { label: "App do cliente", href: "#app-demo" },
  { label: "Agendamento", href: "#agendamento" },
  { label: "App social", href: "#social" },
  { label: "Recursos", href: "#recursos" },
  { label: "Planos", href: "#planos" },
];

const faqs: FaqItem[] = [
  {
    q: "Dá para ter uma fila para cada barbeiro?",
    a: "Sim. Cada fila tem seu QR Code, seu operador e sua espera estimada, então o cliente escolhe com quem quer cortar. A quantidade depende do plano: 1 fila no Free, 3 no Starter, 25 no Pro e 50 no Pro Plus.",
  },
  {
    q: "Quantos barbeiros posso cadastrar?",
    a: "O Free é só para o dono. O Starter tem dono + 1 operador, o Pro dono + 10 e o Pro Plus dono + 20.",
  },
  {
    q: "O cliente pode marcar horário em vez de pegar fila?",
    a: "Pode. Cada fila funciona por ordem de chegada ou com horário marcado — dá para ter a fila de walk-in e a agenda na mesma barbearia. O cliente marca pelo app ou pelo WhatsApp e recebe lembrete antes do horário. Agendamento a partir do plano Starter.",
  },
  {
    q: "Como funciona a comissão dos barbeiros?",
    a: "Você define a comissão em cada serviço. Conforme os atendimentos são concluídos, o LineFlow calcula quanto cada barbeiro tem a receber e você controla os repasses no painel.",
  },
  {
    q: "Meu cliente precisa baixar algum aplicativo?",
    a: "Não. Ele escaneia o QR Code ou abre o link da barbearia no celular e já entra na fila. Se quiser, pode adicionar o app à tela inicial, sem passar pela loja.",
  },
  {
    q: "Consigo vender produtos como pomada e óleo de barba?",
    a: "Sim. As vendas de produtos e serviços ficam registradas no painel e o estoque baixa sozinho a cada venda.",
  },
  {
    q: "Como faço o cliente voltar?",
    a: "Configure o prazo de retorno de cada serviço e o cliente é lembrado quando chegar a hora. Ligue também o cartão fidelidade e o indique e ganhe para premiar quem volta e quem traz amigos.",
  },
  {
    q: "Funciona para barbearia com um barbeiro só?",
    a: "Funciona. O plano Free tem 1 fila e até 15 entradas por dia, e nos primeiros 14 dias você usa os recursos do Pro para testar tudo.",
  },
];

export default function BarbeariasPage() {
  return (
    <main className="bg-lf-base min-h-screen">
      <Navbar links={links} />
      <HeroBarbearia />
      <DoresBarbearia />
      <AppDemo />
      <Agendamento />
      <Social />
      <RecursosBarbearia />
      <Planos initialPlans={plans} />
      <FAQ items={faqs} title="Dúvidas de quem tem barbearia" />
      <CTAFinal />
      <Footer />
    </main>
  );
}
