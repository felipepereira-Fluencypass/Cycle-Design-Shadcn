"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
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
      {/* Instalacao */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Instalacao</h2>
        <CodeBlock
          language="bash"
          showLineNumbers={false}
          code={`npx shadcn@latest add https://cycle-design.vercel.app/r/label.json`}
        />
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Label } from "@/components/ui/label"`}
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
          code={`<div className="flex flex-col gap-2 max-w-sm">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="email@exemplo.com" />
</div>`}
        >
          <div className="flex flex-col gap-2 max-w-sm">
            <Label htmlFor="email-demo">Email</Label>
            <Input id="email-demo" type="email" placeholder="email@exemplo.com" />
          </div>
        </ComponentPreview>
      </section>

      {/* Com Checkbox */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Checkbox</h3>
        <ComponentPreview
          code={`<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Aceitar termos e condicoes</Label>
</div>`}
        >
          <div className="flex items-center gap-2">
            <Checkbox id="terms-demo" />
            <Label htmlFor="terms-demo">Aceitar termos e condicoes</Label>
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled (via peer)</h3>
        <p className="text-muted-foreground">
          Quando o input irmao esta <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">disabled</code>, o Label reduz opacidade e mostra <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">cursor: not-allowed</code> automaticamente via <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">peer-disabled:</code>.
        </p>
        <ComponentPreview
          code={`<div className="flex flex-col gap-2 max-w-sm">
  <Label htmlFor="disabled-input">Campo desabilitado</Label>
  <Input id="disabled-input" disabled placeholder="Desabilitado" />
</div>`}
        >
          <div className="flex flex-col gap-2 max-w-sm">
            <Label htmlFor="disabled-demo">Campo desabilitado</Label>
            <Input id="disabled-demo" disabled placeholder="Desabilitado" className="peer" />
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
                <td className="p-3 font-mono text-xs">htmlFor</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">ID do elemento de formulario associado</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">asChild</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Renderizar como elemento filho (Radix composition)</td>
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
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Font size", "14px (text-sm)"],
            ["Font weight", "500 (font-medium)"],
            ["Line height", "1 (leading-none)"],
            ["Gap (com icone/badge)", "8px (gap-2)"],
            ["User select", "none"],
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <SpecTable
          headers={["Estado", "Visual"]}
          rows={[
            ["Default", "text-foreground, font-medium, text-sm"],
            ["Disabled (via peer/group)", "opacity-50, cursor not-allowed"],
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Sempre associar o Label ao campo via <strong>htmlFor</strong> + <strong>id</strong> para acessibilidade.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O Label reage automaticamente ao estado disabled do input irmao via classes <strong>peer-disabled:</strong>.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Baseado no Radix UI Label — semantica de <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">&lt;label&gt;</code> nativa.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function LabelPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Label</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Rotulo acessivel para campos de formulario. Baseado no Radix UI Label.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
