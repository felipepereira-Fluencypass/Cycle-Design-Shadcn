"use client"

import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, Star, Heart, Bookmark } from "lucide-react"
import { CycleIcon } from "@/components/icons"
import { Toggle } from "@/components/ui/toggle"
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
          code={`npx shadcn@latest add https://cycle-design.vercel.app/r/toggle.json`}
        />
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

<Toggle aria-label="Toggle bold">
  <Bold className="size-4" />
</Toggle>`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Exemplos */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Default */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Default</h3>
        <ComponentPreview
          code={`<Toggle aria-label="Toggle bold">
  <Bold className="size-4" />
</Toggle>`}
        >
          <Toggle aria-label="Toggle bold">
            <CycleIcon icon={Bold} size="sm" decorative />
          </Toggle>
        </ComponentPreview>
      </section>

      {/* Variantes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variantes</h3>
        <p className="text-muted-foreground">
          2 variantes: <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">default</code> (ghost) e{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">outline</code> (com borda).
        </p>
        <ComponentPreview
          code={`<Toggle variant="default" aria-label="Default">
  <Bold className="size-4" />
</Toggle>
<Toggle variant="outline" aria-label="Outline">
  <Italic className="size-4" />
</Toggle>`}
        >
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-2">
              <Toggle variant="default" aria-label="Default">
                <CycleIcon icon={Bold} size="sm" decorative />
              </Toggle>
              <span className="text-[10px] font-mono text-muted-foreground">default</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle variant="outline" aria-label="Outline">
                <CycleIcon icon={Italic} size="sm" decorative />
              </Toggle>
              <span className="text-[10px] font-mono text-muted-foreground">outline</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* fillOnPress */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Fill de Icone (fillOnPress)</h3>
        <p className="text-muted-foreground">
          A prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">fillOnPress</code> preenche
          icones SVG quando o toggle esta ativo. Ideal para icones como Heart, Star, Bookmark.
          Por padrao e <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">false</code> — icones
          tipograficos (Bold, Italic) nao devem ser preenchidos.
        </p>
        <ComponentPreview
          code={`// Sem fillOnPress (padrao) — icone permanece outline
<Toggle aria-label="Bold" defaultPressed>
  <Bold className="size-4" />
</Toggle>

// Com fillOnPress — icone preenchido no estado on
<Toggle aria-label="Favoritar" fillOnPress defaultPressed>
  <Heart className="size-4" />
</Toggle>
<Toggle aria-label="Salvar" fillOnPress defaultPressed>
  <Bookmark className="size-4" />
</Toggle>
<Toggle aria-label="Destacar" fillOnPress defaultPressed>
  <Star className="size-4" />
</Toggle>`}
        >
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <Toggle aria-label="Bold" defaultPressed>
                <CycleIcon icon={Bold} size="sm" decorative />
              </Toggle>
              <span className="text-[10px] font-mono text-muted-foreground">sem fill</span>
            </div>
            <div className="mx-1 h-8 w-px bg-border" />
            <div className="flex flex-col items-center gap-2">
              <Toggle aria-label="Favoritar" fillOnPress defaultPressed>
                <CycleIcon icon={Heart} size="sm" decorative />
              </Toggle>
              <span className="text-[10px] font-mono text-muted-foreground">fillOnPress</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle aria-label="Salvar" fillOnPress defaultPressed>
                <CycleIcon icon={Bookmark} size="sm" decorative />
              </Toggle>
              <span className="text-[10px] font-mono text-muted-foreground">fillOnPress</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Toggle aria-label="Destacar" fillOnPress defaultPressed>
                <CycleIcon icon={Star} size="sm" decorative />
              </Toggle>
              <span className="text-[10px] font-mono text-muted-foreground">fillOnPress</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Com texto */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Texto</h3>
        <ComponentPreview
          code={`<Toggle aria-label="Toggle bold">
  <Bold className="size-4" />
  Bold
</Toggle>
<Toggle variant="outline" aria-label="Toggle italic">
  <Italic className="size-4" />
  Italic
</Toggle>`}
        >
          <div className="flex items-center gap-4">
            <Toggle aria-label="Toggle bold">
              <CycleIcon icon={Bold} size="sm" decorative />
              Bold
            </Toggle>
            <Toggle variant="outline" aria-label="Toggle italic">
              <CycleIcon icon={Italic} size="sm" decorative />
              Italic
            </Toggle>
          </div>
        </ComponentPreview>
      </section>

      {/* Tamanhos */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tamanhos</h3>
        <p className="text-muted-foreground">
          4 tamanhos com texto + 4 tamanhos icon-only.
        </p>
        <ComponentPreview
          code={`<Toggle size="xs">XS</Toggle>
