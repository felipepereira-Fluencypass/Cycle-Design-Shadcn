import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { FileText } from "lucide-react"

import { cn } from "@/lib/utils"

const fileCardVariants = cva(
  "inline-flex w-full items-start gap-3 border border-border bg-secondary text-left transition-all select-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 disabled:opacity-50 disabled:pointer-events-none hover:bg-accent active:scale-[0.98]",
  {
    variants: {
      size: {
        sm: "rounded-lg px-3 py-4",
        md: "rounded-xl px-4 py-6",
        lg: "rounded-2xl px-6 py-8",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
)

const titleVariants = cva("font-medium text-foreground truncate", {
  variants: {
    size: {
      sm: "text-xs leading-3",
      md: "text-sm leading-3.5",
      lg: "text-sm leading-3.5",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

const iconVariants = cva("shrink-0 text-muted-foreground", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-6",
    },
  },
  defaultVariants: {
    size: "lg",
  },
})

export interface FileCardProps
  extends Omit<React.ComponentProps<"button">, "children" | "size">,
    VariantProps<typeof fileCardVariants> {
  /** Nome do arquivo exibido como titulo */
  title: string
  /** Tipo do arquivo (ex: "PDF", "DOCX", "PNG") */
  fileType?: string
  /** Tamanho do arquivo (ex: "180 KB", "2.4 MB") */
  fileSize?: string
  /** URL de download — se fornecido, renderiza como <a> */
  href?: string
  /** Exibir icone de arquivo */
  icon?: boolean
  /** Exibir linha de descricao (tipo + tamanho) */
  showDescription?: boolean
  /** Exibir peso do arquivo na descricao */
  showFileSize?: boolean
}

function FileCard({
  title,
  fileType,
  fileSize,
  href,
  icon = true,
  showDescription = true,
  showFileSize = true,
  size = "lg",
  disabled = false,
  className,
  ...props
}: FileCardProps) {
  const content = (
    <>
      {icon && (
        <FileText className={cn(iconVariants({ size }))} />
      )}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span className={cn(titleVariants({ size }))}>{title}</span>
        {showDescription && fileType && (
          <span className="flex items-center gap-2 text-xs text-[#a1a1a1] whitespace-nowrap">
            <span>{fileType}</span>
            {showFileSize && fileSize && (
              <>
                <span>•</span>
                <span>{fileSize}</span>
              </>
            )}
          </span>
        )}
      </div>
    </>
  )

  const classes = cn(fileCardVariants({ size }), className)

  if (href && !disabled) {
    return (
      <a
        href={href}
        download
        className={classes}
        aria-label={`Download ${title}`}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      data-slot="file-card"
      type="button"
      disabled={disabled}
      className={classes}
      {...props}
    >
      {content}
    </button>
  )
}

export { FileCard, fileCardVariants }
