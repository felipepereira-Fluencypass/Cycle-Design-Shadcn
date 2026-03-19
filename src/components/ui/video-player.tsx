"use client"

import * as React from "react"
import {
  MediaPlayer,
  MediaProvider,
  Poster,
  Controls,
  Gesture,
  TimeSlider,
  VolumeSlider,
  Time,
  PlayButton,
  MuteButton,
  FullscreenButton,
  CaptionButton,
  PIPButton,
  SeekButton,
  Captions,
  useMediaState,
  useMediaRemote,
  useVideoQualityOptions,
  type MediaPlayerInstance,
} from "@vidstack/react"
import "@vidstack/react/player/styles/base.css"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Volume1,
  Maximize,
  Minimize,
  Captions as CaptionsIcon,
  CaptionsOff,
  PictureInPicture2,
  RotateCcw,
  RotateCw,
  Gauge,
  Settings,
  Check,
} from "lucide-react"
import { CycleIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

/* ─── Types ─── */

export interface VideoPlayerProps {
  /** URL do video (mp4, webm, m3u8 para HLS) */
  src: string
  /** URL da imagem de poster */
  poster?: string
  /** Alt text do poster */
  posterAlt?: string
  /** URL do arquivo de thumbnails (VTT sprite sheet) */
  thumbnails?: string
  /** Iniciar automaticamente */
  autoPlay?: boolean
  /** Iniciar mutado */
  muted?: boolean
  /** Repetir ao terminar */
  loop?: boolean
  className?: string
}

/* ─── Shared styles ─── */

const controlBtnClass =
  "group inline-flex size-9 cursor-pointer items-center justify-center rounded-md text-white outline-none transition-colors hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white/50"

/** Play, Pause e Volume usam icones filled (solid) no player — igual YouTube */
const filledIconClass = "text-white fill-current !stroke-transparent"

/* ─── Sub-components (controles customizados) ─── */

function PlayOverlay() {
  const isPaused = useMediaState("paused")
  const hasStarted = useMediaState("started")

  if (!isPaused && hasStarted) return null

  return (
    <PlayButton className="absolute inset-0 z-30 flex cursor-pointer items-center justify-center bg-black/30 transition-opacity">
      <div className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110">
        <CycleIcon icon={Play} size="lg" decorative className={cn(filledIconClass, "ml-1")} />
      </div>
    </PlayButton>
  )
}

function PlayControl() {
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

function SeekBackwardControl() {
  return (
    <SeekButton className={controlBtnClass} seconds={-10}>
      <CycleIcon icon={RotateCcw} size="sm" decorative className="text-white" />
    </SeekButton>
  )
}

function SeekForwardControl() {
  return (
    <SeekButton className={controlBtnClass} seconds={10}>
      <CycleIcon icon={RotateCw} size="sm" decorative className="text-white" />
    </SeekButton>
  )
}

function MuteControl() {
  const volume = useMediaState("volume")
  const isMuted = useMediaState("muted")

  const Icon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2

  return (
    <MuteButton className={controlBtnClass}>
      <CycleIcon icon={Icon} size="sm" decorative className={filledIconClass} />
    </MuteButton>
  )
}

function VolumeControl() {
  return (
    <VolumeSlider.Root className="group relative inline-flex h-9 w-20 cursor-pointer touch-none select-none items-center outline-none">
      <VolumeSlider.Track className="relative h-[4px] w-full rounded-full bg-white/30">
        <VolumeSlider.TrackFill className="absolute h-full w-[var(--slider-fill)] rounded-full bg-white" />
      </VolumeSlider.Track>
      <VolumeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:opacity-100" />
    </VolumeSlider.Root>
  )
}

function SeekBar({ thumbnails }: { thumbnails?: string }) {
  return (
    <TimeSlider.Root className="group relative inline-flex h-9 w-full cursor-pointer touch-none select-none items-center outline-none">
      <TimeSlider.Track className="relative h-[4px] w-full rounded-full bg-white/30">
        <TimeSlider.Progress className="absolute h-full w-[var(--slider-progress)] rounded-full bg-white/50" />
        <TimeSlider.TrackFill className="absolute h-full w-[var(--slider-fill)] rounded-full bg-white" />
      </TimeSlider.Track>
      <TimeSlider.Thumb className="absolute left-[var(--slider-fill)] top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-0 transition-opacity group-data-[active]:opacity-100 group-data-[dragging]:opacity-100" />

      {/* Thumbnail preview on hover */}
      {thumbnails && (
        <TimeSlider.Preview className="pointer-events-none flex flex-col items-center gap-1 opacity-0 transition-opacity duration-200 data-[visible]:opacity-100">
          <TimeSlider.Thumbnail.Root
            src={thumbnails}
            className="block h-[var(--thumbnail-height)] max-h-[160px] min-h-[80px] w-[var(--thumbnail-width)] min-w-[120px] max-w-[200px] overflow-hidden rounded-md border-2 border-white bg-black"
          >
            <TimeSlider.Thumbnail.Img />
          </TimeSlider.Thumbnail.Root>
          <TimeSlider.Value className="rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-mono text-white" />
        </TimeSlider.Preview>
      )}

      {/* Time preview (no thumbnails) */}
      {!thumbnails && (
        <TimeSlider.Preview className="pointer-events-none flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100">
          <TimeSlider.Value className="rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-mono text-white" />
        </TimeSlider.Preview>
      )}
    </TimeSlider.Root>
  )
}

function TimeDisplay() {
  return (
    <div className="flex items-center gap-1 text-xs font-mono text-white/80 tabular-nums">
      <Time type="current" />
      <span>/</span>
      <Time type="duration" />
    </div>
  )
}

function CaptionControl() {
  const track = useMediaState("textTrack")
  const hasTrack = track !== null
  return (
    <CaptionButton className={cn(controlBtnClass, !hasTrack && "opacity-50 pointer-events-none")}>
      {track ? (
        <CycleIcon icon={CaptionsIcon} size="sm" decorative className="text-white" />
      ) : (
        <CycleIcon icon={CaptionsOff} size="sm" decorative className="text-white" />
      )}
    </CaptionButton>
  )
}

function PIPControl() {
  const isPIP = useMediaState("pictureInPicture")
  return (
    <PIPButton className={controlBtnClass}>
      <CycleIcon icon={PictureInPicture2} size="sm" decorative className={cn("text-white", isPIP && "text-white/100")} />
    </PIPButton>
  )
}

function SpeedControl() {
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
          <CycleIcon icon={Gauge} size="sm" decorative className="text-white" />
        ) : (
          <span className="text-xs font-mono font-semibold text-white">{playbackRate}x</span>
        )}
      </button>

      {open && (
        <>
          {/* Backdrop to close */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          <div className="absolute bottom-full right-0 z-50 mb-2 min-w-[120px] rounded-lg border border-white/10 bg-black/90 backdrop-blur-md p-1 shadow-xl">
            {rates.map((rate) => (
              <button
                key={rate}
                type="button"
                onClick={() => {
                  remote.changePlaybackRate(rate)
                  setOpen(false)
                }}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white",
                  playbackRate === rate && "text-white font-medium"
                )}
              >
                <span className="size-4 flex items-center justify-center">
                  {playbackRate === rate && <CycleIcon icon={Check} size="2xs" decorative className="text-white" />}
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

function QualityControl() {
  const options = useVideoQualityOptions({ auto: true, sort: "descending" })
  const [open, setOpen] = React.useState(false)

  const currentLabel = options.selectedValue === "auto"
    ? `Auto${options.selectedQuality ? ` (${options.selectedQuality.height}p)` : ""}`
    : options.selectedQuality
      ? `${options.selectedQuality.height}p`
      : "Auto"

  if (options.disabled) return null

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={controlBtnClass}
      >
        <CycleIcon icon={Settings} size="sm" decorative className="text-white" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

          <div className="absolute bottom-full right-0 z-50 mb-2 min-w-[140px] rounded-lg border border-white/10 bg-black/90 backdrop-blur-md p-1 shadow-xl">
            <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/50">
              Qualidade
            </p>
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  option.select()
                  setOpen(false)
                }}
                className={cn(
                  "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white",
                  option.selected && "text-white font-medium"
                )}
              >
                <span className="size-4 flex items-center justify-center">
                  {option.selected && <CycleIcon icon={Check} size="2xs" decorative className="text-white" />}
                </span>
                <span className="font-mono">{option.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function FullscreenControl() {
  const isFullscreen = useMediaState("fullscreen")
  return (
    <FullscreenButton className={controlBtnClass}>
      {isFullscreen ? (
        <CycleIcon icon={Minimize} size="sm" decorative className="text-white" />
      ) : (
        <CycleIcon icon={Maximize} size="sm" decorative className="text-white" />
      )}
    </FullscreenButton>
  )
}

/* ─── Mobile settings menu (gear icon → Speed, Quality, Captions, PIP) ─── */

function MobileSettingsControl() {
  const [open, setOpen] = React.useState(false)
  const [subMenu, setSubMenu] = React.useState<"speed" | "quality" | null>(null)

  const playbackRate = useMediaState("playbackRate")
  const remote = useMediaRemote()
  const qualityOptions = useVideoQualityOptions({ auto: true, sort: "descending" })
  const track = useMediaState("textTrack")
  const isPIP = useMediaState("pictureInPicture")

  const rates = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]

  const close = () => {
    setOpen(false)
    setSubMenu(null)
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => { setOpen(!open); setSubMenu(null) }}
        className={controlBtnClass}
      >
        <CycleIcon icon={Settings} size="sm" decorative className="text-white" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={close} />

          <div className="absolute top-full right-0 z-50 mt-2 min-w-[180px] rounded-lg border border-white/10 bg-black/90 backdrop-blur-md p-1 shadow-xl">
            {/* Main menu */}
            {subMenu === null && (
              <>
                <button
                  type="button"
                  onClick={() => setSubMenu("speed")}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span className="flex items-center gap-2">
                    <CycleIcon icon={Gauge} size="xs" decorative className="text-white" />
                    Velocidade
                  </span>
                  <span className="font-mono text-xs text-white/50">
                    {playbackRate === 1 ? "Normal" : `${playbackRate}x`}
                  </span>
                </button>

                {!qualityOptions.disabled && (
                  <button
                    type="button"
                    onClick={() => setSubMenu("quality")}
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <span className="flex items-center gap-2">
                      <CycleIcon icon={Settings} size="xs" decorative className="text-white" />
                      Qualidade
                    </span>
                    <span className="font-mono text-xs text-white/50">
                      {qualityOptions.selectedQuality ? `${qualityOptions.selectedQuality.height}p` : "Auto"}
                    </span>
                  </button>
                )}

                <CaptionButton
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <CycleIcon icon={track ? CaptionsIcon : CaptionsOff} size="xs" decorative className="text-white" />
                  Legendas {track ? "ON" : "OFF"}
                </CaptionButton>

                <PIPButton
                  className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <CycleIcon icon={PictureInPicture2} size="xs" decorative className="text-white" />
                  Picture-in-Picture
                </PIPButton>
              </>
            )}

            {/* Speed sub-menu */}
            {subMenu === "speed" && (
              <>
                <button
                  type="button"
                  onClick={() => setSubMenu(null)}
                  className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white/80"
                >
                  ← Velocidade
                </button>
                {rates.map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => {
                      remote.changePlaybackRate(rate)
                      close()
                    }}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white",
                      playbackRate === rate && "text-white font-medium"
                    )}
                  >
                    <span className="size-4 flex items-center justify-center">
                      {playbackRate === rate && <CycleIcon icon={Check} size="2xs" decorative className="text-white" />}
                    </span>
                    <span className="font-mono">{rate === 1 ? "Normal" : `${rate}x`}</span>
                  </button>
                ))}
              </>
            )}

            {/* Quality sub-menu */}
            {subMenu === "quality" && (
              <>
                <button
                  type="button"
                  onClick={() => setSubMenu(null)}
                  className="flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white/80"
                >
                  ← Qualidade
                </button>
                {qualityOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      option.select()
                      close()
                    }}
                    className={cn(
                      "flex w-full items-center gap-2 rounded-md px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white",
                      option.selected && "text-white font-medium"
                    )}
                  >
                    <span className="size-4 flex items-center justify-center">
                      {option.selected && <CycleIcon icon={Check} size="2xs" decorative className="text-white" />}
                    </span>
                    <span className="font-mono">{option.label}</span>
                  </button>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

/* ─── Gesture helpers ─── */

type SeekDirection = "backward" | "forward"

const DOUBLE_TAP_THRESHOLD = 300
const CONTROLS_HIDE_DELAY = 4000

/** Desktop-only: double-tap left/right edges to seek ±10s */
function SeekGestureZone({
  side,
  onSeekFeedback,
}: {
  side: "left" | "right"
  onSeekFeedback: (direction: SeekDirection) => void
}) {
  const remote = useMediaRemote()
  const currentTime = useMediaState("currentTime")
  const lastTapRef = React.useRef(0)

  const handlePointerUp = React.useCallback(
    (e: React.PointerEvent) => {
      const now = Date.now()
      const delta = now - lastTapRef.current
      lastTapRef.current = now

      if (delta < DOUBLE_TAP_THRESHOLD) {
        e.stopPropagation()
        const seconds = side === "left" ? -10 : 10
        remote.seek(currentTime + seconds)
        onSeekFeedback(side === "left" ? "backward" : "forward")
      }
    },
    [remote, currentTime, side, onSeekFeedback]
  )

  return (
    <div
      className={cn(
        "absolute top-0 z-30 hidden sm:block h-full w-1/5",
        side === "left" ? "left-0" : "right-0"
      )}
      onPointerUp={handlePointerUp}
    />
  )
}

function SeekFeedbackOverlay({
  direction,
  visible,
  seconds,
}: {
  direction: SeekDirection
  visible: boolean
  seconds: number
}) {
  const isBackward = direction === "backward"

  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 z-[35] flex h-full w-2/5 items-center transition-opacity duration-200",
        isBackward ? "left-0 justify-center" : "right-0 justify-center",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-1 transition-transform duration-300",
          visible ? "scale-100" : "scale-75"
        )}
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <CycleIcon
            icon={isBackward ? RotateCcw : RotateCw}
            size="sm"
            decorative
            className="text-white"
          />
        </div>
        <span className="text-xs font-semibold text-white drop-shadow-md">
          {seconds}s
        </span>
      </div>
    </div>
  )
}

