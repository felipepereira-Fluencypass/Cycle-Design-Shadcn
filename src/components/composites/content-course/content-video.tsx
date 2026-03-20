"use client"

import * as React from "react"
import { VideoPlayer } from "@/components/ui/video-player"
import { ContentCourse, type ContentCourseFile, type ContentCourseProps } from "./content-course"
import { cn } from "@/lib/utils"

/* ─── Types ─── */

export interface ContentVideoProps {
  /** URL do video (mp4, webm, m3u8 para HLS) */
  src: string
  /** URL da imagem de poster */
  poster?: string
  /** Alt text do poster */
  posterAlt?: string
  /** URL do arquivo de thumbnails (VTT sprite sheet) */
  thumbnails?: string
  /** Titulo da atividade */
  title: string
  /** Subtitulo (lesson name, tipo, duracao, etc.) */
  subtitle?: string
  /** Se a atividade esta concluida */
  completed?: boolean
  /** Callback ao marcar/desmarcar como concluido */
  onCompletedChange?: (completed: boolean) => void
  /** Descricao da atividade */
  description?: string
  /** Arquivos para download */
  files?: ContentCourseFile[]
  /** Titulo da secao de arquivos */
  filesSectionTitle?: string
  /** Callback para avancar automaticamente apos concluir */
  onAutoAdvance?: ContentCourseProps["onAutoAdvance"]
  /** Delay em ms antes de avancar (default: 1500) */
  autoAdvanceDelay?: ContentCourseProps["autoAdvanceDelay"]
  /** Callback ao enviar report de problema */
  onReport?: ContentCourseProps["onReport"]
  className?: string
}

/* ─── Component ─── */

function ContentVideo({
  src,
  poster,
  posterAlt,
  thumbnails,
  title,
  subtitle,
  completed,
  onCompletedChange,
  description,
  files,
  filesSectionTitle,
  onAutoAdvance,
  autoAdvanceDelay,
  onReport,
  className,
}: ContentVideoProps) {
  return (
    <ContentCourse
      title={title}
      subtitle={subtitle}
      completed={completed}
      onCompletedChange={onCompletedChange}
      description={description}
      files={files}
      filesSectionTitle={filesSectionTitle}
      onAutoAdvance={onAutoAdvance}
      autoAdvanceDelay={autoAdvanceDelay}
      onReport={onReport}
      className={className}
    >
      <VideoPlayer
        src={src}
        poster={poster}
        posterAlt={posterAlt}
        thumbnails={thumbnails}
      />
    </ContentCourse>
  )
}

export { ContentVideo }
