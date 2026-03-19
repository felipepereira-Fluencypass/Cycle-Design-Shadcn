import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const progressStagePillVariants = cva("flex-1 rounded-full", {
  variants: {
    size: {
      xs: "h-1",
      sm: "h-1.5",
      default: "h-2",
      lg: "h-3",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export interface ProgressStageProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof progressStagePillVariants> {
  /** Numero total de stages (2–10) */
  stages: number
  /** Quantos stages estao preenchidos (0–stages) */
  value: number
  /** Classe de tema aplicada apenas nas pills preenchidas (ex: "theme-class") */
  theme?: string
}

function ProgressStage({
  stages,
  value,
  size = "default",
  theme,
  className,
  ...props
}: ProgressStageProps) {
  const total = Math.min(10, Math.max(2, stages))
  const filled = Math.min(total, Math.max(0, value))

  return (
    <div
      data-slot="progress-stage"
      className={cn("flex w-full gap-2", className)}
      {...props}
    >
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={cn(
            progressStagePillVariants({ size }),
            i < filled
              ? cn(theme, "bg-primary")
              : "bg-neutral-accent"
          )}
        />
      ))}
    </div>
  )
}

export { ProgressStage }
