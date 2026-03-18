import { cn } from "@/lib/utils"
import type { FigmaNaming } from "@/types/component-specs"

export interface FigmaNamingProps {
  naming: FigmaNaming
  className?: string
}

export function FigmaNamingSection({ naming, className }: FigmaNamingProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Component name */}
      <div className="rounded-lg border border-border p-4 space-y-3">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Nome do componente no Figma:</span>
          <code className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-mono font-medium">
            {naming.componentName}
          </code>
        </div>
      </div>

      {/* Properties */}
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-3 font-medium">Propriedade Figma</th>
              <th className="text-left p-3 font-medium">Valores</th>
            </tr>
          </thead>
          <tbody>
            {naming.properties.map((prop, i) => (
              <tr
                key={prop.property}
                className={cn(i < naming.properties.length - 1 && "border-b border-border")}
              >
                <td className="p-3 font-mono text-xs font-medium">{prop.property}</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">{prop.values}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Examples */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Exemplos de instancias no Figma:</p>
        <div className="rounded-lg bg-muted p-4 space-y-1.5">
          {naming.examples.map((example) => (
            <p key={example} className="font-mono text-xs">
              {example}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
