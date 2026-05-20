import { type ReactNode } from "react";
import { AccentLine } from "./accent-line";

interface EyebrowLabelProps {
  children: ReactNode;
  icon?: ReactNode;
}

export function EyebrowLabel({ children, icon }: EyebrowLabelProps) {
  return (
    <div className="flex items-center gap-2">
      <AccentLine />
      {icon && <span className="text-[#77aca2]">{icon}</span>}
      <span className="text-[11px] uppercase tracking-[0.10em] text-[#77aca2] font-medium">
        {children}
      </span>
    </div>
  );
}
