"use client"

import { useState } from "react"
import { ContentCourse } from "@/components/composites/content-course/content-course"
import { ContentVideo } from "@/components/composites/content-course/content-video"
import { CodeBlock } from "@/components/docs/code-block"
import { DocsTabs } from "@/components/docs/docs-tabs"

/* ─── Demo data ─── */

const DEMO_FILES = [
  { title: "Vocabulary list", fileType: "PDF", fileSize: "180 KB", href: "#" },
  { title: "Dialogue transcript", fileType: "PDF", fileSize: "95 KB", href: "#" },
]

const DEMO_VIDEO_SRC = "https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU.m3u8"
const DEMO_POSTER = "https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp?time=0"

/* ─── Interactive demo ─── */

function ContentVideoDemo() {
  const [completed, setCompleted] = useState(false)

  return (
    <div className="rounded-lg border border-border overflow-hidden bg-background">
      <ContentVideo
        src={DEMO_VIDEO_SRC}
        poster={DEMO_POSTER}
        title="Call it a day!"
        subtitle="Lesson: I'm in! · Vídeo · 12 min"
        completed={completed}
        onCompletedChange={setCompleted}
        onAutoAdvance={() => alert("Auto-avançando para próxima atividade...")}
        description={"Nesta aula você vai aprender expressões idiomáticas comuns usadas no dia a dia.\n\nAssista ao vídeo e depois pratique com os exercícios abaixo."}
        files={DEMO_FILES}
        onReport={(data) => alert(`Report: ${data.reason}\n${data.details}`)}
      />
    </div>
  )
}

function ContentCourseOnlyDemo() {
  const [completed, setCompleted] = useState(false)

  return (
    <div className="rounded-lg border border-border overflow-hidden bg-background p-4 sm:p-6">
      <ContentCourse
        title="Blog post: Culture shock"
        subtitle="Lesson: I'm in! · Atividade · 12 min"
        completed={completed}
        onCompletedChange={setCompleted}
        description="Leia o texto abaixo e responda as perguntas de interpretação."
        files={[DEMO_FILES[0]]}
        onReport={(data) => alert(`Report: ${data.reason}\n${data.details}`)}
      >
        {/* Slot para conteúdo customizado — qualquer componente */}
        <div className="rounded-lg border border-dashed border-border bg-muted/50 p-12 text-center">
          <p className="text-sm text-muted-foreground">
            Slot para conteúdo específico (quiz, flashcard, texto, etc.)
          </p>
        </div>
      </ContentCourse>
    </div>
  )
}

/* ─── Developer docs ─── */

