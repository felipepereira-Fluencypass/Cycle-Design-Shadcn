"use client"

import * as React from "react"
import { ArrowLeftIcon } from "lucide-react"
import { CycleIcon } from "@/components/icons/CycleIcon"
import { Progress } from "@/components/ui/progress"
import { ProgressStage } from "@/components/ui/progress-stage"
import { cn } from "@/lib/utils"

export interface ProgressCourseProps {
  /** Titulo do curso ou unidade */
  title: string
  /** Callback ao clicar na seta de voltar */
  onBack?: () => void
  /** Mostra/esconde seta de voltar */
  showBack?: boolean
  /** Texto informativo acima do progresso (ex: "No seu ritmo, você conclui em 2 meses") */
  infoText?: string
  /** Texto e href do link ao lado do subtexto */
  link?: { label: string; href: string }
  /** Tipo de barra de progresso */
  progressType?: "bar" | "stage"
  /** Valor do progresso (0-100 para bar, 0-stages para stage) */
  progressValue: number
  /** Total de stages (usado apenas quando progressType="stage") */
  stages?: number
  /** Percentual exibido ao lado da barra */
  percentLabel?: string
  /** Tema de cor aplicado ao progresso (ex: "theme-class") */
  theme?: string
  className?: string
}

function ProgressCourse({
  title,
  onBack,
  showBack = true,
  infoText,
  link,
  progressType = "stage",
  progressValue,
  stages = 10,
  percentLabel,
  theme,
  className,
}: ProgressCourseProps) {
  return (
    <div
      data-slot="progress-course"
      className={cn(
        "flex flex-col gap-3 bg-muted border-b border-border",
        "p-4 md:p-6",
        className
      )}
    >
      {/* Title row */}
      <div className="flex items-center gap-2">
        {showBack && onBack && (
          <button
            type="button"
            onClick={onBack}
            className="shrink-0 text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Voltar"
          >
            <CycleIcon icon={ArrowLeftIcon} size="xs" decorative />
          </button>
        )}
        <h2 className="heading-md md:heading-md text-foreground font-semibold text-base md:text-lg leading-6 md:leading-7 tracking-tight truncate">
          {title}
        </h2>
      </div>

      {/* Info + link */}
      {infoText && (
        <div className="flex flex-col gap-0.5">
          <p className="text-sm md:text-base text-foreground leading-5 md:leading-6">
            {infoText}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground leading-[18px]">
              Quer avançar mais rápido?
            </span>
            {link && (
              <span className="theme-class">
                <a
                  href={link.href}
                  className="text-xs font-medium underline underline-offset-2 text-primary"
                >
                  {link.label}
                </a>
              </span>
            )}
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div className="flex items-center gap-2 w-full">
        {progressType === "stage" ? (
          <ProgressStage
            stages={stages}
            value={progressValue}
            theme={theme}
            className="flex-1"
          />
        ) : (
          <Progress
            value={progressValue}
            theme={theme}
            className="flex-1"
          />
        )}
        {percentLabel && (
          <span className="text-xs text-muted-foreground leading-[18px] shrink-0">
            {percentLabel}
          </span>
        )}
      </div>
    </div>
  )
}

export { ProgressCourse }
