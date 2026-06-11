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
  metadataBase: new URL("https://lineflow.mpdev.pro.br"),
  title: "LineFlow — Gestão de filas em tempo real para seu negócio",
  description:
    "Clientes entram na fila pelo QR Code, acompanham a posição no celular e recebem notificação push. Dashboard completo para salões, clínicas e restaurantes.",
  keywords: [
    "fila virtual",
    "QR Code fila",
    "gerenciamento de filas",
    "sistema de senhas",
    "fila digital",
    "barbearia",
    "salão de beleza",
    "clínica",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LineFlow — Sua fila mais inteligente começa hoje",
    description: "Setup em 3 minutos. Sem app. Sem papel. Só atendimento.",
    url: "/",
    siteName: "LineFlow",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LineFlow — Gestão de filas em tempo real",
    description: "QR Code + notificação push + dashboard ao vivo.",
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
      <body className="bg-[#031926] text-[#e8f2f1] min-h-screen">
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
