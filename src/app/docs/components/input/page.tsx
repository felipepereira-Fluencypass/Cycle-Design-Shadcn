import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { SpecTable } from "@/components/docs/spec-table"
import { ColorTokenList } from "@/components/docs/color-token-list"
import { FigmaNamingSection } from "@/components/docs/figma-naming"
import { inputSpec } from "./specs"

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
          code={`npx shadcn@latest add input`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { Input } from "@/components/ui/input"`}
          language="tsx"
          showLineNumbers={false}
        />
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input placeholder="Digite seu email" />
}`}
        >
          <Input placeholder="Digite seu email" />
        </ComponentPreview>
      </section>

      {/* Examples header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tamanhos</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">inputSize</code> para alterar o tamanho.
        </p>
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"

export function InputSizes() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <Input inputSize="sm" placeholder="Small (32px)" />
      <Input inputSize="default" placeholder="Default (40px)" />
      <Input inputSize="lg" placeholder="Large (48px)" />
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input inputSize="sm" placeholder="Small (32px)" />
            <Input inputSize="default" placeholder="Default (40px)" />
            <Input inputSize="lg" placeholder="Large (48px)" />
          </div>
        </ComponentPreview>
      </section>

      {/* Types */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tipos</h3>
        <p className="text-muted-foreground">
          O Input aceita todos os tipos nativos do HTML.
        </p>
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"

export function InputTypes() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <Input type="email" placeholder="email@exemplo.com" />
      <Input type="password" placeholder="Senha" />
      <Input type="number" placeholder="0" />
      <Input type="search" placeholder="Buscar..." />
      <Input type="tel" placeholder="(11) 99999-9999" />
      <Input type="url" placeholder="https://..." />
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input type="email" placeholder="email@exemplo.com" />
            <Input type="password" placeholder="Senha" />
            <Input type="number" placeholder="0" />
            <Input type="search" placeholder="Buscar..." />
            <Input type="tel" placeholder="(11) 99999-9999" />
            <Input type="url" placeholder="https://..." />
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
  <Input variant="outline" placeholder="Outline (padrao)" />
  <Input variant="filled" placeholder="Filled" />
</div>`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input variant="outline" placeholder="Outline (padrao)" />
            <Input variant="filled" placeholder="Filled" />
          </div>
        </ComponentPreview>
      </section>

      {/* Filled + sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Filled com Tamanhos</h3>
        <ComponentPreview
          code={`<div className="flex flex-col gap-4 max-w-sm">
  <Input variant="filled" inputSize="sm" placeholder="Small filled" />
  <Input variant="filled" inputSize="default" placeholder="Default filled" />
  <Input variant="filled" inputSize="lg" placeholder="Large filled" />
</div>`}
        >
          <div className="flex flex-col gap-4 max-w-sm">
            <Input variant="filled" inputSize="sm" placeholder="Small filled" />
            <Input variant="filled" inputSize="default" placeholder="Default filled" />
            <Input variant="filled" inputSize="lg" placeholder="Large filled" />
          </div>
        </ComponentPreview>
      </section>

      {/* File */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">File</h3>
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"

export function InputFile() {
  return <Input type="file" />
}`}
        >
          <div className="max-w-sm">
            <Input type="file" />
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled</h3>
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"

