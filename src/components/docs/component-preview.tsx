import * as React from "react"
import { cn } from "@/lib/utils"
import { CodeBlock } from "@/components/docs/code-block"

export interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  language?: string
  className?: string
}

export function ComponentPreview({
  children,
  code,
  language = "tsx",
  className,
}: ComponentPreviewProps) {
  return (
    <div className={cn("rounded-lg border border-border overflow-hidden", className)}>
      {/* Preview area */}
      <div className="flex min-h-[200px] items-center justify-center p-10 bg-background">
        {children}
      </div>
      {/* Code area */}
      <CodeBlock code={code} language={language} showLineNumbers className="[&_pre]:rounded-none [&_pre]:border-t [&_pre]:border-border" />
    </div>
  )
}
