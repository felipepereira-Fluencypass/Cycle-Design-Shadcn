"use client"

import { Badge } from "@/components/ui/badge"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { SpecTable } from "@/components/docs/spec-table"
import { ArrowLeft, ArrowRight, Check, Circle, Clock, Star, AlertTriangle } from "lucide-react"

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
          code={`npx shadcn@latest add badge`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Badge } from "@/components/ui/badge"`}
          language="tsx"
          showLineNumbers={false}
        />
        <ComponentPreview
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeDemo() {
  return <Badge>Badge</Badge>
}`}
        >
          <Badge>Badge</Badge>
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
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">variant</code> para alterar o estilo visual do badge.
        </p>
        <ComponentPreview
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeVariants() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
      <Badge variant="muted">Muted</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="progress">Progress</Badge>
      <Badge variant="progress-completed">Progress Completed</Badge>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="link">Link</Badge>
            <Badge variant="muted">Muted</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="progress">Progress</Badge>
            <Badge variant="progress-completed">Progress Completed</Badge>
          </div>
        </ComponentPreview>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Size</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">size</code> para alterar o tamanho do badge.
        </p>
        <ComponentPreview
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge size="sm">Small</Badge>
            <Badge size="default">Default</Badge>
            <Badge size="lg">Large</Badge>
          </div>
        </ComponentPreview>
      </section>

      {/* With Icon */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Icone</h3>
        <p className="text-muted-foreground">
          Icones dentro do badge sao automaticamente dimensionados via <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">[&gt;svg]:size-3</code>. Coloque antes ou depois do texto.
        </p>
        <ComponentPreview
          code={`import { Badge } from "@/components/ui/badge"
import { Check, Circle, Clock, Star, AlertTriangle } from "lucide-react"

export function BadgeWithIcon() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="success"><Check /> Aprovado</Badge>
      <Badge variant="muted"><Clock /> Pendente</Badge>
      <Badge variant="destructive"><AlertTriangle /> Erro</Badge>
      <Badge variant="secondary"><Star /> Destaque</Badge>
      <Badge variant="outline"><Circle /> Status</Badge>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="success"><Check /> Aprovado</Badge>
            <Badge variant="muted"><Clock /> Pendente</Badge>
            <Badge variant="destructive"><AlertTriangle /> Erro</Badge>
            <Badge variant="secondary"><Star /> Destaque</Badge>
            <Badge variant="outline"><Circle /> Status</Badge>
          </div>
        </ComponentPreview>
      </section>

      {/* Color Themes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variacoes de Cor</h3>
        <p className="text-muted-foreground">
          Aplique a classe <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code> no badge ou em um container pai. Apenas o fundo e texto do badge mudam — o conteudo ao redor nao e afetado.
        </p>
        <ComponentPreview
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeThemes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Badge>Neutral</Badge>
      <Badge className="theme-brand">Brand</Badge>
      <Badge className="theme-class">Class</Badge>
      <Badge className="theme-private">Private</Badge>
      <Badge className="theme-group">Group</Badge>
      <Badge className="theme-impulse">Impulse</Badge>
      <Badge className="theme-positive">Positive</Badge>
      <Badge className="theme-warning">Warning</Badge>
      <Badge className="theme-critical">Critical</Badge>
    </div>
  )
}`}
        >
          <div className="flex flex-wrap items-center gap-3">
            <Badge>Neutral</Badge>
            <Badge className="theme-brand">Brand</Badge>
            <Badge className="theme-class">Class</Badge>
            <Badge className="theme-private">Private</Badge>
            <Badge className="theme-group">Group</Badge>
            <Badge className="theme-impulse">Impulse</Badge>
            <Badge className="theme-positive">Positive</Badge>
            <Badge className="theme-warning">Warning</Badge>
            <Badge className="theme-critical">Critical</Badge>
          </div>
        </ComponentPreview>
      </section>

      {/* Theme + Variants */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tema + Variant</h3>
        <p className="text-muted-foreground">
          Aplique <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code> no container pai para afetar todos os badges.
        </p>
        <ComponentPreview
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeThemeVariants() {
  return (
    <div className="space-y-6">
      <div className="theme-brand flex flex-wrap items-center gap-3">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>
      <div className="theme-positive flex flex-wrap items-center gap-3">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>
      <div className="theme-critical flex flex-wrap items-center gap-3">
        <Badge variant="default">Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
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
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="ghost">Ghost</Badge>
                  <Badge variant="link">Link</Badge>
                </div>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* As Child */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">As Child</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">asChild</code> para renderizar como outro elemento (ex: link).
        </p>
        <ComponentPreview
          code={`import { Badge } from "@/components/ui/badge"

export function BadgeAsChild() {
  return (
    <Badge asChild>
      <a href="/docs">Ir para Docs</a>
    </Badge>
  )
}`}
        >
          <Badge asChild>
            <a href="/docs">Ir para Docs</a>
          </Badge>
        </ComponentPreview>
      </section>

      {/* Badge Progress */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Badge Progress</h3>
        <p className="text-muted-foreground">
          Variants <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">progress</code> e{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">progress-completed</code> para indicadores de progresso em sidebars e trilhas de curso. Fundo neutro (<code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">bg-accent</code>) com texto cinza ou verde conforme o estado.
        </p>
        <ComponentPreview
          code={`import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function BadgeProgressDemo() {
  return (
    <div className="space-y-4">
      {/* Em progresso */}
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="progress" size="sm">2/5</Badge>
        <Badge variant="progress" size="default">2/5</Badge>
        <Badge variant="progress" size="lg">2/5</Badge>
      </div>

      {/* Completo */}
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="progress-completed" size="sm">5/5</Badge>
        <Badge variant="progress-completed" size="default">5/5</Badge>
        <Badge variant="progress-completed" size="lg">5/5</Badge>
      </div>

      {/* Com icones de seta */}
      <div className="flex flex-wrap items-center gap-3">
        <Badge variant="progress" size="sm">
          <ArrowLeft /> 2/5 <ArrowRight />
        </Badge>
        <Badge variant="progress-completed" size="sm">
          <ArrowLeft /> 5/5 <ArrowRight />
        </Badge>
      </div>
    </div>
  )
}`}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="progress" size="sm">2/5</Badge>
              <Badge variant="progress" size="default">2/5</Badge>
              <Badge variant="progress" size="lg">2/5</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="progress-completed" size="sm">5/5</Badge>
              <Badge variant="progress-completed" size="default">5/5</Badge>
              <Badge variant="progress-completed" size="lg">5/5</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="progress" size="sm">
                <ArrowLeft /> 2/5 <ArrowRight />
              </Badge>
              <Badge variant="progress-completed" size="sm">
                <ArrowLeft /> 5/5 <ArrowRight />
              </Badge>
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
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;secondary&quot; | &quot;destructive&quot; | &quot;outline&quot; | &quot;ghost&quot; | &quot;link&quot; | &quot;muted&quot; | &quot;success&quot; | &quot;progress&quot; | &quot;progress-completed&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Estilo visual do badge</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Tamanho do badge</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">asChild</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Renderiza como elemento filho (Slot)</td>
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
      {/* Structure */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estrutura</h2>
        <p className="text-muted-foreground">
          O Badge e um componente inline usado para rotular, categorizar ou indicar status. Renderiza como <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">&lt;span&gt;</code> por padrao. Suporta icones e texto em qualquer combinacao.
        </p>
      </section>

      {/* Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variants</h2>
        <p className="text-muted-foreground">
          Tokens semanticos usados em cada variant. Com <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code>, os mesmos tokens apontam para cores diferentes.
        </p>
        <SpecTable
          headers={["Variant", "Fundo", "Texto", "Borda", "Uso recomendado"]}
          rows={[
            ["default", "bg-primary", "text-primary-foreground", "transparent", "Destaque principal, acoes primarias"],
            ["secondary", "bg-secondary", "text-secondary-foreground", "transparent", "Complemento, categorias"],
            ["destructive", "bg-destructive", "text-white", "transparent", "Erros, remocao, alertas criticos"],
            ["outline", "transparent", "text-foreground", "border-border", "Neutro com borda, filtros"],
            ["ghost", "transparent", "text-foreground", "transparent", "Minimalista, dentro de listas"],
            ["link", "transparent", "text-primary", "transparent", "Badge clicavel, navegacao"],
            ["muted", "bg-muted", "text-muted-foreground", "transparent", "Informacao secundaria, metadados"],
            ["success", "bg-[#28c953]/15", "text-[#28c953]", "border-[#28c953]/20", "Status positivo, aprovado, ativo"],
            ["progress", "bg-accent", "text-muted-foreground", "transparent", "Indicador de progresso em andamento"],
            ["progress-completed", "bg-accent", "text-[#00c234]", "transparent", "Indicador de progresso concluido"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="ghost">Ghost</Badge>
            <Badge variant="link">Link</Badge>
            <Badge variant="muted">Muted</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="progress">Progress</Badge>
            <Badge variant="progress-completed">Progress Completed</Badge>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tamanhos</h2>
        <p className="text-muted-foreground">
          Especificacoes de cada tamanho de badge. Todos os valores em pixels.
        </p>
        <SpecTable
          headers={["Size", "Radius", "Padding H", "Padding V", "Font Size", "Font Weight", "Icone"]}
          rows={[
            ["sm", "rounded-md (6px)", "6px (px-1.5)", "1px (py-px)", "11px", "500 (Medium)", "12px (size-3)"],
            ["default", "rounded-full", "8px (px-2)", "2px (py-0.5)", "12px (text-xs)", "500 (Medium)", "12px (size-3)"],
            ["lg", "rounded-full", "12px (px-3)", "4px (py-1)", "14px (text-sm)", "500 (Medium)", "16px (size-4)"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-4">
            {[
              { size: "sm" as const, label: "sm" },
              { size: "default" as const, label: "default" },
              { size: "lg" as const, label: "lg" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-6">
                <span className="w-20 text-xs font-mono text-muted-foreground shrink-0">
                  {s.label}
                </span>
                <Badge size={s.size} variant="outline">
                  Badge
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Theme variations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variacoes de Cor (Temas)</h2>
        <p className="text-muted-foreground">
          Cada tema sobrescreve os tokens semanticos. No Figma, crie uma propriedade <strong>Theme</strong> com estes valores. A estrutura do badge e identica — so mudam as cores. Apenas o badge e afetado pela classe de tema, nao o conteudo ao redor.
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
            <Badge>Neutral</Badge>
            <Badge className="theme-brand">Brand</Badge>
            <Badge className="theme-class">Class</Badge>
            <Badge className="theme-private">Private</Badge>
            <Badge className="theme-group">Group</Badge>
            <Badge className="theme-impulse">Impulse</Badge>
            <Badge className="theme-positive">Positive</Badge>
            <Badge className="theme-warning">Warning</Badge>
            <Badge className="theme-critical">Critical</Badge>
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <p className="text-muted-foreground">
          O badge suporta hover apenas quando renderizado como link (via <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">asChild</code> com <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">&lt;a&gt;</code>). Os estilos de hover so se aplicam quando o badge esta dentro de um <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">&lt;a&gt;</code>.
        </p>
        <SpecTable
          headers={["Estado", "Comportamento", "Observacao"]}
          rows={[
            ["Default", "Aparencia padrao", "Estado normal"],
            ["Hover (como link)", "Variant-specific: default bg-primary/90, secondary bg-secondary/90, outline bg-accent, ghost bg-accent, link underline, destructive bg-destructive/90", "Apenas dentro de <a>"],
            ["Focused", "Ring de 3px, cor ring/50, borda ring", "Acessibilidade — nao remover"],
          ]}
        />
      </section>

      {/* Notes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas Adicionais</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          {[
            "O badge renderiza como <span> por padrao. Use asChild para renderizar como <a> ou outro elemento.",
            "O gap entre icone e texto e 4px (gap-1) em todos os sizes.",
            "Icones dentro do badge sao dimensionados automaticamente: size-3 (12px) no sm e default, size-4 (16px) no lg.",
            "O focus ring e 3px com cor ring/50 — aparece ao focar via teclado.",
            "As classes .theme-* sobrescrevem os tokens semanticos (primary, secondary, accent, etc). So o badge e afetado, nao o conteudo ao redor.",
            "A variant success usa cores hardcoded (#28c953) para garantir consistencia independente do tema.",
            "A variant muted e ideal para metadados e informacoes secundarias que nao precisam de destaque.",
            "Fonte: herda a fonte do contexto (Geist Sans por padrao).",
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
export default function BadgePage() {
  return (
    <div className="space-y-10">
      {/* Header — shared between tabs */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Exibe um badge ou etiqueta para rotular, categorizar ou indicar status.
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
