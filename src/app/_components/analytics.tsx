"use client";

import Script from "next/script";
import { useEffect } from "react";

const GA_ID = "G-WBHR8DR823";
const SIGNUP_PATH = "/auth/cadastrar-empresa";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 4. Além das visitas, marca como `generate_lead` todo
 * clique num link para o cadastro do sistema, que é a conversão da página.
 * Um único listener no documento cobre todos os botões, sem tocar neles.
 */
export function Analytics() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link || !link.href.includes(SIGNUP_PATH)) return;
      window.gtag?.("event", "generate_lead", {
        link_text: link.textContent?.trim().slice(0, 60),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
