"use client"

import { useState } from "react"
import { VideoIcon, FileTextIcon, MicIcon, UsersIcon, BookOpenIcon } from "lucide-react"
import { ProgressCourse } from "@/components/composites/sidebar-course/progress-course"
import { AccordionConclusion } from "@/components/composites/sidebar-course/accordion-conclusion"
import { AccordionCourse } from "@/components/composites/sidebar-course/accordion-course"
import { TaskCourse } from "@/components/composites/sidebar-course/task-course"
import { ListTaskCourse } from "@/components/composites/sidebar-course/list-task-course"
import { SidebarCourse } from "@/components/composites/sidebar-course/sidebar-course"
import { ComponentPreview } from "@/components/docs/component-preview"
import { CodeBlock } from "@/components/docs/code-block"
import { DocsTabs } from "@/components/docs/docs-tabs"
import { SpecTable } from "@/components/docs/spec-table"

/* ============================================
 * INTERACTIVE DEMO
 * ============================================ */
const DEMO_TASKS = [
  { id: "1", title: "Day after day!", icon: FileTextIcon, typeLabel: "Exercício", duration: "8 min" },
  { id: "2", title: "What time is it?", icon: VideoIcon, typeLabel: "Vídeo", duration: "12 min" },
  { id: "3", title: "I'm in!", icon: MicIcon, typeLabel: "Liveclass", duration: "50 min" },
  { id: "4", title: "Group discussion", icon: UsersIcon, typeLabel: "Grupo", duration: "30 min" },
] as const

function InteractiveTaskDemo() {
  const [activeId, setActiveId] = useState("2")
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set(["1"]))

  const toggleCompleted = (id: string, checked: boolean) => {
    setCompletedIds((prev) => {
      const next = new Set(prev)
      if (checked) next.add(id)
      else next.delete(id)
      return next
    })
  }

  return (
    <div className="rounded-lg border border-border overflow-hidden w-full max-w-[354px]">
      <ListTaskCourse>
        {DEMO_TASKS.map((task) => (
          <TaskCourse
            key={task.id}
            title={task.title}
            icon={task.icon}
            typeLabel={task.typeLabel}
            duration={task.duration}
            active={activeId === task.id}
            completed={completedIds.has(task.id)}
            onClick={() => setActiveId(task.id)}
            onCompletedChange={(checked) => toggleCompleted(task.id, checked)}
          />
        ))}
      </ListTaskCourse>
    </div>
  )
}

/* ============================================
 * FULL SIDEBAR DEMO
 * ============================================ */
const UNIT_TASKS = [
  { id: "t1", title: "Day after day!", icon: FileTextIcon, typeLabel: "Exercício", duration: "8 min" },
  { id: "t2", title: "What time is it?", icon: VideoIcon, typeLabel: "Vídeo", duration: "12 min" },
  { id: "t3", title: "I'm in!", icon: MicIcon, typeLabel: "Liveclass", duration: "50 min" },
  { id: "t4", title: "Group discussion", icon: UsersIcon, typeLabel: "Grupo", duration: "30 min" },
  { id: "t5", title: "On cloud nine!", icon: VideoIcon, typeLabel: "Vídeo", duration: "15 min" },
  { id: "t6", title: "Final quiz", icon: BookOpenIcon, typeLabel: "Quiz", duration: undefined },
] as const

