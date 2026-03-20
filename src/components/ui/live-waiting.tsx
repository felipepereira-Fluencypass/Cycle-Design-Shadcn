"use client"

import * as React from "react"
import { RadioIcon } from "lucide-react"
import { CycleIcon } from "@/components/icons/CycleIcon"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

/* ─── Types ─── */

export interface LiveWaitingProps {
  /** Scheduled start time of the live */
  scheduledAt: Date
  /** Teacher/instructor display name */
  teacherName?: string
  /** Teacher avatar URL */
  teacherAvatar?: string
  /** Live class topic/subject */
  topic?: string
  className?: string
}

/* ─── Helpers ─── */

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  total: number
}

function calcTimeLeft(target: Date): TimeLeft {
  const total = Math.max(0, target.getTime() - Date.now())
  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    total,
  }
}

function padTwo(n: number): string {
  return n.toString().padStart(2, "0")
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

/* ─── Sub-components ─── */

function CountdownUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center justify-center size-14 sm:size-16 rounded-xl bg-muted border border-border text-2xl sm:text-3xl font-bold text-foreground tabular-nums">
        {value}
      </div>
      <span className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  )
}

/* ─── Component ─── */

function LiveWaiting({
  scheduledAt,
  teacherName,
  teacherAvatar,
  topic,
  className,
}: LiveWaitingProps) {
  const [timeLeft, setTimeLeft] = React.useState<TimeLeft>(() =>
    calcTimeLeft(scheduledAt)
  )

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft(scheduledAt))
    }, 1000)
    return () => clearInterval(timer)
  }, [scheduledAt])

  const hasStarted = timeLeft.total === 0

  return (
    <div
      data-slot="live-waiting"
      className={cn(
        "flex flex-col items-center justify-center gap-6 py-12 sm:py-16 px-4",
        className
      )}
    >
      {/* Live badge */}
      <Badge variant="destructive" size="lg" className="gap-1.5">
        <CycleIcon icon={RadioIcon} size="2xs" decorative />
        {hasStarted ? "Começando..." : "Aula ao Vivo"}
      </Badge>

      {/* Topic */}
      {topic && (
        <h2 className="text-lg sm:text-xl font-semibold text-foreground text-center max-w-md leading-snug">
          {topic}
        </h2>
      )}

      {/* Countdown */}
      {!hasStarted && (
        <div className="flex items-center gap-3">
          {timeLeft.days > 0 && (
            <>
              <CountdownUnit value={padTwo(timeLeft.days)} label="Dias" />
              <span className="text-2xl font-bold text-muted-foreground mt-[-20px]">:</span>
            </>
          )}
          <CountdownUnit value={padTwo(timeLeft.hours)} label="Horas" />
          <span className="text-2xl font-bold text-muted-foreground mt-[-20px]">:</span>
          <CountdownUnit value={padTwo(timeLeft.minutes)} label="Min" />
          <span className="text-2xl font-bold text-muted-foreground mt-[-20px]">:</span>
          <CountdownUnit value={padTwo(timeLeft.seconds)} label="Seg" />
        </div>
      )}

      {/* Scheduled date */}
      <p className="text-sm text-muted-foreground">
        {scheduledAt.toLocaleDateString("pt-BR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>

      {/* Teacher info */}
      {teacherName && (
        <div className="flex items-center gap-3 mt-2">
          <Avatar size="lg">
            {teacherAvatar && (
              <AvatarImage src={teacherAvatar} alt={teacherName} />
            )}
            <AvatarFallback className="bg-primary text-primary-foreground">
              {getInitials(teacherName)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">
              {teacherName}
            </span>
            <span className="text-xs text-muted-foreground">Professor(a)</span>
          </div>
        </div>
      )}
    </div>
  )
}

export { LiveWaiting }
