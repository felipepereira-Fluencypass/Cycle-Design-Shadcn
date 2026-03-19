"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const checkboxVariants = cva(
  "peer shrink-0 border border-neutral-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-neutral-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary",
  {
    variants: {
      size: {
        sm: "size-3.5 [&_svg]:size-3",
        default: "size-4 [&_svg]:size-3.5",
        lg: "size-5 [&_svg]:size-4",
      },
      variant: {
        default: "rounded-[4px]",
        circular: "rounded-full",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
  /** Classe de tema aplicada apenas no estado checked (ex: "theme-class") */
  theme?: string
}

function Checkbox({
  className,
  size = "default",
  variant = "default",
  theme,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-variant={variant}
      className={cn(theme, checkboxVariants({ size, variant }), className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="grid place-content-center text-current transition-none"
      >
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox, checkboxVariants }
