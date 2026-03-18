import { CodeBlock } from "@/components/docs/code-block"
import { SpecTable } from "@/components/docs/spec-table"
import { DownloadButton } from "@/components/docs/download-button"
import { Download, PackageOpen } from "lucide-react"
import { CycleIcon } from "@/components/icons"

export default function DocsPage() {
  return (
    <div className="space-y-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Setup Guide</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Guia completo para instalar o Cycle Design no seu projeto, do zero.
        </p>
      </div>

      {/* O que e o Design System */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">O que e isso?</h2>
        <p className="text-sm text-muted-foreground">
          O Cycle Design e uma colecao de componentes prontos (botoes, inputs, cards, etc.) que seguem o visual da Fluencypass. Em vez de criar cada elemento do zero, voce instala e usa os nossos componentes — assim todo produto da Fluencypass fica com a mesma cara.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-border p-4">
            <p className="text-sm font-medium">Para Devs</p>
            <p className="text-xs text-muted-foreground mt-1">
              Componentes prontos com variantes, tamanhos e cores. So importar e usar.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="text-sm font-medium">Para Designers</p>
            <p className="text-xs text-muted-foreground mt-1">
              Specs exatos (px, cores, radius) para replicar no Figma com fidelidade.
            </p>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="text-sm font-medium">Para IAs</p>
            <p className="text-xs text-muted-foreground mt-1">
              Um arquivo CLAUDE.md que ensina a IA a usar apenas componentes do DS.
            </p>
          </div>
        </div>
      </section>

      {/* Atalho: Starter Project */}
      <section className="space-y-4">
        <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CycleIcon icon={PackageOpen} size="sm" decorative />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Quer ir direto ao ponto?</h2>
              <p className="text-sm text-muted-foreground">
                Baixe o projeto inicial ja configurado. So precisa rodar <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">npm install</code> e comecar a usar.
              </p>
            </div>
          </div>
          <a
            href="/downloads/cycle-starter.zip"
            download="cycle-starter.zip"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <CycleIcon icon={Download} size="xs" decorative />
            Baixar Starter Project (.zip)
          </a>
          <div className="text-xs text-muted-foreground space-y-1">
            <p>O zip inclui: globals.css (tokens), utils.ts, components.json, CLAUDE.md, tsconfig, pastas e layout prontos.</p>
            <p>Depois de extrair, rode:</p>
          </div>
          <CodeBlock
            language="bash"
            showLineNumbers={false}
            code={`cd cycle-starter
npm install
npm run dev`}
          />
        </div>
      </section>

      {/* Divisor */}
      <div className="flex items-center gap-4">
        <div className="flex-1 border-t border-border" />
        <span className="text-sm text-muted-foreground">ou configure manualmente, passo a passo</span>
        <div className="flex-1 border-t border-border" />
      </div>

      {/* Pre-requisitos */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Verifique os pre-requisitos</h2>
        <p className="text-sm text-muted-foreground">
          Antes de comecar, seu projeto precisa ter estas tecnologias instaladas. Se voce ja tem um projeto Next.js rodando, provavelmente ja tem tudo.
        </p>
        <SpecTable
          headers={["O que precisa", "Versao minima", "Como verificar"]}
          rows={[
            ["Next.js", "15 ou superior", "npx next --version"],
            ["React", "19 ou superior", "Abra package.json e procure \"react\""],
            ["Tailwind CSS", "4 ou superior", "Abra package.json e procure \"tailwindcss\""],
            ["TypeScript", "5 ou superior", "npx tsc --version"],
          ]}
        />
        <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm">
          <p className="font-medium">Nao tem um projeto ainda?</p>
          <p className="text-muted-foreground mt-1">
            Crie um novo projeto Next.js com este comando no terminal:
          </p>
          <div className="mt-2">
            <CodeBlock
              code={`npx create-next-app@latest meu-projeto --typescript --tailwind --app`}
              language="bash"
              showLineNumbers={false}
            />
          </div>
        </div>
      </section>

      {/* Instalar dependencias */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2. Instale as dependencias</h2>
        <p className="text-sm text-muted-foreground">
          Estas sao bibliotecas auxiliares que os componentes usam por baixo dos panos. Abra o terminal na pasta do seu projeto e rode:
        </p>
        <CodeBlock
          code={`npm install clsx tailwind-merge class-variance-authority lucide-react`}
          language="bash"
          showLineNumbers={false}
        />
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">O que cada uma faz:</p>
          <ul className="space-y-1.5">
            <li className="flex gap-2">
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground shrink-0">clsx</code>
              Junta classes CSS condicionalmente (ex: aplicar uma classe so quando o botao esta ativo)
            </li>
            <li className="flex gap-2">
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground shrink-0">tailwind-merge</code>
              Resolve conflitos entre classes do Tailwind (ex: evita que duas cores se sobreponham)
            </li>
            <li className="flex gap-2">
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground shrink-0">class-variance-authority</code>
              Cria variantes dos componentes (ex: botao primario, secundario, outline)
            </li>
            <li className="flex gap-2">
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground shrink-0">lucide-react</code>
              Biblioteca de icones (seta, lixeira, check, etc.)
            </li>
          </ul>
        </div>
      </section>

      {/* Criar components.json */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3. Crie o arquivo de configuracao</h2>
        <p className="text-sm text-muted-foreground">
          Crie um arquivo chamado <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">components.json</code> na <strong>raiz do projeto</strong> (ao lado do package.json). Este arquivo diz ao shadcn/ui onde colocar os componentes.
        </p>
        <DownloadButton
          href="/downloads/components.json"
          filename="components.json"
          description="Coloque na raiz do projeto, ao lado do package.json"
        />
        <CodeBlock
          language="json"
          code={`{
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}`}
        />
      </section>

      {/* Copiar tokens */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4. Copie os Design Tokens (cores, fontes, radius)</h2>
        <p className="text-sm text-muted-foreground">
          Os Design Tokens sao as cores, tamanhos e espacamentos da Fluencypass. Baixe o arquivo e substitua o conteudo do seu <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">src/app/globals.css</code>.
        </p>
        <DownloadButton
          href="/downloads/globals.css"
          filename="globals.css"
          description="Substitua o conteudo de src/app/globals.css"
        />
        <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm">
          <p className="text-muted-foreground">
            Voce pode ver todas as cores e tokens visuais na pagina{" "}
            <a href="/docs/tokens" className="text-primary underline underline-offset-4 hover:text-primary/80">
              Tokens
            </a>.
          </p>
        </div>
      </section>

      {/* Criar utils */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5. Crie o utilitario cn()</h2>
        <p className="text-sm text-muted-foreground">
          Esta e uma funcao pequena que todos os componentes usam para juntar classes CSS. Baixe o arquivo ou copie o conteudo para <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">src/lib/utils.ts</code>.
        </p>
        <DownloadButton
          href="/downloads/utils.ts"
          filename="utils.ts"
          description="Coloque em src/lib/utils.ts"
        />
        <CodeBlock
          code={`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
        />
      </section>

      {/* Criar pastas */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6. Crie a estrutura de pastas</h2>
        <p className="text-sm text-muted-foreground">
          Crie estas pastas dentro de <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">src/</code>. E onde os componentes vao morar.
        </p>
        <CodeBlock
          language="bash"
          showLineNumbers={false}
          code={`mkdir -p src/components/ui
mkdir -p src/components/layout
mkdir -p src/components/composites
mkdir -p src/hooks`}
        />
        <div className="space-y-2 text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Para que serve cada pasta:</p>
          <ul className="space-y-1.5">
            <li className="flex gap-2">
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground shrink-0">ui/</code>
              Componentes basicos: Button, Input, Card, Dialog, etc.
            </li>
            <li className="flex gap-2">
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground shrink-0">layout/</code>
              Componentes de layout: Container, Stack, Grid
            </li>
            <li className="flex gap-2">
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground shrink-0">composites/</code>
              Blocos maiores: FormField, PageHeader, DataTable (combinam varios componentes basicos)
            </li>
            <li className="flex gap-2">
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground shrink-0">hooks/</code>
              Logica reutilizavel (ex: controlar abertura de modais, detectar tamanho da tela)
            </li>
          </ul>
        </div>
      </section>

      {/* Instalar componentes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7. Instale os componentes que precisar</h2>
        <p className="text-sm text-muted-foreground">
          Agora e so instalar os componentes que voce precisa. Cada comando copia o componente para a pasta <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">src/components/ui/</code> do seu projeto.
        </p>
        <CodeBlock
          language="bash"
          showLineNumbers={false}
          code={`# Instalar um componente do Cycle Design
npx shadcn@latest add button -r https://cycle-design.vercel.app/r

# Instalar varios de uma vez
npx shadcn@latest add button input card -r https://cycle-design.vercel.app/r

# Ou defina a URL no components.json para nao precisar repetir:
# "registryUrl": "https://cycle-design.vercel.app/r"`}
        />
        <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm space-y-2">
          <p className="font-medium">Ja funciona com as cores da Cycle</p>
          <p className="text-muted-foreground">
            Se voce copiou o globals.css no passo 4, os componentes ja vao usar as cores, fontes e radius da marca automaticamente. Para ver exemplos de uso e variantes de cada componente, acesse a pagina{" "}
            <a href="/docs/components" className="text-primary underline underline-offset-4 hover:text-primary/80">
              Componentes
            </a>.
          </p>
        </div>
      </section>

      {/* Usar um componente */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8. Use no seu codigo</h2>
        <p className="text-sm text-muted-foreground">
          Pronto! Agora e so importar e usar. Veja um exemplo de formulario de login usando componentes do Design System:
        </p>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <h2 className="heading-lg">Login</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Senha" type="password" />
        <Button className="w-full">Entrar</Button>
      </CardContent>
    </Card>
  )
}`}
        />
      </section>

      {/* Configurar IA */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">9. (Opcional) Configure a IA para usar o Design System</h2>
        <p className="text-sm text-muted-foreground">
          Se voce usa IA para gerar codigo (Claude, Cursor, etc.), adicione o arquivo <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">CLAUDE.md</code> na raiz do projeto. Ele ensina a IA quais componentes existem e como usa-los.
        </p>

        <DownloadButton
          href="/downloads/CLAUDE.md"
          filename="CLAUDE.md"
          description="Coloque na raiz do projeto, ao lado do package.json"
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-4">
            <p className="text-sm font-medium text-destructive">Sem CLAUDE.md</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• IA inventa componentes que nao existem</li>
              <li>• Usa cores erradas (hardcoded)</li>
              <li>• Resultado visual inconsistente</li>
            </ul>
          </div>
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-sm font-medium text-primary">Com CLAUDE.md</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>• Usa apenas componentes do Design System</li>
              <li>• Cores e tokens semanticos corretos</li>
              <li>• Se falta um componente, a IA avisa</li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Passo a passo
          </h3>
          <ol className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground text-xs font-medium shrink-0">1</span>
              <span>Baixe o CLAUDE.md acima e coloque na raiz do seu projeto</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground text-xs font-medium shrink-0">2</span>
              <span>Atualize a lista de componentes instalados no arquivo</span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-muted text-foreground text-xs font-medium shrink-0">3</span>
              <span>Para Cursor, copie o conteudo para <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">.cursorrules</code></span>
            </li>
          </ol>
        </div>
      </section>

      {/* Checklist final */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Checklist final</h2>
        <p className="text-sm text-muted-foreground">
          Se voce seguiu todos os passos, seu projeto deve ter:
        </p>
        <div className="rounded-lg border border-border p-4 space-y-2">
          {[
            "Dependencias instaladas (clsx, tailwind-merge, cva, lucide-react)",
            "Arquivo components.json na raiz",
            "Design Tokens no globals.css",
            "Funcao cn() em src/lib/utils.ts",
            "Pastas ui/, layout/, composites/ e hooks/ criadas",
            "Pelo menos um componente instalado (ex: Button)",
            "(Opcional) CLAUDE.md para uso com IA",
          ].map((item) => (
            <label key={item} className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
              <input type="checkbox" className="mt-0.5 rounded border-border" />
              {item}
            </label>
          ))}
        </div>
      </section>
    </div>
  )
}
