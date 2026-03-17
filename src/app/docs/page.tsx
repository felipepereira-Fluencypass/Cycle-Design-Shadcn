export default function DocsPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Setup Guide</h1>
        <p className="text-muted-foreground mt-2">
          Como instalar e configurar o Cycle Design System no seu projeto.
        </p>
      </div>

      {/* Pre-requisitos */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Pre-requisitos</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left p-3 font-medium">Dependencia</th>
                <th className="text-left p-3 font-medium">Versao minima</th>
                <th className="text-left p-3 font-medium">Verificacao</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3">Next.js</td>
                <td className="p-3 font-mono">15+</td>
                <td className="p-3 font-mono text-muted-foreground">
                  npx next --version
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">React</td>
                <td className="p-3 font-mono">19+</td>
                <td className="p-3 font-mono text-muted-foreground">
                  ver package.json
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3">Tailwind CSS</td>
                <td className="p-3 font-mono">4+</td>
                <td className="p-3 font-mono text-muted-foreground">
                  ver package.json
                </td>
              </tr>
              <tr>
                <td className="p-3">TypeScript</td>
                <td className="p-3 font-mono">5+</td>
                <td className="p-3 font-mono text-muted-foreground">
                  npx tsc --version
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Dependencias obrigatorias:</p>
          <pre className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
            npm install clsx tailwind-merge class-variance-authority
            lucide-react
          </pre>
        </div>
      </section>

      {/* Opcao A */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
            A
          </span>
          <h2 className="text-xl font-semibold">
            Via Custom Registry (recomendado)
          </h2>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Passo 1 — Configurar components.json
            </h3>
            <p className="text-sm text-muted-foreground">
              Crie o arquivo <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">components.json</code> na raiz do projeto:
            </p>
            <pre className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`{
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
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Passo 2 — Copiar Design Tokens
            </h3>
            <p className="text-sm text-muted-foreground">
              Copie o{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">
                globals.css
              </code>{" "}
              do repositorio Cycle para{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">
                src/app/globals.css
              </code>
              . Os tokens usam formato oklch.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Passo 3 — Criar utilitario cn()
            </h3>
            <p className="text-sm text-muted-foreground">
              Crie{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">
                src/lib/utils.ts
              </code>
              :
            </p>
            <pre className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`}
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Passo 4 — Instalar componentes
            </h3>
            <pre className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`# Instalar um componente do registry Cycle
npx shadcn@latest add button --registry=<CYCLE_REGISTRY_URL>

# Instalar varios de uma vez
npx shadcn@latest add button input card --registry=<CYCLE_REGISTRY_URL>`}
            </pre>
            <div className="rounded-lg border border-border bg-muted/30 p-4 text-sm">
              <p className="font-medium">Nota</p>
              <p className="text-muted-foreground mt-1">
                O URL do registry sera disponibilizado quando o deploy estiver
                pronto. Enquanto isso, use a Opcao B (setup manual).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Opcao B */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-secondary-foreground text-sm font-bold">
            B
          </span>
          <h2 className="text-xl font-semibold">Setup Manual</h2>
        </div>

        <p className="text-sm text-muted-foreground">
          Se o registry nao estiver disponivel, copie os componentes
          diretamente do repositorio.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Passo 1 — Criar estrutura de pastas
            </h3>
            <pre className="bg-muted rounded-lg p-4 text-sm font-mono overflow-x-auto">
{`src/
├── components/
│   ├── ui/              ← Primitives (Button, Input, Card...)
│   ├── layout/          ← Layout (Container, Stack, Grid)
│   └── composites/      ← Blocos maiores (FormField, PageHeader...)
├── hooks/               ← Custom hooks
├── lib/
│   └── utils.ts         ← cn() utility`}
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Passo 2 — Copiar componentes
            </h3>
            <p className="text-sm text-muted-foreground">
              Para cada componente necessario, copie o arquivo de{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">
                src/components/ui/
              </code>{" "}
              do repositorio Cycle para a mesma pasta no seu projeto.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Regras para copia manual
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                Nunca altere os nomes dos tokens semanticos
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                Nunca remova variants existentes — pode adicionar novos
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                Sempre mantenha o cn() para merge de classes
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                Verifique dependencias de cada componente antes de copiar
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Configurar IA */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Configurando para IA</h2>
        <p className="text-sm text-muted-foreground">
          Para que a IA gere codigo usando o Design System corretamente,
          adicione um{" "}
          <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">
            CLAUDE.md
          </code>{" "}
          na raiz do seu projeto.
        </p>

        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              O que o CLAUDE.md faz
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-destructive">
                  Sem CLAUDE.md
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• IA inventa componentes</li>
                  <li>• Usa cores hardcoded</li>
                  <li>• Estilos inconsistentes</li>
                </ul>
              </div>
              <div className="rounded-lg border border-border p-4">
                <p className="text-sm font-medium text-primary">
                  Com CLAUDE.md
                </p>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>• Usa apenas componentes do DS</li>
                  <li>• Tokens semanticos corretos</li>
                  <li>• Sinaliza lacunas</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Como usar
            </h3>
            <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
              <li>
                Copie o template de{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">
                  docs/CLAUDE-template.md
                </code>{" "}
                do repositorio
              </li>
              <li>
                Cole como{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">
                  CLAUDE.md
                </code>{" "}
                na raiz do seu projeto
              </li>
              <li>Atualize a lista de componentes instalados</li>
              <li>
                Para Cursor, copie o conteudo tambem para{" "}
                <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">
                  .cursorrules
                </code>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
