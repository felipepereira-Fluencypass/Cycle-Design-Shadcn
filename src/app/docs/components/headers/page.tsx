"use client"

import * as React from "react"
import { HeaderClass } from "@/components/composites/header-class"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

function HeaderClassDemo() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)

  return (
    <HeaderClass
      courseName="Beginner 1"
      isSidebarOpen={sidebarOpen}
      onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      onNavigateHome={() => alert("Navegar para o inicio")}
    />
  )
}

export default function HeadersPage() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Headers</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Headers de pagina dos produtos. Cada produto tem seu header especifico com logo, navegacao e acoes.
        </p>
      </div>

      {/* ====== HEADER CLASS ====== */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Header Class</h2>
        <p className="text-muted-foreground">
          Header do produto Class. Responsivo — abaixo de 740px troca para versao mobile com bottom sheet para acoes.
        </p>

        <ComponentPreview
          code={`import { HeaderClass } from "@/components/composites/header-class"

<HeaderClass
  courseName="Beginner 1"
  isSidebarOpen={false}
  onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
  onNavigateHome={() => router.push("/")}
/>`}
        >
          <div className="-m-6 w-[calc(100%+48px)]">
            <HeaderClassDemo />
          </div>
        </ComponentPreview>
      </section>

      {/* ====== INSTALACAO ====== */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Instalacao</h2>
        <p className="text-muted-foreground">
          Este composite depende dos seguintes componentes:
        </p>
        <CodeBlock
          language="bash"
          showLineNumbers={false}
          code={`# Primitives necessarios
npx shadcn@latest add button sheet

# Componentes internos (ja incluidos no projeto)
# - ClassLogo (@/components/product-logo)
# - ThemeToggle (@/components/theme-toggle)
# - CycleIcon (@/components/icons)`}
        />
        <p className="text-muted-foreground text-sm">
          Depois copie o arquivo <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">header-class.tsx</code> para <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">src/components/composites/</code>.
        </p>
      </section>

      {/* ====== API ====== */}
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
                <td className="p-3 font-mono text-xs">courseName</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Nome do curso exibido no header (desktop)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">isSidebarOpen</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Estado do menu lateral — alterna o icone entre PanelLeftClose/Open</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onToggleSidebar</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">() =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Callback ao clicar no botao de sidebar</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onNavigateHome</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">() =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Callback do botao &quot;Ir para o inicio&quot;</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classes CSS adicionais no header</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ====== RESPONSIVO ====== */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Comportamento Responsivo</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Breakpoint</th>
                <th className="text-left p-3 font-medium">Esquerda</th>
                <th className="text-left p-3 font-medium">Centro</th>
                <th className="text-left p-3 font-medium">Direita</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">&gt; 740px</td>
                <td className="p-3 text-muted-foreground">Sidebar toggle + nome do curso</td>
                <td className="p-3 text-muted-foreground">ClassLogo (lg)</td>
                <td className="p-3 text-muted-foreground">Theme toggle + &quot;Ir para o inicio&quot;</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">&le; 740px</td>
                <td className="p-3 text-muted-foreground">Sidebar toggle</td>
                <td className="p-3 text-muted-foreground">ClassLogo (lg)</td>
                <td className="p-3 text-muted-foreground">Bottom sheet (EllipsisVertical)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ====== NOTAS ====== */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O icone do sidebar alterna automaticamente entre <strong>PanelLeftClose</strong> (aberto) e <strong>PanelLeftOpen</strong> (fechado) baseado na prop <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">isSidebarOpen</code>.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O toggle de tema ja funciona — alterna entre light/dark mode automaticamente.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            No mobile, as acoes ocultas (tema + navegacao) aparecem em um bottom sheet ao clicar no botao de menu.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Este e um <strong>composite</strong> — vive em <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">src/components/composites/</code> e usa apenas primitives do Design System.
          </p>
        </div>
      </section>
    </div>
  )
}
