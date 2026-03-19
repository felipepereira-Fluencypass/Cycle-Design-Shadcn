"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { CycleIcon } from "@/components/icons/CycleIcon"
import { cn } from "@/lib/utils"

export interface AccordionConclusionProps {
  /** Texto exibido no trigger (ex: "3 units concluídas") */
  label: string
  /** Conteudo expandido — aceita qualquer componente */
  children: React.ReactNode
  /** Inicia aberto */
  defaultOpen?: boolean
  className?: string
}

function AccordionConclusion({
  label,
  children,
  defaultOpen = false,
  className,
}: AccordionConclusionProps) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue={defaultOpen ? "conclusion" : undefined}
      data-slot="accordion-conclusion"
      className={cn("w-full", className)}
    >
      <AccordionPrimitive.Item value="conclusion">
        <AccordionPrimitive.Header className="flex">
          <AccordionPrimitive.Trigger
            data-slot="accordion-conclusion-trigger"
            className={cn(
              "flex w-full items-center justify-between",
              "bg-background border-b border-border",
              "py-2 px-6 md:px-6",
              "text-sm text-muted-foreground",
              "cursor-pointer outline-none transition-all",
              "focus-visible:ring-[3px] focus-visible:ring-ring/50",
              "data-[state=open]:px-4 data-[state=open]:text-xs",
              "[&[data-state=open]>span>svg]:rotate-180"
            )}
          >
            <span className="shrink-0 whitespace-nowrap">{label}</span>
            <span className="shrink-0 text-muted-foreground transition-transform duration-200">
              <CycleIcon icon={ChevronDownIcon} size="xs" decorative />
            </span>
          </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
        <AccordionPrimitive.Content
          data-slot="accordion-conclusion-content"
          className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        >
          <div>{children}</div>
        </AccordionPrimitive.Content>
      </AccordionPrimitive.Item>
    </AccordionPrimitive.Root>
  )
}

export { AccordionConclusion }
