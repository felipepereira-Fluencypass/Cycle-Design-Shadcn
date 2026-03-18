import { cn } from "@/lib/utils"
import type { VariantColorSpec } from "@/types/component-specs"

export interface ColorTokenListProps {
  variants: VariantColorSpec[]
  className?: string
}

export function ColorTokenList({ variants, className }: ColorTokenListProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {variants.map((variant) => (
        <div
          key={variant.variant}
          className="rounded-lg border border-border p-4 space-y-3"
        >
          <p className="font-mono text-sm font-medium">
            variant=&quot;{variant.variant}&quot;
          </p>
          <div className="grid gap-2">
            {variant.tokens.map((t) => (
              <div key={t.token} className="flex items-center gap-3">
                <div
                  className="h-6 w-6 rounded border border-border shrink-0"
                  style={{
                    backgroundColor: t.token.startsWith("hover:")
                      ? `var(--${t.token.replace("hover:", "").replace("bg-", "").replace("text-", "")})`
                      : `var(--${t.token.replace("bg-", "").replace("text-", "").replace("border-", "")})`,
                  }}
                />
                <code className="text-xs font-mono">{t.token}</code>
                <span className="text-xs text-muted-foreground">{t.usage}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
