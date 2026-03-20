"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"
import { CycleIcon } from "@/components/icons/CycleIcon"
import { Button } from "@/components/ui/button"
import { FileCard } from "@/components/ui/file-card"
import { ReportButton, type ReportButtonProps } from "./report-button"
import { cn } from "@/lib/utils"

/* ─── Types ─── */

export interface ContentCourseFile {
  /** Titulo do arquivo */
  title: string
  /** Tipo do arquivo (ex: "PDF", "DOCX") */
  fileType: string
  /** Tamanho do arquivo (ex: "180 KB") */
  fileSize: string
  /** URL de download */
  href: string
}

export interface ContentCourseProps {
  /** Titulo da atividade */
  title: string
  /** Subtitulo (lesson name, tipo, duracao, etc.) */
  subtitle?: string
  /** Se a atividade esta concluida */
  completed?: boolean
  /** Callback ao marcar/desmarcar como concluido */
  onCompletedChange?: (completed: boolean) => void
  /** Callback para avancar automaticamente apos concluir (chamado apos delay) */
  onAutoAdvance?: () => void
  /** Delay em ms antes de avancar automaticamente (default: 1500) */
  autoAdvanceDelay?: number
  /** Texto do botao de concluir (default: "Marcar concluído") */
  completeLabel?: string
  /** Texto do botao quando concluido (default: "Concluído") */
  completedLabel?: string
  /** Titulo da secao de descricao (default: "Sobre esta aula") */
  descriptionTitle?: string
  /** Descricao da atividade (texto livre) */
  description?: string
  /** Arquivos para download */
  files?: ContentCourseFile[]
  /** Titulo da secao de arquivos (default: "Material de apoio") */
  filesSectionTitle?: string
  /** Callback ao enviar report de problema */
  onReport?: ReportButtonProps["onSubmit"]
  /** Conteudo especifico do tipo de atividade (video, audio, quiz, etc.) */
  children: React.ReactNode
  className?: string
}

/* ─── Component ─── */

function ContentCourse({
  title,
  subtitle,
  completed = false,
  onCompletedChange,
  onAutoAdvance,
  autoAdvanceDelay = 1500,
  completeLabel = "Marcar concluído",
  completedLabel = "Concluído",
  descriptionTitle = "Sobre esta aula",
  description,
  files,
  filesSectionTitle = "Material de apoio",
  onReport,
  children,
  className,
}: ContentCourseProps) {
  /* Auto-advance after marking as completed */
  React.useEffect(() => {
    if (!completed || !onAutoAdvance) return
    const timer = setTimeout(onAutoAdvance, autoAdvanceDelay)
    return () => clearTimeout(timer)
  }, [completed, onAutoAdvance, autoAdvanceDelay])

  return (
    <div
      data-slot="content-course"
      className={cn("relative mx-auto w-full max-w-[1240px]", className)}
    >
      {/* Wrapper with vertical gap and padding */}
      <div className="flex flex-col gap-6 py-4 sm:py-6 sm:px-10">
        {/* Media slot (video, audio, quiz, etc.) */}
        <div data-slot="content-course-media">
          {children}
        </div>

        {/* Content below media — padded on mobile */}
        <div className="flex flex-col gap-6 px-4 sm:px-0">
          {/* Header: title + button */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground leading-[30px] sm:leading-8">
                {title}
              </h1>
              {subtitle && (
                <p className="text-sm sm:text-base text-muted-foreground leading-5 sm:leading-6">
                  {subtitle}
                </p>
              )}
            </div>

            {onCompletedChange && (
              <Button
                variant="default"
                size="lg"
                className={cn(
                  "shrink-0 gap-2 self-start",
                  completed ? "theme-group" : "theme-class"
                )}
                onClick={() => onCompletedChange(!completed)}
              >
                {completed ? completedLabel : completeLabel}
                {completed && (
                  <CycleIcon icon={CheckIcon} size="xs" decorative />
                )}
              </Button>
            )}
          </div>

          {/* Description card */}
          {description && (
            <div className="bg-muted border border-border rounded-2xl px-6 py-6 flex flex-col gap-4">
              <h2 className="text-base sm:text-lg font-semibold tracking-tight text-foreground">
                {descriptionTitle}
              </h2>
              <div className="text-sm sm:text-base text-foreground leading-5 sm:leading-6 whitespace-pre-line">
                {description}
              </div>
            </div>
          )}

          {/* Files card */}
          {files && files.length > 0 && (
            <div className="bg-muted border border-border rounded-2xl p-6 flex flex-col gap-6">
              <h2 className="text-lg font-semibold tracking-tight text-foreground">
                {filesSectionTitle}
              </h2>
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
                {files.map((file, index) => (
                  <a
                    key={index}
                    href={file.href}
                    download
                    className="block sm:flex-1 sm:min-w-[200px] sm:max-w-[calc(33.333%-16px)]"
                  >
                    <FileCard
                      title={file.title}
                      fileType={file.fileType}
                      fileSize={file.fileSize}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating report button */}
      <ReportButton onSubmit={onReport} />
    </div>
  )
}

export { ContentCourse }
