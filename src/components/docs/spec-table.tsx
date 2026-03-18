import { cn } from "@/lib/utils"

export interface SpecTableProps {
  headers: string[]
  rows: string[][]
  className?: string
  highlightFirst?: boolean
}

export function SpecTable({
  headers,
  rows,
  className,
  highlightFirst = true,
}: SpecTableProps) {
  return (
    <div className={cn("overflow-x-auto rounded-lg border border-border", className)}>
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            {headers.map((header) => (
              <th key={header} className="text-left p-3 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={cn(
                i < rows.length - 1 && "border-b border-border"
              )}
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={cn(
                    "p-3",
                    j === 0 && highlightFirst
                      ? "font-mono text-xs font-medium"
                      : "font-mono text-xs text-muted-foreground"
                  )}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