export function InputDisabled() {
  return <Input disabled placeholder="Desabilitado" />
}`}
        >
          <div className="max-w-sm">
            <Input disabled placeholder="Desabilitado" />
          </div>
        </ComponentPreview>
      </section>

      {/* Error state */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Estado de Erro</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">aria-invalid</code> para indicar erro.
        </p>
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"

export function InputError() {
  return (
    <div className="flex flex-col gap-2 max-w-sm">
      <Input aria-invalid placeholder="Campo com erro" />
      <p className="text-sm text-destructive">
        Este campo e obrigatorio.
      </p>
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-2 max-w-sm">
            <Input aria-invalid placeholder="Campo com erro" />
            <p className="text-sm text-destructive">
              Este campo e obrigatorio.
            </p>
          </div>
        </ComponentPreview>
      </section>

      {/* With Label */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Label</h3>
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"

export function InputWithLabel() {
  return (
    <div className="flex flex-col gap-2 max-w-sm">
      <label htmlFor="email" className="text-sm font-medium">
        Email
      </label>
      <Input id="email" type="email" placeholder="email@exemplo.com" />
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-2 max-w-sm">
            <label htmlFor="email-demo" className="text-sm font-medium">
              Email
            </label>
            <Input id="email-demo" type="email" placeholder="email@exemplo.com" />
          </div>
        </ComponentPreview>
      </section>

      {/* With Button */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Button</h3>
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function InputWithButton() {
  return (
    <div className="flex gap-2 max-w-sm">
      <Input type="email" placeholder="Email" />
      <Button>Enviar</Button>
    </div>
  )
}`}
        >
          <div className="flex gap-2 max-w-sm">
            <Input type="email" placeholder="Email" />
            <Button>Enviar</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Color Themes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variacoes de Cor</h3>
        <p className="text-muted-foreground">
          Aplique a classe <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code> no container pai. O focus ring assume a cor do tema. O estado de erro permanece <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">destructive</code> em todos os temas.
        </p>
        <ComponentPreview
          code={`import { Input } from "@/components/ui/input"

export function InputThemes() {
  return (
    <div className="flex flex-col gap-6 max-w-sm">
      <div>
        <span className="text-xs font-mono text-muted-foreground">neutral (padrao)</span>
        <Input placeholder="Focus para ver o ring" />
      </div>
      <div className="theme-brand">
        <span className="text-xs font-mono text-muted-foreground">.theme-brand</span>
        <Input placeholder="Focus para ver o ring" />
      </div>
      <div className="theme-class">
        <span className="text-xs font-mono text-muted-foreground">.theme-class</span>
        <Input placeholder="Focus para ver o ring" />
      </div>
      <div className="theme-positive">
        <span className="text-xs font-mono text-muted-foreground">.theme-positive</span>
        <Input placeholder="Focus para ver o ring" />
      </div>
      <div className="theme-brand">
        <span className="text-xs font-mono text-muted-foreground">.theme-brand + error</span>
        <Input aria-invalid placeholder="Erro — sempre destructive" />
      </div>
    </div>
  )
}`}
        >
          <div className="flex flex-col gap-6 max-w-sm">
            <div>
              <span className="text-xs font-mono text-muted-foreground">neutral (padrao)</span>
              <Input placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-brand">
              <span className="text-xs font-mono text-muted-foreground">.theme-brand</span>
              <Input placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-class">
              <span className="text-xs font-mono text-muted-foreground">.theme-class</span>
              <Input placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-positive">
              <span className="text-xs font-mono text-muted-foreground">.theme-positive</span>
              <Input placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-brand">
              <span className="text-xs font-mono text-muted-foreground">.theme-brand + error</span>
              <Input aria-invalid placeholder="Erro — sempre destructive" />
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
    <Input variant="filled" placeholder="Focus para ver o ring" />
  </div>
  <div className="theme-brand">
    <span className="text-xs font-mono text-muted-foreground">.theme-brand filled</span>
    <Input variant="filled" placeholder="Focus para ver o ring" />
  </div>
  <div className="theme-class">
    <span className="text-xs font-mono text-muted-foreground">.theme-class filled</span>
    <Input variant="filled" placeholder="Focus para ver o ring" />
  </div>
  <div className="theme-positive">
    <span className="text-xs font-mono text-muted-foreground">.theme-positive filled</span>
    <Input variant="filled" placeholder="Focus para ver o ring" />
  </div>
  <div className="theme-brand">
    <span className="text-xs font-mono text-muted-foreground">.theme-brand filled + error</span>
    <Input variant="filled" aria-invalid placeholder="Erro — sempre destructive" />
  </div>
