"use client"

import { AudioPlayer } from "@/components/ui/audio-player"
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
          Depois copie <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">audio-player.tsx</code> para <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">src/components/ui/</code>.
        </p>
      </section>

      {/* Uso */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { AudioPlayer } from "@/components/ui/audio-player"`}
          language="tsx"
          showLineNumbers={false}
        />
      </section>

      {/* Exemplos */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Exemplos</h2>
      </div>

      {/* Default (compact bar) */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Default (barra compacta)</h3>
        <ComponentPreview
          code={`<AudioPlayer
  src="https://cdn.freesound.org/previews/612/612095_5674468-lq.mp3"
  title="Lesson 1 - Introduction"
/>`}
        >
          <AudioPlayer
            src="https://cdn.freesound.org/previews/612/612095_5674468-lq.mp3"
            title="Lesson 1 - Introduction"
          />
        </ComponentPreview>
      </section>

      {/* Card variant */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Card</h3>
        <p className="text-muted-foreground">
          Variante com capa, titulo e subtitulo — ideal para paginas de aula ou podcast.
        </p>
        <ComponentPreview
          code={`<AudioPlayer
  src="https://cdn.freesound.org/previews/612/612095_5674468-lq.mp3"
  title="Podcast: English for Business"
  subtitle="Fluencypass Academy"
  coverArt="https://picsum.photos/seed/podcast/128/128"
  coverArtAlt="Capa do podcast"
  variant="card"
/>`}
        >
          <div className="max-w-lg w-full">
            <AudioPlayer
              src="https://cdn.freesound.org/previews/612/612095_5674468-lq.mp3"
              title="Podcast: English for Business"
              subtitle="Fluencypass Academy"
              coverArt="https://picsum.photos/seed/podcast/128/128"
              coverArtAlt="Capa do podcast"
              variant="card"
            />
          </div>
        </ComponentPreview>
      </section>

      {/* Sem controle de velocidade */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Sem controle de velocidade</h3>
        <ComponentPreview
          code={`<AudioPlayer
  src="https://cdn.freesound.org/previews/612/612095_5674468-lq.mp3"
  title="Audio simples"
  showSpeed={false}
/>`}
        >
          <AudioPlayer
            src="https://cdn.freesound.org/previews/612/612095_5674468-lq.mp3"
            title="Audio simples"
            showSpeed={false}
          />
        </ComponentPreview>
      </section>

      {/* Com tema (filled) */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Com tema de cor (filled)</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">filled</code> com <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">className=&quot;theme-brand&quot;</code> para colorir icones, textos e sliders com a cor primary do tema. O fundo permanece neutro.
        </p>
        <ComponentPreview
          code={`<AudioPlayer
  src="https://cdn.freesound.org/previews/612/612095_5674468-lq.mp3"
  title="Lesson com tema brand"
  filled
  className="theme-brand"
/>`}
        >
          <AudioPlayer
            src="https://cdn.freesound.org/previews/612/612095_5674468-lq.mp3"
            title="Lesson com tema brand"
            filled
            className="theme-brand"
          />
        </ComponentPreview>
      </section>

      {/* Card com tema (filled) */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Card com tema (filled)</h3>
        <ComponentPreview
          code={`<AudioPlayer
  src="https://cdn.freesound.org/previews/612/612095_5674468-lq.mp3"
  title="Podcast: English for Business"
  subtitle="Fluencypass Academy"
  coverArt="https://picsum.photos/seed/podcast/128/128"
  variant="card"
  filled
  className="theme-brand"
/>`}
        >
          <div className="max-w-lg w-full">
            <AudioPlayer
              src="https://cdn.freesound.org/previews/612/612095_5674468-lq.mp3"
              title="Podcast: English for Business"
              subtitle="Fluencypass Academy"
              coverArt="https://picsum.photos/seed/podcast/128/128"
              variant="card"
              filled
              className="theme-brand"
            />
          </div>
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
                <td className="p-3 text-muted-foreground">URL do audio (.mp3, .ogg, .m3u8)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">title</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Nome da track/aula</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">subtitle</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Subtitulo / nome do curso</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">coverArt</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">URL da imagem de capa (variante card)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">coverArtAlt</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">&quot;&quot;</td>
                <td className="p-3 text-muted-foreground">Alt text da imagem de capa</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">variant</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;default&quot; | &quot;card&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;default&quot;</td>
                <td className="p-3 text-muted-foreground">Variante de layout</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">filled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Colore icones, textos e sliders com a cor primary do tema (usar com .theme-*)</td>
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
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">showSpeed</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">true</td>
                <td className="p-3 text-muted-foreground">Exibir controle de velocidade</td>
              </tr>
              <tr>
                <td className="p-3 font-mono text-xs">className</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Classes CSS adicionais (ex: theme-brand)</td>
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
            <strong>Play/Pause</strong> — toggle de reproducao
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Seek -10s / +10s</strong> — botoes de retroceder e avancar 10 segundos
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Seek bar</strong> — arraste para navegar, com preview de tempo no hover
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Volume</strong> — mute + slider de volume (oculto no mobile)
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Tempo</strong> — current / duration (variante default) ou split (variante card)
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            <strong>Velocidade</strong> — menu com 7 opcoes (0.5x a 2x), habilitado por padrao
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
      {/* Variantes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Variantes</h2>
        <SpecTable
          headers={["Variante", "Uso", "Altura aprox."]}
          rows={[
            ["default", "Barra compacta inline — dentro de conteudo de curso", "~56px"],
            ["card", "Card standalone — pagina de aula, podcast, listening", "~180px (sem capa) / ~196px (com capa)"],
          ]}
        />
      </section>

      {/* Estrutura default */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estrutura — Default</h2>
        <SpecTable
          headers={["Elemento", "Descricao"]}
          rows={[
            ["Container", "Barra horizontal com border, bg-card, rounded-xl"],
            ["Esquerda", "Seek -10s, Play/Pause, Seek +10s"],
            ["Centro", "Seek bar (largura flexivel)"],
            ["Direita (tempo)", "00:00 / 00:00"],
            ["Direita (controles)", "Velocidade, Mute, Volume slider"],
          ]}
        />
      </section>

      {/* Estrutura card */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estrutura — Card</h2>
        <SpecTable
          headers={["Elemento", "Descricao"]}
          rows={[
            ["Container", "Card com border, bg-card, rounded-xl, padding 16px"],
            ["Topo", "Cover art (64x64, rounded-lg) + titulo + subtitulo"],
            ["Meio", "Seek bar (largura total) + tempo split (current / duration)"],
            ["Rodape", "Seek -10s, Play/Pause, Seek +10s ... Velocidade, Mute, Volume"],
          ]}
        />
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Border radius (container)", "12px (rounded-xl)"],
            ["Background", "bg-card (token semantico)"],
            ["Border", "border-border (token semantico)"],
            ["Cor dos controles", "text-foreground"],
            ["Icones (controles)", "24px (icon sm / stroke 1.5)"],
            ["Botao tamanho", "36px (size-9)"],
            ["Botao hover", "bg-accent"],
            ["Seek bar track", "4px altura, bg-accent"],
            ["Seek bar fill", "bg-primary (respeita .theme-*)"],
            ["Seek bar buffer", "bg-accent-foreground/20"],
            ["Seek bar thumb", "12px, bg-primary, aparece no hover/drag"],
            ["Volume slider", "80px largura, hidden no mobile"],
            ["Volume fill", "bg-primary (respeita .theme-*)"],
            ["Tempo (font)", "mono, text-xs, text-muted-foreground"],
            ["Menu velocidade", "bg-popover, border-border, shadow-lg, rounded-lg, min-w 120px"],
            ["Cover art (card)", "64x64px, rounded-lg, object-cover"],
            ["Titulo (card)", "text-sm, font-semibold, text-card-foreground, truncate"],
            ["Subtitulo (card)", "text-xs, text-muted-foreground, truncate"],
          ]}
        />
      </section>

      {/* Comportamento */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Comportamento</h2>
        <SpecTable
          headers={["Interacao", "Resultado"]}
          rows={[
            ["Clique Play/Pause", "Toggle reproducao"],
            ["Clique Seek -10s", "Retrocede 10 segundos"],
            ["Clique Seek +10s", "Avanca 10 segundos"],
            ["Arraste seek bar", "Navega para posicao"],
            ["Hover na seek bar", "Preview de tempo aparece"],
            ["Clique Mute", "Toggle mudo"],
            ["Arraste volume", "Ajusta volume"],
            ["Clique Velocidade", "Menu popup com 7 opcoes"],
          ]}
        />
      </section>

      {/* Responsividade */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Responsividade</h2>
        <SpecTable
          headers={["Breakpoint", "Mudanca"]}
          rows={[
            ["< 640px (sm)", "Volume slider oculto — apenas botao mute"],
            [">= 640px", "Volume slider visivel (80px)"],
          ]}
        />
      </section>

      {/* Temas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Temas de cor</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Suporta classes <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">.theme-*</code> via <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">className</code>.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            A cor do tema e aplicada na <strong>seek bar fill</strong>, <strong>seek bar thumb</strong>, <strong>volume fill</strong> e <strong>volume thumb</strong> (todos usam <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">bg-primary</code>).
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Botoes e textos permanecem neutros (<code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">text-foreground</code>, <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">text-muted-foreground</code>).
          </p>
        </div>
      </section>

      {/* Notas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Usa o mesmo engine do VideoPlayer (<strong>Vidstack</strong>) — zero dependencias extras.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Diferente do VideoPlayer (dark overlay), o AudioPlayer usa <strong>fundo claro</strong> com tokens semanticos — adapta-se ao tema light/dark automaticamente.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            O controle de velocidade e habilitado por padrao (contexto EdTech). Use <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">showSpeed=false</code> para ocultar.
          </p>
          <p className="text-sm text-muted-foreground flex gap-2">
            <span className="text-foreground shrink-0">•</span>
            Suporta HLS automaticamente — basta passar uma URL <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">.m3u8</code>.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================
 * PAGE
 * ============================================ */
export default function AudioPlayerPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Audio Player</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Player de audio com controles customizados. 2 variantes (default, card). Suporta MP3, OGG e HLS.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
