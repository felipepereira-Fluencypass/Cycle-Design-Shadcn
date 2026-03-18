import { cn } from "@/lib/utils"
import { Download } from "lucide-react"
import { CycleIcon } from "@/components/icons"

export interface DownloadButtonProps {
  href: string
  filename: string
  description?: string
  className?: string
}

export function DownloadButton({
  href,
  filename,
  description,
  className,
}: DownloadButtonProps) {
  return (
    <a
      href={href}
      download={filename}
      className={cn(
        "flex items-center gap-3 rounded-lg border border-border p-3 hover:bg-muted/50 transition-colors group",
        className
      )}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
        <CycleIcon icon={Download} size="xs" decorative />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium font-mono">{filename}</p>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </a>
  )
}
