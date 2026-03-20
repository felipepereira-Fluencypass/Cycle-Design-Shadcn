"use client"

import * as React from "react"
import { VideoPlayer } from "@/components/ui/video-player"
import { LiveWaiting } from "@/components/ui/live-waiting"
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
          language="bash"
          showLineNumbers={false}
          code={`npm install @vidstack/react`}
        />
        <p className="text-sm text-muted-foreground">
          Depois copie <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">video-player.tsx</code> para <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">src/components/ui/</code>.
        </p>
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { VideoPlayer } from "@/components/ui/video-player"`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Exemplos */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Basico */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Basico</h3>
        {/* Full-width on mobile for better testing */}
        <div className="-mx-4 sm:mx-0">
          <VideoPlayer
            src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
            poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp"
            posterAlt="Exemplo de video"
            className="sm:rounded-[16px] rounded-none"
          />
        </div>
        <ComponentPreview
          code={`<VideoPlayer
  src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
  poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp"
  posterAlt="Exemplo de video"
/>`}
        >
          <span />
        </ComponentPreview>
      </section>

      {/* Com Thumbnails */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com Thumbnails</h3>
        <p className="text-muted-foreground">
          Passe um arquivo <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.vtt</code> com sprite sheet para exibir thumbnails na seek bar durante o hover. Igual ao YouTube.
        </p>
        <ComponentPreview
          code={`<VideoPlayer
  src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
  poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp"
  thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
/>`}
        >
          <VideoPlayer
            src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
            poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp"
            thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
          />
        </ComponentPreview>
      </section>

      {/* HLS */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">HLS Streaming (com seletor de qualidade)</h3>
        <p className="text-muted-foreground">
          Com HLS (<code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.m3u8</code>), o player carrega <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">hls.js</code> automaticamente e exibe o botao de qualidade (engrenagem) quando multiplas resolucoes estao disponiveis.
        </p>
        <ComponentPreview
          code={`<VideoPlayer
  src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU.m3u8"
  poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp"
  posterAlt="HLS com seletor de qualidade"
  thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
/>`}
        >
          <VideoPlayer
            src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU.m3u8"
            poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp"
            posterAlt="HLS com seletor de qualidade"
            thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
          />
        </ComponentPreview>
      </section>

      {/* Chapters */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Chapters (marcadores de secao)</h3>
        <p className="text-muted-foreground">
          Passe um arquivo <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">.vtt</code> com marcadores de capitulos. A seek bar sera dividida em segmentos,
          e o nome do capitulo aparece no preview ao navegar. Ideal para aulas longas divididas em topicos.
        </p>
        <CodeBlock
          code={`<VideoPlayer
  src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU.m3u8"
  poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp"
  thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt"
  chapters="/chapters-example.vtt"
/>`}
          language="tsx"
          showLineNumbers={false}
        />
        <CodeBlock
          code={`WEBVTT

00:00:00.000 --> 00:02:30.000
Introduction

00:02:30.000 --> 00:08:00.000
Vocabulary: Idioms

00:08:00.000 --> 00:12:00.000
Practice & Review`}
          language="text"
          showLineNumbers={false}
        />
        <p className="text-sm text-muted-foreground">
          O formato VTT de chapters usa <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">kind=&quot;chapters&quot;</code>. Cada cue define um intervalo de tempo e o titulo da secao.
          No mobile, os chapters tambem funcionam nativamente via <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">DefaultVideoLayout</code> do Vidstack.
        </p>
      </section>

      {/* Buffering */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Buffering Spinner</h3>
        <p className="text-muted-foreground">
          Indicador de loading exibido durante buffering. Ligado por padrao (<code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">showBuffering=true</code>).
          Aparece automaticamente quando o video esta carregando ou bufferizando.
        </p>
        <CodeBlock
          code={`// Ligado por padrao
<VideoPlayer src="..." />

