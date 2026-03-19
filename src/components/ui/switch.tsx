"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const switchVariants = cva(
  "peer group/switch inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-neutral-input data-[state=checked]:bg-primary",
  {
    variants: {
      size: {
        sm: "h-4 w-7",
        default: "h-5 w-9",
        lg: "h-6 w-11",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

const thumbVariants = cva(
  "pointer-events-none block rounded-full bg-primary-foreground ring-0 shadow-sm transition-transform data-[state=unchecked]:translate-x-0.5",
  {
    variants: {
      size: {
        sm: "size-3 data-[state=checked]:translate-x-[calc(100%+2px)]",
        default: "size-4 data-[state=checked]:translate-x-[calc(100%+2px)]",
        lg: "size-5 data-[state=checked]:translate-x-[calc(100%+2px)]",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {
  /** Classe de tema aplicada no estado checked (ex: "theme-brand") */
  theme?: string
}

function Switch({
  className,
  size = "default",
  theme,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(theme, switchVariants({ size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={thumbVariants({ size })}
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch, switchVariants }
