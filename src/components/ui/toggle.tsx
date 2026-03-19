"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg whitespace-nowrap text-sm font-medium transition-all outline-none cursor-pointer focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        outline:
          "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        primary:
          "bg-transparent text-muted-foreground hover:bg-primary/10 hover:text-primary data-[state=on]:bg-primary data-[state=on]:text-primary-foreground",
      },
      size: {
        default: "h-10 px-4 has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-5 [&_svg]:stroke-[1.5]",
        xs: "h-6 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3 [&_svg]:stroke-[1]",
        sm: "h-8 px-3 has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:stroke-[1.2]",
        lg: "h-12 px-6 text-base has-[>svg]:px-4 [&_svg:not([class*='size-'])]:size-6 [&_svg]:stroke-[1.5]",
        icon: "size-10 [&_svg:not([class*='size-'])]:size-5 [&_svg]:stroke-[1.5]",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3 [&_svg]:stroke-[1]",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-4 [&_svg]:stroke-[1.2]",
        "icon-lg": "size-12 [&_svg:not([class*='size-'])]:size-6 [&_svg]:stroke-[1.5]",
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
    VariantProps<typeof toggleVariants> {}

function Toggle({
  className,
  variant,
  size,
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