/**
 * Mobile touch layer — manages all touch interactions:
 * - Single tap: toggle controls overlay
 * - Double tap left (0-33%): seek -10s
 * - Double tap center (33-66%): toggle fullscreen
 * - Double tap right (66-100%): seek +10s
 */
function MobileTouchLayer({
  showControls,
  onToggleControls,
  onSeekFeedback,
}: {
  showControls: boolean
  onToggleControls: () => void
  onSeekFeedback: (direction: SeekDirection) => void
}) {
  const remote = useMediaRemote()
  const currentTime = useMediaState("currentTime")
  const isFullscreen = useMediaState("fullscreen")
  const lastTapRef = React.useRef(0)
  const lastTapXRef = React.useRef(0)
  const tapTimerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const handleTap = React.useCallback(
    (e: React.PointerEvent) => {
      // Ignore if target is a button or interactive element
      if ((e.target as HTMLElement).closest("button, [role=slider], [data-slot]")) return

      const now = Date.now()
      const delta = now - lastTapRef.current
      const rect = containerRef.current?.getBoundingClientRect()

      if (delta < DOUBLE_TAP_THRESHOLD && rect) {
        // Double tap detected
        clearTimeout(tapTimerRef.current)
        lastTapRef.current = 0 // reset so triple tap doesn't count

        const x = lastTapXRef.current
        const relativeX = (x - rect.left) / rect.width

        if (relativeX < 0.33) {
          // Left third → seek backward
          remote.seek(currentTime - 10)
          onSeekFeedback("backward")
        } else if (relativeX > 0.66) {
          // Right third → seek forward
          remote.seek(currentTime + 10)
          onSeekFeedback("forward")
        } else {
          // Center → toggle fullscreen
          if (isFullscreen) {
            remote.exitFullscreen()
          } else {
            remote.enterFullscreen()
          }
        }
      } else {
        // First tap — wait to see if double tap follows
        lastTapRef.current = now
        lastTapXRef.current = e.clientX

        clearTimeout(tapTimerRef.current)
        tapTimerRef.current = setTimeout(() => {
          // Single tap confirmed → toggle controls
          onToggleControls()
        }, DOUBLE_TAP_THRESHOLD)
      }
    },
    [remote, currentTime, isFullscreen, onToggleControls, onSeekFeedback]
  )

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-30 sm:hidden"
      onPointerUp={handleTap}
    />
  )
}

