"use client"

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
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
          code={`npx shadcn@latest add radio-group -r https://cycle-design.vercel.app/r`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"`}
          language="tsx"
          showLineNumbers={false}
        />
        <ComponentPreview
          code={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="option-1" />
        <label htmlFor="option-1">Opcao 1</label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="option-2" />
        <label htmlFor="option-2">Opcao 2</label>
      </div>
    </RadioGroup>
  )
}`}
        >
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="r-option-1" />
              <label htmlFor="r-option-1" className="text-sm">Opcao 1</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="r-option-2" />
              <label htmlFor="r-option-2" className="text-sm">Opcao 2</label>
            </div>
          </RadioGroup>
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
          3 tamanhos: <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">sm</code> (14px), <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">default</code> (16px), <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">lg</code> (20px).
        </p>
        <ComponentPreview
          code={`<div className="flex items-center gap-6">
  <RadioGroup defaultValue="a">
    <RadioGroupItem value="a" size="sm" />
  </RadioGroup>
  <RadioGroup defaultValue="a">
    <RadioGroupItem value="a" />
  </RadioGroup>
  <RadioGroup defaultValue="a">
    <RadioGroupItem value="a" size="lg" />
  </RadioGroup>
</div>`}
        >
          <div className="flex items-center gap-6">
            {(["sm", "default", "lg"] as const).map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <RadioGroup defaultValue="a">
                  <RadioGroupItem value="a" size={s} />
                </RadioGroup>
                <span className="text-xs font-mono text-muted-foreground">{s}</span>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* States */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Estados</h3>
        <ComponentPreview
          code={`<div className="flex items-center gap-6">
  {/* Unchecked */}
  <RadioGroup>
    <RadioGroupItem value="a" />
  </RadioGroup>
  {/* Checked */}
  <RadioGroup defaultValue="a">
    <RadioGroupItem value="a" />
  </RadioGroup>
  {/* Disabled */}
  <RadioGroup>
    <RadioGroupItem value="a" disabled />
  </RadioGroup>
  {/* Disabled + Checked */}
  <RadioGroup defaultValue="a" disabled>
    <RadioGroupItem value="a" />
  </RadioGroup>
</div>`}
        >
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <RadioGroup>
                <RadioGroupItem value="a" />
              </RadioGroup>
              <span className="text-xs font-mono text-muted-foreground">unchecked</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RadioGroup defaultValue="a">
                <RadioGroupItem value="a" />
              </RadioGroup>
              <span className="text-xs font-mono text-muted-foreground">checked</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RadioGroup>
                <RadioGroupItem value="a" disabled />
              </RadioGroup>
              <span className="text-xs font-mono text-muted-foreground">disabled</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RadioGroup defaultValue="a" disabled>
                <RadioGroupItem value="a" />
              </RadioGroup>
              <span className="text-xs font-mono text-muted-foreground">disabled checked</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* Themes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Variacoes de Cor</h3>
        <p className="text-muted-foreground">
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">theme</code> no <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">RadioGroupItem</code> para colorir apenas o estado checked. O border unchecked permanece neutro.
        </p>
        <ComponentPreview
          code={`<div className="flex items-center gap-6">
  <RadioGroup defaultValue="a">
    <RadioGroupItem value="a" />
  </RadioGroup>
  <RadioGroup defaultValue="a">
    <RadioGroupItem value="a" theme="theme-brand" />
  </RadioGroup>
  <RadioGroup defaultValue="a">
    <RadioGroupItem value="a" theme="theme-class" />
  </RadioGroup>
  <RadioGroup defaultValue="a">
    <RadioGroupItem value="a" theme="theme-private" />
  </RadioGroup>
  <RadioGroup defaultValue="a">
    <RadioGroupItem value="a" theme="theme-group" />
  </RadioGroup>
  <RadioGroup defaultValue="a">
    <RadioGroupItem value="a" theme="theme-impulse" />
  </RadioGroup>
</div>`}
        >
          <div className="flex items-center gap-6">
            {[
              { theme: undefined, label: "neutral" },
              { theme: "theme-brand", label: "brand" },
              { theme: "theme-class", label: "class" },
              { theme: "theme-private", label: "private" },
              { theme: "theme-group", label: "group" },
              { theme: "theme-impulse", label: "impulse" },
            ].map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2">
                <RadioGroup defaultValue="a">
                  <RadioGroupItem value="a" theme={t.theme} />
                </RadioGroup>
                <span className="text-xs font-mono text-muted-foreground">{t.label}</span>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      {/* With labels */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Labels</h3>
        <ComponentPreview
          code={`<RadioGroup defaultValue="comfortable">
  <div className="flex items-center gap-2">
    <RadioGroupItem value="default" id="r1" />
    <label htmlFor="r1">Default</label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="comfortable" id="r2" />
    <label htmlFor="r2">Comfortable</label>
  </div>
  <div className="flex items-center gap-2">
    <RadioGroupItem value="compact" id="r3" />
    <label htmlFor="r3">Compact</label>
  </div>
