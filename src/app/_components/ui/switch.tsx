"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/src/lib/utils";

/**
 * Switch sobre o Base UI, com as cores do LineFlow.
 *
 * Invariante de tamanho: a largura da trilha é sempre o DOBRO do tamanho do
 * polegar. É isso que faz `translate-x-[calc(100%-2px)]` parar exatamente na
 * borda direita em qualquer tamanho — ao adicionar um `size` novo, mantenha a
 * proporção 2:1 ou o polegar vai escapar da trilha.
 */
function Switch({
  className,
  size = "default",
  ...props
}: SwitchPrimitive.Root.Props & {
  size?: "sm" | "default" | "lg";
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "peer group/switch relative inline-flex shrink-0 cursor-pointer items-center rounded-full border transition-colors outline-none",
        // Área de toque maior que o visual, sem afetar o layout.
        "after:absolute after:-inset-x-3 after:-inset-y-2",
        "data-[size=sm]:h-[14px] data-[size=sm]:w-[24px]",
        "data-[size=default]:h-[18.4px] data-[size=default]:w-[32px]",
        "data-[size=lg]:h-[26px] data-[size=lg]:w-[48px]",
        "data-unchecked:bg-lf-card data-unchecked:border-lf-border-strong",
        "data-checked:bg-lf-accent data-checked:border-transparent",
        "hover:data-unchecked:border-lf-accent/50",
        "focus-visible:border-lf-accent focus-visible:ring-3 focus-visible:ring-lf-accent/40",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "pointer-events-none block rounded-full ring-0 transition-transform",
          "group-data-[size=sm]/switch:size-3",
          "group-data-[size=default]/switch:size-4",
          "group-data-[size=lg]/switch:size-6",
          "data-unchecked:translate-x-0 data-unchecked:bg-lf-secondary",
          "data-checked:translate-x-[calc(100%-2px)] data-checked:bg-lf-base"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
