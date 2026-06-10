import { Navbar } from "@/src/app/_components/landing/navbar";
import { Hero } from "@/src/app/_components/landing/hero";
import { ComoFunciona } from "@/src/app/_components/landing/como-funciona";
import { AppDemo } from "@/src/app/_components/landing/app-demo";
import { Funcionalidades } from "@/src/app/_components/landing/funcionalidades";
import { SocialProof } from "@/src/app/_components/landing/social-proof";
import { Planos } from "@/src/app/_components/landing/planos";
import { FAQ } from "@/src/app/_components/landing/faq";
import { CTAFinal } from "@/src/app/_components/landing/cta-final";
import { Footer } from "@/src/app/_components/landing/footer";

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
