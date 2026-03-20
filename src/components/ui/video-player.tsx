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
  Spinner,
  Track,
  Tooltip,
  LiveButton,
  MediaAnnouncer,
  useMediaState,
  useMediaRemote,
  useVideoQualityOptions,
  type MediaPlayerInstance,
} from "@vidstack/react"
// Desktop-only controls use the above. Mobile uses DefaultVideoLayout below.
import {
  DefaultVideoLayout,
  defaultLayoutIcons,
} from "@vidstack/react/player/layouts/default"
import "@vidstack/react/player/styles/base.css"
import "@vidstack/react/player/styles/default/theme.css"
import "@vidstack/react/player/styles/default/layouts/video.css"
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
  /** URL do arquivo VTT de chapters (marcadores de seção no timeline) */
  chapters?: string
  /** Exibir spinner durante buffering (default: true) */
  showBuffering?: boolean
  /** Habilitar anuncios de acessibilidade para screen readers (default: true) */
  announcer?: boolean
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

const tooltipClass =
  "z-50 rounded bg-black/90 px-2 py-1 text-xs font-medium text-white shadow-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"

/** Wraps a control button with a Vidstack tooltip. Desktop only (no hover on mobile). */
function ControlTooltip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Content className={tooltipClass} placement="top">
        {label}
      </Tooltip.Content>
    </Tooltip.Root>
  )
}

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
    <ControlTooltip label={isPaused ? "Reproduzir" : "Pausar"}>
      <PlayButton className={controlBtnClass}>
        {isPaused ? (
          <CycleIcon icon={Play} size="sm" decorative className={filledIconClass} />
        ) : (
          <CycleIcon icon={Pause} size="sm" decorative className={filledIconClass} />
        )}
      </PlayButton>
    </ControlTooltip>
  )
}

function SeekBackwardControl() {
  return (
    <ControlTooltip label="Retroceder 10s">
      <SeekButton className={controlBtnClass} seconds={-10}>
        <CycleIcon icon={RotateCcw} size="sm" decorative className="text-white" />
      </SeekButton>
    </ControlTooltip>
  )
}

function SeekForwardControl() {
  return (
    <ControlTooltip label="Avançar 10s">
      <SeekButton className={controlBtnClass} seconds={10}>
        <CycleIcon icon={RotateCw} size="sm" decorative className="text-white" />
      </SeekButton>
    </ControlTooltip>
  )
}

function MuteControl() {
  const volume = useMediaState("volume")
  const isMuted = useMediaState("muted")

  const Icon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2
  const label = isMuted || volume === 0 ? "Ativar som" : "Silenciar"

  return (
    <ControlTooltip label={label}>
      <MuteButton className={controlBtnClass}>
        <CycleIcon icon={Icon} size="sm" decorative className={filledIconClass} />
      </MuteButton>
    </ControlTooltip>
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

function BufferingIndicator() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[35] flex items-center justify-center media-buffering:opacity-100 media-can-play:opacity-0 opacity-0 transition-opacity duration-300">
      <Spinner.Root className="size-16 text-white" size={64}>
        <Spinner.Track className="opacity-25" width={4} />
        <Spinner.TrackFill className="opacity-75" width={4} />
      </Spinner.Root>
    </div>
  )
}

function SeekBar({ thumbnails, chapters }: { thumbnails?: string; chapters?: boolean }) {
  const trackContent = (
    <>
      <TimeSlider.Track className="relative h-[4px] w-full rounded-full bg-white/30">
        <TimeSlider.Progress className="absolute h-full w-[var(--slider-progress)] rounded-full bg-white/50" />
        <TimeSlider.TrackFill className="absolute h-full w-[var(--slider-fill)] rounded-full bg-white" />
      </TimeSlider.Track>
    </>
  )

  return (
    <TimeSlider.Root className="group relative inline-flex h-9 w-full cursor-pointer touch-none select-none items-center outline-none">
      {chapters ? (
        <TimeSlider.Chapters className="relative flex w-full items-center">
          {(cues, forwardRef) =>
            cues.map((cue) => (
              <div
                className="relative flex h-full w-full items-center last:mr-0 mr-0.5"
                key={cue.startTime}
                ref={forwardRef}
              >
                {trackContent}
              </div>
            ))
          }
        </TimeSlider.Chapters>
      ) : (
        trackContent
      )}

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
          {chapters && <TimeSlider.ChapterTitle className="text-[11px] text-white/80" />}
          <TimeSlider.Value className="rounded bg-black/80 px-1.5 py-0.5 text-[11px] font-mono text-white" />
        </TimeSlider.Preview>
      )}

      {/* Time preview (no thumbnails) */}
      {!thumbnails && (
        <TimeSlider.Preview className="pointer-events-none flex flex-col items-center opacity-0 transition-opacity duration-200 data-[visible]:opacity-100">
          {chapters && <TimeSlider.ChapterTitle className="text-[11px] text-white/80 mb-0.5" />}
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
    <ControlTooltip label={track ? "Desativar legendas" : "Ativar legendas"}>
      <CaptionButton className={cn(controlBtnClass, !hasTrack && "opacity-50 pointer-events-none")}>
        {track ? (
          <CycleIcon icon={CaptionsIcon} size="sm" decorative className="text-white" />
        ) : (
          <CycleIcon icon={CaptionsOff} size="sm" decorative className="text-white" />
        )}
      </CaptionButton>
    </ControlTooltip>
  )
}

