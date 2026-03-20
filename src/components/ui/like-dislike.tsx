"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ThumbsUp, ThumbsDown, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { CycleIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

/* ---------------------------------- CVA ---------------------------------- */

const likeDislikeVariants = cva("inline-flex flex-col", {
  variants: {
    size: {
      default: "gap-2",
      xs: "gap-1.5",
      sm: "gap-1.5",
      lg: "gap-3",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

/** Maps component size → toggle button dimensions + icon size + burst ray size */
const sizeConfig = {
  xs: { iconBtn: "size-6", icon: "xs" as const, text: "text-xs", rayH: "h-1", rayW: "w-[2px]" },
  sm: { iconBtn: "size-8", icon: "xs" as const, text: "text-xs", rayH: "h-1.5", rayW: "w-[2px]" },
  default: { iconBtn: "size-10", icon: "sm" as const, text: "text-sm", rayH: "h-2", rayW: "w-[2px]" },
  lg: { iconBtn: "size-12", icon: "sm" as const, text: "text-base", rayH: "h-2.5", rayW: "w-[3px]" },
} as const

/** Angles and colors for the burst rays */
const BURST_RAYS = [
  { angle: 0, delay: "0ms" },
  { angle: 45, delay: "30ms" },
  { angle: 90, delay: "60ms" },
  { angle: 135, delay: "20ms" },
  { angle: 180, delay: "50ms" },
  { angle: 225, delay: "10ms" },
  { angle: 270, delay: "40ms" },
  { angle: 315, delay: "25ms" },
]

/* -------------------------------- Types --------------------------------- */

export type LikeDislikeValue = "like" | "dislike" | null

export interface LikeDislikeProps
  extends Omit<React.ComponentProps<"div">, "onChange" | "defaultValue">,
    VariantProps<typeof likeDislikeVariants> {
  /** Current value — controlled */
  value?: LikeDislikeValue
  /** Default value — uncontrolled */
  defaultValue?: LikeDislikeValue
  /** Called when the value changes */
  onValueChange?: (value: LikeDislikeValue) => void
  /** Show feedback textarea when dislike is selected */
  showFeedback?: boolean
  /** Placeholder for the feedback textarea */
  feedbackPlaceholder?: string
  /** Label for the feedback submit button */
  feedbackSubmitLabel?: string
  /** Called when feedback is submitted */
  onFeedbackSubmit?: (feedback: string) => void
  /** Theme class for the burst animation rays (e.g. "theme-brand"). Default: "theme-brand" */
  burstTheme?: string
  /** Disabled state */
  disabled?: boolean
}

/* ------------------------------ Component ------------------------------- */

function LikeDislike({
  className,
  size = "default",
  value: valueProp,
  defaultValue = null,
  onValueChange,
  showFeedback = false,
  feedbackPlaceholder = "O que voce nao gostou?",
  feedbackSubmitLabel = "Enviar",
  onFeedbackSubmit,
  burstTheme = "theme-brand",
  disabled = false,
  ...props
}: LikeDislikeProps) {
  /* --- State --- */
  const isControlled = valueProp !== undefined
  const [internalValue, setInternalValue] = React.useState<LikeDislikeValue>(defaultValue)
  const currentValue = isControlled ? valueProp : internalValue

  const [feedbackText, setFeedbackText] = React.useState("")
  const [isBursting, setIsBursting] = React.useState(false)

  const s = sizeConfig[size ?? "default"]

  /* --- Handlers --- */
  function handleClick(target: "like" | "dislike") {
    if (disabled) return
    const next: LikeDislikeValue = currentValue === target ? null : target

    if (!isControlled) setInternalValue(next)
    onValueChange?.(next)

    // Trigger burst animation when transitioning TO like
    if (target === "like" && next === "like") {
      setIsBursting(true)
    }
  }

  function handleBurstEnd() {
    setIsBursting(false)
  }

  function handleFeedbackSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (feedbackText.trim()) {
      onFeedbackSubmit?.(feedbackText.trim())
      setFeedbackText("")
    }
  }

  const isLiked = currentValue === "like"
  const isDisliked = currentValue === "dislike"
  const showFeedbackPanel = isDisliked && showFeedback

  /* --- Shared button classes --- */
  const btnBase = cn(
    "relative inline-flex shrink-0 items-center justify-center rounded-lg transition-[color,box-shadow,background-color] outline-none cursor-pointer",
    "hover:bg-muted hover:text-muted-foreground",
    "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    s.iconBtn
  )

  return (
    <div
      data-slot="like-dislike"
      className={cn("relative inline-flex", className)}
      {...props}
    >
      {/* Button row */}
      <div className="inline-flex items-center gap-1" role="group" aria-label="Avaliar conteudo">
        {/* Like */}
        <button
          type="button"
          aria-pressed={isLiked}
          aria-label="Gostei"
          disabled={disabled}
          onClick={() => handleClick("like")}
          className={cn(
            btnBase,
            isLiked && "bg-accent text-accent-foreground [&_svg]:fill-current"
          )}
        >
          {/* Burst rays (behind the icon) */}
          {isBursting && (
            <span
              className={cn("absolute inset-0 z-0 pointer-events-none", burstTheme)}
              aria-hidden="true"
            >
              {BURST_RAYS.map(({ angle, delay }) => (
                <span
                  key={angle}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ rotate: `${angle}deg` }}
                >
                  <span
                    className={cn(
                      "block rounded-full bg-primary opacity-0 animate-like-burst",
                      s.rayW, s.rayH
                    )}
                    style={{ animationDelay: delay }}
                  />
                </span>
              ))}
            </span>
          )}

          {/* Icon with pop animation (above rays) */}
          <span
            className={cn("relative z-10", isBursting && "animate-like-pop")}
            onAnimationEnd={handleBurstEnd}
          >
            <CycleIcon icon={ThumbsUp} size={s.icon} decorative />
          </span>
        </button>

        {/* Dislike */}
        <button
          type="button"
          aria-pressed={isDisliked}
          aria-label="Nao gostei"
          disabled={disabled}
          onClick={() => handleClick("dislike")}
          className={cn(
            btnBase,
            isDisliked && "bg-accent text-accent-foreground [&_svg]:fill-current"
          )}
        >
          <CycleIcon icon={ThumbsDown} size={s.icon} decorative />
        </button>
      </div>

      {/* Floating feedback panel */}
      {showFeedbackPanel && (
        <div className="absolute left-0 top-full z-50 mt-2 w-72 rounded-lg border border-border bg-background p-3 shadow-md animate-in fade-in-0 zoom-in-95 slide-in-from-top-2">
          <div className="flex items-center justify-between mb-2">
            <p className={cn("font-medium text-foreground", s.text)}>
              {feedbackPlaceholder}
            </p>
            <button
              type="button"
              onClick={() => handleClick("dislike")}
              className="inline-flex size-6 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <CycleIcon icon={X} size="xs" decorative />
            </button>
          </div>
          <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-2">
            <Textarea
              textareaSize="sm"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Conte-nos mais..."
              disabled={disabled}
              className="resize-none min-h-[60px]"
              aria-label="Feedback"
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                size="sm"
                disabled={disabled || !feedbackText.trim()}
              >
                {feedbackSubmitLabel}
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export { LikeDislike, likeDislikeVariants }
