"use client"

import { ProgressStage } from "@/components/ui/progress-stage"
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
      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Instalacao</h2>
        <CodeBlock
          code={`npx shadcn@latest add progress-stage -r https://cycle-design.vercel.app/r`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { ProgressStage } from "@/components/ui/progress-stage"`}
          language="tsx"
          showLineNumbers={false}
        />
        <ComponentPreview
          code={`import { ProgressStage } from "@/components/ui/progress-stage"

export function ProgressStageDemo() {
  return <ProgressStage stages={5} value={3} />
}`}
        >
          <div className="w-full max-w-md">
            <ProgressStage stages={5} value={3} />
          </div>
        </ComponentPreview>
      </section>

      {/* Examples */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tamanhos</h3>
        <p className="text-muted-foreground">
          4 tamanhos: <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">xs</code> (4px), <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">sm</code> (6px), <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">default</code> (8px), <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">lg</code> (12px).
        </p>
        <ComponentPreview
          code={`<div className="space-y-4">
  <ProgressStage stages={5} value={3} size="xs" />
  <ProgressStage stages={5} value={3} size="sm" />
  <ProgressStage stages={5} value={3} />
  <ProgressStage stages={5} value={3} size="lg" />
</div>`}
        >
          <div className="w-full max-w-md space-y-4">
            {(["xs", "sm", "default", "lg"] as const).map((s) => (
              <div key={s} className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">{s}</span>
                <ProgressStage stages={5} value={3} size={s} />
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Different stage counts */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Quantidade de stages</h3>
        <p className="text-muted-foreground">
          De 2 a 10 stages. O componente limita automaticamente ao range valido.
        </p>
        <ComponentPreview
          code={`<div className="space-y-4">
  <ProgressStage stages={2} value={1} />
  <ProgressStage stages={4} value={2} />
  <ProgressStage stages={6} value={4} />
  <ProgressStage stages={10} value={7} />
</div>`}
        >
          <div className="w-full max-w-md space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">2 stages, 1 preenchido</span>
              <ProgressStage stages={2} value={1} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">4 stages, 2 preenchidos</span>
              <ProgressStage stages={4} value={2} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">6 stages, 4 preenchidos</span>
              <ProgressStage stages={6} value={4} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">10 stages, 7 preenchidos</span>
              <ProgressStage stages={10} value={7} />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Progress values */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Valores de progresso</h3>
        <ComponentPreview
          code={`<div className="space-y-4">
  <ProgressStage stages={10} value={0} />
  <ProgressStage stages={10} value={3} />
  <ProgressStage stages={10} value={7} />
  <ProgressStage stages={10} value={10} />
</div>`}
        >
          <div className="w-full max-w-md space-y-4">
            {[0, 3, 7, 10].map((v) => (
              <div key={v} className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">{v}/10</span>
                <ProgressStage stages={10} value={v} />
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* Themes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variacoes de Cor</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">theme</code> para colorir apenas as pills preenchidas. As pills vazias permanecem neutras.
        </p>
        <ComponentPreview
          code={`<div className="space-y-4">
  <ProgressStage stages={10} value={6} />
  <ProgressStage stages={10} value={6} theme="theme-brand" />
  <ProgressStage stages={10} value={6} theme="theme-class" />
  <ProgressStage stages={10} value={6} theme="theme-private" />
  <ProgressStage stages={10} value={6} theme="theme-group" />
  <ProgressStage stages={10} value={6} theme="theme-impulse" />
</div>`}
        >
          <div className="w-full max-w-md space-y-4">
            {[
              { theme: undefined, label: "neutral (padrao)" },
              { theme: "theme-brand", label: ".theme-brand" },
              { theme: "theme-class", label: ".theme-class" },
              { theme: "theme-private", label: ".theme-private" },
              { theme: "theme-group", label: ".theme-group" },
              { theme: "theme-impulse", label: ".theme-impulse" },
            ].map((t) => (
              <div key={t.label} className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">{t.label}</span>
                <ProgressStage stages={10} value={6} theme={t.theme} />
              </div>
            ))}
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
                <td className="p-3 font-mono text-xs">stages</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Total de stages (2–10, obrigatorio)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Stages preenchidos (0–stages, obrigatorio)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;xs&quot; | &quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Altura das pills (4px, 6px, 8px, 12px)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">theme</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classe de tema nas pills preenchidas (ex: &quot;theme-class&quot;)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classes CSS adicionais no container</td>
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
          O Progress Stage e uma barra de progresso segmentada em pills individuais. Cada pill representa um estagio de progresso.
        </p>
        <SpecTable
          headers={["Camada", "Elemento", "Descricao"]}
          rows={[
            ["Container", "div (flex)", "Wrapper horizontal com gap entre pills"],
            ["Pill preenchida", "div", "Stage completo, cor do tema (bg-primary)"],
            ["Pill vazia", "div", "Stage pendente, cor neutra (bg-accent)"],
          ]}
        />
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Altura da pill", "xs=4px, sm=6px, default=8px, lg=12px"],
            ["Largura da pill", "flex-1 (divide igualmente)"],
            ["Radius", "rounded-full (9999px)"],
            ["Gap entre pills", "8px (gap-2)"],
            ["Cor preenchida", "bg-primary (responde ao tema)"],
            ["Cor vazia", "bg-accent (sempre neutra)"],
            ["Min stages", "2"],
            ["Max stages", "10"],
          ]}
        />
      </section>

      {/* Visual reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Referencia Visual</h2>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="space-y-6 max-w-md">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">0/5 — vazio</span>
              <ProgressStage stages={5} value={0} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">3/5 — parcial</span>
              <ProgressStage stages={5} value={3} />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">5/5 — completo</span>
              <ProgressStage stages={5} value={5} />
            </div>
          </div>
        </div>
      </section>

      {/* Theme behavior */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Comportamento de Tema</h2>
        <p className="text-muted-foreground">
          O tema e aplicado <strong>apenas nas pills preenchidas</strong> via prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">theme</code>. As pills vazias permanecem com a cor neutra (<code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">bg-accent</code>), independente do tema.
        </p>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="space-y-4 max-w-md">
            {[
              { theme: undefined, label: "neutral" },
              { theme: "theme-brand", label: "brand" },
              { theme: "theme-class", label: "class" },
              { theme: "theme-private", label: "private" },
              { theme: "theme-group", label: "group" },
              { theme: "theme-impulse", label: "impulse" },
            ].map((t) => (
              <div key={t.label} className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">{t.label}</span>
                <ProgressStage stages={10} value={6} theme={t.theme} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          {[
            "O componente limita automaticamente: stages entre 2 e 10, value entre 0 e stages.",
            "Cada pill ocupa espaco igual (flex-1). A largura total e 100% do container pai.",
            "O tema e aplicado pill a pill — nao no container. Isso garante que pills vazias fiquem sempre neutras.",
            "Mesmo comportamento de tema do Progress bar: use a prop theme em vez de classe no container pai.",
            "No Figma, use a propriedade Progress (0-10) e Theme para configurar o estado.",
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
export default function ProgressStagePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Progress Stage</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Barra de progresso segmentada em pills individuais. Ideal para trilhas de curso, onboarding e etapas de processo.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