function DeveloperDocs() {
  return (
    <>
      {/* ContentVideo */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">ContentVideo</h2>
        <p className="text-muted-foreground">
          Template de conteúdo para atividades de vídeo. Combina <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">VideoPlayer</code> +{" "}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">ContentCourse</code> (título, botão concluído, descrição, arquivos).
        </p>
        <CodeBlock
          code={`import { ContentVideo } from "@/components/composites/content-course/content-video"

<ContentVideo
  src="https://stream.mux.com/example.m3u8"
  poster="https://image.mux.com/example/thumbnail.webp"
  title="Call it a day!"
  subtitle="Lesson: I'm in! · Vídeo · 12 min"
  completed={completed}
  onCompletedChange={setCompleted}
  description="Nesta aula você vai aprender..."
  files={[
    { title: "Vocabulary list", fileType: "PDF", fileSize: "180 KB", href: "/files/vocab.pdf" },
  ]}
/>`}
          language="tsx"
          showLineNumbers={false}
        />
        <ContentVideoDemo />
      </section>

      {/* ContentCourse (wrapper) */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-2xl font-bold tracking-tight">ContentCourse (wrapper base)</h2>
        <p className="text-muted-foreground">
          Wrapper comum usado por todos os templates. Aceita <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">children</code> como slot para o conteúdo específico.
          Use diretamente quando precisar de um tipo de conteúdo que ainda não tem template.
        </p>
        <CodeBlock
          code={`import { ContentCourse } from "@/components/composites/content-course/content-course"

<ContentCourse
  title="Blog post: Culture shock"
  subtitle="Lesson: I'm in! · Atividade · 12 min"
  completed={completed}
  onCompletedChange={setCompleted}
  description="Leia o texto abaixo..."
  files={[...]}
>
  {/* Qualquer conteúdo: quiz, flashcard, texto, embed, etc. */}
  <MyCustomContent />
</ContentCourse>`}
          language="tsx"
          showLineNumbers={false}
        />
        <ContentCourseOnlyDemo />
      </section>

      {/* API Reference — ContentCourse */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">API Reference — ContentCourse</h2>
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
                <td className="p-3 font-mono text-xs">title</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">—</td>
                <td className="p-3">Titulo da atividade</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">subtitle</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">undefined</td>
                <td className="p-3">Subtitulo (lesson, tipo, duracao)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">completed</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">false</td>
                <td className="p-3">Se a atividade esta concluida</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onCompletedChange</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">{"(completed: boolean) => void"}</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">undefined</td>
                <td className="p-3">Callback ao clicar no botao. Se omitido, botao nao aparece.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">description</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">undefined</td>
                <td className="p-3">Descricao da atividade</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">files</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ContentCourseFile[]</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">undefined</td>
                <td className="p-3">{"Arquivos para download ({ title, fileType, fileSize, href })"}</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onAutoAdvance</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">{"() => void"}</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">undefined</td>
                <td className="p-3">Callback chamado apos delay quando concluido. Usado para navegar a proxima atividade.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">autoAdvanceDelay</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">1500</td>
                <td className="p-3">Delay em ms antes de chamar onAutoAdvance</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onReport</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">{"(data: { reason: string; details: string }) => void"}</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">undefined</td>
                <td className="p-3">Callback do botao flutuante de report. Se omitido, botao ainda aparece mas nao envia.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ReactNode</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">—</td>
                <td className="p-3">Slot para conteudo especifico (video, audio, quiz, etc.)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">undefined</td>
                <td className="p-3">Classes adicionais no wrapper</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* API Reference — ContentVideo */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">API Reference — ContentVideo</h2>
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
                <td className="p-3 font-mono text-xs">src</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">—</td>
                <td className="p-3">URL do video (mp4, webm, m3u8)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">poster</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">undefined</td>
                <td className="p-3">URL da imagem de poster</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">thumbnails</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">undefined</td>
                <td className="p-3">URL do arquivo VTT de thumbnails</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs" colSpan={4}>
                  <span className="text-muted-foreground">+ todas as props de ContentCourse (title, subtitle, completed, onCompletedChange, description, files, etc.)</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ReportButton */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-2xl font-bold tracking-tight">ReportButton</h2>
        <p className="text-muted-foreground">
          Botao flutuante (bottom-right) presente em todos os tipos de conteudo. Abre um Sheet com formulario
          para reportar problemas (tipo + detalhes). Integrado automaticamente no <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">ContentCourse</code> via
          prop <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">onReport</code>.
        </p>
        <CodeBlock
          code={`// O ReportButton já é renderizado dentro do ContentCourse.
// Basta passar o callback onReport:

<ContentCourse
  title="..."
  onReport={(data) => {
    // data.reason: "audio-video" | "content" | "navigation" | "other"
    // data.details: string (opcional)
    sendReport(data)
  }}
>
  ...
</ContentCourse>`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Auto-advance */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">Comportamento: Auto-advance</h2>
        <p className="text-muted-foreground">
          Ao clicar em {'"Marcar como concluído"'}, o botao muda para verde com check à direita ({'"Concluído"'}).
          Apos um delay (default 1500ms), o callback <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">onAutoAdvance</code> e chamado
          para navegar automaticamente a proxima atividade.
        </p>
        <CodeBlock
          code={`<ContentVideo
  src="..."
  title="..."
  completed={completed}
  onCompletedChange={setCompleted}
  onAutoAdvance={() => router.push("/next-activity")}
  autoAdvanceDelay={1500} // opcional, default 1500ms
/>`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Architecture */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">Arquitetura dos Templates</h2>
        <p className="text-muted-foreground">
          Cada tipo de atividade tem um template que compõe o <code className="text-xs bg-muted px-1.5 py-0.5 rounded-md font-mono">ContentCourse</code> com o componente de mídia específico.
        </p>
        <CodeBlock
          code={`// Estrutura de cada template:
ContentCourse (wrapper comum)
├── children → VideoPlayer, AudioPlayer, Quiz, Flashcard, etc.
├── Título + Subtítulo
├── Botão "Marcar como concluído" → verde com ✓ ao concluir → auto-advance
├── Descrição (opcional)
├── FileCards (opcional)
└── ReportButton (botão flutuante bottom-right → Sheet com formulário)

// Templates disponíveis:
ContentVideo   → ContentCourse + VideoPlayer  ✅
ContentAudio   → ContentCourse + AudioPlayer  (próximo)
ContentQuiz    → ContentCourse + Quiz         (futuro)
ContentFlash   → ContentCourse + Flashcard    (futuro)`}
          language="text"
          showLineNumbers={false}
        />
      </section>
    </>
  )
}

/* ─── Designer docs ─── */

function DesignerDocs() {
  return (
    <>
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Content Course</h2>
        <p className="text-muted-foreground">
          Area principal de conteudo do produto Class. Cada tipo de atividade (video, audio, quiz, etc.)
          usa um template que combina o conteudo especifico com elementos comuns: titulo, botao de conclusao,
          descricao e arquivos de apoio.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Responsividade</h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Propriedade</th>
                <th className="text-left p-3 font-medium">Mobile</th>
                <th className="text-left p-3 font-medium">Desktop</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3">Largura máxima</td>
                <td className="p-3">100%</td>
                <td className="p-3">860px (centralizado)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">Video border-radius</td>
                <td className="p-3">0 (full bleed)</td>
                <td className="p-3">16px</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">Padding do texto</td>
                <td className="p-3">16px lateral</td>
                <td className="p-3">0 (alinhado com video)</td>
              </tr>
              <tr>
                <td className="p-3">Botao concluir</td>
                <td className="p-3">Full width abaixo do titulo</td>
                <td className="p-3">Inline à direita do titulo</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Preview — ContentVideo</h2>
        <ContentVideoDemo />
      </section>
    </>
  )
}

/* ─── Page ─── */

export default function ContentCoursePage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Content Course</h1>
        <p className="text-muted-foreground mt-2">
          Templates de conteudo para cada tipo de atividade do produto Class.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
