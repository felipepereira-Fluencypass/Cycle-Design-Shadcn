"use client"

import * as React from "react"
import type { LucideIcon } from "lucide-react"
import { CycleIcon } from "@/components/icons/CycleIcon"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export interface TaskCourseProps {
  /** Activity title */
  title: string
  /** Icon to display (Lucide component) */
  icon: LucideIcon
  /** Activity type label shown in badge (e.g. "Vídeo", "Quiz") */
  typeLabel: string
  /** Duration or meta text (e.g. "12 min") */
  duration?: string
  /** Whether this task is the currently active one */
  active?: boolean
  /** Whether this task is completed (controls checkbox state) */
  completed?: boolean
  /** Callback when checkbox changes */
  onCompletedChange?: (checked: boolean) => void
  /** Callback when task row is clicked */
  onClick?: () => void
  className?: string
}

function TaskCourse({
  title,
  icon,
  typeLabel,
  duration,
  active = false,
  completed = false,
  onCompletedChange,
  onClick,
  className,
}: TaskCourseProps) {
  return (
    <div
      data-slot="task-course"
      data-active={active || undefined}
      data-completed={completed || undefined}
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
        "relative flex items-start gap-3 cursor-pointer outline-none transition-colors",
        "py-2 md:py-4 pr-4 md:pr-6",
        "focus-visible:ring-[3px] focus-visible:ring-ring/50",
        active
          ? "theme-class bg-background hover:bg-muted/50 pl-[calc(4px+theme(spacing.4))] md:pl-[calc(4px+theme(spacing.6))]"
          : "bg-background hover:bg-muted/50 pl-4 md:pl-6",
        className
      )}
    >
      {/* Active indicator bar */}
      {active && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-sm" />
      )}

      {/* Icon */}
      <div className="shrink-0 mt-0.5 text-muted-foreground">
        <CycleIcon icon={icon} size="xs" decorative />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <span className="text-sm leading-5 text-foreground line-clamp-2">
          {title}
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Badge variant={active ? "default" : "muted"} size="sm">
            {typeLabel}
          </Badge>
          {duration && (
            <>
              <span className="text-muted-foreground text-xs">•</span>
              <span className="text-muted-foreground text-xs">{duration}</span>
            </>
          )}
        </div>
      </div>

      {/* Checkbox */}
      <div className="shrink-0 mt-1" onClick={(e) => e.stopPropagation()}>
        <Checkbox
          variant="circular"
          size="lg"
          checked={completed}
          onCheckedChange={(checked) => onCompletedChange?.(checked === true)}
          theme={completed ? "theme-positive" : undefined}
        />
      </div>
    </div>
  )
}

export { TaskCourse }
