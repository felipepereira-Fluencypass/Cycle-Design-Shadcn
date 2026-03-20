"use client"

import * as React from "react"
import { SendIcon, XIcon } from "lucide-react"
import { Dialog as DialogPrimitive } from "radix-ui"
import { CycleIcon } from "@/components/icons/CycleIcon"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"

/* ─── Types ─── */

export interface ReportButtonProps {
  /** Callback ao enviar o report */
  onSubmit?: (data: { reason: string; details: string }) => void
  className?: string
}

/* ─── Reasons ─── */

const REPORT_REASONS = [
  { value: "audio-video", label: "Problema no áudio ou vídeo" },
  { value: "content", label: "Erro no conteúdo" },
  { value: "navigation", label: "Problema de navegação" },
  { value: "other", label: "Outro" },
] as const

/* ─── Component ─── */

function ReportButton({ onSubmit, className }: ReportButtonProps) {
  const [open, setOpen] = React.useState(false)
  const [reason, setReason] = React.useState("")
  const [details, setDetails] = React.useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    onSubmit?.({ reason, details })
    setReason("")
    setDetails("")
    setOpen(false)
  }

  function handleOpenChange(value: boolean) {
    setOpen(value)
    if (!value) {
      setReason("")
      setDetails("")
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange}>
      <DialogPrimitive.Trigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className={cn(
            "absolute bottom-5 right-5 z-10 rounded-full shadow-sm border border-border bg-accent dark:bg-accent text-white hover:text-white transition-colors",
            className
          )}
          aria-label="Reportar problema"
        >
          <span className="text-sm font-bold leading-none" aria-hidden>?</span>
        </Button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-background shadow-lg data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <form onSubmit={handleSubmit}>
            {/* Header */}
            <div className="flex flex-col gap-1.5 p-6 pb-0">
              <DialogPrimitive.Title className="text-lg font-semibold text-foreground">
                Reportar problema
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="text-sm text-muted-foreground">
                Encontrou algo errado? Descreva o problema e nossa equipe vai analisar.
              </DialogPrimitive.Description>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              {/* Reason */}
              <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-foreground">
                  Tipo do problema
                </legend>
                <RadioGroup
                  value={reason}
                  onValueChange={setReason}
                  className="space-y-2"
                >
                  {REPORT_REASONS.map((r) => (
                    <label
                      key={r.value}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <RadioGroupItem value={r.value} />
                      <span className="text-sm text-foreground">{r.label}</span>
                    </label>
                  ))}
                </RadioGroup>
              </fieldset>

              {/* Details */}
              <div className="space-y-2">
                <label
                  htmlFor="report-details"
                  className="text-sm font-medium text-foreground"
                >
                  Detalhes{" "}
                  <span className="text-muted-foreground font-normal">
                    (opcional)
                  </span>
                </label>
                <textarea
                  id="report-details"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Descreva o que aconteceu..."
                  rows={3}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ring-offset-background resize-none"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex gap-2 p-6 pt-0">
              <DialogPrimitive.Close asChild>
                <Button type="button" variant="outline" className="flex-1">
                  Cancelar
                </Button>
              </DialogPrimitive.Close>
              <Button
                type="submit"
                disabled={!reason}
                className="flex-1 gap-2"
              >
                <CycleIcon icon={SendIcon} size="xs" decorative />
                Enviar
              </Button>
            </div>
          </form>

          {/* Close button */}
          <DialogPrimitive.Close className="absolute top-4 right-4 rounded-xs opacity-70 hover:opacity-100 transition-opacity">
            <CycleIcon icon={XIcon} size="xs" decorative />
            <span className="sr-only">Fechar</span>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export { ReportButton }
