"use client"

import { Checkbox } from "@/components/ui/checkbox"
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
          code={`npx shadcn@latest add checkbox -r https://cycle-design.vercel.app/r`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Checkbox } from "@/components/ui/checkbox"`}
          language="tsx"
          showLineNumbers={false}
        />
        <ComponentPreview
          code={`import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxDemo() {
  return (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <label htmlFor="terms" className="text-sm">Aceitar termos</label>
    </div>
  )
}`}
        >
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <label htmlFor="terms" className="text-sm cursor-pointer">Aceitar termos</label>
          </div>
        </ComponentPreview>
      </section>

      {/* Examples */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tamanhos</h3>
        <ComponentPreview
          code={`<div className="flex items-center gap-6">
  <div className="flex items-center gap-2">
    <Checkbox size="sm" defaultChecked />
    <span className="text-xs">Small</span>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox size="default" defaultChecked />
    <span className="text-sm">Default</span>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox size="lg" defaultChecked />
    <span className="text-base">Large</span>
  </div>
</div>`}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox size="sm" defaultChecked />
              <span className="text-xs">Small</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox size="default" defaultChecked />
              <span className="text-sm">Default</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox size="lg" defaultChecked />
              <span className="text-base">Large</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Circular */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Circular</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">variant=&quot;circular&quot;</code> para um checkbox redondo.
        </p>
        <ComponentPreview
          code={`<div className="flex items-center gap-6">
  <div className="flex items-center gap-2">
    <Checkbox variant="circular" size="sm" defaultChecked />
    <span className="text-xs">Small</span>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox variant="circular" defaultChecked />
    <span className="text-sm">Default</span>
  </div>
  <div className="flex items-center gap-2">
    <Checkbox variant="circular" size="lg" defaultChecked />
    <span className="text-base">Large</span>
  </div>
</div>`}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Checkbox variant="circular" size="sm" defaultChecked />
              <span className="text-xs">Small</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox variant="circular" defaultChecked />
              <span className="text-sm">Default</span>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox variant="circular" size="lg" defaultChecked />
              <span className="text-base">Large</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* States */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Estados</h3>
        <ComponentPreview
          code={`<div className="flex items-center gap-6">
  <Checkbox />
  <Checkbox defaultChecked />
  <Checkbox disabled />
  <Checkbox disabled defaultChecked />
</div>`}
        >
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-1">
              <Checkbox />
              <span className="text-xs text-muted-foreground">Unchecked</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Checkbox defaultChecked />
              <span className="text-xs text-muted-foreground">Checked</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Checkbox disabled />
              <span className="text-xs text-muted-foreground">Disabled</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Checkbox disabled defaultChecked />
              <span className="text-xs text-muted-foreground">Disabled checked</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Themes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variacoes de Cor</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">theme</code> para aplicar uma cor de tema ao checkbox checked.
        </p>
        <ComponentPreview
          code={`<div className="flex items-center gap-4">
  <Checkbox defaultChecked />
  <Checkbox defaultChecked theme="theme-brand" />
  <Checkbox defaultChecked theme="theme-class" />
  <Checkbox defaultChecked theme="theme-private" />
  <Checkbox defaultChecked theme="theme-group" />
  <Checkbox defaultChecked theme="theme-impulse" />
  <Checkbox defaultChecked theme="theme-positive" />
  <Checkbox defaultChecked theme="theme-warning" />
  <Checkbox defaultChecked theme="theme-critical" />
</div>`}
        >
          <div className="flex items-center gap-4">
            {[
              undefined,
              "theme-brand",
              "theme-class",
              "theme-private",
              "theme-group",
              "theme-impulse",
              "theme-positive",
              "theme-warning",
              "theme-critical",
            ].map((t, i) => (
              <Checkbox key={i} defaultChecked theme={t} />
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Circular + Themes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Circular + Temas</h3>
        <ComponentPreview
          code={`<div className="flex items-center gap-4">
  <Checkbox variant="circular" defaultChecked />
  <Checkbox variant="circular" defaultChecked theme="theme-brand" />
  <Checkbox variant="circular" defaultChecked theme="theme-class" />
  <Checkbox variant="circular" defaultChecked theme="theme-group" />
  <Checkbox variant="circular" defaultChecked theme="theme-positive" />
