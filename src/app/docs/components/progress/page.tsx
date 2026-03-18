"use client"

import { Progress } from "@/components/ui/progress"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { SpecTable } from "@/components/docs/spec-table"

/* ============================================
 * DEVELOPER DOCS
 * ============================================ */
function DeveloperDocs() {
  return (
    <>
      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Instalacao</h2>
        <CodeBlock
          code={`npx shadcn@latest add progress`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Progress } from "@/components/ui/progress"`}
          language="tsx"
          showLineNumbers={false}
        />
        <ComponentPreview
          code={`import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  return <Progress value={60} />
}`}
        >
          <Progress value={60} />
        </ComponentPreview>
      </section>

      {/* Examples header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tamanhos</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">size</code> para alterar a altura da barra.
        </p>
        <ComponentPreview
          code={`import { Progress } from "@/components/ui/progress"

export function ProgressSizes() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">xs (h-1)</span>
        <Progress value={60} size="xs" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">sm (h-1.5)</span>
        <Progress value={60} size="sm" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">default (h-2)</span>
        <Progress value={60} size="default" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">lg (h-3)</span>
        <Progress value={60} size="lg" />
      </div>
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-6 w-full max-w-md">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">xs (h-1)</span>
              <Progress value={60} size="xs" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">sm (h-1.5)</span>
              <Progress value={60} size="sm" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">default (h-2)</span>
              <Progress value={60} size="default" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">lg (h-3)</span>
              <Progress value={60} size="lg" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variants</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">variant</code> para alterar a cor do indicador. O track permanece sempre <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">bg-muted</code>.
        </p>
        <ComponentPreview
          code={`import { Progress } from "@/components/ui/progress"

export function ProgressVariants() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">default (bg-primary)</span>
        <Progress value={70} variant="default" size="lg" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">secondary (bg-secondary)</span>
        <Progress value={70} variant="secondary" size="lg" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">destructive (bg-destructive)</span>
        <Progress value={70} variant="destructive" size="lg" />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">muted (bg-muted-foreground)</span>
        <Progress value={70} variant="muted" size="lg" />
      </div>
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-6 w-full max-w-md">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">default (bg-primary)</span>
              <Progress value={70} variant="default" size="lg" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">secondary (bg-secondary)</span>
              <Progress value={70} variant="secondary" size="lg" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">destructive (bg-destructive)</span>
              <Progress value={70} variant="destructive" size="lg" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">muted (bg-muted-foreground)</span>
              <Progress value={70} variant="muted" size="lg" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Values */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Valores</h3>
        <p className="text-muted-foreground">
          A prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">value</code> aceita um numero de 0 a 100.
        </p>
        <ComponentPreview
          code={`import { Progress } from "@/components/ui/progress"

export function ProgressValues() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">0%</span>
        <Progress value={0} />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">25%</span>
        <Progress value={25} />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">50%</span>
        <Progress value={50} />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">75%</span>
        <Progress value={75} />
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">100%</span>
        <Progress value={100} />
      </div>
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-6 w-full max-w-md">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">0%</span>
              <Progress value={0} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">25%</span>
              <Progress value={25} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">50%</span>
              <Progress value={50} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">75%</span>
              <Progress value={75} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">100%</span>
              <Progress value={100} />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Color Themes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variacoes de Cor</h3>
        <p className="text-muted-foreground">
          Aplique a classe <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code> no container pai ou no proprio componente. Apenas a barra (indicador) muda de cor — o track permanece <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">bg-muted</code>.
        </p>
        <ComponentPreview
          code={`import { Progress } from "@/components/ui/progress"

export function ProgressThemes() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      <div className="space-y-1">
        <span className="text-xs font-mono text-muted-foreground">neutral (padrao)</span>
        <Progress value={65} size="lg" />
      </div>
      <div className="theme-brand space-y-1">
        <span className="text-xs font-mono text-muted-foreground">.theme-brand</span>
        <Progress value={65} size="lg" />
      </div>
      <div className="theme-class space-y-1">
        <span className="text-xs font-mono text-muted-foreground">.theme-class</span>
        <Progress value={65} size="lg" />
      </div>
      <div className="theme-positive space-y-1">
        <span className="text-xs font-mono text-muted-foreground">.theme-positive</span>
        <Progress value={65} size="lg" />
      </div>
      <div className="theme-warning space-y-1">
        <span className="text-xs font-mono text-muted-foreground">.theme-warning</span>
        <Progress value={65} size="lg" />
      </div>
      <div className="theme-critical space-y-1">
        <span className="text-xs font-mono text-muted-foreground">.theme-critical</span>
        <Progress value={65} size="lg" />
      </div>
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-6 w-full max-w-md">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">neutral (padrao)</span>
              <Progress value={65} size="lg" />
            </div>
            <div className="theme-brand space-y-1">
              <span className="text-xs font-mono text-muted-foreground">.theme-brand</span>
              <Progress value={65} size="lg" />
            </div>
            <div className="theme-class space-y-1">
              <span className="text-xs font-mono text-muted-foreground">.theme-class</span>
              <Progress value={65} size="lg" />
            </div>
            <div className="theme-positive space-y-1">
              <span className="text-xs font-mono text-muted-foreground">.theme-positive</span>
              <Progress value={65} size="lg" />
            </div>
            <div className="theme-warning space-y-1">
              <span className="text-xs font-mono text-muted-foreground">.theme-warning</span>
              <Progress value={65} size="lg" />
            </div>
            <div className="theme-critical space-y-1">
              <span className="text-xs font-mono text-muted-foreground">.theme-critical</span>
              <Progress value={65} size="lg" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Tipo</th>
                <th className="text-left p-3 font-medium">Default</th>
                <th className="text-left p-3 font-medium">Descricao</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">0</td>
                <td className="p-3 text-muted-foreground">Progresso atual, de 0 a 100</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;xs&quot; | &quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Altura da barra. xs=4px, sm=6px, default=8px, lg=12px</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;secondary&quot; | &quot;destructive&quot; | &quot;muted&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Cor do indicador (barra de progresso)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classes CSS adicionais aplicadas ao track</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * DESIGNER DOCS
 * ============================================ */
function DesignerDocs() {
  return (
    <>
      {/* Structure */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estrutura</h2>
        <p className="text-muted-foreground">
          O componente Progress e composto por duas camadas:
        </p>
        <SpecTable
          headers={["Camada", "Elemento", "Descricao"]}
          rows={[
            ["Track", "Container externo", "Fundo da barra, sempre bg-muted, rounded-full, overflow hidden"],
            ["Indicator", "Barra de progresso", "Preenchimento interno, animado via translateX, rounded-full"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-6 w-full max-w-md">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">Track (bg-muted) + Indicator (bg-primary)</span>
              <Progress value={45} size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Size Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tamanhos</h2>
        <p className="text-muted-foreground">
          Especificacoes de cada tamanho. A largura e sempre 100% do container pai.
        </p>
        <SpecTable
          headers={["Size", "Altura", "Classe Tailwind", "Radius"]}
          rows={[
            ["xs", "4px", "h-1", "rounded-full (9999px)"],
            ["sm", "6px", "h-1.5", "rounded-full (9999px)"],
            ["default", "8px", "h-2", "rounded-full (9999px)"],
            ["lg", "12px", "h-3", "rounded-full (9999px)"],
          ]}
        />
      </section>

      {/* Visual reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Referencia Visual</h2>
        <p className="text-muted-foreground">
          Preview dos tamanhos reais para comparacao no Figma.
        </p>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-6 w-full max-w-md">
            {(["xs", "sm", "default", "lg"] as const).map((size) => {
              const labels: Record<string, string> = {
                xs: "xs — 4px",
                sm: "sm — 6px",
                default: "default — 8px",
                lg: "lg — 12px",
              }
              return (
                <div key={size} className="space-y-1">
                  <span className="text-xs font-mono text-muted-foreground">
                    {labels[size]}
                  </span>
                  <Progress value={60} size={size} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cores por Variant</h2>
        <p className="text-muted-foreground">
          Tokens semanticos usados em cada variant do indicador. O track e sempre <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">bg-muted</code>.
        </p>
        <SpecTable
          headers={["Variant", "Token do Indicador", "Descricao"]}
          rows={[
            ["default", "bg-primary", "Cor primaria do tema"],
            ["secondary", "bg-secondary", "Cor secundaria"],
            ["destructive", "bg-destructive", "Erro ou alerta critico"],
            ["muted", "bg-muted-foreground", "Sutil, baixo contraste"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-4 w-full max-w-md">
            {(["default", "secondary", "destructive", "muted"] as const).map((variant) => (
              <div key={variant} className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">{variant}</span>
                <Progress value={65} variant={variant} size="lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Animacao</h2>
        <p className="text-muted-foreground">
          O indicador usa <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">transition-all</code> para animar mudancas de valor suavemente. A posicao e controlada via <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">translateX</code>.
        </p>
        <SpecTable
          headers={["Propriedade", "Valor", "Observacao"]}
          rows={[
            ["Transicao", "transition-all", "Anima todas as propriedades"],
            ["Transform", "translateX(-N%)", "N = 100 - value"],
            ["Duracao", "Padrao CSS (~150ms)", "Herda do transition-all do Tailwind"],
          ]}
        />
      </section>

      {/* Theme variations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variacoes de Cor (Temas)</h2>
        <p className="text-muted-foreground">
          Cada tema sobrescreve o token <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">--primary</code>, alterando a cor do indicador na variant default. O track permanece inalterado.
        </p>
        <SpecTable
          headers={["Tema", "Classe CSS", "Descricao"]}
          rows={[
            ["Neutral", "(padrao)", "Tema global, sem classe extra"],
            ["Brand", ".theme-brand", "Rose — cor da marca"],
            ["Class", ".theme-class", "Blue — aulas"],
            ["Private", ".theme-private", "Orange — particular"],
            ["Group", ".theme-group", "Green — grupo"],
            ["Impulse", ".theme-impulse", "Purple — impulso"],
            ["Positive", ".theme-positive", "Emerald — sucesso"],
            ["Warning", ".theme-warning", "Amber — alerta"],
            ["Critical", ".theme-critical", "Red — erro"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-4 w-full max-w-md">
            {[
              { theme: "", label: "Neutral (padrao)" },
              { theme: "theme-brand", label: ".theme-brand" },
              { theme: "theme-class", label: ".theme-class" },
              { theme: "theme-positive", label: ".theme-positive" },
              { theme: "theme-warning", label: ".theme-warning" },
              { theme: "theme-critical", label: ".theme-critical" },
            ].map((t) => (
              <div key={t.label} className={`space-y-1 ${t.theme}`}>
                <span className="text-xs font-mono text-muted-foreground">{t.label}</span>
                <Progress value={65} size="lg" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas Adicionais</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          {[
            "A largura do componente e sempre 100% do container pai. Controle a largura pelo container.",
            "O track usa overflow hidden para garantir que o indicador nao ultrapasse os limites arredondados.",
            "Tanto o track quanto o indicador usam rounded-full (border-radius: 9999px).",
            "Com .theme-*, apenas a variant default muda de cor (via token --primary). As variants secondary, destructive e muted permanecem fixas.",
            "Use aria-label ou aria-valuetext para fornecer contexto de acessibilidade quando necessario.",
          ].map((note, i) => (
            <p key={i} className="text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground shrink-0">•</span>
              {note}
            </p>
          ))}
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function ProgressPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Exibe uma barra de progresso indicando a conclusao de uma tarefa.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
