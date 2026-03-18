"use client"

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
          code={`npx shadcn@latest add accordion`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"`}
          language="tsx"
          showLineNumbers={false}
        />
        <ComponentPreview
          code={`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>O que e o Cycle Design?</AccordionTrigger>
        <AccordionContent>
          O Cycle Design e o design system da Cycle, construido sobre
          shadcn/ui com Next.js e Tailwind CSS.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`}
        >
          <Accordion type="single" collapsible className="w-full max-w-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>O que e o Cycle Design?</AccordionTrigger>
              <AccordionContent>
                O Cycle Design e o design system da Cycle, construido sobre
                shadcn/ui com Next.js e Tailwind CSS.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* Examples header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Single (collapsible) */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Single (collapsible)</h3>
        <p className="text-muted-foreground">
          Com <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">type=&quot;single&quot;</code> e{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">collapsible</code>, apenas um item abre por vez e pode ser fechado.
        </p>
        <ComponentPreview
          code={`<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Posso fechar todos?</AccordionTrigger>
    <AccordionContent>
      Sim. Com collapsible, voce pode fechar o item aberto clicando nele novamente.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>E se eu abrir outro?</AccordionTrigger>
    <AccordionContent>
      O item anterior fecha automaticamente, pois o type e single.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Quando usar este modo?</AccordionTrigger>
    <AccordionContent>
      Use single collapsible para FAQs e listas onde o usuario foca em um item por vez.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full max-w-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>Posso fechar todos?</AccordionTrigger>
              <AccordionContent>
                Sim. Com collapsible, voce pode fechar o item aberto clicando nele novamente.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>E se eu abrir outro?</AccordionTrigger>
              <AccordionContent>
                O item anterior fecha automaticamente, pois o type e single.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Quando usar este modo?</AccordionTrigger>
              <AccordionContent>
                Use single collapsible para FAQs e listas onde o usuario foca em um item por vez.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* Multiple */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Multiple</h3>
        <p className="text-muted-foreground">
          Com <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">type=&quot;multiple&quot;</code>, varios itens podem ficar abertos simultaneamente.
        </p>
        <ComponentPreview
          code={`<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Primeiro item</AccordionTrigger>
    <AccordionContent>
      Este item pode ficar aberto junto com os outros.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Segundo item</AccordionTrigger>
    <AccordionContent>
      Abra todos ao mesmo tempo se quiser.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Terceiro item</AccordionTrigger>
    <AccordionContent>
      Cada item e independente dos demais.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="multiple" className="w-full max-w-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>Primeiro item</AccordionTrigger>
              <AccordionContent>
                Este item pode ficar aberto junto com os outros.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Segundo item</AccordionTrigger>
              <AccordionContent>
                Abra todos ao mesmo tempo se quiser.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Terceiro item</AccordionTrigger>
              <AccordionContent>
                Cada item e independente dos demais.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* Default Open */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Aberto por padrao</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">defaultValue</code> para definir quais itens iniciam abertos.
        </p>
        <ComponentPreview
          code={`<Accordion type="single" collapsible defaultValue="item-2">
  <AccordionItem value="item-1">
    <AccordionTrigger>Item fechado</AccordionTrigger>
    <AccordionContent>
      Este item inicia fechado.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Item aberto por padrao</AccordionTrigger>
    <AccordionContent>
      Este item inicia aberto porque defaultValue="item-2".
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible defaultValue="item-2" className="w-full max-w-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>Item fechado</AccordionTrigger>
              <AccordionContent>
                Este item inicia fechado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Item aberto por padrao</AccordionTrigger>
              <AccordionContent>
                Este item inicia aberto porque defaultValue=&quot;item-2&quot;.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* Trigger com componentes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Trigger com componentes</h3>
        <p className="text-muted-foreground">
          O <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">AccordionTrigger</code> aceita qualquer{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">ReactNode</code> como children — badges, icones, contadores, etc.
        </p>
        <ComponentPreview
          code={`<Accordion type="single" collapsible>
  <AccordionItem value="modulo-1">
    <AccordionTrigger>
      <div className="flex items-center gap-2">
        <span>Modulo 1 — Introducao</span>
        <Badge variant="success" size="sm">Completo</Badge>
        <Badge variant="muted" size="sm">3/3</Badge>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      Conteudo do modulo com aulas.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="modulo-2">
    <AccordionTrigger>
      <div className="flex items-center gap-2">
        <span>Modulo 2 — Gramatica</span>
        <Badge variant="muted" size="sm">1/5</Badge>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      Conteudo do modulo com aulas.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="w-full max-w-lg">
            <AccordionItem value="modulo-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>Modulo 1 — Introducao</span>
                  <Badge variant="success" size="sm">Completo</Badge>
                  <Badge variant="muted" size="sm">3/3</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Conteudo do modulo com aulas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="modulo-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>Modulo 2 — Gramatica</span>
                  <Badge variant="muted" size="sm">1/5</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Conteudo do modulo com aulas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* Content com componentes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Content com componentes</h3>
        <p className="text-muted-foreground">
          O <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">AccordionContent</code> tambem aceita qualquer{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">ReactNode</code> — progress bars, listas, botoes, etc.
        </p>
        <ComponentPreview
          code={`<Accordion type="single" collapsible defaultValue="modulo-1">
  <AccordionItem value="modulo-1">
    <AccordionTrigger>Modulo 1 — Introducao</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-3">
        <Progress value={66} size="xs" />
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            Aula 1 — O que e ingles
          </li>
          <li className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            Aula 2 — Alfabeto
          </li>
          <li className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-muted-foreground" />
            Aula 3 — Numeros
          </li>
        </ul>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible defaultValue="modulo-1" className="w-full max-w-lg">
            <AccordionItem value="modulo-1">
              <AccordionTrigger>Modulo 1 — Introducao</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-3">
                  <Progress value={66} size="xs" />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Aula 1 — O que e ingles
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      Aula 2 — Alfabeto
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-muted-foreground" />
                      Aula 3 — Numeros
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* Accordion aninhado */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Accordion aninhado</h3>
        <p className="text-muted-foreground">
          E possivel colocar um <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">Accordion</code> dentro do{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">AccordionContent</code> de outro. Cada nivel mantém seu estado independente. Ideal para trilhas de curso com modulos e aulas.
        </p>
        <ComponentPreview
          code={`<Accordion type="multiple" defaultValue={["modulo-1"]}>
  <AccordionItem value="modulo-1">
    <AccordionTrigger>
      <div className="flex items-center gap-2">
        <span>Modulo 1 — Introducao</span>
        <Badge variant="success" size="sm">Completo</Badge>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      {/* Segundo nivel */}
      <Accordion type="multiple" defaultValue={["aula-1"]}>
        <AccordionItem value="aula-1">
          <AccordionTrigger>Aula 1 — O que e ingles</AccordionTrigger>
          <AccordionContent>
            Conteudo da aula 1.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="aula-2">
          <AccordionTrigger>Aula 2 — Alfabeto</AccordionTrigger>
          <AccordionContent>
            Conteudo da aula 2.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="modulo-2">
    <AccordionTrigger>
      <div className="flex items-center gap-2">
        <span>Modulo 2 — Gramatica</span>
        <Badge variant="muted" size="sm">0/3</Badge>
      </div>
    </AccordionTrigger>
    <AccordionContent>
      <Accordion type="multiple">
        <AccordionItem value="aula-3">
          <AccordionTrigger>Aula 3 — Verbos</AccordionTrigger>
          <AccordionContent>
            Conteudo da aula 3.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="multiple" defaultValue={["modulo-1"]} className="w-full max-w-lg">
            <AccordionItem value="modulo-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>Modulo 1 — Introducao</span>
                  <Badge variant="success" size="sm">Completo</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="multiple" defaultValue={["aula-1"]}>
                  <AccordionItem value="aula-1">
                    <AccordionTrigger>Aula 1 — O que e ingles</AccordionTrigger>
                    <AccordionContent>
                      Conteudo da aula 1.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="aula-2">
                    <AccordionTrigger>Aula 2 — Alfabeto</AccordionTrigger>
                    <AccordionContent>
                      Conteudo da aula 2.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="modulo-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <span>Modulo 2 — Gramatica</span>
                  <Badge variant="muted" size="sm">0/3</Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <Accordion type="multiple">
                  <AccordionItem value="aula-3">
                    <AccordionTrigger>Aula 3 — Verbos</AccordionTrigger>
                    <AccordionContent>
                      Conteudo da aula 3.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ComponentPreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Componente</th>
                <th className="text-left p-3 font-medium">Prop</th>
                <th className="text-left p-3 font-medium">Tipo</th>
                <th className="text-left p-3 font-medium">Descricao</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">Accordion</td>
                <td className="p-3 font-mono text-xs">type</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;single&quot; | &quot;multiple&quot;</td>
                <td className="p-3 text-muted-foreground">Define se um ou varios itens podem abrir</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">Accordion</td>
                <td className="p-3 font-mono text-xs">collapsible</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 text-muted-foreground">Permite fechar todos (apenas type=&quot;single&quot;)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">Accordion</td>
                <td className="p-3 font-mono text-xs">defaultValue</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string | string[]</td>
                <td className="p-3 text-muted-foreground">Valor(es) dos itens abertos inicialmente</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">AccordionItem</td>
                <td className="p-3 font-mono text-xs">value</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 text-muted-foreground">Identificador unico do item</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">AccordionTrigger</td>
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ReactNode</td>
                <td className="p-3 text-muted-foreground">Texto clicavel do header</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">AccordionContent</td>
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ReactNode</td>
                <td className="p-3 text-muted-foreground">Conteudo colapsavel do item</td>
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
          O Accordion segue uma hierarquia de componentes aninhados.
        </p>
        <SpecTable
          headers={["Camada", "Componente", "Descricao"]}
          rows={[
            ["Root", "Accordion", "Container raiz que controla o estado (single/multiple)"],
            ["Item", "AccordionItem", "Agrupa trigger + content, separado por border-b"],
            ["Trigger", "AccordionTrigger", "Header clicavel com texto e icone ChevronDown"],
            ["Content", "AccordionContent", "Area colapsavel com animacao accordion-up/down"],
          ]}
        />
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Padding do Trigger", "py-4 (16px vertical)"],
            ["Padding do Content", "pt-0, pb-4 (0 topo, 16px base)"],
            ["Gap entre Trigger e icone", "gap-4 (16px)"],
            ["Font size (trigger)", "text-sm (14px)"],
            ["Font weight (trigger)", "font-medium (500)"],
            ["Icone", "ChevronDown (Lucide), size-4 (16px)"],
            ["Cor do icone", "text-muted-foreground"],
            ["Separador entre itens", "border-b (1px solid border)"],
            ["Ultimo item", "Sem border-b (last:border-b-0)"],
            ["Border radius (trigger)", "rounded-md"],
            ["Font size (content)", "text-sm (14px)"],
          ]}
        />
      </section>

      {/* Animacao */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Animacao</h2>
        <p className="text-muted-foreground">
          O conteudo usa animacoes CSS de altura para abrir e fechar suavemente.
        </p>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Animacao de abertura", "animate-accordion-down"],
            ["Animacao de fechamento", "animate-accordion-up"],
            ["Rotacao do chevron", "rotate-180 quando aberto"],
            ["Duracao da rotacao", "duration-200 (200ms)"],
            ["Transicao geral", "transition-all no trigger"],
            ["Overflow do content", "overflow-hidden"],
          ]}
        />
      </section>

      {/* Comportamento */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Comportamento</h2>
        <SpecTable
          headers={["Estado", "Comportamento", "Observacao"]}
          rows={[
            ["Closed", "Content oculto, chevron para baixo", "Estado padrao"],
            ["Open", "Content visivel, chevron rotacionado 180 graus", "data-state='open'"],
            ["Hover (trigger)", "Sublinhado no texto (hover:underline)", "Feedback visual"],
            ["Focus (trigger)", "Border ring + ring de 3px ring/50", "Acessibilidade — nao remover"],
            ["Disabled (trigger)", "Opacity 50%, sem interacao", "pointer-events-none"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="w-full max-w-lg">
            <Accordion type="single" collapsible defaultValue="item-open">
              <AccordionItem value="item-open">
                <AccordionTrigger>Item aberto (referencia visual)</AccordionTrigger>
                <AccordionContent>
                  Conteudo visivel com animacao accordion-down. O chevron esta rotacionado 180 graus.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-closed">
                <AccordionTrigger>Item fechado (referencia visual)</AccordionTrigger>
                <AccordionContent>
                  Conteudo oculto ate o clique.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Notas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">--</span>
            O Accordion e baseado no Radix UI Accordion, garantindo acessibilidade completa (navegacao por teclado, ARIA attributes).
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">--</span>
            Use <strong>type=&quot;single&quot; collapsible</strong> para FAQs e secoes onde o usuario foca em um item por vez.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">--</span>
            Use <strong>type=&quot;multiple&quot;</strong> quando o usuario precisa comparar conteudos de varios itens simultaneamente.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">--</span>
            O icone ChevronDown e inserido automaticamente pelo AccordionTrigger — nao adicione icones extras no Figma.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">--</span>
            A cor do icone segue <strong>text-muted-foreground</strong> e adapta automaticamente ao dark mode.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">--</span>
            <strong>Trigger aceita composicao</strong> — alem de texto, pode conter Badges, icones, contadores ou qualquer outro componente inline. No Figma, monte o trigger como um auto-layout horizontal com gap.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">--</span>
            <strong>Content aceita composicao</strong> — o conteudo colapsavel pode conter Progress bars, listas, botoes, imagens ou qualquer outro componente. Nao ha restricao de conteudo.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">--</span>
            <strong>Aninhamento e suportado</strong> — e possivel colocar um Accordion dentro do Content de outro, criando dois niveis (ex: Modulos &gt; Aulas). Cada nivel mantem estado independente. No Figma, use indentacao visual para diferenciar os niveis.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function AccordionPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Conjunto de secoes colapsaveis com headers clicaveis. Ideal para FAQs, listas de conteudo e agrupamento de informacoes.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
