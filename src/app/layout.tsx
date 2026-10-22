import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lineflow.mpdevelop.com.br"),
  title: "LineFlow — Gestão de atendimento completa para seu negócio",
  description:
    "Fila virtual, agendamento, fidelidade, financeiro e relatórios em um só lugar. Clientes entram pelo QR Code ou WhatsApp, sem baixar app. Para barbearias, salões, clínicas e estética.",
  keywords: [
    "fila virtual",
    "QR Code fila",
    "gerenciamento de filas",
    "sistema de senhas",
    "fila digital",
    "gestão de atendimento",
    "agendamento online",
    "cartão fidelidade",
    "barbearia",
    "salão de beleza",
    "clínica",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LineFlow — Todo o seu atendimento, em um só fluxo",
    description: "Fila, agenda, fidelidade e financeiro em um só lugar. Setup em 3 minutos, sem app.",
    url: "/",
    siteName: "LineFlow",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LineFlow — Gestão de atendimento completa",
    description: "Fila, agenda, fidelidade e financeiro em um só lugar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {/* Extensões de navegador (ColorZilla, Grammarly e afins) injetam
          atributos no <body> antes da hidratação, o que o React acusa como
          divergência. Vale só para os atributos deste elemento — os filhos
          continuam sendo comparados normalmente. */}
      <body
        suppressHydrationWarning
        className="bg-[#031926] text-[#e8f2f1] min-h-screen"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#77aca2] focus:text-[#031926] focus:rounded-lg focus:font-semibold"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