function FullSidebarDemo() {
  const [activeId, setActiveId] = useState("t2")
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set(["t1"]))

  const toggleCompleted = (id: string, checked: boolean) => {
    setCompletedIds((prev) => {
      const next = new Set(prev)
      if (checked) next.add(id)
      else next.delete(id)
      return next
    })
  }

  return (
    <SidebarCourse
      className="h-[600px] border border-border rounded-lg overflow-hidden"
      header={
        <ProgressCourse
          title="Title Course"
          onBack={() => {}}
          infoText="No seu ritmo, você conclui em 2 meses"
          link={{ label: "Ajustar meta", href: "#" }}
          progressType="stage"
          progressValue={3}
          stages={6}
          percentLabel="50%"
          theme="theme-group"
        />
      }
    >
      {/* Units nao concluidas */}
      <AccordionConclusion label="Units não concluídas (8)" defaultOpen>
        {/* Unit aberta com tasks */}
        <AccordionCourse
          title="Unit: Time flies..."
          completedCount={completedIds.size}
          totalCount={UNIT_TASKS.length}
          liveLabel="Liveclass hoje"
          defaultOpen
        >
          <ListTaskCourse>
            {UNIT_TASKS.map((task) => (
              <TaskCourse
                key={task.id}
                title={task.title}
                icon={task.icon}
                typeLabel={task.typeLabel}
                duration={task.duration}
                active={activeId === task.id}
                completed={completedIds.has(task.id)}
                onClick={() => setActiveId(task.id)}
                onCompletedChange={(checked) => toggleCompleted(task.id, checked)}
              />
            ))}
          </ListTaskCourse>
        </AccordionCourse>

        {/* Units fechadas */}
        <AccordionCourse title="Unit: Smart cookie!" completedCount={0} totalCount={7}>
          <div className="p-4"><p className="text-sm text-muted-foreground">Tasks...</p></div>
        </AccordionCourse>
        <AccordionCourse title="Unit: Roll up your sleeves!" completedCount={0} totalCount={5}>
          <div className="p-4"><p className="text-sm text-muted-foreground">Tasks...</p></div>
        </AccordionCourse>
      </AccordionConclusion>

      {/* Units concluidas */}
      <AccordionConclusion label="Units concluídas (3)">
        <AccordionCourse title="Unit: Welcome to Beginner 1!" completedCount={7} totalCount={7}>
          <div className="p-4"><p className="text-sm text-muted-foreground">Todos concluidos!</p></div>
        </AccordionCourse>
        <AccordionCourse title="Unit: Hello, stranger!" completedCount={5} totalCount={5}>
          <div className="p-4"><p className="text-sm text-muted-foreground">Todos concluidos!</p></div>
        </AccordionCourse>
        <AccordionCourse title="Unit: Every day!" completedCount={6} totalCount={6}>
          <div className="p-4"><p className="text-sm text-muted-foreground">Todos concluidos!</p></div>
        </AccordionCourse>
      </AccordionConclusion>
    </SidebarCourse>
  )
}

/* ============================================
 * DEVELOPER DOCS
 * ============================================ */
