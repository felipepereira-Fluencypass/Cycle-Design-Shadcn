"use client"

import { Slider } from "@/components/ui/slider"
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
          code={`npx shadcn@latest add https://cycle-design.vercel.app/r/slider.json`}
        />
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Slider } from "@/components/ui/slider"`}
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
          code={`<Slider defaultValue={[50]} />`}
        >
          <div className="w-full max-w-sm">
            <Slider defaultValue={[50]} />
          </div>
        </ComponentPreview>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tamanhos</h3>
        <ComponentPreview
          code={`<Slider defaultValue={[50]} size="sm" />
<Slider defaultValue={[50]} />
<Slider defaultValue={[50]} size="lg" />`}
        >
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">sm</span>
              <Slider defaultValue={[50]} size="sm" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">default</span>
              <Slider defaultValue={[50]} />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">lg</span>
              <Slider defaultValue={[50]} size="lg" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled</h3>
        <ComponentPreview
          code={`<Slider defaultValue={[40]} disabled />`}
        >
          <div className="w-full max-w-sm">
            <Slider defaultValue={[40]} disabled />
          </div>
        </ComponentPreview>
      </section>

      {/* Com tema */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com tema de cor</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">theme</code> para aplicar a cor do tema no track preenchido e na borda do thumb.
        </p>
        <ComponentPreview
          code={`<Slider defaultValue={[60]} theme="theme-brand" />
<Slider defaultValue={[60]} theme="theme-class" />
<Slider defaultValue={[60]} theme="theme-group" />
<Slider defaultValue={[60]} theme="theme-live" />`}
        >
          <div className="w-full max-w-sm space-y-6">
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">brand</span>
              <Slider defaultValue={[60]} theme="theme-brand" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">class</span>
              <Slider defaultValue={[60]} theme="theme-class" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">group</span>
              <Slider defaultValue={[60]} theme="theme-group" />
            </div>
            <div className="space-y-1">
              <span className="text-xs text-muted-foreground">live</span>
              <Slider defaultValue={[60]} theme="theme-live" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Tema + tamanhos */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tema + tamanhos</h3>
        <ComponentPreview
          code={`<Slider defaultValue={[60]} size="sm" theme="theme-brand" />
<Slider defaultValue={[60]} theme="theme-brand" />
<Slider defaultValue={[60]} size="lg" theme="theme-brand" />`}
        >
          <div className="w-full max-w-sm space-y-6">
            <Slider defaultValue={[60]} size="sm" theme="theme-brand" />
            <Slider defaultValue={[60]} theme="theme-brand" />
            <Slider defaultValue={[60]} size="lg" theme="theme-brand" />
          </div>
        </ComponentPreview>
      </section>

      {/* Range */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Range (dois thumbs)</h3>
        <ComponentPreview
          code={`<Slider defaultValue={[25, 75]} />`}
        >
          <div className="w-full max-w-sm">
            <Slider defaultValue={[25, 75]} />
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
                <td className="p-3 text-muted-foreground">Tamanho do slider (track e thumb)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">theme</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classe de tema (ex: &quot;theme-brand&quot;). Aplica cor no track preenchido e borda do thumb.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number[]</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Valor inicial (nao controlado). Array com 1 ou 2 valores para range.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number[]</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Valor controlado</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">min</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">0</td>
                <td className="p-3 text-muted-foreground">Valor minimo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">max</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">100</td>
                <td className="p-3 text-muted-foreground">Valor maximo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">step</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">1</td>
                <td className="p-3 text-muted-foreground">Incremento entre valores</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Desabilitar interacao</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">onValueChange</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">(value: number[]) =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Callback ao mudar valor</td>
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
          headers={["Size", "Track height", "Thumb"]}
          rows={[
            ["sm", "4px", "14px"],
            ["default", "6px", "16px"],
            ["lg", "8px", "20px"],
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
            ["Track vazio", "bg-accent (neutro)"],
            ["Track preenchido", "bg-primary (respeita .theme-*)"],
            ["Thumb fill", "bg-primary-foreground (branco)"],
            ["Thumb border", "2px border-primary (cor do tema)"],
            ["Shadow", "shadow-sm"],
            ["Focus ring", "4px, ring/50"],
            ["Disabled", "opacity 50%, pointer-events none"],
          ]}
        />
      </section>

      {/* Temas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Temas de cor</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            A prop <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">theme</code> aplica cor no <strong>track preenchido</strong> e na <strong>borda do thumb</strong>.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O track vazio permanece neutro (<code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">bg-accent</code>) independente do tema.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O thumb sempre tem fundo branco (<code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">bg-primary-foreground</code>) com borda na cor do tema.
          </p>
        </div>
      </section>

      {/* Anatomia */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Anatomia</h2>
        <SpecTable
          headers={["Parte", "Descricao"]}
          rows={[
            ["Track", "Barra horizontal/vertical de fundo"],
            ["Range", "Parte preenchida do track (cor do tema)"],
            ["Thumb", "Circulo arrastavel (branco com borda colorida)"],
          ]}
        />
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function SliderPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Slider</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Controle deslizante com 3 tamanhos (sm, default, lg), suporte a range e temas de cor.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
