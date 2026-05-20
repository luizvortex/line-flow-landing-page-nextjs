"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "App do cliente", href: "#app-demo" },
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Planos", href: "#planos" },
];

export function Navbar() {
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
            ? "bg-[#031926]/90 backdrop-blur-lg border-b border-[#1a3d52]"
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
            <span className="text-xl font-bold text-[#e8f2f1]">
              Line<span className="text-[#77aca2]">Flow</span>
            </span>
            <span className="bg-[rgba(119,172,162,0.15)] text-[#77aca2] text-[10px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded-full">
              Beta
            </span>
          </Link>

          {/* Center nav (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#8bb5b0] text-sm hover:text-[#e8f2f1] transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right CTAs (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className="text-[#8bb5b0] hover:text-[#e8f2f1] text-sm transition-colors duration-150"
            >
              Entrar
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 bg-[#77aca2] hover:bg-[#5d9990] text-[#031926] font-semibold text-sm px-5 py-2 rounded-lg shadow-[0_0_20px_rgba(119,172,162,.25)] hover:shadow-[0_0_28px_rgba(119,172,162,.35)] transition-all duration-150"
            >
              Comece grátis
              <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-[#8bb5b0] hover:text-[#e8f2f1] transition-colors p-1"
            aria-label="Abrir menu de navegação"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-[#031926]/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#072233] border-l border-[#1a3d52] p-6 flex flex-col shadow-[0_0_60px_rgba(3,25,38,.9)]">
            <div className="flex justify-between items-center mb-8">
              <a href="/" className="flex items-center gap-2">
                <Image
                  src="/logo/logo-mark.png"
                  alt="LineFlow"
                  width={28}
                  height={28}
                  className="object-contain"
                />
                <span className="text-xl font-bold text-[#e8f2f1]">
                  Line<span className="text-[#77aca2]">Flow</span>
                </span>
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-[#8bb5b0] hover:text-[#e8f2f1] transition-colors p-1"
                aria-label="Fechar menu"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col gap-5 mb-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#8bb5b0] hover:text-[#e8f2f1] text-base transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 mt-auto">
              <a
                href="#"
                className="text-center text-[#8bb5b0] hover:text-[#e8f2f1] text-sm transition-colors py-2"
              >
                Entrar
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-1.5 bg-[#77aca2] hover:bg-[#5d9990] text-[#031926] font-semibold text-sm px-5 py-3 rounded-lg transition-all"
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
