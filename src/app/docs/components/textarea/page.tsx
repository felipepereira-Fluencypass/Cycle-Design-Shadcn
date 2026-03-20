"use client"

import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
          code={`npx shadcn@latest add https://cycle-design.vercel.app/r/textarea.json`}
        />
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Textarea } from "@/components/ui/textarea"`}
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
          code={`<Textarea placeholder="Digite sua mensagem..." />`}
        >
          <div className="max-w-sm">
            <Textarea placeholder="Digite sua mensagem..." />
          </div>
        </ComponentPreview>
      </section>

      {/* Variantes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variantes</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">variant</code> para alternar entre outline e filled.
        </p>
        <ComponentPreview
          code={`<div className="flex flex-col gap-4 max-w-sm">
  <Textarea variant="outline" placeholder="Outline (padrao)" />
  <Textarea variant="filled" placeholder="Filled" />
</div>`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Textarea variant="outline" placeholder="Outline (padrao)" />
            <Textarea variant="filled" placeholder="Filled" />
          </div>
        </ComponentPreview>
      </section>

      {/* Tamanhos */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tamanhos</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">textareaSize</code> para alterar o tamanho.
        </p>
        <ComponentPreview
          code={`<div className="flex flex-col gap-4 max-w-sm">
  <Textarea textareaSize="sm" placeholder="Small (min-h 60px)" />
  <Textarea textareaSize="default" placeholder="Default (min-h 80px)" />
  <Textarea textareaSize="lg" placeholder="Large (min-h 120px)" />
</div>`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Textarea textareaSize="sm" placeholder="Small (min-h 60px)" />
            <Textarea textareaSize="default" placeholder="Default (min-h 80px)" />
            <Textarea textareaSize="lg" placeholder="Large (min-h 120px)" />
          </div>
        </ComponentPreview>
      </section>

      {/* Com Label */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Label</h3>
        <ComponentPreview
          code={`<div className="flex flex-col gap-2 max-w-sm">
  <Label htmlFor="message">Mensagem</Label>
  <Textarea id="message" placeholder="Digite sua mensagem..." />
</div>`}
        >
          <div className="flex flex-col gap-2 max-w-sm">
            <Label htmlFor="message-demo">Mensagem</Label>
            <Textarea id="message-demo" placeholder="Digite sua mensagem..." />
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled</h3>
        <ComponentPreview
          code={`<Textarea disabled placeholder="Desabilitado" />`}
        >
          <div className="max-w-sm">
            <Textarea disabled placeholder="Desabilitado" />
          </div>
        </ComponentPreview>
      </section>

      {/* Error */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Estado de Erro</h3>
        <ComponentPreview
          code={`<div className="flex flex-col gap-2 max-w-sm">
  <Label htmlFor="bio">Bio</Label>
  <Textarea id="bio" aria-invalid placeholder="Campo com erro" />
  <p className="text-sm text-destructive">Este campo e obrigatorio.</p>
</div>`}
        >
          <div className="flex flex-col gap-2 max-w-sm">
            <Label htmlFor="bio-demo">Bio</Label>
            <Textarea id="bio-demo" aria-invalid placeholder="Campo com erro" />
            <p className="text-sm text-destructive">Este campo e obrigatorio.</p>
          </div>
        </ComponentPreview>
      </section>

      {/* Com Button */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Button</h3>
        <ComponentPreview
          code={`<div className="flex flex-col gap-4 max-w-sm">
  <Label htmlFor="feedback">Feedback</Label>
  <Textarea id="feedback" placeholder="Escreva seu feedback..." />
  <Button className="self-end">Enviar</Button>
</div>`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Label htmlFor="feedback-demo">Feedback</Label>
            <Textarea id="feedback-demo" placeholder="Escreva seu feedback..." />
            <Button className="self-end">Enviar</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Temas */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variacoes de Cor</h3>
        <p className="text-muted-foreground">
          Aplique a classe <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code> no container pai. O focus ring assume a cor do tema.
        </p>
        <ComponentPreview
          code={`<div className="flex flex-col gap-6 max-w-sm">
  <div>
    <span className="text-xs font-mono text-muted-foreground">neutral (padrao)</span>
    <Textarea placeholder="Focus para ver o ring" />
  </div>
  <div className="theme-brand">
    <span className="text-xs font-mono text-muted-foreground">.theme-brand</span>
    <Textarea placeholder="Focus para ver o ring" />
  </div>
  <div className="theme-class">
    <span className="text-xs font-mono text-muted-foreground">.theme-class</span>
    <Textarea placeholder="Focus para ver o ring" />
  </div>
