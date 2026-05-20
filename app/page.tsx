import { Navbar } from "@/app/_components/landing/navbar";
import { Hero } from "@/app/_components/landing/hero";
import { ComoFunciona } from "@/app/_components/landing/como-funciona";
import { AppDemo } from "@/app/_components/landing/app-demo";
import { Funcionalidades } from "@/app/_components/landing/funcionalidades";
import { SocialProof } from "@/app/_components/landing/social-proof";
import { Planos } from "@/app/_components/landing/planos";
import { FAQ } from "@/app/_components/landing/faq";
import { CTAFinal } from "@/app/_components/landing/cta-final";
import { Footer } from "@/app/_components/landing/footer";

export default function LandingPage() {
  return (
    <main className="bg-[#031926] min-h-screen">
      <Navbar />
      <Hero />
      <ComoFunciona />
      <AppDemo />
      <Funcionalidades />
      <SocialProof />
      <Planos />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
