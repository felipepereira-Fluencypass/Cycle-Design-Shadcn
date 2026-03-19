"use client"

import { FileCard } from "@/components/ui/file-card"
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
          code={`npx shadcn@latest add file-card -r https://cycle-design.vercel.app/r`}
          language="bash"
          showLineNumbers={false}
        />
      </section>

      {/* Usage */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Uso</h2>
        <CodeBlock
          code={`import { FileCard } from "@/components/ui/file-card"`}
          language="tsx"
          showLineNumbers={false}
        />
        <ComponentPreview
          code={`import { FileCard } from "@/components/ui/file-card"

export function FileCardDemo() {
  return (
    <FileCard
      title="Contrato de Matricula"
      fileType="PDF"
      fileSize="180 KB"
      href="/files/contrato.pdf"
    />
  )
}`}
        >
          <FileCard
            title="Contrato de Matricula"
            fileType="PDF"
            fileSize="180 KB"
          />
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
          Use a prop <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">size</code> para alterar o tamanho.
        </p>
        <ComponentPreview
          code={`<div className="flex flex-col gap-4 max-w-[280px]">
  <FileCard title="Pequeno" fileType="PDF" fileSize="180 KB" size="sm" />
  <FileCard title="Medio" fileType="PDF" fileSize="180 KB" size="md" />
  <FileCard title="Grande" fileType="PDF" fileSize="180 KB" size="lg" />
</div>`}
        >
          <div className="flex flex-col gap-4 max-w-[280px]">
            <FileCard title="Pequeno" fileType="PDF" fileSize="180 KB" size="sm" />
            <FileCard title="Medio" fileType="PDF" fileSize="180 KB" size="md" />
            <FileCard title="Grande" fileType="PDF" fileSize="180 KB" size="lg" />
          </div>
        </ComponentPreview>
      </section>

      {/* Without icon */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Sem icone</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">icon=false</code> para ocultar o icone de arquivo.
        </p>
        <ComponentPreview
          code={`<FileCard title="Sem icone" fileType="PDF" fileSize="180 KB" icon={false} />`}
        >
          <div className="max-w-[280px]">
            <FileCard title="Sem icone" fileType="PDF" fileSize="180 KB" icon={false} />
          </div>
        </ComponentPreview>
      </section>

      {/* Without description */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Sem descricao</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">showDescription=false</code> para ocultar toda a linha de tipo e tamanho.
        </p>
        <ComponentPreview
          code={`<FileCard title="Apenas titulo" showDescription={false} />`}
        >
          <div className="max-w-[280px]">
            <FileCard title="Apenas titulo" showDescription={false} />
          </div>
        </ComponentPreview>
      </section>

      {/* Without file size */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Sem tamanho do arquivo</h3>
        <p className="text-muted-foreground">
          Use <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">showFileSize=false</code> para ocultar apenas o peso do arquivo, mantendo o tipo.
        </p>
        <ComponentPreview
          code={`<FileCard title="Certificado" fileType="PDF" fileSize="2.4 MB" showFileSize={false} />`}
        >
          <div className="max-w-[280px]">
            <FileCard title="Certificado" fileType="PDF" fileSize="2.4 MB" showFileSize={false} />
          </div>
        </ComponentPreview>
      </section>

      {/* Disabled */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Disabled</h3>
        <ComponentPreview
          code={`<FileCard title="Indisponivel" fileType="PDF" fileSize="180 KB" disabled />`}
        >
          <div className="max-w-[280px]">
            <FileCard title="Indisponivel" fileType="PDF" fileSize="180 KB" disabled />
          </div>
        </ComponentPreview>
      </section>

      {/* As download link */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold">Como link de download</h3>
        <p className="text-muted-foreground">
          Passe <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">href</code> para renderizar como <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">&lt;a download&gt;</code>.
        </p>
        <ComponentPreview
          code={`<FileCard
  title="Contrato"
  fileType="PDF"
  fileSize="180 KB"
  href="/files/contrato.pdf"
/>`}
        >
          <div className="max-w-[280px]">
            <FileCard title="Contrato" fileType="PDF" fileSize="180 KB" href="#" />
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
                <td className="p-3 font-mono text-xs">title</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Nome do arquivo (obrigatorio)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">fileType</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Tipo do arquivo (PDF, DOCX, PNG, etc.)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">fileSize</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">Peso do arquivo (180 KB, 2.4 MB, etc.)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">href</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">string</td>
                <td className="p-3 font-mono text-xs">—</td>
                <td className="p-3 text-muted-foreground">URL de download. Renderiza como &lt;a download&gt;</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">size</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">&quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;</td>
                <td className="p-3 font-mono text-xs">&quot;lg&quot;</td>
                <td className="p-3 text-muted-foreground">Tamanho do card</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">icon</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">true</td>
                <td className="p-3 text-muted-foreground">Exibir icone de arquivo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">showDescription</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">true</td>
                <td className="p-3 text-muted-foreground">Exibir linha de tipo + tamanho</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">showFileSize</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">true</td>
                <td className="p-3 text-muted-foreground">Exibir peso do arquivo</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 font-mono text-xs">disabled</td>
                <td className="p-3 font-mono text-xs text-muted-foreground">boolean</td>
                <td className="p-3 font-mono text-xs">false</td>
                <td className="p-3 text-muted-foreground">Desabilitar interacao</td>
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
      {/* Structure */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estrutura</h2>
        <p className="text-muted-foreground">
          O File Card e um botao estilizado para download de documentos. Renderiza como <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">&lt;button&gt;</code> por padrao, ou <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">&lt;a download&gt;</code> quando recebe <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">href</code>.
        </p>
        <SpecTable
          headers={["Camada", "Elemento", "Descricao"]}
          rows={[
            ["Container", "button / a", "Card clicavel com borda e fundo"],
            ["Icone", "FileText (Lucide)", "Icone de arquivo a esquerda (opcional)"],
            ["Titulo", "span", "Nome do arquivo, font-medium, truncate"],
            ["Descricao", "span", "Tipo do arquivo + bullet + tamanho (opcional)"],
          ]}
        />
      </section>

      {/* Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Tamanhos</h2>
        <SpecTable
          headers={["Size", "Radius", "Padding", "Font titulo", "Icone"]}
          rows={[
            ["sm", "rounded-lg (8px)", "px-3 py-4 (12px 16px)", "12px (text-xs)", "16px (size-4)"],
            ["md", "rounded-xl (12px)", "px-4 py-6 (16px 24px)", "14px (text-sm)", "24px (size-6)"],
            ["lg", "rounded-2xl (16px)", "px-6 py-8 (24px 32px)", "14px (text-sm)", "24px (size-6)"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-4 max-w-[280px]">
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">sm</span>
              <FileCard title="Documento" fileType="PDF" fileSize="180 KB" size="sm" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">md</span>
              <FileCard title="Documento" fileType="PDF" fileSize="180 KB" size="md" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-muted-foreground">lg</span>
              <FileCard title="Documento" fileType="PDF" fileSize="180 KB" size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Configurability */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Configuracao</h2>
        <p className="text-muted-foreground">
          Elementos internos podem ser ocultados individualmente.
        </p>
        <SpecTable
          headers={["Configuracao", "Prop", "Resultado"]}
          rows={[
            ["Completo", "(padrao)", "Icone + Titulo + Tipo + Tamanho"],
            ["Sem icone", "icon={false}", "Titulo + Tipo + Tamanho"],
            ["Sem descricao", "showDescription={false}", "Icone + Titulo"],
            ["Sem tamanho", "showFileSize={false}", "Icone + Titulo + Tipo (sem peso)"],
          ]}
        />
        <div className="rounded-lg border border-border p-8 bg-background">
          <div className="flex flex-col gap-4 max-w-[280px]">
            <FileCard title="Completo" fileType="PDF" fileSize="180 KB" size="md" />
            <FileCard title="Sem icone" fileType="PDF" fileSize="180 KB" size="md" icon={false} />
            <FileCard title="Sem descricao" size="md" showDescription={false} />
            <FileCard title="Sem tamanho" fileType="PDF" size="md" showFileSize={false} />
          </div>
        </div>
      </section>

      {/* States */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Estados</h2>
        <SpecTable
          headers={["Estado", "Visual", "Observacao"]}
          rows={[
            ["Default", "bg-secondary, border-border", "Estado normal"],
            ["Hover", "bg-accent", "Feedback ao passar o mouse"],
            ["Pressed", "scale(0.98)", "Feedback ao clicar (active)"],
            ["Focus", "Ring 3px, ring/50", "Acessibilidade — nao remover"],
            ["Disabled", "opacity-50, pointer-events-none", "Interacao bloqueada"],
          ]}
        />
      </section>

      {/* Specs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Especificacoes</h2>
        <SpecTable
          headers={["Propriedade", "Valor"]}
          rows={[
            ["Gap entre icone e texto", "12px (gap-3)"],
            ["Gap entre titulo e descricao", "4px (gap-1)"],
            ["Gap entre tipo e tamanho", "8px (gap-2)"],
            ["Separador", "Bullet (•)"],
            ["Cor do titulo", "text-foreground"],
            ["Cor da descricao", "#a1a1a1"],
            ["Cor do icone", "text-muted-foreground"],
            ["Fundo default", "bg-secondary (#FAFAFA)"],
            ["Fundo hover", "bg-accent (#F5F5F5)"],
            ["Borda", "1px solid border-border"],
            ["Titulo", "truncate (corta com ...)"],
          ]}
        />
      </section>

      {/* Notes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Notas</h2>
        <div className="rounded-lg border border-border p-4 space-y-2">
          {[
            "O componente e um botao por padrao. Com href, renderiza como <a download>.",
            "O titulo usa truncate — nomes longos sao cortados com reticencias.",
            "O icone e sempre FileText do Lucide. Para tipos especificos, customize via className ou crie uma variacao.",
            "A descricao segue o formato: Tipo • Tamanho (ex: PDF • 180 KB).",
            "O estado pressed usa scale(0.98) com transition-all — mesmo padrao dos botoes.",
            "Largura e 100% do container pai. Use max-w ou w-[240px] para limitar.",
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
export default function FileCardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">File Card</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Botao de download de documentos com icone, titulo, tipo de arquivo e tamanho.
        </p>
      </div>

      <DocsTabs
        developerContent={<DeveloperDocs />}
        designerContent={<DesignerDocs />}
      />
    </div>
  )
}
