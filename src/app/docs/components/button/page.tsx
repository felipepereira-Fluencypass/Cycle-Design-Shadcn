import { Button } from "@/components/ui/button"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { SpecTable } from "@/components/docs/spec-table"
import { ColorTokenList } from "@/components/docs/color-token-list"
import { FigmaNamingSection } from "@/components/docs/figma-naming"
import { buttonSpec } from "./specs"
import { Mail, ChevronRight, Loader2, Plus, Trash2, ArrowUpRight } from "lucide-react"

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
          code={`npx shadcn@latest add button`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"`}
          language="tsx"
          showLineNumbers={false}
        />
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Button</Button>
}`}
        >
          <Button>Button</Button>
        </ComponentPreview>
      </section>

      {/* Examples header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Variants */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variants</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">variant</code> para alterar o estilo visual do botao.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"

export function ButtonVariants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Size</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">size</code> para alterar o tamanho do botao.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export function ButtonSize() {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <Button size="xs" variant="outline">Extra Small</Button>
        <Button size="icon-xs" aria-label="Submit" variant="outline">
          <ArrowUpRight />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">Small</Button>
        <Button size="icon-sm" aria-label="Submit" variant="outline">
          <ArrowUpRight />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="default" variant="outline">Default</Button>
        <Button size="icon" aria-label="Submit" variant="outline">
          <ArrowUpRight />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="lg" variant="outline">Large</Button>
        <Button size="icon-lg" aria-label="Submit" variant="outline">
          <ArrowUpRight />
        </Button>
      </div>
    </div>
  )
}`}
        >
          <div className="flex flex-col items-start gap-8 sm:flex-row">
            <div className="flex items-start gap-2">
              <Button size="xs" variant="outline">Extra Small</Button>
              <Button size="icon-xs" aria-label="Submit" variant="outline"><ArrowUpRight /></Button>
            </div>
            <div className="flex items-start gap-2">
              <Button size="sm" variant="outline">Small</Button>
              <Button size="icon-sm" aria-label="Submit" variant="outline"><ArrowUpRight /></Button>
            </div>
            <div className="flex items-start gap-2">
              <Button size="default" variant="outline">Default</Button>
              <Button size="icon" aria-label="Submit" variant="outline"><ArrowUpRight /></Button>
            </div>
            <div className="flex items-start gap-2">
              <Button size="lg" variant="outline">Large</Button>
              <Button size="icon-lg" aria-label="Submit" variant="outline"><ArrowUpRight /></Button>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* With Icon */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Icone</h3>
        <p className="text-muted-foreground">
          Icones sao automaticamente dimensionados. Coloque antes ou depois do texto.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { Mail, ChevronRight } from "lucide-react"

export function ButtonWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <Mail /> Enviar email
      </Button>
      <Button variant="outline">
        Proximo <ChevronRight />
      </Button>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button><Mail /> Enviar email</Button>
            <Button variant="outline">Proximo <ChevronRight /></Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Icon Only */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Somente Icone</h3>
        <p className="text-muted-foreground">
          Use os sizes <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">icon</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">icon-xs</code>, <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">icon-sm</code> ou <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">icon-lg</code>. Sempre inclua <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">aria-label</code>.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

export function ButtonIconOnly() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="icon-xs" variant="outline" aria-label="Adicionar">
        <Plus />
      </Button>
      <Button size="icon-sm" variant="outline" aria-label="Adicionar">
        <Plus />
      </Button>
      <Button size="icon" aria-label="Adicionar">
        <Plus />
      </Button>
      <Button size="icon-lg" aria-label="Adicionar">
        <Plus />
      </Button>
      <Button size="icon-sm" variant="ghost" aria-label="Deletar">
        <Trash2 />
      </Button>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button size="icon-xs" variant="outline" aria-label="Adicionar"><Plus /></Button>
            <Button size="icon-sm" variant="outline" aria-label="Adicionar"><Plus /></Button>
            <Button size="icon" aria-label="Adicionar"><Plus /></Button>
            <Button size="icon-lg" aria-label="Adicionar"><Plus /></Button>
            <Button size="icon-sm" variant="ghost" aria-label="Deletar"><Trash2 /></Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Loading */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Loading</h3>
        <p className="text-muted-foreground">
          Use um icone com <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">animate-spin</code> e <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">disabled</code>.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ButtonLoading() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <Loader2 className="animate-spin" /> Carregando...
      </Button>
      <Button variant="outline" disabled>
        <Loader2 className="animate-spin" /> Aguarde
      </Button>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled><Loader2 className="animate-spin" /> Carregando...</Button>
            <Button variant="outline" disabled><Loader2 className="animate-spin" /> Aguarde</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Color Themes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variacoes de Cor</h3>
        <p className="text-muted-foreground">
          Aplique a classe <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code> no botao ou container pai.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"

