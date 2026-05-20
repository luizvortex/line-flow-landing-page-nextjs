import { Globe, Link2, MessageCircle, Send } from "lucide-react";

const footerLinks = {
  Produto: [
    "Como funciona",
    "Funcionalidades",
    "Planos e preços",
    "Changelog",
    "Roadmap",
  ],
  "Para seu negócio": [
    "Barbearia e salão",
    "Clínicas médicas",
    "Restaurantes",
    "Academia e fitness",
    "Pet shops",
  ],
  Empresa: ["Sobre nós", "Blog", "Casos de sucesso", "Imprensa", "Carreiras"],
  Suporte: [
    "Central de ajuda",
    "Documentação API",
    "Status",
    "Contato",
    "WhatsApp",
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#072233] border-t border-[#1a3d52]">
      {/* Links grid */}
      <div className="max-w-6xl mx-auto pt-16 pb-0 px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-[#1a3d52]">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#e8f2f1]">
                Line<span className="text-[#77aca2]">Flow</span>
              </span>
              <span className="bg-[rgba(119,172,162,0.15)] text-[#77aca2] text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-full">
                Beta
              </span>
            </div>
            <p className="mt-4 text-[#8bb5b0] text-sm leading-relaxed max-w-xs">
              Sistema de filas em tempo real para negócios que levam atendimento
              a sério.
            </p>
            <div className="mt-6 flex gap-4">
              {[
                { Icon: MessageCircle, label: "Twitter / X" },
                { Icon: Link2, label: "LinkedIn" },
                { Icon: Send, label: "Instagram" },
                { Icon: Globe, label: "Website" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-[#4d7a80] hover:text-[#77aca2] transition-colors duration-150"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping-live absolute inline-flex h-full w-full rounded-full bg-[#4ade80] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ade80]" />
              </span>
              <span className="text-[#4d7a80] text-xs">
                Todos os sistemas operacionais
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-[#e8f2f1] font-semibold text-xs mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#8bb5b0] text-sm hover:text-[#e8f2f1] transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#4d7a80] text-xs">
            © 2026 LineFlow. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {["Privacidade", "Termos", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[#4d7a80] text-xs hover:text-[#8bb5b0] transition-colors duration-150"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Giant wordmark — Google Antigravity style */}
      <div
        className="relative overflow-hidden select-none pointer-events-none"
        aria-hidden="true"
      >
        <p
          className="text-center font-bold leading-none whitespace-nowrap px-4"
          style={{
            fontSize: "clamp(72px, 22vw, 260px)",
            letterSpacing: "-0.03em",
          }}
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
