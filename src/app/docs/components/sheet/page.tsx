"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
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
          code={`npx shadcn@latest add sheet`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet"`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Examples header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Side Right */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Side: Right (default)</h3>
        <ComponentPreview
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Abrir Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Titulo</SheetTitle>
      <SheetDescription>Descricao do painel.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Abrir Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Titulo</SheetTitle>
                <SheetDescription>Descricao do painel lateral.</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
      </section>

      {/* Side Left */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Side: Left</h3>
        <ComponentPreview
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Abrir Left Sheet</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
    </SheetHeader>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Abrir Left Sheet</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
      </section>

      {/* Side Bottom */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Side: Bottom</h3>
        <p className="text-muted-foreground">
          Usado como bottom sheet no mobile (ex: HeaderClass).
        </p>
        <ComponentPreview
          code={`<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Abrir Bottom Sheet</Button>
  </SheetTrigger>
  <SheetContent side="bottom" className="rounded-t-xl">
    <SheetHeader>
      <SheetTitle>Opcoes</SheetTitle>
    </SheetHeader>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">Fechar</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
        >
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Abrir Bottom Sheet</Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="rounded-t-xl">
              <SheetHeader>
                <SheetTitle>Opcoes</SheetTitle>
              </SheetHeader>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="outline">Fechar</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </ComponentPreview>
      </section>

      {/* API */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Componente</th>
                <th className="text-left p-3 font-medium">Descricao</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">Sheet</td>
                <td className="p-3 text-muted-foreground">Root — controla o estado open/closed</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">SheetTrigger</td>
                <td className="p-3 text-muted-foreground">Botao que abre o sheet</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">SheetContent</td>
                <td className="p-3 text-muted-foreground">Conteudo do painel. Props: side, showCloseButton</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">SheetHeader</td>
                <td className="p-3 text-muted-foreground">Container do titulo e descricao</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">SheetTitle</td>
                <td className="p-3 text-muted-foreground">Titulo do sheet</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">SheetDescription</td>
                <td className="p-3 text-muted-foreground">Descricao do sheet</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">SheetFooter</td>
                <td className="p-3 text-muted-foreground">Rodape com acoes</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">SheetClose</td>
                <td className="p-3 text-muted-foreground">Botao que fecha o sheet</td>
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
          O Sheet e composto por camadas sobrepostas ao conteudo principal.
        </p>
        <SpecTable
          headers={["Camada", "Descricao"]}
          rows={[
            ["Overlay", "Fundo escuro semi-transparente (black/50)"],
            ["Content", "Painel deslizante com conteudo"],
            ["Header", "Titulo + descricao (opcional)"],
            ["Footer", "Acoes do rodape (opcional)"],
            ["Close Button", "X no canto superior direito (pode ser ocultado)"],
          ]}
        />
      </section>

      {/* Sides */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Posicoes (Sides)</h2>
        <p className="text-muted-foreground">
          O Sheet pode aparecer em 4 posicoes. No Figma, crie uma propriedade <strong>Side</strong> com estes valores.
        </p>
        <SpecTable
          headers={["Side", "Posicao", "Dimensao", "Uso tipico"]}
          rows={[
            ["right (default)", "Direita", "75% da tela, max 384px", "Formularios, detalhes, filtros"],
            ["left", "Esquerda", "75% da tela, max 384px", "Menus de navegacao"],
            ["bottom", "Inferior", "Altura automatica", "Bottom sheet mobile, acoes contextuais"],
            ["top", "Superior", "Altura automatica", "Notificacoes, banners"],
          ]}
        />
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Background (content)", "bg-background"],
            ["Background (overlay)", "black / 50% opacity"],
            ["Border", "1px solid border (lado adjacente a tela)"],
            ["Shadow", "shadow-lg"],
            ["Padding (header)", "16px"],
            ["Padding (footer)", "16px"],
            ["Gap interno", "16px (gap-4)"],
            ["Border radius (bottom sheet)", "rounded-t-xl no topo"],
            ["Z-index", "50"],
          ]}
        />
      </section>

      {/* Animacao */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Animacao</h2>
        <p className="text-muted-foreground">
          O Sheet usa animacoes de slide baseadas na posicao.
        </p>
        <SpecTable
          headers={["Side", "Entrada", "Saida", "Duracao"]}
          rows={[
            ["right", "Slide da direita", "Slide para direita", "500ms entrada / 300ms saida"],
            ["left", "Slide da esquerda", "Slide para esquerda", "500ms entrada / 300ms saida"],
            ["bottom", "Slide de baixo", "Slide para baixo", "500ms entrada / 300ms saida"],
            ["top", "Slide de cima", "Slide para cima", "500ms entrada / 300ms saida"],
          ]}
        />
      </section>

      {/* Botao Close */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Botao Fechar</h2>
        <p className="text-muted-foreground">
          O botao X aparece no canto superior direito por padrao. Pode ser ocultado com <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">showCloseButton=false</code>.
        </p>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Posicao", "Absoluto, top-4 right-4"],
            ["Icone", "X (16px)"],
            ["Opacidade default", "70%"],
            ["Opacidade hover", "100%"],
            ["Focus ring", "2px ring, cor ring"],
          ]}
        />
      </section>

      {/* Estados */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <SpecTable
          headers={["Estado", "Comportamento"]}
          rows={[
            ["Open", "Overlay visivel + content desliza para dentro"],
            ["Closed", "Overlay desaparece + content desliza para fora"],
            ["Trigger", "Qualquer elemento pode abrir (via SheetTrigger)"],
            ["Dismiss", "Fecha ao clicar no overlay, botao X, ou SheetClose"],
          ]}
        />
      </section>

      {/* Notas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            No mobile, prefira <strong>side=&quot;bottom&quot;</strong> com <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">rounded-t-xl</code> para bottom sheet nativo.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O overlay bloqueia interacao com o conteudo de fundo — nao precisa de estado disabled no conteudo.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O Sheet usa os mesmos tokens de cor e border do sistema — adapta automaticamente ao dark mode.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function SheetPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sheet</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Painel deslizante que aparece sobre o conteudo. Usado para menus, formularios e acoes contextuais.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