function PIPControl() {
  const isPIP = useMediaState("pictureInPicture")
  return (
    <ControlTooltip label={isPIP ? "Sair do PiP" : "Picture-in-Picture"}>
      <PIPButton className={controlBtnClass}>
        <CycleIcon icon={PictureInPicture2} size="sm" decorative className={cn("text-white", isPIP && "text-white/100")} />
      </PIPButton>
    </ControlTooltip>
  )
}

function SpeedControl() {
  const playbackRate = useMediaState("playbackRate")
  const remote = useMediaRemote()
  const [open, setOpen] = React.useState(false)

  const rates = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]

  return (
    <div className="relative">
      <ControlTooltip label="Velocidade">
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
      </ControlTooltip>

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
      <ControlTooltip label="Qualidade">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={controlBtnClass}
        >
          <CycleIcon icon={Settings} size="sm" decorative className="text-white" />
        </button>
      </ControlTooltip>

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
    <ControlTooltip label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}>
      <FullscreenButton className={controlBtnClass}>
        {isFullscreen ? (
          <CycleIcon icon={Minimize} size="sm" decorative className="text-white" />
        ) : (
          <CycleIcon icon={Maximize} size="sm" decorative className="text-white" />
        )}
      </FullscreenButton>
    </ControlTooltip>
  )
}

function LiveIndicator() {
  const isLive = useMediaState("live")
  const isLiveEdge = useMediaState("liveEdge")

  if (!isLive) return null

  return (
    <LiveButton
      className={cn(
        "inline-flex cursor-pointer items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
        isLiveEdge
          ? "text-red-500"
          : "text-white/60 hover:text-white"
      )}
    >
      <span
        className={cn(
          "size-2 rounded-full",
          isLiveEdge ? "bg-red-500 animate-pulse" : "bg-white/40"
        )}
      />
      Live
    </LiveButton>
  )
}


/* ─── Gesture helpers ─── */

type SeekDirection = "backward" | "forward"

const DOUBLE_TAP_THRESHOLD = 300

/** Double-tap left/right edges to seek ±10s. z-10 so it doesn't block controls (z-20). */
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
        "absolute top-0 z-10 block h-full w-1/5",
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


/* ─── Hook: detect desktop via pointer capability ─── */
/* Uses pointer: fine (mouse/trackpad) instead of viewport width.
   This way mobile devices keep the touch-optimized DefaultVideoLayout
   even when fullscreen in landscape exceeds the sm breakpoint. */

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)")
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return isDesktop
}

/* ─── Main component ─── */

