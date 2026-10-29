"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const STORAGE_KEY = "lf-theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function storedTheme(): Theme | null {
  try {
    const t = localStorage.getItem(STORAGE_KEY);
    return t === "light" || t === "dark" ? t : null;
  } catch {
    return null;
  }
}

/**
 * Botão sol/lua. O tema inicial já vem aplicado pelo script do layout; aqui
 * só se lê o que está no <html>, troca-se ao clicar (guardando a escolha) e,
 * enquanto a pessoa não escolher, acompanha-se a mudança do tema do sistema.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  // null até montar: no servidor não dá para saber o tema, e o ícone errado
  // piscaria na hidratação.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const html = document.documentElement;
    const read = () => setTheme(html.dataset.theme === "light" ? "light" : "dark");
    read();

    const media = window.matchMedia("(prefers-color-scheme: light)");
    const onSystemChange = () => {
      if (storedTheme()) return;
      html.dataset.theme = systemTheme();
      read();
    };
    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Sem armazenamento (aba anônima bloqueada): troca só nesta visita.
    }
    setTheme(next);
  };

  const isLight = theme === "light";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isLight ? "Mudar para o tema escuro" : "Mudar para o tema claro"}
      title={isLight ? "Tema escuro" : "Tema claro"}
      className={`w-9 h-9 rounded-full grid place-items-center border border-lf-border text-lf-secondary hover:text-lf-primary hover:border-lf-border-strong transition-colors cursor-pointer ${className}`}
    >
      {theme === null ? null : isLight ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
