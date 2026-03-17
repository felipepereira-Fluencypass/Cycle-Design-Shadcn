# Cycle Design System — Guia de Setup

Guia para desenvolvedores que vão usar o Cycle Design System em seus projetos.

---

## Sumario

1. [Pre-requisitos](#pre-requisitos)
2. [Opcao A: Usando o Custom Registry (recomendado)](#opcao-a-usando-o-custom-registry-recomendado)
3. [Opcao B: Setup Manual](#opcao-b-setup-manual)
4. [Configurando o Projeto para IA](#configurando-o-projeto-para-ia)
5. [Referencia de Tokens](#referencia-de-tokens)
6. [FAQ](#faq)

---

## Pre-requisitos

Antes de comecar, garanta que seu projeto tem:

| Dependencia      | Versao minima | Comando de verificacao     |
|------------------|---------------|----------------------------|
| Node.js          | 18+           | `node -v`                  |
| Next.js          | 15+           | `npx next --version`       |
| React            | 19+           | ver `package.json`         |
| Tailwind CSS     | 4+            | ver `package.json`         |
| TypeScript       | 5+            | `npx tsc --version`        |

### Dependencias obrigatorias

```bash
npm install clsx tailwind-merge class-variance-authority lucide-react
```

### Utilitario `cn()`

Crie o arquivo `src/lib/utils.ts`:

```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

> Este utilitario e usado por todos os componentes para merge inteligente de classes Tailwind.

---

## Opcao A: Usando o Custom Registry (recomendado)

O Custom Registry permite instalar componentes Cycle ja customizados diretamente no seu projeto, usando a CLI do shadcn.

### Passo 1: Configurar o `components.json`

Na raiz do seu projeto, crie (ou atualize) o arquivo `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
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
}
```

### Passo 2: Copiar os Design Tokens

Copie o conteudo do `globals.css` da Cycle para o seu `src/app/globals.css`. Este arquivo contem todos os tokens de cor, radius, tipografia e spacing do Design System.

> **Importante**: Os tokens usam formato `oklch` para cores. Nao substitua por hex ou rgb.

O arquivo completo de tokens esta disponivel em:
`https://github.com/felipepereira-Fluencypass/Cycle-Design-Shadcn/blob/main/src/app/globals.css`

### Passo 3: Instalar componentes

```bash
# Sintaxe
npx shadcn@latest add <componente> --registry=<CYCLE_REGISTRY_URL>

# Exemplos
npx shadcn@latest add button --registry=<CYCLE_REGISTRY_URL>
npx shadcn@latest add input --registry=<CYCLE_REGISTRY_URL>
npx shadcn@latest add card --registry=<CYCLE_REGISTRY_URL>
```

> **Nota**: O URL do registry sera disponibilizado quando o deploy estiver pronto.
> Enquanto isso, use a [Opcao B: Setup Manual](#opcao-b-setup-manual).

### Passo 4: Usar no codigo

```tsx
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <Button variant="default" size="default">
      Clique aqui
    </Button>
  )
}
```

---

## Opcao B: Setup Manual

Se o registry nao estiver disponivel ou se voce preferir controle total, pode copiar os componentes manualmente.

### Passo 1: Configurar `components.json`

Mesmo passo da Opcao A.

### Passo 2: Copiar os Design Tokens

Mesmo passo da Opcao A — copie o `globals.css` completo.

### Passo 3: Criar a estrutura de pastas

```
src/
├── components/
│   ├── ui/              ← Componentes primitivos (Button, Input, Card...)
│   ├── layout/          ← Layout primitives (Container, Stack, Grid)
│   └── composites/      ← Blocos maiores (FormField, PageHeader...)
├── hooks/               ← Custom hooks
├── lib/
│   └── utils.ts         ← cn() utility
```

### Passo 4: Copiar componentes do repositorio

Para cada componente que voce precisa:

1. Acesse o repositorio: `https://github.com/felipepereira-Fluencypass/Cycle-Design-Shadcn`
2. Navegue ate `src/components/ui/<componente>.tsx`
3. Copie o arquivo para o seu projeto em `src/components/ui/`
4. Verifique se as dependencias do componente estao instaladas

### Exemplo: Copiando o Button manualmente

```bash
# 1. Garanta que as dependencias existem
npm install class-variance-authority

# 2. Copie o arquivo button.tsx para src/components/ui/button.tsx

# 3. Verifique que compila
npm run build
```

### Regras para copia manual

- **Nunca altere os nomes dos tokens** — `bg-primary`, `text-muted-foreground`, etc. devem ser mantidos
- **Nunca remova variants** — se o componente Cycle tem variants `default`, `outline`, `ghost`, mantenha todos
- **Pode adicionar variants** — se seu projeto precisa de um variant extra, adicione sem remover os existentes
- **Sempre mantenha o `cn()`** — nunca substitua por concatenacao manual de strings

---

## Configurando o Projeto para IA

Para que ferramentas de IA (como Claude Code, Cursor, etc.) consigam gerar front-end usando o Cycle Design System corretamente, adicione um arquivo `CLAUDE.md` na raiz do seu projeto.

### Por que isso e importante?

Sem orientacao, a IA vai:
- Inventar componentes que nao existem no Design System
- Usar cores hardcoded em vez de tokens semanticos
- Criar estilos inconsistentes com a marca

Com o `CLAUDE.md`, a IA:
- Sabe quais componentes estao disponiveis
- Usa os tokens corretos
- Sinaliza quando precisa de algo que nao existe

### Como fazer

1. Copie o template disponivel em `docs/CLAUDE-template.md` deste repositorio
2. Cole como `CLAUDE.md` na raiz do seu projeto
3. Atualize a lista de componentes instalados no seu projeto
4. Pronto — a IA vai ler esse arquivo automaticamente

### Dica para Cursor e outras IDEs

Se a IDE usa um arquivo diferente (ex: `.cursorrules`), copie o mesmo conteudo para o arquivo correspondente.

---

## Referencia de Tokens

### Cores semanticas

| Token                     | Uso                                           |
|---------------------------|-----------------------------------------------|
| `bg-background`           | Fundo principal da pagina                     |
| `bg-card`                 | Fundo de cards                                |
| `bg-popover`              | Fundo de popovers e dropdowns                 |
| `bg-primary`              | Fundo de elementos primarios (botoes, CTAs)   |
| `bg-secondary`            | Fundo de elementos secundarios                |
| `bg-muted`                | Fundo de areas com menor destaque             |
| `bg-accent`               | Fundo de elementos em hover/ativo             |
| `bg-destructive`          | Fundo de acoes destrutivas (deletar, erro)    |
| `text-foreground`         | Texto principal                               |
| `text-muted-foreground`   | Texto secundario / menos destaque             |
| `text-primary-foreground` | Texto sobre bg-primary                        |
| `border-border`           | Bordas padrao                                 |
| `border-input`            | Bordas de inputs                              |
| `ring-ring`               | Anel de foco (acessibilidade)                 |

### Radius

| Classe       | Valor                          |
|--------------|--------------------------------|
| `rounded-sm` | `calc(var(--radius) - 4px)`    |
| `rounded-md` | `calc(var(--radius) - 2px)`    |
| `rounded-lg` | `var(--radius)`                |
| `rounded-xl` | `calc(var(--radius) + 4px)`    |

### Spacing

Usar a escala padrao do Tailwind: `p-1`, `p-2`, `p-4`, `p-6`, `p-8`, `gap-2`, `gap-4`, `gap-6`, etc.

**Nunca usar valores arbitrarios** como `p-[13px]` ou `gap-[7px]`.

---

## FAQ

### Posso customizar um componente depois de instalar?

Sim. Essa e a filosofia do shadcn — voce e dono do codigo. Mas tente manter os tokens semanticos e nao remova variants que ja existem.

### E se eu precisar de um componente que nao existe no Cycle DS?

1. Verifique se o shadcn/ui padrao tem o componente
2. Se sim, instale do shadcn padrao e adapte os tokens
3. Se nao, crie o componente seguindo os padroes do Design System
4. Comunique ao time do Design System para avaliar inclusao

### Preciso usar Next.js?

O Design System e otimizado para Next.js com App Router, mas os componentes sao React puro. Podem funcionar em outros frameworks React com ajustes no setup do Tailwind.

### Como atualizo os componentes quando o Design System mudar?

- **Via Registry**: reinstale o componente (o shadcn pergunta se quer sobrescrever)
- **Manual**: copie a versao nova do repositorio

> **Atencao**: Se voce fez customizacoes locais, faca backup antes de atualizar.
