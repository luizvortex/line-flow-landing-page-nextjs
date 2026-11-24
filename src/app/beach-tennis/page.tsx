import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/src/app/_components/landing/navbar";
import { HeroCard } from "@/src/app/_components/landing/hero-card";
import { PassoAPasso, type Passo } from "@/src/app/_components/landing/passo-a-passo";
import { EquipeCta } from "@/src/app/_components/landing/equipe-cta";
import { PlanosResumo } from "@/src/app/_components/landing/planos-resumo";
import { FaqResumo, type FaqItem } from "@/src/app/_components/landing/faq-resumo";
import { CtaFechamento } from "@/src/app/_components/landing/cta-fechamento";
import { Footer } from "@/src/app/_components/landing/footer";
import { PhoneFrame } from "@/src/app/_components/landing/shared/phone-frame";
import { BeneficiosBeach } from "@/src/app/_components/landing/beach-tennis/beneficios-beach";
import { GradeQuadrasMockup } from "@/src/app/_components/landing/beach-tennis/grade-quadras-mockup";
import {
  ReservaFeitaScreen,
  ReservarQuadraScreen,
  VitrineArenaScreen,
} from "@/src/app/_components/landing/beach-tennis/telas-quadra";
import { plans } from "@/src/lib/plans";

export const metadata: Metadata = {
  title: "LineFlow para beach tennis — reserva de quadra online, mensalistas e aulas",
  description:
    "Reserva de quadra online 24h e pelo WhatsApp, preço de horário nobre, mensalistas, turmas com presença e a comanda da quadra. O jogador reserva pelo celular, sem baixar app.",
  keywords: [
    "sistema para arena de beach tennis",
    "reserva de quadra de beach tennis",
    "agendamento de quadra online",
    "aluguel de quadra de areia",
    "gestão de arena de beach tennis",
    "aula de beach tennis",
  ],
  alternates: {
    canonical: "/beach-tennis",
  },
  openGraph: {
    title: "LineFlow para beach tennis",
    description: "Quadra cheia de manhã à noite. Reserva online, mensalistas, aulas e comanda da quadra.",
    url: "/beach-tennis",
    siteName: "LineFlow",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LineFlow para beach tennis",
    description: "Reserva de quadra online, mensalistas, aulas e comanda da quadra.",
  },
};

const passos: Passo[] = [
  {
    title: "O jogador abre a página da arena",
    desc: "Pelo QR Code na recepção, pelo link no Instagram ou pelo WhatsApp. Vê as quadras e os preços, sem baixar app.",
    screen: <VitrineArenaScreen />,
  },
  {
    title: "Escolhe o dia, a quadra e os horários",
    desc: "Manhã, tarde ou noite: os horários livres de cada quadra aparecem na hora, e dá para marcar mais de um seguido.",
    screen: <ReservarQuadraScreen />,
  },
  {
    title: "Confirma e recebe o lembrete",
    desc: "A reserva cai na sua grade com o valor certo, e o jogador é lembrado antes do jogo.",
    screen: <ReservaFeitaScreen />,
  },
];

/** As dúvidas de quem tem arena, no lugar do FAQ geral da home. */
const faqs: FaqItem[] = [
  {
    q: "O jogador reserva sozinho, sem me chamar no WhatsApp?",
    a: "Sim. Pelo link ou QR Code da arena ele escolhe o dia, o turno, a quadra e os horários, e pode marcar vários horários seguidos. Também dá para reservar conversando com o bot do WhatsApp da arena, a partir do plano Starter.",
  },
  {
    q: "Dá para cobrar mais caro no horário nobre?",
    a: "Dá. Cada quadra pode ter um preço único ou faixas por dia da semana e horário, como noite e fim de semana mais caros. O valor de cada horário é calculado sozinho e fica gravado na reserva.",
  },
  {
    q: "Como funcionam os mensalistas?",
    a: "Você cria o horário fixo do jogador ou do grupo no painel, com valor mensal ou por jogo. O horário fica garantido toda semana, ninguém mais consegue reservá-lo, e você acompanha quem já pagou a mensalidade do mês.",
  },
  {
    q: "E as aulas de beach tennis?",
    a: "Cada turma tem professor, quadra, dias, horário, vagas, nível e mensalidade. Você faz a chamada de cada aula, anota a evolução dos alunos e vê a comissão de cada professor. A turma já ocupa a quadra no horário dela.",
  },
  {
    q: "Consigo fechar a quadra para um torneio ou manutenção?",
    a: "Consegue. O bloqueio tira os horários da reserva online e do WhatsApp no período escolhido, e o painel mostra as reservas que já existiam para você mover ou cancelar.",
  },
  {
    q: "Quantas quadras posso cadastrar?",
    a: "Cada quadra conta como uma agenda do plano: 1 no Free, 3 no Starter, 25 no Pro e 50 no Pro Plus. O Free não pede cartão e, nos primeiros 14 dias, libera os recursos do Pro.",
  },
];

export default function BeachTennisPage() {
  return (
    <main className="bg-lf-base min-h-screen">
      <Navbar />
      <HeroCard
        title="Quadra cheia de manhã à noite."
        subtitle="Reserva online 24h, preço de horário nobre, mensalistas, aulas e a comanda da quadra num painel só. O jogador reserva pelo celular, sem baixar app."
        celularTras={
          <PhoneFrame>
            <ReservaFeitaScreen />
          </PhoneFrame>
        }
        enfeite={
          // A raquete em pé, com o cabo entrando um pouco atrás do primeiro
          // celular, e a bola saindo dela até o botão, no lugar da seta da
          // home. Só a partir de 1280px: abaixo disso os celulares cobririam a
          // raquete inteira.
          <span aria-hidden="true" className="hidden xl:block absolute inset-0 pointer-events-none select-none">
            <Image
              src="/images/beach/bola-verde-2.webp"
              alt=""
              width={342}
              height={274}
              priority
              className="absolute left-[291px] -top-[85px] w-[171px] h-auto"
            />
            <Image
              src="/images/beach/raquete-verde.webp"
              alt=""
              width={209}
              height={468}
              priority
              className="absolute left-[563px] -top-[223px] w-[105px] h-auto drop-shadow-[0_14px_22px_rgba(3,25,38,0.25)]"
            />
          </span>
        }
        celularFrente={
          <PhoneFrame>
            <ReservarQuadraScreen />
          </PhoneFrame>
        }
      />
      <BeneficiosBeach />
      <PassoAPasso
        passos={passos}
        titulo={
          <>
            Reserva de quadra em <span className="text-lf-accent">três toques</span>
          </>
        }
      />
      <EquipeCta
        title="Tem professores na arena?"
        subtitle="Turmas, chamada de cada aula, mensalidades e a comissão de cada professor, com a grade de todas as quadras à vista."
        painel={<GradeQuadrasMockup />}
      />
      <PlanosResumo plans={plans} />
      <FaqResumo
        items={faqs}
        title={
          <>
            Dúvidas de quem tem <span className="text-lf-accent">arena de beach tennis</span>
          </>
        }
      />
      <CtaFechamento title="O sistema de reservas feito para arenas de beach tennis." />
      <Footer />
    </main>
  );
}
