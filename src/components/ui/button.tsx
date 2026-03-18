import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-lg whitespace-nowrap transition-all outline-none cursor-pointer focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "text-primary hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2 button-md has-[>svg]:px-3 [&_svg:not([class*='size-'])]:size-6 [&_svg]:stroke-[1.5]",
        xs: "h-6 px-2 py-1 button-sm has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3 [&_svg]:stroke-[1]",
        sm: "h-8 px-3 py-2 button-sm has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-4 [&_svg]:stroke-[1.2]",
        lg: "h-12 px-6 py-3 button-lg has-[>svg]:px-4 [&_svg:not([class*='size-'])]:size-6 [&_svg]:stroke-[1.5]",
        icon: "size-10 [&_svg:not([class*='size-'])]:size-6 [&_svg]:stroke-[1.5]",
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

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