</div>`}
        >
          <div className="flex flex-col gap-6 max-w-sm">
            <div>
              <span className="text-xs font-mono text-muted-foreground">neutral (padrao)</span>
              <Textarea placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-brand">
              <span className="text-xs font-mono text-muted-foreground">.theme-brand</span>
              <Textarea placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-class">
              <span className="text-xs font-mono text-muted-foreground">.theme-class</span>
              <Textarea placeholder="Focus para ver o ring" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Filled + Themes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Filled com Temas</h3>
        <p className="text-muted-foreground">
          O <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">filled</code> segue as mesmas regras: idle neutro, cor do tema aparece no hover/focus.
        </p>
        <ComponentPreview
          code={`<div className="flex flex-col gap-6 max-w-sm">
  <div>
    <span className="text-xs font-mono text-muted-foreground">neutral filled</span>
    <Textarea variant="filled" placeholder="Focus para ver o ring" />
  </div>
  <div className="theme-brand">
    <span className="text-xs font-mono text-muted-foreground">.theme-brand filled</span>
    <Textarea variant="filled" placeholder="Focus para ver o ring" />
  </div>
  <div className="theme-class">
    <span className="text-xs font-mono text-muted-foreground">.theme-class filled</span>
    <Textarea variant="filled" placeholder="Focus para ver o ring" />
  </div>
  <div className="theme-positive">
    <span className="text-xs font-mono text-muted-foreground">.theme-positive filled</span>
    <Textarea variant="filled" placeholder="Focus para ver o ring" />
  </div>
</div>`}
        >
          <div className="flex flex-col gap-6 max-w-sm">
            <div>
              <span className="text-xs font-mono text-muted-foreground">neutral filled</span>
              <Textarea variant="filled" placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-brand">
              <span className="text-xs font-mono text-muted-foreground">.theme-brand filled</span>
              <Textarea variant="filled" placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-class">
              <span className="text-xs font-mono text-muted-foreground">.theme-class filled</span>
              <Textarea variant="filled" placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-positive">
              <span className="text-xs font-mono text-muted-foreground">.theme-positive filled</span>
              <Textarea variant="filled" placeholder="Focus para ver o ring" />
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
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;outline&quot; | &quot;filled&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;outline&quot;</td>
                <td className="p-3 text-muted-foreground">Outline (borda) ou filled (fundo preenchido)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">textareaSize</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Tamanho minimo. sm=60px, default=80px, lg=120px</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Desabilita o textarea</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">aria-invalid</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Ativa estado de erro com borda e ring vermelhos</td>
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
        <h2 className="text-xl font-semibold">Tamanhos</h2>
        <SpecTable
          headers={["Size", "Min Height", "Padding H", "Padding V", "Font Size"]}
          rows={[
            ["sm", "60px", "12px (px-3)", "8px (py-2)", "14px (text-sm)"],
            ["default", "80px", "16px (px-4)", "8px (py-2)", "14px (text-sm)"],
            ["lg", "120px", "16px (px-4)", "12px (py-3)", "16px (text-base)"],
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Referencia Visual</h2>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-6 max-w-sm">
            {(["sm", "default", "lg"] as const).map((size) => (
              <div key={size} className="flex flex-col gap-1">
                <span className="text-xs font-mono text-muted-foreground">
                  {size === "sm" ? "sm — min-h 60px" : size === "default" ? "default — min-h 80px" : "lg — min-h 120px"}
                </span>
                <Textarea textareaSize={size} placeholder={`Textarea ${size}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <SpecTable
          headers={["Estado", "Visual"]}
          rows={[
            ["Default", "Borda border-input, fundo transparente"],
            ["Hover", "Borda border-ring, leve bg-ring/5"],
            ["Focused", "Borda border-ring + ring 3px ring/50"],
            ["Disabled", "Opacity 50%, cursor not-allowed"],
            ["Error", "Borda border-destructive + ring destructive/20"],
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O textarea e <strong>redimensionavel verticalmente</strong> (resize-y) por padrao.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Usa os mesmos tokens de cor e estados do <strong>Input</strong> para consistencia visual.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Suporta <strong>.theme-*</strong> via container pai — o focus ring assume a cor do tema.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function TextareaPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Campo de texto multi-linha com 3 tamanhos, estados de erro e suporte a temas de cor.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
