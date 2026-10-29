import Image from "next/image";
import Link from "next/link";

/** Contato da MP Develop, o mesmo indicado na Política de Privacidade. */
export const CONTACT_EMAIL = "contato@mpdevelop.com.br";

const APP_URL = "https://lineflow.mpdev.pro.br";

type FooterLink = { label: string; href: string; external?: boolean };

/**
 * Rodapé no modelo do Spoke: marca de um lado, poucas colunas curtas do
 * outro, e só links que levam a algum lugar. Os caminhos de âncora começam
 * com "/" para funcionar também fora da home (ex.: /barbearias).
 */
const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Produto",
    links: [
      { label: "Como funciona", href: "/#comece" },
      { label: "Planos e preços", href: "/#planos" },
      { label: "Dúvidas frequentes", href: "/#faq" },
      { label: "Para barbearias", href: "/barbearias" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Contato", href: `mailto:${CONTACT_EMAIL}` },
      { label: "Privacidade", href: "/privacidade" },
      { label: "Termos de Uso", href: `${APP_URL}/legal/termos`, external: true },
    ],
  },
  {
    title: "Acesso",
    links: [
      { label: "Criar conta grátis", href: `${APP_URL}/auth/cadastrar-empresa`, external: true },
      { label: "Entrar", href: APP_URL, external: true },
    ],
  },
];

function FooterAnchor({ link }: { link: FooterLink }) {
  const className =
    "text-[15px] text-lf-secondary hover:text-lf-primary transition-colors duration-150";
  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  }
  return (
    <a
      href={link.href}
      className={className}
      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {link.label}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-lf-border bg-gradient-to-b from-lf-card to-lf-base">
      <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 md:pt-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Marca */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo/logo-mark.png"
                alt=""
                width={30}
                height={30}
                className="object-contain"
              />
              <span className="text-xl font-bold text-lf-primary">
                Line<span className="text-lf-accent">Flow</span>
              </span>
            </Link>
            <p className="mt-2 text-sm text-lf-muted">
              Um produto <span className="font-semibold text-lf-secondary">MP Develop</span>
            </p>
          </div>

          {/* Colunas */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-medium text-lf-muted">{col.title}</h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <FooterAnchor link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-lf-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-lf-muted">
          <p>© 2026 LineFlow · MP Develop. Todos os direitos reservados.</p>
          <Link
            href="/privacidade"
            className="hover:text-lf-secondary underline underline-offset-2 transition-colors"
          >
            Privacidade e proteção de dados (LGPD)
          </Link>
        </div>
      </div>

      {/* Marca d'água gigante no pé da página */}
      <div className="relative overflow-hidden select-none pointer-events-none" aria-hidden="true">
        <p
          className="text-center font-bold leading-none whitespace-nowrap px-4"
          style={{ fontSize: "clamp(72px, 22vw, 260px)", letterSpacing: "-0.03em" }}
        >
          <span
            style={{
              background:
                "linear-gradient(180deg, rgba(232,242,241,0.07) 0%, rgba(232,242,241,0.02) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Line
          </span>
          <span
            style={{
              background:
                "linear-gradient(180deg, rgba(119,172,162,0.14) 0%, rgba(119,172,162,0.04) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Flow
          </span>
        </p>
      </div>
    </footer>
  );
}
