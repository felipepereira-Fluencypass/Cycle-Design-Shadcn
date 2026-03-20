"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg whitespace-nowrap text-sm font-medium transition-[color,box-shadow] outline-none cursor-pointer hover:bg-muted hover:text-muted-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-transparent",
        outline:
          "border border-neutral-border bg-transparent shadow-xs dark:shadow-none hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 has-[>svg]:px-3",
        xs: "h-6 px-2 text-xs has-[>svg]:px-1.5",
        sm: "h-8 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-6 text-base has-[>svg]:px-4",
        icon: "size-10",
        "icon-xs": "size-6",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ToggleProps
  extends React.ComponentProps<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  /** Preenche icones SVG quando o toggle esta ativo (on). Ideal para icones como Heart, Star, Bookmark. */
  fillOnPress?: boolean
}

function Toggle({
  className,
  variant,
  size,
  fillOnPress = false,
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(
        toggleVariants({ variant, size }),
        fillOnPress && "data-[state=on]:[&_svg]:fill-current",
        className
      )}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
