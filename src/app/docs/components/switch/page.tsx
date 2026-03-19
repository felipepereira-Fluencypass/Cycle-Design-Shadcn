"use client"

import { Switch } from "@/components/ui/switch"
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
          code={`npx shadcn@latest add https://cycle-design.vercel.app/r/switch.json`}
        />
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Switch } from "@/components/ui/switch"`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Exemplos */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Basico */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Basico</h3>
        <ComponentPreview
          code={`<Switch />`}
        >
          <div className="flex items-center gap-3">
            <Switch id="basic" />
            <label htmlFor="basic" className="text-sm">Ativar notificacoes</label>
          </div>
        </ComponentPreview>
      </section>

      {/* Checked */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Checked por padrao</h3>
        <ComponentPreview
          code={`<Switch defaultChecked />`}
        >
          <div className="flex items-center gap-3">
            <Switch defaultChecked id="checked" />
            <label htmlFor="checked" className="text-sm">Modo escuro</label>
          </div>
        </ComponentPreview>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tamanhos</h3>
        <ComponentPreview
          code={`<Switch size="sm" />
<Switch />
<Switch size="lg" />`}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Switch defaultChecked size="sm" />
              <span className="text-xs text-muted-foreground">sm</span>
            </div>
            <div className="flex items-center gap-2">
              <Switch defaultChecked />
              <span className="text-xs text-muted-foreground">default</span>
            </div>
            <div className="flex items-center gap-2">
              <Switch defaultChecked size="lg" />
              <span className="text-xs text-muted-foreground">lg</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled</h3>
        <ComponentPreview
          code={`<Switch disabled />
<Switch disabled defaultChecked />`}
        >
          <div className="flex items-center gap-6">
            <Switch disabled />
            <Switch disabled defaultChecked />
          </div>
        </ComponentPreview>
      </section>

      {/* Com tema */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com tema de cor</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">theme</code> para aplicar a cor do tema apenas no estado checked.
        </p>
        <ComponentPreview
          code={`<Switch defaultChecked theme="theme-brand" />
<Switch defaultChecked theme="theme-class" />
<Switch defaultChecked theme="theme-success" />`}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Switch defaultChecked theme="theme-brand" />
              <span className="text-xs text-muted-foreground">brand</span>
            </div>
            <div className="flex items-center gap-2">
              <Switch defaultChecked theme="theme-class" />
              <span className="text-xs text-muted-foreground">class</span>
            </div>
            <div className="flex items-center gap-2">
              <Switch defaultChecked theme="theme-success" />
              <span className="text-xs text-muted-foreground">success</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Tema + tamanhos */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tema + tamanhos</h3>
        <ComponentPreview
          code={`<Switch defaultChecked size="sm" theme="theme-brand" />
<Switch defaultChecked theme="theme-brand" />
<Switch defaultChecked size="lg" theme="theme-brand" />`}
        >
          <div className="flex items-center gap-6">
            <Switch defaultChecked size="sm" theme="theme-brand" />
            <Switch defaultChecked theme="theme-brand" />
            <Switch defaultChecked size="lg" theme="theme-brand" />
          </div>
        </ComponentPreview>
      </section>

      {/* API */}
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
                <td className="p-3 text-muted-foreground">Tamanho do switch</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">theme</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classe de tema (ex: &quot;theme-brand&quot;). Aplica cor apenas no estado checked.</td>
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
                <td className="p-3 text-muted-foreground">Estado controlado</td>
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
      {/* Tamanhos */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tamanhos</h2>
        <SpecTable
          headers={["Size", "Track (h x w)", "Thumb"]}
          rows={[
            ["sm", "16px x 28px", "12px"],
            ["default", "20px x 36px", "16px"],
            ["lg", "24px x 44px", "20px"],
          ]}
        />
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Border radius (track)", "Full (rounded-full)"],
            ["Border radius (thumb)", "Full (rounded-full)"],
            ["Background unchecked", "bg-input (token neutro)"],
            ["Background checked", "bg-primary (respeita .theme-*)"],
            ["Thumb color", "bg-background"],
            ["Shadow", "shadow-xs"],
            ["Focus ring", "3px, ring/50"],
            ["Disabled", "opacity 50%, cursor not-allowed"],
            ["Transicao", "transition-all (cores + transform)"],
          ]}
        />
      </section>

      {/* Estados */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <SpecTable
          headers={["Estado", "Visual"]}
          rows={[
            ["Unchecked", "Track bg-input, thumb na esquerda"],
            ["Checked", "Track bg-primary, thumb na direita"],
            ["Disabled unchecked", "opacity 50%, cursor not-allowed"],
            ["Disabled checked", "opacity 50%, cor mantida"],
            ["Focus", "Ring 3px ao redor do track"],
          ]}
        />
      </section>

      {/* Temas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Temas de cor</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            A prop <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">theme</code> aplica cor apenas no estado <strong>checked</strong>.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O estado unchecked permanece neutro (<code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">bg-input</code>) independente do tema.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Segue o mesmo padrao de Checkbox e Radio Group.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function SwitchPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Toggle on/off. 3 tamanhos (sm, default, lg) e suporte a temas de cor.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
