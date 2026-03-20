"use client"

import * as React from "react"
import { SendIcon } from "lucide-react"
import { CycleIcon } from "@/components/icons/CycleIcon"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChatBubble, type ChatBubbleProps } from "@/components/ui/chat-bubble"
import { cn } from "@/lib/utils"

/* ─── Types ─── */

export interface ChatMessage {
  /** Unique message ID */
  id: string
  /** Author display name */
  author: string
  /** Avatar URL */
  avatar?: string
  /** Message text */
  message: string
  /** Timestamp label (e.g. "14:32") */
  timestamp?: string
  /** Message variant */
  variant?: ChatBubbleProps["variant"]
}

export interface ChatPanelProps extends React.ComponentProps<"div"> {
  /** Chat messages array */
  messages: ChatMessage[]
  /** Callback when the user sends a message */
  onSendMessage?: (message: string) => void
  /** Disable the input (e.g. when chat is read-only or ended) */
  disabled?: boolean
  /** Input placeholder text */
  placeholder?: string
  /** Title shown at the top of the panel */
  title?: string
}

/* ─── Component ─── */

function ChatPanel({
  messages,
  onSendMessage,
  disabled = false,
  placeholder = "Envie uma mensagem...",
  title = "Chat",
  className,
  ...props
}: ChatPanelProps) {
  const [input, setInput] = React.useState("")
  const scrollRef = React.useRef<HTMLDivElement>(null)

  /* Auto-scroll to bottom on new messages */
  React.useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.scrollTop = el.scrollHeight
    }
  }, [messages.length])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || disabled) return
    onSendMessage?.(trimmed)
    setInput("")
  }

  return (
    <div
      data-slot="chat-panel"
      className={cn(
        "flex flex-col bg-background border-l border-border",
        className
      )}
      {...props}
    >
      {/* Header */}
      <div className="shrink-0 flex items-center h-12 px-4 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 min-h-0">
        <div ref={scrollRef} className="flex flex-col gap-3 p-4">
          {messages.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">
              Nenhuma mensagem ainda.
            </p>
          )}
          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              author={msg.author}
              avatar={msg.avatar}
              message={msg.message}
              timestamp={msg.timestamp}
              variant={msg.variant}
            />
          ))}
        </div>
      </ScrollArea>

      {/* Input */}
      {onSendMessage && (
        <form
          onSubmit={handleSubmit}
          className="shrink-0 flex items-center gap-2 p-3 border-t border-border"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 min-w-0 h-9 rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <Button
            type="submit"
            size="icon-sm"
            disabled={disabled || !input.trim()}
            className="shrink-0"
          >
            <CycleIcon icon={SendIcon} size="xs" decorative />
          </Button>
        </form>
      )}
    </div>
  )
}

export { ChatPanel }
