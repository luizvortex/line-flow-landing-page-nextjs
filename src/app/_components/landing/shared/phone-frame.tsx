import { type ReactNode } from "react";
import { Battery, Wifi } from "lucide-react";

interface PhoneFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Moldura de celular para as telas do app do cliente. A tela tem altura fixa
 * e esconde o que passar dela, então o conteúdo pode trocar sem a página pular.
 */
export function PhoneFrame({ children, className = "" }: PhoneFrameProps) {
  return (
    <div className={`relative w-[300px] ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[40px] bg-lf-accent/10 blur-3xl scale-110 pointer-events-none"
      />
      <div className="relative rounded-[40px] border-2 border-lf-border bg-lf-base overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
        {/* Status bar */}
        <div className="relative h-9 flex items-center justify-between px-6">
          <span className="font-mono text-[11px] text-lf-muted">9:41</span>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-6 bg-lf-base rounded-b-2xl border-b-2 border-lf-border" />
          <div className="flex gap-1.5 items-center text-lf-muted">
            <Wifi size={12} />
            <Battery size={12} />
          </div>
        </div>

        <div className="h-[560px] overflow-hidden flex flex-col">{children}</div>

        {/* Home indicator */}
        <div className="h-6 flex items-center justify-center">
          <div className="w-24 h-1 rounded-full bg-lf-border" />
        </div>
      </div>
    </div>
  );
}
