import { Navbar } from "@/src/app/_components/landing/navbar";
import { Hero } from "@/src/app/_components/landing/hero";
import { ComoFunciona } from "@/src/app/_components/landing/como-funciona";
import { AppDemo } from "@/src/app/_components/landing/app-demo";
import { Funcionalidades } from "@/src/app/_components/landing/funcionalidades";
import { SocialProof } from "@/src/app/_components/landing/social-proof";
import { Planos, Plan } from "@/src/app/_components/landing/planos";
import { FAQ } from "@/src/app/_components/landing/faq";
import { CTAFinal } from "@/src/app/_components/landing/cta-final";
import { Footer } from "@/src/app/_components/landing/footer";
import { supabase } from "@/src/lib/supabase";

export const revalidate = 60; // Recarrega os planos do banco a cada 1 minuto (Static Generation)

export default async function LandingPage() {
  const { data } = await supabase.from("plans").select("*").order("idx", { ascending: true });

  const formattedPlans: Plan[] = (data || []).map((dbPlan) => {
    const isFree = dbPlan.price === "0.00" || Number(dbPlan.price) === 0;
    const isEnterprise = dbPlan.name === "enterprise" || dbPlan.price === "499.90"; 
    const monthlyPrice = isFree ? 0 : isEnterprise ? null : Number(dbPlan.price);
    const annualPrice = monthlyPrice ? Math.floor((monthlyPrice * 10) / 12) : monthlyPrice;

    return {
      id: dbPlan.id,
      name: dbPlan.displayName,
      price: { monthly: monthlyPrice, annual: annualPrice },
      desc: dbPlan.description,
      cta: isFree ? "Começar grátis" : isEnterprise ? "Falar com vendas" : `Assinar ${dbPlan.displayName}`,
      style: dbPlan.name === "pro" ? "primary" : dbPlan.name === "starter" ? "accent" : "outline",
      popular: dbPlan.name === "pro",
      features: [
        { text: dbPlan.maxQueues === -1 || dbPlan.maxQueues > 900 ? "Filas ilimitadas" : `${dbPlan.maxQueues} fila${dbPlan.maxQueues > 1 ? 's' : ''} ativa${dbPlan.maxQueues > 1 ? 's' : ''}`, included: true },
        { text: dbPlan.maxEntriesPerDay === -1 || dbPlan.maxEntriesPerDay > 9000 ? "Entradas ilimitadas" : `${dbPlan.maxEntriesPerDay} entradas por dia`, included: true },
        { text: dbPlan.maxOperators === -1 || dbPlan.maxOperators > 900 ? "Operadores ilimitados" : `Até ${dbPlan.maxOperators} operador${dbPlan.maxOperators > 1 ? 'es' : ''}`, included: true },
        { text: "Notificações push", included: dbPlan.hasPushNotif },
        { text: "Display TV", included: dbPlan.hasDisplay },
        { text: "Analytics", included: dbPlan.hasAnalytics },
        { text: "Gestão Financeira", included: dbPlan.hasFinancial },
        { text: "QR Code customizável", included: dbPlan.hasCustomQrCode },
        { text: "Integração via API", included: dbPlan.hasApiIntegration },
        { text: "White-label", included: dbPlan.hasWhiteLabel },
      ],
    };
  });

  return (
    <main className="bg-[#031926] min-h-screen">
      <Navbar />
      <Hero />
      <ComoFunciona />
      <AppDemo />
      <Funcionalidades />
      <SocialProof />
      <Planos initialPlans={formattedPlans} />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