/* ─── Mobile center play button (part of custom overlay) ─── */

function MobilePlayControl() {
  const isPaused = useMediaState("paused")
  return (
    <PlayButton className="flex size-14 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white outline-none transition-transform hover:scale-110 focus-visible:ring-2 focus-visible:ring-white/50">
      {isPaused ? (
        <CycleIcon icon={Play} size="lg" decorative className={cn(filledIconClass, "ml-1")} />
      ) : (
        <CycleIcon icon={Pause} size="lg" decorative className={filledIconClass} />
      )}
    </PlayButton>
  )
}

/* ─── Main component ─── */

export function VideoPlayer({
  src,
  poster,
  posterAlt = "",
  thumbnails,
  autoPlay = false,
  muted = false,
  loop = false,
  className,
}: VideoPlayerProps) {
  const player = React.useRef<MediaPlayerInstance>(null)

  // Seek feedback state with accumulation (like YouTube)
  const [seekFeedback, setSeekFeedback] = React.useState<SeekDirection | null>(null)
  const [seekAccumulated, setSeekAccumulated] = React.useState(0)
  const feedbackTimeout = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  // Mobile controls visibility (managed manually)
  const [mobileControlsVisible, setMobileControlsVisible] = React.useState(false)
  const hideTimerRef = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  const handleSeekFeedback = React.useCallback((direction: SeekDirection) => {
    clearTimeout(feedbackTimeout.current)

    setSeekFeedback((prev) => {
      if (prev === direction) {
        // Same direction → accumulate
        setSeekAccumulated((s) => s + 10)
      } else {
        // New direction → reset
        setSeekAccumulated(10)
      }
      return direction
    })

    feedbackTimeout.current = setTimeout(() => {
      setSeekFeedback(null)
      setSeekAccumulated(0)
    }, 700)
  }, [])

  const toggleMobileControls = React.useCallback(() => {
    setMobileControlsVisible((prev) => {
      const next = !prev
      clearTimeout(hideTimerRef.current)
      if (next) {
        // Auto-hide after delay
        hideTimerRef.current = setTimeout(() => setMobileControlsVisible(false), CONTROLS_HIDE_DELAY)
      }
      return next
    })
  }, [])

  // Reset auto-hide when interacting with mobile controls
  const resetMobileHideTimer = React.useCallback(() => {
    clearTimeout(hideTimerRef.current)
    hideTimerRef.current = setTimeout(() => setMobileControlsVisible(false), CONTROLS_HIDE_DELAY)
  }, [])

  React.useEffect(() => {
    return () => {
      clearTimeout(feedbackTimeout.current)
      clearTimeout(hideTimerRef.current)
    }
  }, [])

  return (
    <MediaPlayer
      ref={player}
      src={src}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
      crossOrigin=""
      className={cn(
        "group relative aspect-video w-full overflow-hidden rounded-[16px] bg-black text-white",
        className
      )}
    >
      <MediaProvider>
        {poster && (
          <Poster
            className="absolute inset-0 block h-full w-full rounded-[16px] object-cover opacity-0 transition-opacity data-[visible]:opacity-100"
            src={poster}
            alt={posterAlt}
          />
        )}
      </MediaProvider>

      {/* Captions overlay */}
      <Captions className="absolute inset-0 bottom-[80px] z-10 select-none break-words text-center text-sm media-preview:opacity-0 [&>[data-part=cue]]:inline [&>[data-part=cue]]:bg-black/70 [&>[data-part=cue]]:px-2 [&>[data-part=cue]]:py-0.5 [&>[data-part=cue]]:text-white" />

      {/* Desktop: Play overlay (paused state — big play button) */}
      <div className="hidden sm:block">
        <PlayOverlay />
      </div>

      {/* Seek feedback indicators (accumulated like YouTube) */}
      <SeekFeedbackOverlay direction="backward" visible={seekFeedback === "backward"} seconds={seekAccumulated} />
      <SeekFeedbackOverlay direction="forward" visible={seekFeedback === "forward"} seconds={seekAccumulated} />

      {/* Desktop gestures — click to pause, double-click fullscreen */}
      <Gesture className="absolute inset-0 z-0 hidden sm:block h-full w-full" event="pointerup" action="toggle:paused" />
      <Gesture className="absolute inset-0 z-0 hidden sm:block h-full w-full" event="dblpointerup" action="toggle:fullscreen" />

      {/* Desktop: double-tap seek zones */}
      <SeekGestureZone side="left" onSeekFeedback={handleSeekFeedback} />
      <SeekGestureZone side="right" onSeekFeedback={handleSeekFeedback} />

      {/* Mobile: custom touch layer (single tap = controls, double tap = seek/fullscreen) */}
      <MobileTouchLayer
        showControls={mobileControlsVisible}
        onToggleControls={toggleMobileControls}
        onSeekFeedback={handleSeekFeedback}
      />

      {/* ─── Mobile controls overlay (manually toggled) ─── */}
      <div
        className={cn(
          "absolute inset-0 z-[31] flex flex-col sm:hidden transition-opacity duration-200 pointer-events-none",
          mobileControlsVisible ? "opacity-100" : "opacity-0"
        )}
        style={{ pointerEvents: mobileControlsVisible ? "auto" : "none" }}
      >
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40" />

        {/* Top bar: settings gear */}
        <div className="relative flex items-center justify-end px-3 pt-3" onClick={resetMobileHideTimer}>
          <MobileSettingsControl />
        </div>

        {/* Center: Play/Pause */}
        <div className="relative flex flex-1 items-center justify-center">
          <MobilePlayControl />
        </div>

        {/* Bottom: seek bar + controls */}
        <div className="relative px-3 pb-2" onClick={resetMobileHideTimer}>
          <SeekBar thumbnails={thumbnails} />
          <div className="flex items-center gap-1">
            <MuteControl />
            <TimeDisplay />
            <div className="flex-1" />
            <FullscreenControl />
          </div>
        </div>
      </div>

      {/* ─── Desktop controls overlay (Vidstack managed — hover/paused) ─── */}
      <Controls.Root className="absolute inset-0 z-20 hidden sm:flex h-full w-full flex-col bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-data-[started]:group-hover:opacity-100 group-data-[paused]:opacity-100">
        <div className="flex-1" />

        {/* Seek bar */}
        <Controls.Group className="flex w-full items-center px-3">
          <SeekBar thumbnails={thumbnails} />
        </Controls.Group>

        {/* Bottom bar */}
        <Controls.Group className="flex w-full items-center gap-1 px-2 pb-2">
          <PlayControl />
          <SeekBackwardControl />
          <SeekForwardControl />
          <MuteControl />
          <VolumeControl />
          <TimeDisplay />

          <div className="flex-1" />

          <CaptionControl />
          <SpeedControl />
          <QualityControl />
          <PIPControl />
          <FullscreenControl />
        </Controls.Group>
      </Controls.Root>
    </MediaPlayer>
  )
}
