"use client"

import * as React from "react"
import { useState } from "react"
import { ChatBubble } from "@/components/ui/chat-bubble"
import { ChatPanel, type ChatMessage } from "@/components/ui/chat-panel"

/* ─── Sample data ─── */

const sampleMessages: ChatMessage[] = [
  {
    id: "1",
    author: "Prof. Ana",
    message: "Bem-vindos à aula de hoje! Vamos começar em instantes.",
    timestamp: "14:00",
    variant: "instructor",
  },
  {
    id: "2",
    author: "Carlos Silva",
    message: "Boa tarde, professora!",
    timestamp: "14:01",
  },
  {
    id: "3",
    author: "Maria Santos",
    message: "Estou ansiosa pela aula de hoje",
    timestamp: "14:01",
  },
  {
    id: "4",
    author: "Prof. Ana",
    message: "Hoje vamos praticar conversação sobre viagens. Preparem suas dúvidas!",
    timestamp: "14:02",
    variant: "instructor",
  },
  {
    id: "5",
    author: "João Pedro",
    message: "Posso perguntar sobre phrasal verbs também?",
    timestamp: "14:03",
  },
]

/* ─── Demo: ChatBubble ─── */

function ChatBubbleDemo() {
  return (
    <div className="flex flex-col gap-4 max-w-md">
      <ChatBubble
        author="Prof. Ana"
        message="Bem-vindos! Vamos começar a aula."
        timestamp="14:00"
        variant="instructor"
      />
      <ChatBubble
        author="Carlos Silva"
        message="Boa tarde, professora!"
        timestamp="14:01"
      />
      <ChatBubble
        author=""
        message="Maria entrou na sala."
        variant="system"
      />
    </div>
  )
}

/* ─── Demo: ChatPanel ─── */

function ChatPanelDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(sampleMessages)

  function handleSend(message: string) {
    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        author: "Você",
        message,
        timestamp: new Date().toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ])
  }

  return (
    <div className="h-[400px] w-full max-w-[380px] border border-border rounded-lg overflow-hidden">
      <ChatPanel
        messages={messages}
        onSendMessage={handleSend}
        className="h-full border-l-0"
      />
    </div>
  )
}

/* ─── Demo: ChatPanel disabled ─── */

function ChatPanelDisabledDemo() {
  return (
    <div className="h-[300px] w-full max-w-[380px] border border-border rounded-lg overflow-hidden">
      <ChatPanel
        messages={sampleMessages.slice(0, 3)}
        onSendMessage={() => {}}
        disabled
        placeholder="Chat encerrado"
        title="Chat (encerrado)"
        className="h-full border-l-0"
      />
    </div>
  )
}

/* ─── Demo: ChatPanel read-only ─── */

function ChatPanelReadOnlyDemo() {
  return (
    <div className="h-[300px] w-full max-w-[380px] border border-border rounded-lg overflow-hidden">
      <ChatPanel
        messages={sampleMessages.slice(0, 3)}
        title="Mensagens"
        className="h-full border-l-0"
      />
    </div>
  )
}

/* ─── Page ─── */

