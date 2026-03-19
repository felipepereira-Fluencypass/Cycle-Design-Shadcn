"use client"

import * as React from "react"
import { CircleIcon } from "lucide-react"
import { RadioGroup as RadioGroupPrimitive } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const radioVariants = cva(
  "aspect-square rounded-full border border-neutral-input bg-neutral-bg shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:text-foreground dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      size: {
        sm: "size-3.5 [&_svg]:size-2",
        default: "size-4 [&_svg]:size-2.5",
        lg: "size-5 [&_svg]:size-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface RadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {}

function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  )
}

export interface RadioGroupItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item>,
    VariantProps<typeof radioVariants> {
  /** Classe de tema aplicada apenas no estado checked (ex: "theme-class") */
  theme?: string
}

function RadioGroupItem({
  className,
  size = "default",
  theme,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(theme, radioVariants({ size }), className)}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="grid place-content-center text-current"
      >
        <CircleIcon className="fill-current" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem, radioVariants }