// Para desligar:
<VideoPlayer src="..." showBuffering={false} />`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Announcer */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Screen Reader Announcer</h3>
        <p className="text-muted-foreground">
          Componente invisivel que anuncia mudancas de estado para screen readers (play, pause, mute, seek, etc.).
          Ligado por padrao (<code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">announcer=true</code>). Ajuda na conformidade com WCAG 2.1 AA.
        </p>
        <CodeBlock
          code={`// Ligado por padrao (recomendado)
<VideoPlayer src="..." />

// Para desligar:
<VideoPlayer src="..." announcer={false} />`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Tooltips */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Tooltips nos controles</h3>
        <p className="text-muted-foreground">
          No desktop, todos os botoes da barra de controles exibem tooltips ao hover com o nome da acao
          (Reproduzir, Pausar, Retroceder 10s, Avançar 10s, Silenciar, Ativar som, Legendas, Velocidade, Qualidade, PiP, Tela cheia).
          Os tooltips nao aparecem no mobile (sem hover).
        </p>
        <CodeBlock
          code={`// Tooltips estao sempre ativos no desktop.
// Nenhuma configuracao necessaria.
<VideoPlayer src="..." />`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Live Indicator */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Live Indicator</h3>
        <p className="text-muted-foreground">
          Para streams ao vivo (HLS live), o player exibe automaticamente um indicador <strong>LIVE</strong> na barra de controles.
          Quando o usuario esta no &quot;live edge&quot; (ponto mais recente), o indicador fica vermelho com pulso animado.
          Se o usuario navegar para tras no timeline, o indicador fica cinza — clicar nele volta ao live edge.
        </p>
        <CodeBlock
          code={`// Detectado automaticamente para streams HLS live.
// Nenhuma configuracao necessaria.
<VideoPlayer src="https://example.com/live-stream.m3u8" />`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Live Waiting */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Live Waiting</h3>
        <p className="text-muted-foreground">
          Tela de espera para aulas ao vivo com countdown em tempo real, informacoes do professor e topico.
          Componente reutilizavel — funciona sozinho ou integrado ao <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">LiveContent</code>.
        </p>
        <div className="border border-border rounded-2xl overflow-hidden bg-background">
          <LiveWaiting
            scheduledAt={(() => { const d = new Date(); d.setHours(d.getHours() + 2); d.setMinutes(30); d.setSeconds(0); return d })()}
            teacherName="Ana Oliveira"
            topic="Conversação: Viagens e Turismo"
          />
        </div>
        <CodeBlock
          code={`<LiveWaiting
  scheduledAt={new Date("2026-03-20T16:30:00")}
  teacherName="Ana Oliveira"
  teacherAvatar="https://example.com/avatar.jpg"
  topic="Conversação: Viagens e Turismo"
