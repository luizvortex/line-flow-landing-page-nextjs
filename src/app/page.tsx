import { Navbar } from "@/src/app/_components/landing/navbar";
import { HeroCard } from "@/src/app/_components/landing/hero-card";
import { Beneficios } from "@/src/app/_components/landing/beneficios";
import { PassoAPasso } from "@/src/app/_components/landing/passo-a-passo";
import { Social } from "@/src/app/_components/landing/social";
import { ComoFunciona } from "@/src/app/_components/landing/como-funciona";
import { AppDemo } from "@/src/app/_components/landing/app-demo";
import { Agendamento } from "@/src/app/_components/landing/agendamento";
import { Gestao } from "@/src/app/_components/landing/gestao";
import { Funcionalidades } from "@/src/app/_components/landing/funcionalidades";
import { SocialProof } from "@/src/app/_components/landing/social-proof";
import { Planos } from "@/src/app/_components/landing/planos";
import { FAQ } from "@/src/app/_components/landing/faq";
import { CTAFinal } from "@/src/app/_components/landing/cta-final";
import { Footer } from "@/src/app/_components/landing/footer";
import { plans } from "@/src/lib/plans";

export default function LandingPage() {
  return (
    <main className="bg-[#031926] min-h-screen">
      <Navbar />
      <HeroCard />
      <Beneficios />
      <PassoAPasso />
      <Social />
      <ComoFunciona />
      <AppDemo />
      <Agendamento />
      <Funcionalidades />
      <Gestao />
      <SocialProof />
      <Planos initialPlans={plans} />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
