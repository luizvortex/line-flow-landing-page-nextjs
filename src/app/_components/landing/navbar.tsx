"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./shared/theme-toggle";

export interface NavLink {
  label: string;
  href: string;
}

const defaultLinks: NavLink[] = [
  { label: "Como funciona", href: "#comece" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Planos", href: "#planos" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Barbearias", href: "/barbearias" },
];

export function Navbar({ links = defaultLinks }: { links?: NavLink[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 h-16 px-6 md:px-12 transition-all duration-200 ${
          scrolled
            ? "bg-lf-base/90 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo/logo-mark.png"
              alt="LineFlow"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="text-xl font-bold text-lf-primary">
              Line<span className="text-lf-accent">Flow</span>
            </span>
            <span className="bg-lf-accent/15 text-lf-accent text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-full">
              v1.1
            </span>
          </Link>

          {/* Center nav (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lf-secondary text-sm hover:text-lf-primary transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right CTAs (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="https://lineflow.mpdev.pro.br"
              className="text-lf-secondary hover:text-lf-primary text-sm transition-colors duration-150"
            >
              Entrar
            </a>
            <a
              href="https://lineflow.mpdev.pro.br/auth/cadastrar-empresa"
              className="flex items-center gap-1.5 bg-lf-accent hover:bg-lf-accent-hover text-lf-base font-semibold text-sm px-5 py-2 rounded-lg shadow-[0_0_20px_rgba(119,172,162,.25)] hover:shadow-[0_0_28px_rgba(119,172,162,.35)] transition-all duration-150"
            >
              Comece grátis
              <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>

          {/* Mobile: tema + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              className="text-lf-secondary hover:text-lf-primary transition-colors p-1"
              aria-label="Abrir menu de navegação"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-lf-base/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-lf-card border-l border-lf-border p-6 flex flex-col shadow-[0_0_60px_rgba(3,25,38,.9)]">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo/logo-mark.png"
                  alt="LineFlow"
                  width={28}
                  height={28}
                  className="object-contain"
                />
                <span className="text-xl font-bold text-lf-primary">
                  Line<span className="text-lf-accent">Flow</span>
                </span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-lf-secondary hover:text-lf-primary transition-colors p-1"
                aria-label="Fechar menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-5 mb-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lf-secondary hover:text-lf-primary text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-auto">
              <a
                href="https://lineflow.mpdev.pro.br"
                className="text-center text-lf-secondary hover:text-lf-primary text-sm transition-colors py-2"
              >
                Entrar
              </a>
              <a
                href="https://lineflow.mpdev.pro.br/auth/cadastrar-empresa"
                className="flex items-center justify-center gap-1.5 bg-lf-accent hover:bg-lf-accent-hover text-lf-base font-semibold text-sm px-5 py-3 rounded-lg transition-all"
              >
                Comece grátis
                <ArrowRight size={14} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