export default function ChatPage() {
  return (
    <div className="flex flex-col gap-12 pb-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">
          Chat
        </h1>
        <p className="text-base text-muted-foreground max-w-2xl">
          Componentes de chat reutilizáveis. ChatBubble para mensagens individuais
          e ChatPanel para o painel completo com input.
        </p>
      </div>

      {/* ChatBubble */}
      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            ChatBubble
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Bolha de mensagem individual. 3 variantes:{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">default</code> (aluno),{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">instructor</code> (professor com destaque primary),{" "}
            <code className="text-xs bg-muted px-1 py-0.5 rounded">system</code> (mensagem de sistema).
          </p>
        </div>
        <ChatBubbleDemo />
      </section>

      {/* ChatBubble variants */}
      <section className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          Variantes
        </h3>
        <div className="flex flex-col gap-6 max-w-md">
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">default</span>
            <ChatBubble
              author="Carlos Silva"
              message="Mensagem de um aluno com avatar de iniciais."
              timestamp="14:01"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">instructor</span>
            <ChatBubble
              author="Prof. Ana"
              message="Mensagem do professor com destaque na cor primary."
              timestamp="14:00"
              variant="instructor"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">system</span>
            <ChatBubble
              author=""
              message="Maria entrou na sala."
              variant="system"
            />
          </div>
        </div>
      </section>

      {/* ChatPanel */}
      <section className="flex flex-col gap-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            ChatPanel
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Painel de chat completo com lista de mensagens, scroll automático e input para enviar.
            Passe <code className="text-xs bg-muted px-1 py-0.5 rounded">onSendMessage</code> para habilitar o input.
          </p>
        </div>
        <ChatPanelDemo />
      </section>

      {/* ChatPanel disabled */}
      <section className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            Disabled (chat encerrado)
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Com <code className="text-xs bg-muted px-1 py-0.5 rounded">disabled=true</code>,
            o input fica bloqueado mas as mensagens continuam visíveis.
          </p>
        </div>
        <ChatPanelDisabledDemo />
      </section>

      {/* ChatPanel read-only */}
      <section className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            Read-only (sem input)
          </h3>
          <p className="text-sm text-muted-foreground mt-1">
            Sem <code className="text-xs bg-muted px-1 py-0.5 rounded">onSendMessage</code>,
            o input não é renderizado. Útil para exibir histórico.
          </p>
        </div>
        <ChatPanelReadOnlyDemo />
      </section>

      {/* Props */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Props
        </h2>

        <h3 className="text-base font-semibold text-foreground mt-2">ChatBubble</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-medium text-foreground">Prop</th>
                <th className="py-2 pr-4 font-medium text-foreground">Tipo</th>
                <th className="py-2 pr-4 font-medium text-foreground">Default</th>
                <th className="py-2 font-medium text-foreground">Descrição</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">author</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">Nome do autor</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">avatar</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">URL da imagem (fallback: iniciais)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">message</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">Texto da mensagem</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">timestamp</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">Horário (ex: &quot;14:32&quot;)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">variant</td>
                <td className="py-2 pr-4 font-mono text-xs">&quot;default&quot; | &quot;instructor&quot; | &quot;system&quot;</td>
                <td className="py-2 pr-4">&quot;default&quot;</td>
                <td className="py-2">Estilo da mensagem</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold text-foreground mt-4">ChatPanel</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-medium text-foreground">Prop</th>
                <th className="py-2 pr-4 font-medium text-foreground">Tipo</th>
                <th className="py-2 pr-4 font-medium text-foreground">Default</th>
                <th className="py-2 font-medium text-foreground">Descrição</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">messages</td>
                <td className="py-2 pr-4 font-mono text-xs">ChatMessage[]</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">Array de mensagens</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">onSendMessage</td>
                <td className="py-2 pr-4 font-mono text-xs">(msg: string) =&gt; void</td>
                <td className="py-2 pr-4">—</td>
                <td className="py-2">Callback ao enviar. Sem ele, input não renderiza.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">disabled</td>
                <td className="py-2 pr-4 font-mono text-xs">boolean</td>
                <td className="py-2 pr-4">false</td>
                <td className="py-2">Desabilita o input (chat encerrado)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">placeholder</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4">&quot;Envie uma mensagem...&quot;</td>
                <td className="py-2">Placeholder do input</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4 font-mono text-xs text-foreground">title</td>
                <td className="py-2 pr-4 font-mono text-xs">string</td>
                <td className="py-2 pr-4">&quot;Chat&quot;</td>
                <td className="py-2">Título do header</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Install */}
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Como instalar
        </h2>
        <div className="bg-muted border border-border rounded-lg p-4 flex flex-col gap-2">
          <code className="text-sm text-foreground">
            npx shadcn@latest add &quot;https://cycle-design.vercel.app/r/chat-bubble.json&quot;
          </code>
          <code className="text-sm text-foreground">
            npx shadcn@latest add &quot;https://cycle-design.vercel.app/r/chat-panel.json&quot;
          </code>
        </div>
      </section>
    </div>
  )
}
