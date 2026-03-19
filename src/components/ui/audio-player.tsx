"use client"

import * as React from "react"
import {
  MediaPlayer,
  MediaProvider,
  TimeSlider,
  VolumeSlider,
  Time,
  PlayButton,
  MuteButton,
  SeekButton,
  useMediaState,
  useMediaRemote,
  type MediaPlayerInstance,
} from "@vidstack/react"
import "@vidstack/react/player/styles/base.css"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  RotateCcw,
  RotateCw,
  Gauge,
  Check,
} from "lucide-react"
import { CycleIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

/* ─── Types ─── */

export interface AudioPlayerProps {
  /** URL do audio (mp3, ogg, m3u8) */
  src: string
  /** Nome da track/aula */
  title: string
  /** Subtitulo / nome do curso */
  subtitle?: string
  /** URL da imagem de capa (variante card) */
  coverArt?: string
  /** Alt text da imagem de capa */
  coverArtAlt?: string
  /** Variante de layout */
  variant?: "default" | "card"
  /** Icones, textos e sliders em primary-foreground — usar com .theme-* */
  filled?: boolean
  /** Iniciar automaticamente */
  autoPlay?: boolean
  /** Iniciar mutado */
  muted?: boolean
  /** Repetir ao terminar */
  loop?: boolean
  /** Exibir controle de velocidade (default: true — EdTech) */
  showSpeed?: boolean
  className?: string
}

/* ─── Shared styles ─── */

const controlBtnClass =
  "group/btn inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-foreground outline-none transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring group-data-[filled]:text-primary-foreground group-data-[filled]:hover:bg-primary-foreground/10"

/** Play, Pause e Volume usam icones filled (solid) — igual YouTube */
const filledIconClass =
  "fill-current !stroke-transparent text-foreground group-data-[filled]:text-primary-foreground"

const outlineIconClass =
  "text-foreground group-data-[filled]:text-primary-foreground"

/* ─── Sub-components ─── */

function AudioPlayControl() {
  const isPaused = useMediaState("paused")
  return (
    <PlayButton className={controlBtnClass}>
      {isPaused ? (
        <CycleIcon icon={Play} size="sm" decorative className={filledIconClass} />
      ) : (
        <CycleIcon icon={Pause} size="sm" decorative className={filledIconClass} />
      )}
    </PlayButton>
  )
}

function AudioSeekBackwardControl() {
  return (
    <SeekButton className={controlBtnClass} seconds={-10}>
      <CycleIcon icon={RotateCcw} size="sm" decorative className={outlineIconClass} />
    </SeekButton>
  )
}

function AudioSeekForwardControl() {
  return (
    <SeekButton className={controlBtnClass} seconds={10}>
      <CycleIcon icon={RotateCw} size="sm" decorative className={outlineIconClass} />
    </SeekButton>
  )
}

function AudioMuteControl() {
  const volume = useMediaState("volume")
  const isMuted = useMediaState("muted")

  const Icon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2

  return (
    <MuteButton className={controlBtnClass}>
      <CycleIcon icon={Icon} size="sm" decorative className={filledIconClass} />
    </MuteButton>
  )
}

function AudioVolumeControl() {
  return (
    <VolumeSlider.Root className="group relative hidden h-9 w-20 cursor-pointer touch-none select-none items-center outline-none sm:inline-flex">
      <VolumeSlider.Track className="relative h-[4px] w-full rounded-full bg-accent group-data-[filled]/root:bg-primary-foreground/30">
        <VolumeSlider.TrackFill className="absolute h-full w-[var(--slider-fill)] rounded-full bg-primary group-data-[filled]/root:bg-primary-foreground" />
      </VolumeSlider.Track>
      <VolumeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:opacity-100 group-data-[filled]/root:bg-primary-foreground" />
    </VolumeSlider.Root>
  )
}

function AudioSeekBar() {
  return (
    <TimeSlider.Root className="group relative inline-flex h-9 w-full cursor-pointer touch-none select-none items-center outline-none">
      <TimeSlider.Track className="relative h-[4px] w-full rounded-full bg-accent group-data-[filled]/root:bg-primary-foreground/30">
        <TimeSlider.Progress className="absolute h-full w-[var(--slider-progress)] rounded-full bg-accent-foreground/20 group-data-[filled]/root:bg-primary-foreground/20" />
        <TimeSlider.TrackFill className="absolute h-full w-[var(--slider-fill)] rounded-full bg-primary group-data-[filled]/root:bg-primary-foreground" />
      </TimeSlider.Track>
      <TimeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:opacity-100 group-data-[filled]/root:bg-primary-foreground" />

      {/* Time preview on hover */}
      <TimeSlider.Preview className="pointer-events-none flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100">
        <TimeSlider.Value className="rounded bg-popover px-1.5 py-0.5 text-[11px] font-mono text-popover-foreground border border-border shadow-sm" />
      </TimeSlider.Preview>
    </TimeSlider.Root>
  )
}

function AudioTimeDisplay() {
  return (
    <div className="flex items-center gap-1 text-xs font-mono text-muted-foreground tabular-nums group-data-[filled]:text-primary-foreground/80">
      <Time type="current" />
      <span>/</span>
      <Time type="duration" />
    </div>
  )
}

function AudioSpeedControl() {
  const playbackRate = useMediaState("playbackRate")
  const remote = useMediaRemote()
  const [open, setOpen] = React.useState(false)

  const rates = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={controlBtnClass}
      >
        {playbackRate === 1 ? (
          <CycleIcon icon={Gauge} size="sm" decorative className={outlineIconClass} />
        ) : (
          <span className="text-xs font-mono font-semibold text-foreground group-data-[filled]:text-primary-foreground">{playbackRate}x</span>
        )}
      </button>

      {open && (
        <>
          {/* Backdrop to close */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          <div className="absolute bottom-full right-0 z-50 mb-2 min-w-[120px] rounded-lg border border-border bg-popover p-1 shadow-lg">
            {rates.map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => {
                  remote.changePlaybackRate(rate)
                  setOpen(false)
                }}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm text-popover-foreground/80 transition-colors hover:bg-accent hover:text-popover-foreground",
                  playbackRate === rate && "text-popover-foreground font-medium"
                )}
              >
                <span className="size-4 flex items-center justify-center">
                  {playbackRate === rate && <CycleIcon icon={Check} size="2xs" decorative className="text-popover-foreground" />}
                </span>
                <span className="font-mono">{rate === 1 ? "Normal" : `${rate}x`}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/* ─── Main component ─── */

export function AudioPlayer({
  src,
  title,
  subtitle,
  coverArt,
  coverArtAlt = "",
  variant = "default",
  filled = false,
  autoPlay = false,
  muted = false,
  loop = false,
  showSpeed = true,
  className,
}: AudioPlayerProps) {
  const player = React.useRef<MediaPlayerInstance>(null)

  if (variant === "card") {
    return (
      <MediaPlayer
        ref={player}
        src={src}
        autoPlay={autoPlay}
        muted={muted}
        loop={loop}
        viewType="audio"
        data-filled={filled ? "" : undefined}
        className={cn(
          "group/root group !block w-full rounded-xl border border-border bg-card p-4 shadow-sm md:p-6",
          className
        )}
      >
        <MediaProvider className="!hidden" />

        {/* Top: cover art + text */}
        <div className="flex gap-4 mb-4 md:gap-5 md:mb-6">
          {coverArt && (
            <img
              src={coverArt}
              alt={coverArtAlt}
              className="size-16 shrink-0 rounded-lg object-cover bg-muted md:size-24 md:rounded-xl"
            />
          )}
          <div className="flex min-w-0 flex-col justify-center">
            <p className={cn(
              "truncate text-sm font-semibold md:text-base",
              filled ? "text-primary-foreground" : "text-card-foreground"
            )}>{title}</p>
            {subtitle && (
              <p className={cn(
                "truncate text-xs md:text-sm md:mt-0.5",
                filled ? "text-primary-foreground/70" : "text-muted-foreground"
              )}>{subtitle}</p>
            )}
          </div>
        </div>

        {/* Seek bar */}
        <div className="flex w-full items-center">
          <AudioSeekBar />
        </div>

        {/* Time */}
        <div className="flex items-center justify-between px-0.5 -mt-1 mb-1 md:mb-2">
          <div className={cn(
            "text-[11px] font-mono tabular-nums md:text-xs",
            filled ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>
            <Time type="current" />
          </div>
          <div className={cn(
            "text-[11px] font-mono tabular-nums md:text-xs",
            filled ? "text-primary-foreground/80" : "text-muted-foreground"
          )}>
            <Time type="duration" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 md:gap-2">
          <AudioSeekBackwardControl />
          <AudioPlayControl />
          <AudioSeekForwardControl />

          <div className="flex-1" />

          {showSpeed && <AudioSpeedControl />}
          <AudioMuteControl />
          <AudioVolumeControl />
        </div>
      </MediaPlayer>
    )
  }

  // Default variant (compact bar)
  return (
    <MediaPlayer
      ref={player}
      src={src}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      viewType="audio"
      data-filled={filled ? "" : undefined}
      className={cn(
        "group/root group !flex w-full items-center gap-1.5 rounded-xl border border-border bg-card px-2 py-1.5 shadow-sm",
        className
      )}
    >
      <MediaProvider className="!hidden" />

      {/* Left controls */}
      <AudioSeekBackwardControl />
      <AudioPlayControl />
      <AudioSeekForwardControl />

      {/* Seek bar */}
      <div className="flex-1 px-1">
        <AudioSeekBar />
      </div>

      {/* Time */}
      <AudioTimeDisplay />

      {/* Right controls */}
      {showSpeed && <AudioSpeedControl />}
      <AudioMuteControl />
      <AudioVolumeControl />
    </MediaPlayer>
  )
}