/>`}
          language="tsx"
          showLineNumbers
        />
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
                <td className="p-3 font-mono text-xs">scheduledAt</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">Date</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Data/hora agendada (countdown atualiza a cada segundo)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">teacherName</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Nome do professor</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">teacherAvatar</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">URL do avatar do professor</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">topic</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Topico/assunto da aula</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* API */}
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
                <td className="p-3 font-mono text-xs">src</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">URL do video (.mp4, .webm, .m3u8)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">poster</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">URL da imagem de poster</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">posterAlt</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">&quot;&quot;</td>
                <td className="p-3 text-muted-foreground">Alt text do poster</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">thumbnails</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">URL do arquivo VTT de thumbnails (sprite sheet)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">chapters</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">URL do arquivo VTT de chapters. Divide a seek bar em segmentos com titulos.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">showBuffering</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">true</td>
                <td className="p-3 text-muted-foreground">Exibir spinner durante buffering</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">announcer</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">true</td>
                <td className="p-3 text-muted-foreground">Habilitar anuncios de acessibilidade para screen readers (WCAG 2.1 AA)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">autoPlay</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Iniciar automaticamente</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">muted</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Iniciar mutado</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">loop</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Repetir ao terminar</td>
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

      {/* Controles */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Controles Incluidos</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Play/Pause</strong> — botao na barra + overlay central quando pausado/hover
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Seek -10s / +10s</strong> — botoes de retroceder e avancar 10 segundos
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Seek bar</strong> — arraste para navegar, com preview de thumbnails (opcional)
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Volume</strong> — mute + slider de volume
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Tempo</strong> — current / duration
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Legendas</strong> — toggle de legendas/captions (quando disponivel)
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Velocidade</strong> — menu com 7 opcoes (0.5x a 2x)
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Qualidade</strong> — seletor de resolucao (auto, 1080p, 720p, etc.) — aparece apenas com HLS
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Picture-in-Picture</strong> — modo janela flutuante
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Fullscreen</strong> — tela cheia
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Gestos</strong> — clique para play/pause, duplo clique para fullscreen, duplo clique nas laterais para seek ±10s
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Seek feedback</strong> — indicador visual (icone + &quot;10s&quot;) ao fazer duplo clique nas laterais (mobile e desktop)
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Chapters</strong> — marcadores de secao no timeline (opcional, requer VTT)
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Buffering spinner</strong> — indicador visual durante loading/buffering (ligado por padrao)
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Screen reader announcer</strong> — acessibilidade WCAG 2.1 AA (ligado por padrao)
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Tooltips</strong> — todos os botoes de controle exibem tooltip ao hover no desktop
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Live indicator</strong> — indicador LIVE automatico para streams ao vivo (vermelho no edge, cinza fora)
          </p>
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
        <SpecTable
          headers={["Camada", "Descricao"]}
          rows={[
            ["Video", "Area principal do video, aspect-ratio 16:9"],
            ["Poster", "Imagem exibida antes do play"],
            ["Play overlay", "Botao central de play (visivel quando pausado ou hover)"],
            ["Seek feedback", "Indicador visual nas laterais ao fazer duplo clique/tap (icone + 10s)"],
            ["Captions overlay", "Legendas renderizadas sobre o video"],
            ["Controls overlay", "Gradiente escuro na parte inferior com controles"],
            ["Seek bar", "Barra de progresso com preview de thumbnails"],
            ["Bottom bar (esquerda)", "Play, Seek -10s, Seek +10s, Volume, Tempo, Live (se live)"],
            ["Bottom bar (direita)", "Legendas, Velocidade, Qualidade, PiP, Fullscreen"],
            ["Tooltips (desktop)", "Cada botao exibe tooltip ao hover com nome da acao"],
          ]}
        />
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Aspect ratio", "16:9"],
            ["Border radius", "16px (rounded-[16px])"],
            ["Background", "black"],
            ["Cor dos controles", "white"],
            ["Play overlay", "Circulo 64px, bg-white/20, backdrop-blur-sm"],
            ["Overlay gradiente", "from-black/60 via-transparent to-transparent"],
            ["Icones (controles)", "24px (icon sm / stroke 1.5)"],
            ["Icone play overlay", "40px (icon lg / stroke 2.1)"],
            ["Botao tamanho", "36px (size-9)"],
            ["Botao hover", "bg-white/20"],
            ["Seek bar track", "4px altura, bg-white/30"],
            ["Seek bar fill", "white"],
            ["Seek bar buffer", "white/50"],
            ["Seek bar thumb", "12px, aparece no hover/drag"],
            ["Thumbnail preview", "min 120px, max 200px, rounded-md, border 2px white"],
            ["Volume slider", "80px largura"],
            ["Tempo (font)", "mono, text-xs, white/80"],
            ["Menu velocidade", "bg-black/90, backdrop-blur-md, rounded-lg, min-w 120px"],
            ["Menu qualidade", "bg-black/90, backdrop-blur-md, rounded-lg, min-w 140px, titulo uppercase"],
            ["Captions", "bg-black/70, text-sm, text-white"],
            ["Seek feedback area", "40% largura, centralizado na lateral"],
            ["Seek feedback icone", "Circulo 48px, bg-white/20, backdrop-blur-sm, icone sm (24px)"],
            ["Seek feedback texto", "text-xs, font-semibold, white, drop-shadow"],
            ["Seek feedback duracao", "700ms visivel, fade in/out 200ms, scale 75%→100%"],
            ["Tooltip", "bg-black/90, rounded, px-2 py-1, text-xs font-medium white, placement top"],
            ["Live indicator (edge)", "text-red-500, dot 8px bg-red-500 animate-pulse"],
            ["Live indicator (fora)", "text-white/60, dot 8px bg-white/40, hover text-white"],
          ]}
        />
      </section>

      {/* Layout dos controles */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Layout dos Controles</h2>
        <SpecTable
          headers={["Posicao", "Controles"]}
          rows={[
            ["Centro (overlay)", "Botao de Play grande (quando pausado ou hover)"],
            ["Barra inferior (esquerda)", "Play/Pause, Seek -10s, Seek +10s, Mute, Volume slider, Tempo"],
            ["Barra inferior (direita)", "Legendas, Velocidade, Qualidade, Picture-in-Picture, Fullscreen"],
            ["Acima da barra", "Seek bar (largura total)"],
          ]}
        />
      </section>

      {/* Comportamento */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Comportamento</h2>
        <SpecTable
          headers={["Interacao", "Resultado"]}
          rows={[
            ["Clique no video", "Play / Pause"],
            ["Duplo clique", "Toggle fullscreen"],
            ["Duplo clique (esquerda 20%)", "Seek -10 segundos + feedback visual (icone RotateCcw + 10s)"],
            ["Duplo clique (direita 20%)", "Seek +10 segundos + feedback visual (icone RotateCw + 10s)"],
            ["Hover no player", "Controles aparecem (fade in) + overlay de play"],
            ["Mouse sai do player", "Controles somem (fade out)"],
            ["Video pausado", "Controles sempre visiveis + overlay de play"],
            ["Hover na seek bar", "Thumbnail preview aparece (se configurado)"],
            ["Clique em Velocidade", "Menu popup com 7 opcoes (0.5x a 2x)"],
            ["Clique em Qualidade", "Menu popup com resolucoes disponiveis (Auto, 1080p, 720p, etc.)"],
            ["Clique em PiP", "Video entra em modo picture-in-picture"],
            ["Clique em Legendas", "Toggle legendas on/off"],
          ]}
        />
      </section>

      {/* Estados */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <SpecTable
          headers={["Estado", "Visual"]}
          rows={[
            ["Idle (nao iniciado)", "Poster visivel, overlay de play centralizado"],
            ["Playing", "Video rodando, controles ocultos (aparecem no hover)"],
            ["Paused", "Video parado, controles visiveis, overlay de play visivel"],
            ["Buffering", "Spinner SVG animado centralizado (size 64px, branco)"],
            ["Fullscreen", "Ocupa tela inteira, mesmos controles"],
            ["Picture-in-Picture", "Janela flutuante do browser"],
            ["Muted", "Icone de volume troca para VolumeX"],
            ["Captions on", "Legendas visiveis sobre o video"],
            ["Velocidade != 1x", "Icone troca para valor numerico (ex: 1.5x)"],
            ["Qualidade selecionada", "Check ao lado da opcao ativa no menu"],
          ]}
        />
      </section>

      {/* Notas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Controles sao sempre brancos sobre fundo escuro — nao mudam com o tema light/dark.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O <strong>border-radius</strong> do container e fixo em <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">16px</code>.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Suporta HLS automaticamente — ideal para streaming adaptativo de aulas.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Os icones usam <strong>CycleIcon</strong> com tamanho <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">sm</code> (24px, stroke 1.5) na barra e <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">lg</code> (40px, stroke 2.1) no overlay central.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Thumbnails</strong> sao opcionais — requerem um arquivo VTT com sprite sheet gerado pelo servico de video (ex: Mux).
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O botao de <strong>Legendas</strong> fica desabilitado (opacity 50%) quando nao ha tracks de legenda carregados.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O botao de <strong>Qualidade</strong> so aparece quando o video tem multiplas resolucoes (HLS). Em MP4 simples ele fica oculto.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Os menus de <strong>Velocidade</strong> e <strong>Qualidade</strong> usam backdrop-blur para integrar com o video de fundo.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function VideoPlayerPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Video Player</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Player de video com controles customizados do Design System. Suporta MP4, WebM e HLS.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
