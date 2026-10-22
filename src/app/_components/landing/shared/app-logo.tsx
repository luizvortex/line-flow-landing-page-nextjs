import Image from "next/image";

/** Logo como aparece no topo do app do cliente (`<Logo tamanho={18} />`). */
export function AppLogo({ size = 15 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2">
      <Image
        src="/logo/logo-mark.png"
        alt=""
        width={size + 7}
        height={size + 7}
        style={{ width: size + 7, height: size + 7 }}
      />
      <span
        className="font-semibold tracking-tight text-lf-primary"
        style={{ fontSize: size }}
      >
        Line<span className="text-lf-accent">Flow</span>
      </span>
    </span>
  );
}