export function ButtonThemes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button>Neutral</Button>
      <Button className="theme-brand">Brand</Button>
      <Button className="theme-class">Class</Button>
      <Button className="theme-private">Private</Button>
      <Button className="theme-group">Group</Button>
      <Button className="theme-impulse">Impulse</Button>
      <Button className="theme-positive">Positive</Button>
      <Button className="theme-warning">Warning</Button>
      <Button className="theme-critical">Critical</Button>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button>Neutral</Button>
            <Button className="theme-brand">Brand</Button>
            <Button className="theme-class">Class</Button>
            <Button className="theme-private">Private</Button>
            <Button className="theme-group">Group</Button>
            <Button className="theme-impulse">Impulse</Button>
            <Button className="theme-positive">Positive</Button>
            <Button className="theme-warning">Warning</Button>
            <Button className="theme-critical">Critical</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Theme + Variants */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tema + Variant</h3>
        <p className="text-muted-foreground">
          Aplique <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code> no container pai para afetar todos os botoes.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"

export function ButtonThemeVariants() {
  return (
    <div className="space-y-6">
      <div className="theme-brand flex flex-wrap items-center gap-3">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="theme-positive flex flex-wrap items-center gap-3">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="theme-critical flex flex-wrap items-center gap-3">
        <Button variant="default">Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
    </div>
  )
}`}
        >
          <div className="space-y-6">
            {[
              { theme: "theme-brand", label: "Brand" },
              { theme: "theme-positive", label: "Positive" },
              { theme: "theme-critical", label: "Critical" },
            ].map((t) => (
              <div key={t.theme} className="space-y-2">
                <p className="text-xs font-mono text-muted-foreground">.{t.theme}</p>
                <div className={`flex flex-wrap items-center gap-3 ${t.theme}`}>
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">disabled</code> para desabilitar. Opacidade 50% e cursor bloqueado.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"

export function ButtonDisabled() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>Default</Button>
      <Button variant="secondary" disabled>Secondary</Button>
      <Button variant="outline" disabled>Outline</Button>
      <Button variant="destructive" disabled>Destructive</Button>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Button disabled>Default</Button>
            <Button variant="secondary" disabled>Secondary</Button>
            <Button variant="outline" disabled>Outline</Button>
            <Button variant="destructive" disabled>Destructive</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* As Child */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">As Child</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">asChild</code> para renderizar como outro elemento.
        </p>
        <ComponentPreview
          code={`import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ButtonAsChild() {
  return (
    <Button asChild>
      <Link href="/docs">Ir para Docs</Link>
    </Button>
  )
}`}
        >
          <Button asChild>
            <a href="/docs">Ir para Docs</a>
          </Button>
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
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;destructive&quot; | &quot;outline&quot; | &quot;secondary&quot; | &quot;ghost&quot; | &quot;link&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Estilo visual do botao</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;xs&quot; | &quot;sm&quot; | &quot;lg&quot; | &quot;icon&quot; | &quot;icon-xs&quot; | &quot;icon-sm&quot; | &quot;icon-lg&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Tamanho do botao. xs=24px, sm=32px, default=40px, lg=48px</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">asChild</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Renderiza como elemento filho (Slot)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Desabilita o botao</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classes CSS adicionais (use para .theme-*)</td>
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
      {/* Figma Naming */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Nomenclatura no Figma</h2>
        <p className="text-muted-foreground">
          Para que a IA identifique corretamente o componente, siga esta convencao de nomes e propriedades no Figma.
        </p>
        <FigmaNamingSection naming={buttonSpec.figmaNaming} />
      </section>

      {/* Size Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tamanhos (com texto)</h2>
        <p className="text-muted-foreground">
          Especificacoes de cada tamanho de botao com texto. Todos os valores em pixels.
        </p>
        <SpecTable
          headers={["Size", "Altura", "Padding H", "Radius", "Font Size", "Font Weight", "Line Height", "Icone"]}
          rows={buttonSpec.sizes.map((s) => [
            s.name,
            s.height,
            s.paddingX,
            s.borderRadius,
            s.fontSize,
            s.fontWeight,
            s.lineHeight,
            s.iconSize,
          ])}
        />
      </section>

      {/* Icon Only Specs */}
      {buttonSpec.iconOnlySizes && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Tamanhos (somente icone)</h2>
          <p className="text-muted-foreground">
            Botoes quadrados para uso com icone apenas. Sem texto, sem padding lateral.
          </p>
          <SpecTable
            headers={["Size", "Dimensao", "Radius", "Icone"]}
            rows={buttonSpec.iconOnlySizes.map((s) => [
              s.name,
              s.height,
              s.borderRadius,
              s.iconSize,
            ])}
          />
        </section>
      )}

      {/* Visual reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Referencia Visual</h2>
        <p className="text-muted-foreground">
          Preview dos tamanhos reais para comparacao no Figma.
        </p>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-6">
            {buttonSpec.sizes.map((size) => {
              const sizeMap: Record<string, "xs" | "sm" | "default" | "lg"> = {
                xs: "xs",
                sm: "sm",
                "default (md)": "default",
                lg: "lg",
              }
              const sizeKey = sizeMap[size.name] ?? "default"
              return (
                <div key={size.name} className="flex items-center gap-6">
                  <span className="w-28 text-xs font-mono text-muted-foreground shrink-0">
                    {size.name}
                  </span>
                  <Button size={sizeKey} variant="outline">
                    Button
                  </Button>
                  <span className="text-xs text-muted-foreground">
                    {size.height} · {size.fontSize}/{size.fontWeight} · icone {size.iconSize}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tipografia</h2>
        <p className="text-muted-foreground">
          A fonte usada em todos os botoes e <strong>Geist Sans</strong>. Cada size usa um estilo tipografico diferente.
        </p>
        <SpecTable
          headers={["Size", "Estilo", "Font Size", "Weight", "Line Height"]}
          rows={[
            ["xs / sm", "button-sm", "12px", "500 (Medium)", "12px"],
            ["default (md)", "button-md", "14px", "500 (Medium)", "14px"],
            ["lg", "button-lg", "16px", "500 (Medium)", "16px"],
          ]}
        />
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cores por Variant</h2>
        <p className="text-muted-foreground">
          Tokens semanticos usados em cada variant. No Figma, aplique as cores do token correspondente. Com <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code>, os mesmos tokens apontam para cores diferentes.
        </p>
        <ColorTokenList variants={buttonSpec.variantColors} />
      </section>

      {/* Theme variations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variacoes de Cor (Temas)</h2>
        <p className="text-muted-foreground">
          Cada tema sobrescreve os tokens semanticos. No Figma, crie uma propriedade <strong>Theme</strong> com estes valores. A estrutura do botao e identica — so mudam as cores.
        </p>
        <SpecTable
          headers={["Tema", "Classe CSS", "Descricao"]}
          rows={[
            ["Neutral", "(padrao)", "Tema global, sem classe extra"],
            ["Brand", ".theme-brand", "Rose — cor da marca Fluencypass"],
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
          <div className="flex flex-wrap gap-3">
            <Button>Neutral</Button>
            <Button className="theme-brand">Brand</Button>
            <Button className="theme-class">Class</Button>
            <Button className="theme-private">Private</Button>
            <Button className="theme-group">Group</Button>
            <Button className="theme-impulse">Impulse</Button>
            <Button className="theme-positive">Positive</Button>
            <Button className="theme-warning">Warning</Button>
            <Button className="theme-critical">Critical</Button>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <p className="text-muted-foreground">
          Crie estes estados para cada variant no Figma.
        </p>
        <SpecTable
          headers={["Estado", "Comportamento", "Observacao"]}
          rows={[
            ["Default", "Aparencia padrao", "Estado normal"],
            ["Hover", "Default: bg-primary/90 · Secondary: bg-secondary/80 · Outline: bg-accent · Ghost: bg-accent · Link: underline · Destructive: bg-destructive/90", "Transicao suave"],
            ["Focused", "Ring de 3px, cor ring/50", "Acessibilidade — nao remover"],
            ["Disabled", "Opacity 50%, cursor bloqueado", "Aplicar sobre o botao inteiro"],
          ]}
        />
      </section>

      {/* Spacing */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Espacamento Interno</h2>
        <p className="text-muted-foreground">
          Gap entre icone e texto por tamanho.
        </p>
        <SpecTable
          headers={["Size", "Gap icone-texto"]}
          rows={[
            ["xs", "8px"],
            ["sm", "8px"],
            ["default (md)", "8px"],
            ["lg", "8px"],
          ]}
        />
      </section>

      {/* Notes */}
      {buttonSpec.notes && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Notas Adicionais</h2>
          <div className="rounded-lg border border-border p-4 space-y-2">
            {buttonSpec.notes.map((note, i) => (
              <p key={i} className="text-sm text-muted-foreground flex gap-2">
                <span className="text-foreground shrink-0">•</span>
                {note}
              </p>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function ButtonPage() {
  return (
    <div className="space-y-10">
      {/* Header — shared between tabs */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      {/* Tabbed content */}
      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
