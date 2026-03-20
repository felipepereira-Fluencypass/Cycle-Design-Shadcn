import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps extends React.ComponentProps<"textarea"> {
  /** Tamanho do textarea: sm (min-h 60px), default (min-h 80px), lg (min-h 120px) */
  textareaSize?: "sm" | "default" | "lg"
  /** Variante visual: outline (borda) ou filled (fundo preenchido) */
  variant?: "outline" | "filled"
}

function Textarea({
  className,
  textareaSize = "default",
  variant = "outline",
  ...props
}: TextareaProps) {
  return (
    <textarea
      data-slot="textarea"
      data-size={textareaSize}
      data-variant={variant}
      className={cn(
        // Base
        "w-full min-w-0 rounded-lg text-neutral-foreground transition-[color,border-color,box-shadow,background-color] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-neutral-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        // Variant: outline
        variant === "outline" && "border border-neutral-border bg-transparent shadow-xs dark:border-neutral-border dark:bg-transparent dark:shadow-none",
        variant === "outline" && "hover:border-ring hover:bg-ring/5",
        variant === "outline" && "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:bg-ring/5",
        // Variant: filled (mesmos tokens do Button outline: accent light, input dark)
        variant === "filled" && "border border-transparent bg-neutral-accent",
        variant === "filled" && "hover:border-ring hover:bg-secondary",
        variant === "filled" && "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:bg-secondary",
        // Error (sempre visível, ambas variantes)
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:hover:border-destructive dark:aria-invalid:border-destructive dark:aria-invalid:ring-destructive/40",
        // Resize
        "resize-y",
        // Sizes
        textareaSize === "sm" && "min-h-[60px] px-3 py-2 text-sm",
        textareaSize === "default" && "min-h-[80px] px-4 py-2 text-sm",
        textareaSize === "lg" && "min-h-[120px] px-4 py-3 text-base",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
