"use client"

import * as React from "react"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { SpecTable } from "@/components/docs/spec-table"
import { LikeDislike } from "@/components/ui/like-dislike"
import type { LikeDislikeValue } from "@/components/ui/like-dislike"

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
          language="bash"
          showLineNumbers={false}
          code={`npx shadcn@latest add https://cycle-design.vercel.app/r/like-dislike.json`}
        />
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { LikeDislike } from "@/components/ui/like-dislike"

<LikeDislike onValueChange={(v) => console.log(v)} />`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Exemplos */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Default */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Default</h3>
        <ComponentPreview
          code={`<LikeDislike />`}
        >
          <LikeDislike />
        </ComponentPreview>
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Sizes</h3>
        <ComponentPreview
          code={`<LikeDislike size="xs" />
<LikeDislike size="sm" />
<LikeDislike size="default" />
<LikeDislike size="lg" />`}
        >
          <div className="flex items-end gap-6">
            <div className="flex flex-col items-center gap-1">
              <LikeDislike size="xs" />
              <span className="text-xs text-muted-foreground">xs</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <LikeDislike size="sm" />
              <span className="text-xs text-muted-foreground">sm</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <LikeDislike size="default" />
              <span className="text-xs text-muted-foreground">default</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <LikeDislike size="lg" />
              <span className="text-xs text-muted-foreground">lg</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* With Feedback */}
      <FeedbackDemo />

      {/* Controlled */}
      <ControlledDemo />

      {/* Disabled */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled</h3>
        <ComponentPreview
          code={`<LikeDislike disabled />`}
        >
          <LikeDislike disabled />
        </ComponentPreview>
      </section>

      {/* Props */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <SpecTable
          headers={["Prop", "Tipo", "Default", "Descricao"]}
          rows={[
            ["value", '"like" | "dislike" | null', "—", "Valor controlado"],
            ["defaultValue", '"like" | "dislike" | null', "null", "Valor inicial (uncontrolled)"],
            ["onValueChange", "(value) => void", "—", "Callback quando muda"],
            ["size", '"xs" | "sm" | "default" | "lg"', '"default"', "Tamanho dos botoes"],
            ["showFeedback", "boolean", "false", "Mostra textarea ao dar dislike"],
            ["feedbackPlaceholder", "string", '"O que voce nao gostou?"', "Titulo do painel de feedback"],
            ["feedbackSubmitLabel", "string", '"Enviar"', "Label do botao de envio"],
            ["onFeedbackSubmit", "(feedback: string) => void", "—", "Callback ao enviar feedback"],
            ["burstTheme", "string", '"theme-brand"', "Tema dos raios da animacao de like"],
            ["disabled", "boolean", "false", "Desabilita os botoes"],
          ]}
        />
      </section>
    </>
  )
}

/* --- Feedback Demo (stateful) --- */
function FeedbackDemo() {
  const [submitted, setSubmitted] = React.useState<string | null>(null)

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Com Feedback no Dislike</h3>
      <p className="text-sm text-muted-foreground">
        Ative <code>showFeedback</code> para exibir um painel flutuante quando o usuario
        clicar em dislike. O painel tem botao de fechar e nao empurra o conteudo abaixo.
      </p>
      <ComponentPreview
        code={`<LikeDislike
  showFeedback
  onFeedbackSubmit={(text) => alert(text)}
/>`}
      >
        <div className="flex flex-col gap-2 w-72">
          <LikeDislike
            showFeedback
            onFeedbackSubmit={(text) => setSubmitted(text)}
          />
          {submitted && (
            <p className="text-xs text-muted-foreground">
              Feedback enviado: &quot;{submitted}&quot;
            </p>
          )}
        </div>
      </ComponentPreview>
    </section>
  )
}

/* --- Controlled Demo --- */
function ControlledDemo() {
  const [value, setValue] = React.useState<LikeDislikeValue>(null)

  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Controlled</h3>
      <ComponentPreview
        code={`const [value, setValue] = useState<LikeDislikeValue>(null)

<LikeDislike value={value} onValueChange={setValue} />
<p>Estado: {value ?? "nenhum"}</p>`}
      >
        <div className="flex flex-col items-start gap-2">
          <LikeDislike value={value} onValueChange={setValue} />
          <p className="text-sm text-muted-foreground">
            Estado: <strong>{value ?? "nenhum"}</strong>
          </p>
        </div>
      </ComponentPreview>
    </section>
  )
}

/* ============================================
 * CONSUMER GUIDE
 * ============================================ */
function ConsumerGuide() {
  return (
    <>
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Quando usar</h2>
        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
          <li>Avaliar conteudo de aulas, videos, materiais</li>
          <li>Coletar feedback rapido de satisfacao</li>
          <li>Substituir sistemas de rating por estrelas quando binario e suficiente</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Exemplos de uso</h2>

        <h3 className="text-lg font-medium">Avaliacao de aula</h3>
        <ComponentPreview code={`<div className="flex items-center gap-3">
  <span className="text-sm">Essa aula foi util?</span>
  <LikeDislike size="sm" showFeedback />
</div>`}>
          <div className="flex items-center gap-3">
            <span className="text-sm">Essa aula foi util?</span>
            <LikeDislike size="sm" showFeedback />
          </div>
        </ComponentPreview>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function LikeDislikePage() {
  return (
    <article className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Like Dislike</h1>
        <p className="mt-2 text-muted-foreground">
          Botoes de like/dislike mutuamente exclusivos com animacao burst no like
          e feedback opcional no dislike.
        </p>
      </header>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<ConsumerGuide />}
      />
    </article>
  )
}
