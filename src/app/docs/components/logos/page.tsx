import { FluencypassIcon, FluencypassLogo } from "@/components/fluencypass-logo"
import { ClassLogo, PrivateTalkLogo, GroupTalkLogo } from "@/components/product-logo"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"

export default function LogosPage() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Logos</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Logos da marca Fluencypass e dos produtos. Adaptam automaticamente ao light/dark mode via CSS.
        </p>
      </div>

      {/* ====== BRAND ====== */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Brand — Fluencypass</h2>
        <p className="text-muted-foreground">
          O icone usa a cor primitiva <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">#ED6A6D</code> (coral) — nunca muda entre temas ou modos.
          O texto adapta ao light/dark via <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">text-foreground</code>.
        </p>

        {/* Icon only */}
        <ComponentPreview
          code={`import { FluencypassIcon } from "@/components/fluencypass-logo"

// Apenas o icone
<FluencypassIcon className="h-5 w-auto" />
<FluencypassIcon className="h-7 w-auto" />
<FluencypassIcon className="h-9 w-auto" />`}
        >
          <div className="flex items-center gap-6">
            <div className="text-center space-y-2">
              <FluencypassIcon className="h-5 w-auto" />
              <p className="text-xs text-muted-foreground font-mono">h-5</p>
            </div>
            <div className="text-center space-y-2">
              <FluencypassIcon className="h-7 w-auto" />
              <p className="text-xs text-muted-foreground font-mono">h-7</p>
            </div>
            <div className="text-center space-y-2">
              <FluencypassIcon className="h-9 w-auto" />
              <p className="text-xs text-muted-foreground font-mono">h-9</p>
            </div>
          </div>
        </ComponentPreview>

        {/* Full brand */}
        <ComponentPreview
          code={`import { FluencypassLogo } from "@/components/fluencypass-logo"

<FluencypassLogo size="xs" />
<FluencypassLogo size="sm" />
<FluencypassLogo size="md" />
<FluencypassLogo size="lg" />
<FluencypassLogo size="xl" />`}
        >
          <div className="flex flex-col items-start gap-6">
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-mono">size=&quot;xs&quot;</p>
              <FluencypassLogo size="xs" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-mono">size=&quot;sm&quot;</p>
              <FluencypassLogo size="sm" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-mono">size=&quot;md&quot;</p>
              <FluencypassLogo size="md" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-mono">size=&quot;lg&quot;</p>
              <FluencypassLogo size="lg" />
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground font-mono">size=&quot;xl&quot;</p>
              <FluencypassLogo size="xl" />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* ====== PRODUCT LOGOS ====== */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Produtos</h2>
        <p className="text-muted-foreground">
          Logos de produto usam icones Lucide + texto neutral. O icone herda a cor do respectivo tema.
          Cada logo aplica automaticamente a classe <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.theme-*</code>.
        </p>

        {/* Class */}
        <h3 className="heading-xs mt-8">Class</h3>
        <ComponentPreview
          code={`import { ClassLogo } from "@/components/product-logo"

<ClassLogo size="xs" />
<ClassLogo size="sm" />
<ClassLogo size="md" />
<ClassLogo size="lg" />
<ClassLogo size="xl" />`}
        >
          <div className="flex items-end gap-6">
            <ClassLogo size="xs" />
            <ClassLogo size="sm" />
            <ClassLogo size="md" />
            <ClassLogo size="lg" />
            <ClassLogo size="xl" />
          </div>
        </ComponentPreview>

        {/* Private Talk */}
        <h3 className="heading-xs mt-8">Private Talk</h3>
        <ComponentPreview
          code={`import { PrivateTalkLogo } from "@/components/product-logo"

<PrivateTalkLogo size="xs" />
<PrivateTalkLogo size="sm" />
<PrivateTalkLogo size="md" />
<PrivateTalkLogo size="lg" />
<PrivateTalkLogo size="xl" />`}
        >
          <div className="flex items-end gap-6">
            <PrivateTalkLogo size="xs" />
            <PrivateTalkLogo size="sm" />
            <PrivateTalkLogo size="md" />
            <PrivateTalkLogo size="lg" />
            <PrivateTalkLogo size="xl" />
          </div>
        </ComponentPreview>

        {/* Group Talk */}
        <h3 className="heading-xs mt-8">Group Talk</h3>
        <ComponentPreview
          code={`import { GroupTalkLogo } from "@/components/product-logo"

<GroupTalkLogo size="xs" />
<GroupTalkLogo size="sm" />
<GroupTalkLogo size="md" />
<GroupTalkLogo size="lg" />
<GroupTalkLogo size="xl" />`}
        >
          <div className="flex items-end gap-6">
            <GroupTalkLogo size="xs" />
            <GroupTalkLogo size="sm" />
            <GroupTalkLogo size="md" />
            <GroupTalkLogo size="lg" />
            <GroupTalkLogo size="xl" />
          </div>
        </ComponentPreview>
      </section>

      {/* ====== CUSTOM ====== */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso Customizado</h2>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">ProductLogo</code> para criar combinacoes customizadas com qualquer icone Lucide.
        </p>
        <CodeBlock
          code={`import { ProductLogo } from "@/components/product-logo"
import { Rocket } from "lucide-react"

<ProductLogo icon={Rocket} label="Impulse" size="md" className="theme-impulse text-foreground" />`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* ====== SPECS ====== */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Size</th>
                <th className="text-left p-3 font-medium">Icone</th>
                <th className="text-left p-3 font-medium">Tipografia</th>
                <th className="text-left p-3 font-medium">Gap</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">xs</td>
                <td className="p-3 text-muted-foreground">16px (icon xs / stroke 1.2)</td>
                <td className="p-3 text-muted-foreground">button-sm (12px/500)</td>
                <td className="p-3 text-muted-foreground">4px (gap-1)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">sm</td>
                <td className="p-3 text-muted-foreground">24px (icon sm / stroke 1.5)</td>
                <td className="p-3 text-muted-foreground">heading-xs (14px/600)</td>
                <td className="p-3 text-muted-foreground">8px (gap-2)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">md</td>
                <td className="p-3 text-muted-foreground">32px (icon md / stroke 1.8)</td>
                <td className="p-3 text-muted-foreground">heading-sm (16px/600)</td>
                <td className="p-3 text-muted-foreground">8px (gap-2)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">lg</td>
                <td className="p-3 text-muted-foreground">40px (icon lg / stroke 2.1)</td>
                <td className="p-3 text-muted-foreground">heading-md (18px/600)</td>
                <td className="p-3 text-muted-foreground">8px (gap-2)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">xl</td>
                <td className="p-3 text-muted-foreground">48px (icon xl / stroke 2.4)</td>
                <td className="p-3 text-muted-foreground">heading-lg (20px/600)</td>
                <td className="p-3 text-muted-foreground">8px (gap-2)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ====== NOTES ====== */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O coral <strong>#ED6A6D</strong> e uma cor primitiva — nunca muda entre temas ou modos.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Os textos dos logos de produto usam <strong>text-neutral-foreground</strong> (cor primaria neutra).
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Logos de produto aplicam <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">.theme-*</code> automaticamente para herdar as cores corretas.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Os arquivos <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">logo-light.svg</code> e <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">logo-dark.svg</code> foram substituidos por um unico SVG adaptivo.
          </p>
        </div>
      </section>
    </div>
  )
}
