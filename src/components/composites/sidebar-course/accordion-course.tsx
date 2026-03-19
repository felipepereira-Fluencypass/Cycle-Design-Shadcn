"use client"

import * as React from "react"
import { ChevronDownIcon, ChevronRightIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { CycleIcon } from "@/components/icons/CycleIcon"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export interface AccordionCourseProps {
  /** Titulo da unit ou lesson */
  title: string
  /** Progresso atual (ex: 1) */
  completedCount: number
  /** Total de items (ex: 7) */
  totalCount: number
  /** Texto da tag live (ex: "Liveclass hoje"). Omitir para esconder. */
  liveLabel?: string
  /** Conteudo expandido — aceita qualquer componente de lista */
  children: React.ReactNode
  /** Inicia aberto */
  defaultOpen?: boolean
  /** Identificador unico para o accordion (usado pelo Radix) */
  value?: string
  className?: string
}

function AccordionCourse({
  title,
  completedCount,
  totalCount,
  liveLabel,
  children,
  defaultOpen = false,
  value = "course-item",
  className,
}: AccordionCourseProps) {
  const isCompleted = completedCount >= totalCount

  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue={defaultOpen ? value : undefined}
      data-slot="accordion-course"
      className={cn("w-full", className)}
    >
      <AccordionPrimitive.Item value={value} className="border-b border-border">
        <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger
            data-slot="accordion-course-trigger"
            className={cn(
              "flex w-full flex-col items-start gap-1 bg-muted cursor-pointer outline-none transition-all",
              "p-4 md:p-6",
              "focus-visible:ring-[3px] focus-visible:ring-ring/50",
              "[&[data-state=open]_.chevron-right]:hidden",
              "[&[data-state=closed]_.chevron-down]:hidden"
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
                <span className="chevron-right text-muted-foreground">
                  <CycleIcon icon={ChevronRightIcon} size="xs" decorative />
                </span>
                <span className="chevron-down text-muted-foreground">
                  <CycleIcon icon={ChevronDownIcon} size="xs" decorative />
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
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content
          data-slot="accordion-course-content"
          className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        >
          <div>{children}</div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  )
}

export { AccordionCourse }
