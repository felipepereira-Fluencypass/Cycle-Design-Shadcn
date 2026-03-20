"use client"

import * as React from "react"
import { ChevronRightIcon } from "lucide-react"
import { CycleIcon } from "@/components/icons/CycleIcon"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface UnitRowProps {
  /** Titulo da unit ou lesson */
  title: string
  /** Progresso atual (ex: 1) */
  completedCount: number
  /** Total de items (ex: 7) */
  totalCount: number
  /** Texto da tag live (ex: "Liveclass hoje"). Omitir para esconder. */
  liveLabel?: string
  /** Callback ao clicar na row (navega para detalhe) */
  onClick?: () => void
  className?: string
}

function UnitRow({
  title,
  completedCount,
  totalCount,
  liveLabel,
  onClick,
  className,
}: UnitRowProps) {
  const isCompleted = completedCount >= totalCount

  return (
    <div
      data-slot="unit-row"
      data-completed={isCompleted || undefined}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick?.()
        }
      }}
      className={cn(
        "flex w-full flex-col items-start gap-1 bg-muted cursor-pointer outline-none transition-colors",
        "p-4 md:p-6",
        "border-b border-border",
        "hover:bg-accent/50",
        "focus-visible:ring-[3px] focus-visible:ring-ring/50",
        className
      )}
    >
      {/* Header row */}
      <div className="flex items-center justify-between w-full">
        <span className="text-sm md:text-base text-foreground leading-5 md:leading-6 truncate text-left">
          {title}
        </span>
        <div className="flex items-center gap-2 shrink-0 ml-2">
          <Badge variant={isCompleted ? "progress-completed" : "progress"} size="sm">
            {completedCount}/{totalCount}
          </Badge>
          <span className="text-muted-foreground">
            <CycleIcon icon={ChevronRightIcon} size="xs" decorative />
          </span>
        </div>
      </div>

      {/* Live tag */}
      {liveLabel && (
        <div className="theme-class">
          <Badge variant="default" size="sm" className="gap-1">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary-foreground opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary-foreground" />
            </span>
            {liveLabel}
          </Badge>
        </div>
      )}
    </div>
  )
}

export { UnitRow }
