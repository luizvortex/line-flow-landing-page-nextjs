import Image from "next/image";
import Link from "next/link";

/** Contato da MP Develop, o mesmo indicado na Política de Privacidade. */
export const CONTACT_EMAIL = "contato@mpdevelop.com.br";

const APP_URL = "https://lineflow.mpdev.pro.br";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/lineflow.app",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.13 1.38A5.88 5.88 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13a5.88 5.88 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.88 5.88 0 0 0 2.13-1.38 5.88 5.88 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.88 5.88 0 0 0-1.38-2.13A5.88 5.88 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/554498035871",
    path: "M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88Zm8.41-18.3A11.81 11.81 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89 0-3.18-1.24-6.16-3.48-8.41Z",
  },
];

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
      { label: "WhatsApp", href: "https://wa.me/554498035871", external: true },
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
            <div className="mt-5 flex gap-2.5">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-lf-border flex items-center justify-center text-lf-secondary hover:text-lf-accent hover:border-lf-accent transition-colors duration-150"
                >
                  <svg viewBox="0 0 24 24" width={17} height={17} fill="currentColor" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
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
                "linear-gradient(180deg, color-mix(in srgb, var(--lf-primary) 7%, transparent) 0%, color-mix(in srgb, var(--lf-primary) 2%, transparent) 100%)",
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
                "linear-gradient(180deg, color-mix(in srgb, var(--lf-accent) 16%, transparent) 0%, color-mix(in srgb, var(--lf-accent) 5%, transparent) 100%)",
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
