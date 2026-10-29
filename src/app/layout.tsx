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

/**
 * Aplica o tema antes da primeira pintura, para a página não abrir num tema e
 * trocar em seguida: a escolha salva pelo botão vence; sem ela, segue o
 * sistema. Precisa ser um script inline e síncrono no <head>.
 */
const themeScript = `(function(){try{var t=localStorage.getItem("lf-theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: o data-theme é colocado pelo script antes do
    // React hidratar, então o atributo diverge do HTML do servidor de propósito.
    <html
      lang="pt-BR"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* Extensões de navegador (ColorZilla, Grammarly e afins) injetam
          atributos no <body> antes da hidratação, o que o React acusa como
          divergência. Vale só para os atributos deste elemento — os filhos
          continuam sendo comparados normalmente. */}
      <body
        suppressHydrationWarning
        className="bg-lf-base text-lf-primary min-h-screen"
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-lf-accent focus:text-lf-base focus:rounded-lg focus:font-semibold"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