</div>`}
        >
          <div className="flex flex-col gap-6 max-w-sm">
            <div>
              <span className="text-xs font-mono text-muted-foreground">neutral filled</span>
              <Input variant="filled" placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-brand">
              <span className="text-xs font-mono text-muted-foreground">.theme-brand filled</span>
              <Input variant="filled" placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-class">
              <span className="text-xs font-mono text-muted-foreground">.theme-class filled</span>
              <Input variant="filled" placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-positive">
              <span className="text-xs font-mono text-muted-foreground">.theme-positive filled</span>
              <Input variant="filled" placeholder="Focus para ver o ring" />
            </div>
            <div className="theme-brand">
              <span className="text-xs font-mono text-muted-foreground">.theme-brand filled + error</span>
              <Input variant="filled" aria-invalid placeholder="Erro — sempre destructive" />
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
                <td className="p-3 font-mono text-xs">inputSize</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Tamanho do input. sm=32px, default=40px, lg=48px</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">type</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">&quot;text&quot;</td>
                <td className="p-3 text-muted-foreground">Tipo do input HTML (text, email, password, number, etc.)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Desabilita o input</td>
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
      {/* Figma Naming */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Nomenclatura no Figma</h2>
        <p className="text-muted-foreground">
          Para que a IA identifique corretamente o componente, siga esta convencao de nomes e propriedades no Figma.
        </p>
        <FigmaNamingSection naming={inputSpec.figmaNaming} />
      </section>

      {/* Size Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tamanhos</h2>
        <p className="text-muted-foreground">
          Especificacoes de cada tamanho. Todos os valores em pixels.
        </p>
        <SpecTable
          headers={["Size", "Altura", "Padding H", "Radius", "Font Size", "Font Weight", "Line Height"]}
          rows={inputSpec.sizes.map((s) => [
            s.name,
            s.height,
            s.paddingX,
            s.borderRadius,
            s.fontSize,
            s.fontWeight,
            s.lineHeight,
          ])}
        />
      </section>

      {/* Visual reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Referencia Visual</h2>
        <p className="text-muted-foreground">
          Preview dos tamanhos reais para comparacao no Figma.
        </p>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-6 max-w-sm">
            {(["sm", "default", "lg"] as const).map((size) => (
              <div key={size} className="flex flex-col gap-1">
                <span className="text-xs font-mono text-muted-foreground">
                  {size === "default" ? "default (md) — 40px" : size === "sm" ? "sm — 32px" : "lg — 48px"}
                </span>
                <Input inputSize={size} placeholder={`Input ${size}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Cores por Estado</h2>
        <p className="text-muted-foreground">
          Tokens semanticos usados em cada estado do input.
        </p>
        <ColorTokenList variants={inputSpec.variantColors} />
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <p className="text-muted-foreground">
          Crie estes estados para o componente no Figma.
        </p>
        <SpecTable
          headers={["Estado", "Comportamento", "Observacao"]}
          rows={[
            ["Default", "Borda border-input, fundo transparente", "Estado normal"],
            ["Hover", "Leve destaque visual na borda", "Transicao suave"],
            ["Focused", "Borda border-ring + ring de 3px ring/50", "Acessibilidade — nao remover"],
            ["Disabled", "Opacity 50%, cursor not-allowed", "Aplicar sobre o input inteiro"],
            ["Error", "Borda border-destructive + ring destructive/20", "Ativado via aria-invalid"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-muted-foreground">default</span>
              <Input placeholder="Estado default" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-muted-foreground">disabled</span>
              <Input disabled placeholder="Desabilitado" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-muted-foreground">error (aria-invalid)</span>
              <Input aria-invalid placeholder="Com erro" />
            </div>
          </div>
        </div>
      </section>

      {/* Notes */}
      {inputSpec.notes && (
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Notas Adicionais</h2>
          <div className="rounded-lg border border-border p-4 space-y-2">
            {inputSpec.notes.map((note, i) => (
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
export default function InputPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Input</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Displays a form input field or a component that looks like an input field.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