</RadioGroup>`}
        >
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="default" id="r-d1" />
              <label htmlFor="r-d1" className="text-sm">Default</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="comfortable" id="r-d2" />
              <label htmlFor="r-d2" className="text-sm">Comfortable</label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="compact" id="r-d3" />
              <label htmlFor="r-d3" className="text-sm">Compact</label>
            </div>
          </RadioGroup>
        </ComponentPreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference</h2>

        <h3 className="text-lg font-medium">RadioGroup</h3>
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
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Valor inicial selecionado</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Valor controlado</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onValueChange</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">(value: string) =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Callback quando o valor muda</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Desabilita todos os items</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-lg font-medium mt-6">RadioGroupItem</h3>
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
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Valor unico do item (obrigatorio)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;sm&quot; | &quot;default&quot; | &quot;lg&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Tamanho do radio (14px, 16px, 20px)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">theme</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classe de tema no estado checked (ex: &quot;theme-class&quot;)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Desabilita o item</td>
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
          O Radio Group e um conjunto de botoes de selecao mutuamente exclusivos. Apenas um pode estar selecionado por vez.
        </p>
        <SpecTable
          headers={["Camada", "Elemento", "Descricao"]}
          rows={[
            ["Container", "RadioGroup", "Wrapper que gerencia o estado de selecao"],
            ["Item", "RadioGroupItem", "Botao circular individual"],
            ["Indicator", "CircleIcon", "Circulo preenchido no estado checked"],
          ]}
        />
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "sm", "default", "lg"]}
          rows={[
            ["Tamanho", "14px", "16px", "20px"],
            ["Icone interno", "8px", "10px", "12px"],
            ["Border", "1px solid", "1px solid", "1px solid"],
            ["Radius", "full", "full", "full"],
            ["Shadow", "shadow-xs", "shadow-xs", "shadow-xs"],
          ]}
        />
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <SpecTable
          headers={["Estado", "Border", "Background", "Icone"]}
          rows={[
            ["Unchecked", "neutral (#e5e5e5 / #404040)", "transparent / input/30", "—"],
            ["Checked", "primary", "primary", "primary-foreground (circulo)"],
            ["Disabled", "neutral + opacity 50%", "—", "—"],
            ["Focus", "ring + ring-ring/50", "—", "—"],
          ]}
        />
      </section>

      {/* Visual reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Referencia Visual</h2>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground">Tamanhos (checked)</span>
              <div className="flex items-center gap-6">
                {(["sm", "default", "lg"] as const).map((s) => (
                  <div key={s} className="flex flex-col items-center gap-2">
                    <RadioGroup defaultValue="a">
                      <RadioGroupItem value="a" size={s} />
                    </RadioGroup>
                    <span className="text-xs font-mono text-muted-foreground">{s}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-foreground">Temas (checked)</span>
              <div className="flex items-center gap-6">
                {[
                  { theme: undefined, label: "neutral" },
                  { theme: "theme-brand", label: "brand" },
                  { theme: "theme-class", label: "class" },
                  { theme: "theme-private", label: "private" },
                  { theme: "theme-group", label: "group" },
                  { theme: "theme-impulse", label: "impulse" },
                ].map((t) => (
                  <div key={t.label} className="flex flex-col items-center gap-2">
                    <RadioGroup defaultValue="a">
                      <RadioGroupItem value="a" theme={t.theme} />
                    </RadioGroup>
                    <span className="text-xs font-mono text-muted-foreground">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theme behavior */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Comportamento de Tema</h2>
        <p className="text-muted-foreground">
          O tema e aplicado <strong>apenas no estado checked</strong> via prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">theme</code> no RadioGroupItem. O border do estado unchecked permanece neutro em todos os temas.
        </p>
      </section>

      {/* Notes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          {[
            "Apenas um item pode estar selecionado por vez dentro de um RadioGroup.",
            "O border unchecked usa cores neutras fixas (#e5e5e5 light / #404040 dark), nao muda com temas.",
            "Mesmo padrao de tema do Checkbox: prop theme no item, nao no container.",
            "Sempre associar um label ao item via id/htmlFor para acessibilidade.",
            "Use orientation='horizontal' no RadioGroup para layout em linha.",
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
export default function RadioGroupPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Radio Group</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Botoes de selecao mutuamente exclusivos. 3 tamanhos e suporte a temas de cor.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
