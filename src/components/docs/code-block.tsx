"use client"

import * as React from "react"
import { Highlight, themes } from "prism-react-renderer"
import { Check, Copy } from "lucide-react"
import { CycleIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

export interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  className?: string
}

export function CodeBlock({
  code,
  language = "tsx",
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative group", className)}>
      <button
        onClick={handleCopy}
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 text-muted-foreground opacity-0 transition-opacity hover:bg-white/10 hover:text-foreground group-hover:opacity-100"
        aria-label="Copiar codigo"
      >
        {copied ? (
          <CycleIcon icon={Check} size="xs" decorative className="text-green-400" />
        ) : (
          <CycleIcon icon={Copy} size="xs" decorative />
        )}
      </button>
      <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
        {({ className: preClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cn(
              preClassName,
              "overflow-x-auto rounded-lg bg-[#1e1e1e] p-4 text-[13px] leading-relaxed"
            )}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell select-none pr-4 text-right text-muted-foreground/40">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