</div>`}
        >
          <div className="flex items-center gap-4">
            {[
              undefined,
              "theme-brand",
              "theme-class",
              "theme-group",
              "theme-positive",
            ].map((t, i) => (
              <Checkbox key={i} variant="circular" defaultChecked theme={t} />
            ))}
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
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Tamanho do checkbox</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;circular&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Formato do checkbox (quadrado ou circular)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">theme</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classe de tema (ex: &quot;theme-class&quot;)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">defaultChecked</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Estado inicial checked (nao controlado)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">checked</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Estado checked (controlado)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onCheckedChange</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">(checked: boolean) =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Callback ao mudar estado</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Desabilitar interacao</td>
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
      {/* Structure */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estrutura</h2>
        <SpecTable
          headers={["Camada", "Elemento", "Descricao"]}
          rows={[
            ["Root", "button (Radix)", "Container clicavel do checkbox"],
            ["Indicator", "span", "Icone de check (visivel apenas quando checked)"],
            ["Icone", "CheckIcon (Lucide)", "Check mark dentro do indicator"],
          ]}
        />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tamanhos</h2>
        <SpecTable
          headers={["Size", "Dimensao", "Icone", "Radius (default)", "Radius (circular)"]}
          rows={[
            ["sm", "14px (size-3.5)", "12px (size-3)", "4px", "full"],
            ["default", "16px (size-4)", "14px (size-3.5)", "4px", "full"],
            ["lg", "20px (size-5)", "16px (size-4)", "4px", "full"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex items-center gap-8">
            {(["sm", "default", "lg"] as const).map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-3">
                  <Checkbox size={s} defaultChecked />
                  <Checkbox size={s} variant="circular" defaultChecked />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <SpecTable
          headers={["Estado", "Visual", "Observacao"]}
          rows={[
            ["Unchecked", "border-input, fundo transparente", "Estado padrao"],
            ["Checked", "bg-primary, border-primary, icone branco", "Ativado"],
            ["Focus", "Ring 3px, ring/50, border-ring", "Acessibilidade"],
            ["Disabled", "opacity-50, cursor not-allowed", "Interacao bloqueada"],
            ["Error", "border-destructive, ring destructive/20", "Via aria-invalid"],
          ]}
        />
      </section>

      {/* Themes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variacoes de Cor</h2>
        <p className="text-muted-foreground">
          O tema afeta a cor do checkbox quando checked (bg-primary + border-primary). Unchecked permanece neutro.
        </p>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="space-y-4">
            {[
              { theme: undefined, label: "neutral" },
              { theme: "theme-brand", label: "brand" },
              { theme: "theme-class", label: "class" },
              { theme: "theme-private", label: "private" },
              { theme: "theme-group", label: "group" },
              { theme: "theme-impulse", label: "impulse" },
              { theme: "theme-positive", label: "positive" },
              { theme: "theme-warning", label: "warning" },
              { theme: "theme-critical", label: "critical" },
            ].map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <Checkbox defaultChecked theme={t.theme} />
                <Checkbox variant="circular" defaultChecked theme={t.theme} />
                <span className="text-xs font-mono text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          {[
            "O checkbox e baseado no Radix UI Checkbox — acessibilidade completa (teclado, ARIA, screen reader).",
            "Quando checked, o fundo e a borda usam bg-primary — respondem a .theme-* via prop theme.",
            "Quando unchecked, a borda usa border-input (neutra) independente do tema.",
            "O icone CheckIcon do Lucide e dimensionado automaticamente conforme o size.",
            "Use variant='circular' para checkboxes redondos — ideal para selecao de itens em listas.",
            "Associe sempre um <label> ao checkbox via htmlFor/id para acessibilidade.",
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
export default function CheckboxPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Controle de marcacao com 3 tamanhos, variante circular e suporte a temas de cor.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