export function VideoPlayer({
  src,
  poster,
  posterAlt = "",
  thumbnails,
  chapters,
  showBuffering = true,
  announcer = true,
  autoPlay = false,
  muted = false,
  loop = false,
  className,
}: VideoPlayerProps) {
  const player = React.useRef<MediaPlayerInstance>(null)
  const isDesktop = useIsDesktop()

  // Seek feedback state with accumulation (like YouTube)
  const [seekFeedback, setSeekFeedback] = React.useState<SeekDirection | null>(null)
  const [seekAccumulated, setSeekAccumulated] = React.useState(0)
  const feedbackTimeout = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  const handleSeekFeedback = React.useCallback((direction: SeekDirection) => {
    clearTimeout(feedbackTimeout.current)

    setSeekFeedback((prev) => {
      if (prev === direction) {
        setSeekAccumulated((s) => s + 10)
      } else {
        setSeekAccumulated(10)
      }
      return direction
    })

    feedbackTimeout.current = setTimeout(() => {
      setSeekFeedback(null)
      setSeekAccumulated(0)
    }, 700)
  }, [])

  // Mobile: listen for seek requests from DefaultVideoLayout gestures
  React.useEffect(() => {
    const el = player.current?.el
    if (!el || isDesktop) return

    const handler = (e: Event) => {
      const seekTo = (e as CustomEvent<number>).detail
      const current = player.current?.currentTime ?? 0
      const delta = seekTo - current
      // Only show feedback for gesture seeks (~±10s), not slider scrubs
      if (Math.abs(Math.abs(delta) - 10) < 2) {
        handleSeekFeedback(delta < 0 ? "backward" : "forward")
      }
    }

    el.addEventListener("media-seek-request", handler)
    return () => el.removeEventListener("media-seek-request", handler)
  }, [isDesktop, handleSeekFeedback])

  React.useEffect(() => {
    return () => clearTimeout(feedbackTimeout.current)
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
        "group relative aspect-video w-full overflow-hidden bg-black text-white rounded-none sm:rounded-[16px]",
        className
      )}
    >
      <MediaProvider>
        {poster && (
          <Poster
            className="absolute inset-0 block h-full w-full object-cover opacity-0 transition-opacity data-[visible]:opacity-100 sm:rounded-[16px]"
            src={poster}
            alt={posterAlt}
          />
        )}
      </MediaProvider>

      {/* ─── Chapters track (VTT) ─── */}
      {chapters && (
        <Track
          src={chapters}
          kind="chapters"
          language="en"
          default
        />
      )}

      {/* ─── Accessibility: screen reader announcements ─── */}
      {announcer && <MediaAnnouncer />}

      {/* ─── Buffering spinner ─── */}
      {showBuffering && <BufferingIndicator />}

      {/* ─── Seek feedback indicators (both mobile & desktop) ─── */}
      <SeekFeedbackOverlay direction="backward" visible={seekFeedback === "backward"} seconds={seekAccumulated} />
      <SeekFeedbackOverlay direction="forward" visible={seekFeedback === "forward"} seconds={seekAccumulated} />

      {/* ─── MOBILE: Vidstack DefaultVideoLayout (touch, gestos, menus nativos) ─── */}
      {!isDesktop && (
        <DefaultVideoLayout
          icons={defaultLayoutIcons}
          thumbnails={thumbnails}
          colorScheme="dark"
        />
      )}

      {/* ─── DESKTOP: Controles customizados do Cycle Design ─── */}
      {isDesktop && (
        <>
          {/* Captions overlay */}
          <Captions className="absolute inset-0 bottom-[80px] z-10 select-none break-words text-center text-sm media-preview:opacity-0 [&>[data-part=cue]]:inline [&>[data-part=cue]]:bg-black/70 [&>[data-part=cue]]:px-2 [&>[data-part=cue]]:py-0.5 [&>[data-part=cue]]:text-white" />

          {/* Play overlay (paused state — big play button) */}
          <PlayOverlay />

          {/* Gestures: click to pause, double-click fullscreen */}
          <Gesture className="absolute inset-0 z-0 block h-full w-full" event="pointerup" action="toggle:paused" />
          <Gesture className="absolute inset-0 z-0 block h-full w-full" event="dblpointerup" action="toggle:fullscreen" />

          {/* Double-tap seek zones on edges */}
          <SeekGestureZone side="left" onSeekFeedback={handleSeekFeedback} />
          <SeekGestureZone side="right" onSeekFeedback={handleSeekFeedback} />

          {/* Controls overlay (hover to show) */}
          <Controls.Root className="absolute inset-0 z-20 flex h-full w-full flex-col bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-data-[started]:group-hover:opacity-100 group-data-[paused]:opacity-100">
            <div className="flex-1" />

            {/* Seek bar */}
            <Controls.Group className="flex w-full items-center px-3">
              <SeekBar thumbnails={thumbnails} chapters={!!chapters} />
            </Controls.Group>

            {/* Bottom bar */}
            <Controls.Group className="flex w-full items-center gap-1 px-2 pb-2">
              <PlayControl />
              <SeekBackwardControl />
              <SeekForwardControl />
              <MuteControl />
              <VolumeControl />
              <TimeDisplay />
              <LiveIndicator />

              <div className="flex-1" />

              <CaptionControl />
              <SpeedControl />
              <QualityControl />
              <PIPControl />
              <FullscreenControl />
            </Controls.Group>
          </Controls.Root>
        </>
      )}
    </MediaPlayer>
  )
}
