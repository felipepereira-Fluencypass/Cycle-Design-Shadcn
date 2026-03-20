"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

/* ─── Variants ─── */

const chatBubbleVariants = cva(
  "flex gap-2.5 text-sm",
  {
    variants: {
      variant: {
        default: "",
        instructor: "",
        system: "justify-center",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

/* ─── Types ─── */

export interface ChatBubbleProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof chatBubbleVariants> {
  /** Author display name */
  author: string
  /** Avatar URL (renders initials if absent) */
  avatar?: string
  /** Message text content */
  message: string
  /** Timestamp label (e.g. "14:32") */
  timestamp?: string
}

/* ─── Helpers ─── */

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
}

/* ─── Component ─── */

function ChatBubble({
  author,
  avatar,
  message,
  timestamp,
  variant = "default",
  className,
  ...props
}: ChatBubbleProps) {
  if (variant === "system") {
    return (
      <div
        data-slot="chat-bubble"
        data-variant="system"
        className={cn(chatBubbleVariants({ variant }), className)}
        {...props}
      >
        <span className="text-xs text-muted-foreground italic">{message}</span>
      </div>
    )
  }

  const isInstructor = variant === "instructor"

  return (
    <div
      data-slot="chat-bubble"
      data-variant={variant}
      className={cn(chatBubbleVariants({ variant }), className)}
      {...props}
    >
      {/* Avatar */}
      <Avatar>
        {avatar && <AvatarImage src={avatar} alt={author} />}
        <AvatarFallback
          className={cn(
            isInstructor
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground"
          )}
        >
          {getInitials(author)}
        </AvatarFallback>
      </Avatar>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2">
          <span
            className={cn(
              "text-sm font-semibold leading-5 truncate",
              isInstructor ? "text-primary" : "text-foreground"
            )}
          >
            {author}
          </span>
          {timestamp && (
            <span className="text-[11px] text-muted-foreground shrink-0">
              {timestamp}
            </span>
          )}
        </div>
        <p className="text-sm leading-5 text-foreground break-words">
          {message}
        </p>
      </div>
    </div>
  )
}

export { ChatBubble, chatBubbleVariants }