<Toggle size="sm">SM</Toggle>
<Toggle size="default">Default</Toggle>
<Toggle size="lg">LG</Toggle>`}
        >
          <div className="flex items-end gap-4">
            {(["xs", "sm", "default", "lg"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Toggle size={size} aria-label={size}>
                  <CycleIcon icon={Bold} size={size === "xs" ? "2xs" : size === "sm" ? "xs" : size === "lg" ? "md" : "sm"} decorative />
                  {size === "default" ? "Default" : size.toUpperCase()}
                </Toggle>
                <span className="text-[10px] font-mono text-muted-foreground">{size}</span>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Icon sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tamanhos Icon-Only</h3>
        <ComponentPreview
          code={`<Toggle size="icon-xs" aria-label="Star"><Star /></Toggle>
<Toggle size="icon-sm" aria-label="Star"><Star /></Toggle>
<Toggle size="icon" aria-label="Star"><Star /></Toggle>
<Toggle size="icon-lg" aria-label="Star"><Star /></Toggle>`}
        >
          <div className="flex items-end gap-4">
            {(["icon-xs", "icon-sm", "icon", "icon-lg"] as const).map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <Toggle size={size} variant="outline" aria-label="Star">
                  <CycleIcon icon={Star} size={size === "icon-xs" ? "xs" : size === "icon-sm" ? "sm" : size === "icon-lg" ? "lg" : "md"} decorative />
                </Toggle>
                <span className="text-[10px] font-mono text-muted-foreground">{size}</span>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled</h3>
        <ComponentPreview
          code={`<Toggle disabled aria-label="Disabled">
  <Bold className="size-4" />
</Toggle>`}
        >
          <div className="flex items-center gap-4">
            <Toggle disabled aria-label="Disabled">
              <CycleIcon icon={Bold} size="sm" decorative />
            </Toggle>
            <Toggle disabled variant="outline" aria-label="Disabled">
              <CycleIcon icon={Italic} size="sm" decorative />
            </Toggle>
          </div>
        </ComponentPreview>
      </section>

      {/* Toolbar example */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Toolbar</h3>
        <p className="text-muted-foreground">
          Exemplo de toolbar de formatacao com toggles agrupados.
        </p>
        <ComponentPreview
          code={`<div className="flex items-center gap-1 rounded-lg border border-border p-1">
  <Toggle size="sm" variant="outline" aria-label="Bold">
    <Bold className="size-4" />
  </Toggle>
  <Toggle size="sm" variant="outline" aria-label="Italic">
    <Italic className="size-4" />
  </Toggle>
  <Toggle size="sm" variant="outline" aria-label="Underline">
    <Underline className="size-4" />
  </Toggle>
  <div className="mx-1 h-6 w-px bg-border" />
  <Toggle size="sm" variant="outline" aria-label="Align left">
    <AlignLeft className="size-4" />
  </Toggle>
  <Toggle size="sm" variant="outline" aria-label="Align center">
    <AlignCenter className="size-4" />
  </Toggle>
  <Toggle size="sm" variant="outline" aria-label="Align right">
    <AlignRight className="size-4" />
  </Toggle>
