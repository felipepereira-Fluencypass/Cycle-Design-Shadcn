"use client"

import { Home, Search, Settings, Heart, Star, Bell, Mail, Trash2 } from "lucide-react"
import { CycleIcon } from "@/components/icons"
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
      {/* Instalacao */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Instalacao</h2>
        <CodeBlock
          language="bash"
          showLineNumbers={false}
          code={`npx shadcn@latest add https://cycle-design.vercel.app/r/cycle-icon.json`}
        />
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { CycleIcon } from "@/components/icons"
import { Home } from "lucide-react"

// Decorativo (puramente visual)
<CycleIcon icon={Home} size="sm" decorative />

// Semantico (comunica algo para screen readers)
<CycleIcon icon={Home} size="sm" aria-label="Ir para home" />`}
          language="tsx"
          showLineNumbers={false}
        />
        <div className="rounded-lg border border-border p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">
            <strong>Regra do Design System:</strong> nunca renderize icones Lucide diretamente.
            Sempre use <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">CycleIcon</code> para
            garantir consistencia de <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">size</code> e
            <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">strokeWidth</code> em todo o produto.
          </p>
        </div>
      </section>

      {/* Exemplos */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tamanhos</h3>
        <p className="text-muted-foreground">
          6 tamanhos disponiveis. O <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">strokeWidth</code> e
          automaticamente derivado do size — nunca e passado como prop.
        </p>
        <ComponentPreview
          code={`<div className="flex items-end gap-6">
  <CycleIcon icon={Home} size="2xs" decorative />
  <CycleIcon icon={Home} size="xs" decorative />
  <CycleIcon icon={Home} size="sm" decorative />
  <CycleIcon icon={Home} size="md" decorative />
  <CycleIcon icon={Home} size="lg" decorative />
  <CycleIcon icon={Home} size="xl" decorative />
</div>`}
        >
          <div className="flex items-end gap-6">
            {(["2xs", "xs", "sm", "md", "lg", "xl"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <CycleIcon icon={Home} size={size} decorative />
                <span className="text-[10px] font-mono text-muted-foreground">{size}</span>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Decorativo vs Semantico */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Decorativo vs Semantico</h3>
        <ComponentPreview
          code={`// Decorativo: aria-hidden=true, nao lido por screen readers
<CycleIcon icon={Heart} size="sm" decorative />

// Semantico: role=img, lido por screen readers
<CycleIcon icon={Heart} size="sm" aria-label="Favoritar" />`}
        >
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <CycleIcon icon={Heart} size="sm" decorative />
              <span className="text-[10px] font-mono text-muted-foreground">decorative</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CycleIcon icon={Heart} size="sm" aria-label="Favoritar" />
              <span className="text-[10px] font-mono text-muted-foreground">semantic</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Exemplos com varios icones */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Galeria</h3>
        <ComponentPreview
          code={`import { Home, Search, Settings, Heart, Star, Bell, Mail, Trash2 } from "lucide-react"

<div className="flex gap-4">
  <CycleIcon icon={Home} size="sm" decorative />
  <CycleIcon icon={Search} size="sm" decorative />
  <CycleIcon icon={Settings} size="sm" decorative />
  <CycleIcon icon={Heart} size="sm" decorative />
  <CycleIcon icon={Star} size="sm" decorative />
  <CycleIcon icon={Bell} size="sm" decorative />
  <CycleIcon icon={Mail} size="sm" decorative />
  <CycleIcon icon={Trash2} size="sm" decorative />
</div>`}
        >
          <div className="flex gap-4">
            <CycleIcon icon={Home} size="sm" decorative />
            <CycleIcon icon={Search} size="sm" decorative />
            <CycleIcon icon={Settings} size="sm" decorative />
            <CycleIcon icon={Heart} size="sm" decorative />
            <CycleIcon icon={Star} size="sm" decorative />
            <CycleIcon icon={Bell} size="sm" decorative />
            <CycleIcon icon={Mail} size="sm" decorative />
            <CycleIcon icon={Trash2} size="sm" decorative />
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
                <td className="p-3 font-mono text-xs">icon</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">LucideIcon</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Componente de icone do Lucide React</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;2xs&quot; | &quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; | &quot;xl&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;sm&quot;</td>
                <td className="p-3 text-muted-foreground">Tamanho do icone (define width, height e strokeWidth)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">decorative</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Se true, adiciona aria-hidden. Se false, exige aria-label.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">aria-label</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Label para screen readers (obrigatorio quando decorative=false)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classes CSS adicionais</td>
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
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tabela de Tamanhos (ICON_SIZES)</h2>
        <p className="text-muted-foreground">
          Fonte da verdade para todos os icones do Design System. O strokeWidth e derivado do size —
          nunca configurado manualmente.
        </p>
        <SpecTable
          headers={["Token", "Size (px)", "Stroke Width"]}
          rows={[
            ["2xs", "12", "1.0"],
            ["xs", "16", "1.2"],
            ["sm", "24", "1.5"],
            ["md", "32", "1.8"],
            ["lg", "40", "2.1"],
            ["xl", "48", "2.4"],
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Referencia Visual</h2>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex items-end gap-8">
            {(["2xs", "xs", "sm", "md", "lg", "xl"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <CycleIcon icon={Home} size={size} decorative />
                <span className="text-[10px] font-mono text-muted-foreground">{size}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Nunca</strong> renderize icones Lucide diretamente. Sempre use CycleIcon.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O strokeWidth e <strong>automatico</strong> — garante proporcao visual correta em todos os tamanhos.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Icones decorativos (puramente visuais) recebem <strong>aria-hidden=true</strong>.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Icones semanticos (que comunicam algo) exigem <strong>aria-label</strong>.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            A biblioteca de icones e <strong>Lucide React</strong> — consulte <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">lucide.dev</code> para o catalogo completo.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function CycleIconPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">CycleIcon</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Wrapper para icones Lucide com tokens de size e stroke da Cycle. Garante consistencia visual em todos os icones do sistema.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
