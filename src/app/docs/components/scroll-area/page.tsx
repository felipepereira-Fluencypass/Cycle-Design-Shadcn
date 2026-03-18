"use client"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { SpecTable } from "@/components/docs/spec-table"

/* ============================================
 * DEVELOPER DOCS
 * ============================================ */
function DeveloperDocs() {
  const tags = Array.from({ length: 50 }).map(
    (_, i) => `Item ${i + 1}`
  )

  return (
    <>
      {/* Instalacao */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Instalacao</h2>
        <CodeBlock
          code={`npx shadcn@latest add scroll-area`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Examples header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Vertical Scroll */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Scroll Vertical</h3>
        <p className="text-muted-foreground">
          Por padrao, o ScrollArea renderiza uma scrollbar vertical customizada.
        </p>
        <ComponentPreview
          code={`import { ScrollArea } from "@/components/ui/scroll-area"

const items = Array.from({ length: 50 }).map((_, i) => \`Item \${i + 1}\`)

export function ScrollAreaVertical() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Lista de Itens</h4>
        {items.map((item) => (
          <div key={item} className="text-sm py-2 border-b border-border last:border-0">
            {item}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}`}
        >
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Lista de Itens</h4>
              {tags.map((tag) => (
                <div key={tag} className="text-sm py-2 border-b border-border last:border-0">
                  {tag}
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>
      </section>

      {/* Horizontal Scroll */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Scroll Horizontal</h3>
        <p className="text-muted-foreground">
          Adicione <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">ScrollBar orientation=&quot;horizontal&quot;</code> para exibir uma scrollbar horizontal.
        </p>
        <ComponentPreview
          code={`import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const images = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  title: \`Imagem \${i + 1}\`,
}))

export function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max gap-4 p-4">
        {images.map((img) => (
          <div
            key={img.id}
            className="shrink-0 w-36 h-24 rounded-md bg-muted flex items-center justify-center"
          >
            <span className="text-sm text-muted-foreground">{img.title}</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}`}
        >
          <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
            <div className="flex w-max gap-4 p-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="shrink-0 w-36 h-24 rounded-md bg-muted flex items-center justify-center"
                >
                  <span className="text-sm text-muted-foreground">Imagem {i + 1}</span>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </ComponentPreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference</h2>

        <h3 className="text-base font-semibold mt-6">ScrollArea</h3>
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
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">--</td>
                <td className="p-3 text-muted-foreground">Classes CSS adicionais. Use para definir altura/largura.</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ReactNode</td>
                <td className="p-3 font-mono text-xs">--</td>
                <td className="p-3 text-muted-foreground">Conteudo scrollavel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold mt-6">ScrollBar</h3>
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
              <tr>
                <td className="p-3 font-mono text-xs">orientation</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;vertical&quot; | &quot;horizontal&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;vertical&quot;</td>
                <td className="p-3 text-muted-foreground">Orientacao da scrollbar</td>
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
      {/* Estrutura */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estrutura</h2>
        <p className="text-muted-foreground">
          O ScrollArea substitui a scrollbar nativa do navegador por uma versao customizada e consistente entre plataformas.
        </p>
        <SpecTable
          headers={["Parte", "Descricao"]}
          rows={[
            ["ScrollArea (Root)", "Container que define a area scrollavel. Precisa de altura ou largura fixa."],
            ["Viewport", "Area interna que recebe o conteudo e faz o scroll real."],
            ["ScrollBar", "Barra de rolagem customizada (vertical ou horizontal)."],
            ["Thumb", "Indicador arrastavel dentro da ScrollBar."],
            ["Corner", "Canto entre scrollbars vertical e horizontal (quando ambas existem)."],
          ]}
        />
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Largura da scrollbar (vertical)", "10px (w-2.5)"],
            ["Altura da scrollbar (horizontal)", "10px (h-2.5)"],
            ["Cor do thumb", "bg-border"],
            ["Border radius do thumb", "rounded-full (pill)"],
            ["Border interna", "1px transparente (separacao do conteudo)"],
            ["Padding da track", "1px (p-px)"],
            ["Touch behavior", "touch-none (evita conflito com gestos)"],
            ["Transicao", "transition-colors no hover"],
          ]}
        />
      </section>

      {/* Comportamento */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Comportamento</h2>
        <SpecTable
          headers={["Comportamento", "Descricao"]}
          rows={[
            ["Scroll nativo", "O ScrollArea usa scroll nativo do viewport — roda de mouse, trackpad e gestos touch funcionam normalmente."],
            ["Scrollbar automatica", "A scrollbar vertical aparece automaticamente quando o conteudo excede a area."],
            ["Scrollbar horizontal", "Precisa ser adicionada explicitamente via <ScrollBar orientation=\"horizontal\" />."],
            ["Focus", "O viewport recebe focus-visible com ring de 3px (acessibilidade por teclado)."],
            ["Border radius", "O viewport herda o border-radius do container pai (rounded-[inherit])."],
          ]}
        />
      </section>

      {/* Notas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O ScrollArea precisa de uma dimensao fixa (altura ou largura) para funcionar. Sem isso, o conteudo expande normalmente sem scroll.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Para scroll horizontal, adicione <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">whitespace-nowrap</code> no container e <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">ScrollBar orientation=&quot;horizontal&quot;</code>.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            A cor do thumb usa o token <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">bg-border</code> — adapta automaticamente ao dark mode.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function ScrollAreaPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">ScrollArea</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Area de scroll com scrollbar customizada, consistente entre plataformas. Baseado no Radix ScrollArea.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