</div>`}
        >
          <div className="flex items-center gap-1 rounded-lg border border-border p-1">
            <Toggle size="sm" variant="outline" aria-label="Bold" defaultPressed>
              <CycleIcon icon={Bold} size="xs" decorative />
            </Toggle>
            <Toggle size="sm" variant="outline" aria-label="Italic">
              <CycleIcon icon={Italic} size="xs" decorative />
            </Toggle>
            <Toggle size="sm" variant="outline" aria-label="Underline">
              <CycleIcon icon={Underline} size="xs" decorative />
            </Toggle>
            <div className="mx-1 h-6 w-px bg-border" />
            <Toggle size="sm" variant="outline" aria-label="Align left" defaultPressed>
              <CycleIcon icon={AlignLeft} size="xs" decorative />
            </Toggle>
            <Toggle size="sm" variant="outline" aria-label="Align center">
              <CycleIcon icon={AlignCenter} size="xs" decorative />
            </Toggle>
            <Toggle size="sm" variant="outline" aria-label="Align right">
              <CycleIcon icon={AlignRight} size="xs" decorative />
            </Toggle>
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
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;outline&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Estilo visual do toggle</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;xs&quot; | &quot;sm&quot; | &quot;default&quot; | &quot;lg&quot; | &quot;icon-xs&quot; | &quot;icon-sm&quot; | &quot;icon&quot; | &quot;icon-lg&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Tamanho do toggle</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">pressed</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Estado controlado do toggle</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">defaultPressed</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Estado inicial (nao controlado)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onPressedChange</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">(pressed: boolean) =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Callback quando o estado muda</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">fillOnPress</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Preenche icones SVG no estado on. Ideal para Heart, Star, Bookmark.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Desabilita o toggle</td>
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
        <h2 className="text-xl font-semibold">Variantes</h2>
        <SpecTable
          headers={["Variante", "Idle", "Hover", "Pressed (On)"]}
          rows={[
            ["default", "Transparente (ghost)", "bg-muted", "bg-accent"],
            ["outline", "Borda neutral + shadow", "bg-accent", "bg-accent"],
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tamanhos</h2>
        <SpecTable
          headers={["Token", "Altura", "Uso"]}
          rows={[
            ["xs", "24px (h-6)", "Contextos compactos"],
            ["sm", "32px (h-8)", "Toolbars"],
            ["default", "40px (h-10)", "Padrao geral"],
            ["lg", "48px (h-12)", "Destaque, touch targets"],
            ["icon-xs", "24x24px", "Icone compacto"],
            ["icon-sm", "32x32px", "Icone em toolbars"],
            ["icon", "40x40px", "Icone padrao"],
            ["icon-lg", "48x48px", "Icone grande"],
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Referencia Visual</h2>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Variantes (off / on)</p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <Toggle aria-label="Default off">
                      <CycleIcon icon={Star} size="sm" decorative />
                    </Toggle>
                    <Toggle defaultPressed aria-label="Default on">
                      <CycleIcon icon={Star} size="sm" decorative />
                    </Toggle>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">default</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <Toggle variant="outline" aria-label="Outline off">
                      <CycleIcon icon={Star} size="sm" decorative />
                    </Toggle>
                    <Toggle variant="outline" defaultPressed aria-label="Outline on">
                      <CycleIcon icon={Star} size="sm" decorative />
                    </Toggle>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">outline</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">fillOnPress (off / on)</p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <Toggle fillOnPress aria-label="Heart off">
                      <CycleIcon icon={Heart} size="sm" decorative />
                    </Toggle>
                    <Toggle fillOnPress defaultPressed aria-label="Heart on">
                      <CycleIcon icon={Heart} size="sm" decorative />
                    </Toggle>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">Heart</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <Toggle fillOnPress aria-label="Bookmark off">
                      <CycleIcon icon={Bookmark} size="sm" decorative />
                    </Toggle>
                    <Toggle fillOnPress defaultPressed aria-label="Bookmark on">
                      <CycleIcon icon={Bookmark} size="sm" decorative />
                    </Toggle>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">Bookmark</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    <Toggle fillOnPress aria-label="Star off">
                      <CycleIcon icon={Star} size="sm" decorative />
                    </Toggle>
                    <Toggle fillOnPress defaultPressed aria-label="Star on">
                      <CycleIcon icon={Star} size="sm" decorative />
                    </Toggle>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">Star</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Toolbar example</p>
              <div className="flex items-center gap-1 rounded-lg border border-border p-1">
                <Toggle size="sm" variant="outline" aria-label="Bold" defaultPressed>
                  <CycleIcon icon={Bold} size="xs" decorative />
                </Toggle>
                <Toggle size="sm" variant="outline" aria-label="Italic">
                  <CycleIcon icon={Italic} size="xs" decorative />
                </Toggle>
                <Toggle size="sm" variant="outline" aria-label="Underline">
                  <CycleIcon icon={Underline} size="xs" decorative />
                </Toggle>
                <div className="mx-1 h-6 w-px bg-border" />
                <Toggle size="sm" variant="outline" aria-label="Align left" defaultPressed>
                  <CycleIcon icon={AlignLeft} size="xs" decorative />
                </Toggle>
                <Toggle size="sm" variant="outline" aria-label="Align center">
                  <CycleIcon icon={AlignCenter} size="xs" decorative />
                </Toggle>
                <Toggle size="sm" variant="outline" aria-label="Align right">
                  <CycleIcon icon={AlignRight} size="xs" decorative />
                </Toggle>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O estado <strong>on</strong> usa <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">bg-accent</code> — discreto e consistente com shadcn/ui.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Use <strong>fillOnPress</strong> em icones como Heart, Star, Bookmark. Nao use em icones tipograficos (Bold, Italic).
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Toggles icon-only devem ter <strong>aria-label</strong> para acessibilidade.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Use <strong>outline</strong> em toolbars (borda separa visualmente os itens).
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function TogglePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Toggle</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Botao de dois estados (on/off). Baseado no Radix UI Toggle. 2 variantes, 8 tamanhos e prop fillOnPress para preencher icones no estado ativo.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