function DeveloperDocs() {
  return (
    <>
      {/* Full SidebarCourse */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">SidebarCourse completo</h2>
        <p className="text-muted-foreground">
          Composicao completa do sidebar com todos os sub-componentes. Clique nas tasks para navegar.
        </p>
        <CodeBlock
          code={`import { SidebarCourse } from "@/components/composites/sidebar-course/sidebar-course"
import { ProgressCourse } from "@/components/composites/sidebar-course/progress-course"
import { AccordionConclusion } from "@/components/composites/sidebar-course/accordion-conclusion"
import { AccordionCourse } from "@/components/composites/sidebar-course/accordion-course"
import { TaskCourse } from "@/components/composites/sidebar-course/task-course"
import { ListTaskCourse } from "@/components/composites/sidebar-course/list-task-course"`}
          language="tsx"
          showLineNumbers={false}
        />
        <FullSidebarDemo />
      </section>

      {/* Sub-components */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Sub-componentes</h2>
        <p className="text-muted-foreground mt-2">
          O Sidebar Course e composto por sub-componentes internos. Cada um esta documentado abaixo.
        </p>
      </div>

      {/* ProgressCourse */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">ProgressCourse</h2>
        <p className="text-muted-foreground">
          Header de progresso do sidebar. Mostra titulo, informacoes de ritmo e barra de progresso.
        </p>
        <CodeBlock
          code={`import { ProgressCourse } from "@/components/composites/sidebar-course/progress-course"`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Basic usage */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Uso basico</h3>
        <ComponentPreview
          code={`<ProgressCourse
  title="Title Course"
  onBack={() => {}}
  infoText="No seu ritmo, você conclui em 2 meses"
  link={{ label: "Ajustar meta", href: "#" }}
  progressType="stage"
  progressValue={3}
  stages={6}
  percentLabel="50%"
  theme="theme-group"
/>`}
        >
          <div className="w-full max-w-[354px]">
            <ProgressCourse
              title="Title Course"
              onBack={() => {}}
              infoText="No seu ritmo, você conclui em 2 meses"
              link={{ label: "Ajustar meta", href: "#" }}
              progressType="stage"
              progressValue={3}
              stages={6}
              percentLabel="50%"
              theme="theme-group"
            />
          </div>
        </ComponentPreview>
      </section>

      {/* Progress type: bar */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Progress Bar</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">progressType=&quot;bar&quot;</code> para a barra continua.
        </p>
        <ComponentPreview
          code={`<ProgressCourse
  title="Unit: Time flies..."
  onBack={() => {}}
  infoText="No seu ritmo, você conclui em 5 dias"
  link={{ label: "Ajuste sua meta", href: "#" }}
  progressType="bar"
  progressValue={14}
  percentLabel="14%"
  theme="theme-class"
/>`}
        >
          <div className="w-full max-w-[354px]">
            <ProgressCourse
              title="Unit: Time flies..."
              onBack={() => {}}
              infoText="No seu ritmo, você conclui em 5 dias"
              link={{ label: "Ajuste sua meta", href: "#" }}
              progressType="bar"
              progressValue={14}
              percentLabel="14%"
              theme="theme-class"
            />
          </div>
        </ComponentPreview>
      </section>

      {/* Without info */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Sem info de progresso</h3>
        <p className="text-muted-foreground">
          Omitindo <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">infoText</code> o bloco de texto e link nao aparece.
        </p>
        <ComponentPreview
          code={`<ProgressCourse
  title="Title Course"
  onBack={() => {}}
  progressType="stage"
  progressValue={5}
  stages={10}
  percentLabel="50%"
  theme="theme-group"
/>`}
        >
          <div className="w-full max-w-[354px]">
            <ProgressCourse
              title="Title Course"
              onBack={() => {}}
              progressType="stage"
              progressValue={5}
              stages={10}
              percentLabel="50%"
              theme="theme-group"
            />
          </div>
        </ComponentPreview>
      </section>

      {/* Without back */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Sem botao de voltar</h3>
        <ComponentPreview
          code={`<ProgressCourse
  title="Title Course"
  showBack={false}
  progressType="bar"
  progressValue={70}
  percentLabel="70%"
  theme="theme-class"
/>`}
        >
          <div className="w-full max-w-[354px]">
            <ProgressCourse
              title="Title Course"
              showBack={false}
              progressType="bar"
              progressValue={70}
              percentLabel="70%"
              theme="theme-class"
            />
          </div>
        </ComponentPreview>
      </section>

      {/* Theme variations */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Temas</h3>
        <ComponentPreview
          code={`<div className="space-y-4">
  <ProgressCourse title="Neutral" progressType="stage" progressValue={3} stages={6} percentLabel="50%" />
  <ProgressCourse title="Class" progressType="bar" progressValue={33} percentLabel="33%" theme="theme-class" />
  <ProgressCourse title="Group" progressType="stage" progressValue={3} stages={6} percentLabel="50%" theme="theme-group" />
  <ProgressCourse title="Private" progressType="bar" progressValue={50} percentLabel="50%" theme="theme-private" />
</div>`}
        >
          <div className="w-full max-w-[354px] space-y-4">
            <ProgressCourse title="Neutral" progressType="stage" progressValue={3} stages={6} percentLabel="50%" />
            <ProgressCourse title="Class" progressType="bar" progressValue={33} percentLabel="33%" theme="theme-class" />
            <ProgressCourse title="Group" progressType="stage" progressValue={3} stages={6} percentLabel="50%" theme="theme-group" />
            <ProgressCourse title="Private" progressType="bar" progressValue={50} percentLabel="50%" theme="theme-private" />
          </div>
        </ComponentPreview>
      </section>

      {/* API Reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference — ProgressCourse</h2>
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
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Titulo do curso ou unidade (obrigatorio)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onBack</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">() =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Callback da seta voltar</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">showBack</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">true</td>
                <td className="p-3 text-muted-foreground">Mostra/esconde seta de voltar</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">infoText</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Texto informativo acima do progresso</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">link</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">{`{ label, href }`}</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Link ao lado do subtexto</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">progressType</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;bar&quot; | &quot;stage&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;stage&quot;</td>
                <td className="p-3 text-muted-foreground">Tipo de barra de progresso</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">progressValue</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Valor (0-100 bar, 0-stages stage)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">stages</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">10</td>
                <td className="p-3 text-muted-foreground">Total de stages (apenas progressType=&quot;stage&quot;)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">percentLabel</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Percentual ao lado da barra (ex: &quot;50%&quot;)</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">theme</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Tema de cor (ex: &quot;theme-class&quot;)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* AccordionConclusion */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">AccordionConclusion</h2>
        <p className="text-muted-foreground">
          Accordion que separa items concluidos dos nao concluidos. Usa a animacao do Radix Accordion e aceita qualquer componente como children.
        </p>
        <CodeBlock
          code={`import { AccordionConclusion } from "@/components/composites/sidebar-course/accordion-conclusion"`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* AccordionConclusion basic */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Uso basico</h3>
        <ComponentPreview
          code={`<AccordionConclusion label="3 units concluídas">
  <div className="p-4 space-y-2">
    <p className="text-sm">Unit: Welcome to Beginner 1!</p>
    <p className="text-sm">Unit: Hello, stranger!</p>
    <p className="text-sm">Unit: Every day!</p>
  </div>
</AccordionConclusion>`}
        >
          <div className="w-full max-w-[354px]">
            <AccordionConclusion label="3 units concluídas">
              <div className="p-4 space-y-2">
                <p className="text-sm text-foreground">Unit: Welcome to Beginner 1!</p>
                <p className="text-sm text-foreground">Unit: Hello, stranger!</p>
                <p className="text-sm text-foreground">Unit: Every day!</p>
              </div>
            </AccordionConclusion>
          </div>
        </ComponentPreview>
      </section>

      {/* AccordionConclusion default open */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Iniciar aberto</h3>
        <ComponentPreview
          code={`<AccordionConclusion label="2 lessons concluídas" defaultOpen>
  <div className="p-4 space-y-2">
    <p className="text-sm">Lesson: Day after day!</p>
    <p className="text-sm">Lesson: I'm in!</p>
  </div>
</AccordionConclusion>`}
        >
          <div className="w-full max-w-[354px]">
            <AccordionConclusion label="2 lessons concluídas" defaultOpen>
              <div className="p-4 space-y-2">
                <p className="text-sm text-foreground">Lesson: Day after day!</p>
                <p className="text-sm text-foreground">Lesson: I&apos;m in!</p>
              </div>
            </AccordionConclusion>
          </div>
        </ComponentPreview>
      </section>

      {/* API Reference AccordionConclusion */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference — AccordionConclusion</h2>
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
                <td className="p-3 font-mono text-xs">label</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Texto do trigger (ex: &quot;3 units concluidas&quot;)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ReactNode</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Conteudo expandido (aceita qualquer componente)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">defaultOpen</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Inicia aberto</td>
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

      {/* AccordionCourse */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">AccordionCourse</h2>
        <p className="text-muted-foreground">
          Accordion de unit/lesson com badge de progresso, tag live opcional e area de conteudo expandivel para items de lista.
        </p>
        <CodeBlock
          code={`import { AccordionCourse } from "@/components/composites/sidebar-course/accordion-course"`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* AccordionCourse basic */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Uso basico</h3>
        <ComponentPreview
          code={`<AccordionCourse
  title="Unit: Time flies..."
  completedCount={1}
  totalCount={7}
  liveLabel="Liveclass hoje"
  defaultOpen
>
  <div className="p-4 space-y-2">
    <p className="text-sm">Lesson: What time is it?</p>
    <p className="text-sm">Lesson: I'm in!</p>
    <p className="text-sm">Lesson: On cloud nine!</p>
  </div>
</AccordionCourse>`}
        >
          <div className="w-full max-w-[354px]">
            <AccordionCourse
              title="Unit: Time flies..."
              completedCount={1}
              totalCount={7}
              liveLabel="Liveclass hoje"
              defaultOpen
            >
              <div className="p-4 space-y-2">
                <p className="text-sm text-foreground">Lesson: What time is it?</p>
                <p className="text-sm text-foreground">Lesson: I&apos;m in!</p>
                <p className="text-sm text-foreground">Lesson: On cloud nine!</p>
              </div>
            </AccordionCourse>
          </div>
        </ComponentPreview>
      </section>

      {/* Closed state */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Fechado</h3>
        <ComponentPreview
          code={`<AccordionCourse title="Unit: Smart cookie!" completedCount={0} totalCount={7}>
  <div className="p-4"><p className="text-sm">Conteudo...</p></div>
</AccordionCourse>`}
        >
          <div className="w-full max-w-[354px]">
            <AccordionCourse title="Unit: Smart cookie!" completedCount={0} totalCount={7}>
              <div className="p-4"><p className="text-sm text-foreground">Conteudo...</p></div>
            </AccordionCourse>
          </div>
        </ComponentPreview>
      </section>

      {/* Completed */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Concluido</h3>
        <p className="text-muted-foreground">
          Quando <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">completedCount &gt;= totalCount</code>, a badge muda para o variant <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">progress-completed</code>.
        </p>
        <ComponentPreview
          code={`<AccordionCourse title="Unit: Hello, stranger!" completedCount={7} totalCount={7}>
  <div className="p-4"><p className="text-sm">Todos concluidos!</p></div>
</AccordionCourse>`}
        >
          <div className="w-full max-w-[354px]">
            <AccordionCourse title="Unit: Hello, stranger!" completedCount={7} totalCount={7}>
              <div className="p-4"><p className="text-sm text-foreground">Todos concluidos!</p></div>
            </AccordionCourse>
          </div>
        </ComponentPreview>
      </section>

      {/* Without live */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Sem tag live</h3>
        <ComponentPreview
          code={`<AccordionCourse title="Unit: Roll up your sleeves!" completedCount={3} totalCount={7} defaultOpen>
  <div className="p-4 space-y-2">
    <p className="text-sm">Lesson 1</p>
    <p className="text-sm">Lesson 2</p>
  </div>
</AccordionCourse>`}
        >
          <div className="w-full max-w-[354px]">
            <AccordionCourse title="Unit: Roll up your sleeves!" completedCount={3} totalCount={7} defaultOpen>
              <div className="p-4 space-y-2">
                <p className="text-sm text-foreground">Lesson 1</p>
                <p className="text-sm text-foreground">Lesson 2</p>
              </div>
            </AccordionCourse>
          </div>
        </ComponentPreview>
      </section>

      {/* API Reference AccordionCourse */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference — AccordionCourse</h2>
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
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Titulo da unit ou lesson</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">completedCount</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Items concluidos (numerador da badge)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">totalCount</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">number</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Total de items (denominador da badge)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">liveLabel</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Texto da tag live. Omitir para esconder.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ReactNode</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Conteudo expandido (items de lista)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">defaultOpen</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Inicia aberto</td>
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

      {/* TaskCourse */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">TaskCourse</h2>
        <p className="text-muted-foreground">
          Item individual de atividade dentro de uma secao do curso. Representa video, quiz, liveclass, etc.
        </p>
        <CodeBlock
          code={`import { TaskCourse } from "@/components/composites/sidebar-course/task-course"`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* TaskCourse states */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Estados</h3>
        <ComponentPreview
          code={`<div className="flex flex-col w-full">
  <TaskCourse
    title="What time is it?"
    icon={VideoIcon}
    typeLabel="Vídeo"
    duration="12 min"
    onClick={() => {}}
  />
  <TaskCourse
    title="I'm in!"
    icon={MicIcon}
    typeLabel="Liveclass"
    duration="50 min"
    active
    onClick={() => {}}
  />
  <TaskCourse
    title="Day after day!"
    icon={FileTextIcon}
    typeLabel="Exercício"
    duration="8 min"
    completed
    onClick={() => {}}
  />
</div>`}
        >
          <div className="w-full max-w-[354px]">
            <div className="flex flex-col w-full">
              <TaskCourse
                title="What time is it?"
                icon={VideoIcon}
                typeLabel="Vídeo"
                duration="12 min"
                onClick={() => {}}
              />
              <TaskCourse
                title="I'm in!"
                icon={MicIcon}
                typeLabel="Liveclass"
                duration="50 min"
                active
                onClick={() => {}}
              />
              <TaskCourse
                title="Day after day!"
                icon={FileTextIcon}
                typeLabel="Exercício"
                duration="8 min"
                completed
                onClick={() => {}}
              />
            </div>
          </div>
        </ComponentPreview>
      </section>

      {/* TaskCourse without duration */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Sem duracao</h3>
        <ComponentPreview
          code={`<TaskCourse
  title="Quiz: Time expressions"
  icon={BookOpenIcon}
  typeLabel="Quiz"
  onClick={() => {}}
/>`}
        >
          <div className="w-full max-w-[354px]">
            <TaskCourse
              title="Quiz: Time expressions"
              icon={BookOpenIcon}
              typeLabel="Quiz"
              onClick={() => {}}
            />
          </div>
        </ComponentPreview>
      </section>

      {/* API Reference TaskCourse */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference — TaskCourse</h2>
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
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Titulo da atividade</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">icon</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">LucideIcon</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Icone Lucide da atividade</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">typeLabel</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Label do tipo (ex: &quot;Video&quot;, &quot;Quiz&quot;)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">duration</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Texto de duracao (ex: &quot;12 min&quot;)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">active</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Marca como ativo (barra azul + bg accent)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">completed</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Marca como concluido (checkbox checked)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onCompletedChange</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">(checked: boolean) =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Callback ao mudar checkbox</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">onClick</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">() =&gt; void</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Callback ao clicar na row</td>
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

      {/* ListTaskCourse */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">ListTaskCourse</h2>
        <p className="text-muted-foreground">
          Container simples que renderiza TaskCourse items verticalmente. Usado como children do AccordionCourse.
        </p>
        <CodeBlock
          code={`import { ListTaskCourse } from "@/components/composites/sidebar-course/list-task-course"`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* ListTaskCourse inside AccordionCourse */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Uso com AccordionCourse</h3>
        <ComponentPreview
          code={`<AccordionCourse
  title="Unit: Time flies..."
  completedCount={1}
  totalCount={4}
  defaultOpen
>
  <ListTaskCourse>
    <TaskCourse title="Day after day!" icon={FileTextIcon} typeLabel="Exercício" duration="8 min" completed />
    <TaskCourse title="What time is it?" icon={VideoIcon} typeLabel="Vídeo" duration="12 min" active />
    <TaskCourse title="I'm in!" icon={MicIcon} typeLabel="Liveclass" duration="50 min" />
    <TaskCourse title="Group discussion" icon={UsersIcon} typeLabel="Grupo" duration="30 min" />
  </ListTaskCourse>
</AccordionCourse>`}
        >
          <div className="w-full max-w-[354px]">
            <AccordionCourse
              title="Unit: Time flies..."
              completedCount={1}
              totalCount={4}
              defaultOpen
            >
              <ListTaskCourse>
                <TaskCourse title="Day after day!" icon={FileTextIcon} typeLabel="Exercício" duration="8 min" completed />
                <TaskCourse title="What time is it?" icon={VideoIcon} typeLabel="Vídeo" duration="12 min" active />
                <TaskCourse title="I&apos;m in!" icon={MicIcon} typeLabel="Liveclass" duration="50 min" />
                <TaskCourse title="Group discussion" icon={UsersIcon} typeLabel="Grupo" duration="30 min" />
              </ListTaskCourse>
            </AccordionCourse>
          </div>
        </ComponentPreview>
      </section>

      {/* Interactive task switching demo */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Troca de task (interativo)</h3>
        <p className="text-muted-foreground">
          Clique em uma task para torná-la ativa. Use o checkbox para marcar como concluída.
        </p>
        <InteractiveTaskDemo />
      </section>

      {/* API Reference ListTaskCourse */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">API Reference — ListTaskCourse</h2>
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
                <td className="p-3 font-mono text-xs">children</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">ReactNode</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">TaskCourse items</td>
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
      {/* Full sidebar visual */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Visualizacao completa</h2>
        <p className="text-muted-foreground">
          Sidebar completo interativo — clique nas tasks para navegar entre elas.
        </p>
        <FullSidebarDemo />
      </section>

      {/* Structure */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estrutura</h2>
        <p className="text-muted-foreground">
          O Sidebar Course e composto por sub-componentes internos que juntos formam a navegacao lateral do produto Class.
        </p>
      </section>

      {/* ProgressCourse */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">ProgressCourse</h2>
        <p className="text-muted-foreground">
          Header de progresso no topo do sidebar. Mostra o titulo do curso/unidade, informacoes de ritmo de estudo e a barra de progresso.
        </p>
        <SpecTable
          headers={["Camada", "Elemento", "Descricao"]}
          rows={[
            ["Container", "div", "Wrapper com bg-muted, border-bottom, padding responsivo"],
            ["Title row", "h2 + botao voltar", "Titulo truncado + seta opcional"],
            ["Info block", "p + link", "Texto de ritmo + link de acao (opcional)"],
            ["Progress", "Progress | ProgressStage", "Barra continua ou segmentada + label %"],
          ]}
        />
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Mobile", "Desktop"]}
          rows={[
            ["Padding", "16px (p-4)", "24px (p-6)"],
            ["Gap interno", "12px (gap-3)", "12px (gap-3)"],
            ["Titulo", "16px / semibold", "18px / semibold"],
            ["Info text", "14px / regular", "16px / regular"],
            ["Subtexto", "12px / regular / muted", "12px / regular / muted"],
            ["Link", "12px / medium / underline / primary", "12px / medium / underline / primary"],
            ["% label", "12px / regular / muted", "12px / regular / muted"],
            ["Background", "bg-muted", "bg-muted"],
            ["Border", "border-b border-border", "border-b border-border"],
          ]}
        />
      </section>

      {/* Variations */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variacoes</h2>
        <SpecTable
          headers={["Variacao", "Props"]}
          rows={[
            ["Com/sem seta voltar", "showBack={true|false}"],
            ["Com/sem info", "infoText presente ou omitido"],
            ["Com/sem link", "link presente ou omitido"],
            ["Progress bar", "progressType=\"bar\""],
            ["Progress stage", "progressType=\"stage\""],
          ]}
        />
      </section>

      {/* Visual reference */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Referencia Visual</h2>
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="space-y-6 max-w-[354px]">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">Stage + info + back (theme-group)</span>
              <ProgressCourse
                title="Title Course"
                onBack={() => {}}
                infoText="No seu ritmo, você conclui em 2 meses"
                link={{ label: "Ajustar meta", href: "#" }}
                progressType="stage"
                progressValue={3}
                stages={6}
                percentLabel="50%"
                theme="theme-group"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">Bar + info + back (theme-class)</span>
              <ProgressCourse
                title="Unit: Time flies..."
                onBack={() => {}}
                infoText="No seu ritmo, você conclui em 5 dias"
                link={{ label: "Ajuste sua meta", href: "#" }}
                progressType="bar"
                progressValue={14}
                percentLabel="14%"
                theme="theme-class"
              />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">Minimal (sem info, sem back)</span>
              <ProgressCourse
                title="Title Course"
                showBack={false}
                progressType="stage"
                progressValue={7}
                stages={10}
                percentLabel="70%"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AccordionConclusion designer */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">AccordionConclusion</h2>
        <p className="text-muted-foreground">
          Accordion que separa items concluidos dos nao concluidos. Expande/colapsa com animacao suave.
        </p>
        <SpecTable
          headers={["Camada", "Elemento", "Descricao"]}
          rows={[
            ["Trigger (fechado)", "button", "bg-background, text-sm (14px), text-muted-foreground, chevron-down"],
            ["Trigger (aberto)", "button", "bg-background, text-xs (12px), text-muted-foreground, chevron-up"],
            ["Content", "div animado", "Aceita qualquer componente como children"],
          ]}
        />
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Background", "bg-background"],
            ["Border", "border-b border-border"],
            ["Texto trigger", "text-muted-foreground"],
            ["Icone", "ChevronDown / ChevronUp (rotacao 180deg)"],
            ["Animacao", "accordion-up / accordion-down (Radix)"],
            ["Padding fechado", "py-2 px-6"],
            ["Padding aberto", "py-2 px-4"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="max-w-[354px] space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">Fechado</span>
              <AccordionConclusion label="3 units concluídas">
                <div className="p-4 space-y-2">
                  <p className="text-sm text-foreground">Unit: Welcome to Beginner 1!</p>
                  <p className="text-sm text-foreground">Unit: Hello, stranger!</p>
                </div>
              </AccordionConclusion>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">Aberto</span>
              <AccordionConclusion label="2 lessons concluídas" defaultOpen>
                <div className="p-4 space-y-2">
                  <p className="text-sm text-foreground">Lesson: Day after day!</p>
                  <p className="text-sm text-foreground">Lesson: I&apos;m in!</p>
                </div>
              </AccordionConclusion>
            </div>
          </div>
        </div>
      </section>

      {/* AccordionCourse designer */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">AccordionCourse</h2>
        <p className="text-muted-foreground">
          Accordion de unit/lesson com badge de progresso e tag live opcional. Aceita N componentes de lista no conteudo expandido.
        </p>
        <SpecTable
          headers={["Camada", "Elemento", "Descricao"]}
          rows={[
            ["Trigger", "button", "bg-muted, padding responsivo, titulo + badge + chevron"],
            ["Badge progress", "Badge", "Contador X/Y, muda para progress-completed quando completo"],
            ["Tag live", "Badge (theme-class)", "Opcional, com dot animado (ping)"],
            ["Chevron", "ChevronRight/Down", "Right quando fechado, Down quando aberto"],
            ["Content", "div animado", "Aceita qualquer componente como children"],
          ]}
        />
        <SpecTable
          headers={["Propriedade", "Mobile", "Desktop"]}
          rows={[
            ["Padding trigger", "16px (p-4)", "24px (p-6)"],
            ["Titulo", "14px / regular", "16px / regular"],
            ["Badge", "text-xs / pill", "text-xs / pill"],
            ["Background", "bg-muted", "bg-muted"],
            ["Border", "border-b border-border", "border-b border-border"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="max-w-[354px] space-y-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">Com live tag (aberto)</span>
              <AccordionCourse title="Unit: Time flies..." completedCount={1} totalCount={7} liveLabel="Liveclass hoje" defaultOpen>
                <div className="p-4 space-y-2">
                  <p className="text-sm text-foreground">Lesson: What time is it?</p>
                  <p className="text-sm text-foreground">Lesson: I&apos;m in!</p>
                </div>
              </AccordionCourse>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">Sem live (fechado)</span>
              <AccordionCourse title="Unit: Smart cookie!" completedCount={0} totalCount={7}>
                <div className="p-4"><p className="text-sm text-foreground">Conteudo...</p></div>
              </AccordionCourse>
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">Concluido</span>
              <AccordionCourse title="Unit: Hello, stranger!" completedCount={7} totalCount={7}>
                <div className="p-4"><p className="text-sm text-foreground">Todos concluidos!</p></div>
              </AccordionCourse>
            </div>
          </div>
        </div>
      </section>

      {/* TaskCourse designer */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">TaskCourse</h2>
        <p className="text-muted-foreground">
          Item individual de atividade dentro de uma secao do curso (video, quiz, liveclass, etc.).
        </p>
        <SpecTable
          headers={["Camada", "Elemento", "Descricao"]}
          rows={[
            ["Container", "div (role=button)", "Row clicavel com padding responsivo"],
            ["Active bar", "div 4px", "Barra lateral esquerda bg-primary (apenas active)"],
            ["Icon", "CycleIcon xs", "Icone Lucide da atividade, text-muted-foreground"],
            ["Title", "span", "text-sm, line-clamp-2"],
            ["Badge", "Badge sm", "muted (default/completed), default+theme (active)"],
            ["Duration", "span", "text-xs text-muted-foreground, separado por dot"],
            ["Checkbox", "Checkbox circular lg", "theme-positive quando completed"],
          ]}
        />
        <SpecTable
          headers={["Estado", "Barra", "Background", "Badge", "Checkbox"]}
          rows={[
            ["Default", "Nenhuma", "bg-background", "muted", "Unchecked"],
            ["Active", "4px bg-primary", "bg-accent", "default (theme-class)", "Unchecked"],
            ["Completed", "Nenhuma", "bg-background", "muted", "Checked (theme-positive)"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="max-w-[354px]">
            <div className="flex flex-col">
              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">Default</span>
                <TaskCourse title="What time is it?" icon={VideoIcon} typeLabel="Vídeo" duration="12 min" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">Active</span>
                <TaskCourse title="I'm in!" icon={MicIcon} typeLabel="Liveclass" duration="50 min" active />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono text-muted-foreground">Completed</span>
                <TaskCourse title="Day after day!" icon={FileTextIcon} typeLabel="Exercício" duration="8 min" completed />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ListTaskCourse designer */}
      <section className="space-y-4 pt-8 border-t border-border">
        <h2 className="text-xl font-semibold">ListTaskCourse</h2>
        <p className="text-muted-foreground">
          Container flex-col que agrupa TaskCourse items. Usado como children do AccordionCourse.
        </p>
      </section>

      {/* Notes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          {[
            "O ProgressCourse e um sub-componente interno do Sidebar Course, nao e exportado no registry.",
            "Responsivo: mobile (p-4, text-base) e desktop (p-6, text-lg) via breakpoint md.",
            "O tema e passado para o Progress/ProgressStage via prop theme — o container permanece neutro.",
            "O titulo trunca com ellipsis se exceder a largura disponivel.",
            "O link de acao usa a cor primary do tema ativo.",
            "O AccordionConclusion usa animacao do Radix Accordion (slide up/down).",
            "O AccordionCourse usa badge progress como contador — muda automaticamente para progress-completed.",
            "A tag live e opcional e usa theme-class com dot animado (CSS ping).",
            "O TaskCourse tem 3 estados visuais: default, active (barra + bg accent), completed (checkbox verde).",
            "O TaskCourse active usa theme-class para colorir a badge e a barra lateral.",
            "O ListTaskCourse e um wrapper flex-col simples — o consumer passa TaskCourse como children.",
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
export default function SidebarCoursePage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Sidebar Course</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Navegacao lateral do produto Class. Composto por sub-componentes internos: ProgressCourse, items de navegacao e accordions.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
