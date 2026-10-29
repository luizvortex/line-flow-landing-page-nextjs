import { Navbar } from "@/src/app/_components/landing/navbar";
import { HeroCard } from "@/src/app/_components/landing/hero-card";
import { Beneficios } from "@/src/app/_components/landing/beneficios";
import { PassoAPasso } from "@/src/app/_components/landing/passo-a-passo";
import { EquipeCta } from "@/src/app/_components/landing/equipe-cta";
import { PlanosResumo } from "@/src/app/_components/landing/planos-resumo";
import { FaqResumo } from "@/src/app/_components/landing/faq-resumo";
import { CtaFechamento } from "@/src/app/_components/landing/cta-fechamento";
import { Footer } from "@/src/app/_components/landing/footer";
import { plans } from "@/src/lib/plans";

export default function LandingPage() {
  return (
    <main className="bg-[#031926] min-h-screen">
      <Navbar />
      <HeroCard />
      <Beneficios />
      <PassoAPasso />
      <EquipeCta />
      <PlanosResumo plans={plans} />
      <FaqResumo />
      <CtaFechamento />
      <Footer />
    </main>
  );
}
