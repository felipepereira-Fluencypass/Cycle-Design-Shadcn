"use client"

import { VideoPlayer } from "@/components/ui/video-player"
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
        <ComponentPreview
          code={`<VideoPlayer
  src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
  poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp"
  posterAlt="Exemplo de video"
/>`}
        >
          <VideoPlayer
            src="https://stream.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/low.mp4"
            poster="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/thumbnail.webp"
            posterAlt="Exemplo de video"
          />
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
            <strong>Seek feedback</strong> — indicador visual (icone + &quot;10s&quot;) ao fazer duplo clique nas laterais
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
            ["Bottom bar (esquerda)", "Play, Seek -10s, Seek +10s, Volume, Tempo"],
            ["Bottom bar (direita)", "Legendas, Velocidade, Qualidade, PiP, Fullscreen"],
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
            ["Buffering", "Loading indicator (nativo do browser)"],
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
