# Cycle Design System

Este projeto usa o **Cycle Design System**, um sistema de componentes customizado
construido sobre shadcn/ui + Next.js + Tailwind CSS 4.

> **IMPORTANTE**: Toda geracao de UI deve usar APENAS os componentes e tokens listados
> abaixo. Se um componente necessario nao existir, sinalize — NAO invente.

---

## Setup do Design System

- **Registry**: `<CYCLE_REGISTRY_URL>`
- **Repositorio**: `https://github.com/felipepereira-Fluencypass/Cycle-Design-Shadcn`
- **Instalar componente**: `npx shadcn@latest add <componente> --registry=<CYCLE_REGISTRY_URL>`

---

## Componentes Disponiveis

### Primitives (`@/components/ui/`)

<!-- ATUALIZE esta tabela com os componentes que voce instalou no seu projeto -->

| Componente | Import | Variants | Sizes |
|------------|--------|----------|-------|
| — | — | — | — |

> Tabela vazia = nenhum componente instalado ainda. Instale conforme necessidade.

### Layout (`@/components/layout/`)

| Componente | Import | Props principais |
|------------|--------|------------------|
| — | — | — |

### Composites (`@/components/composites/`)

| Componente | Import | Composicao |
|------------|--------|------------|
| — | — | — |

---

## Tokens Semanticos (OBRIGATORIO)

### Cores — usar SEMPRE tokens semanticos

```
Backgrounds:  bg-background, bg-card, bg-popover, bg-primary, bg-secondary,
              bg-muted, bg-accent, bg-destructive
Foregrounds:  text-foreground, text-card-foreground, text-popover-foreground,
              text-primary-foreground, text-secondary-foreground,
              text-muted-foreground, text-accent-foreground, text-destructive-foreground
Borders:      border-border, border-input
Focus:        ring-ring
```

### Radius

```
rounded-sm, rounded-md, rounded-lg, rounded-xl
```

### Spacing

Usar escala padrao Tailwind: `p-1`, `p-2`, `p-4`, `p-6`, `p-8`, `gap-2`, `gap-4`, `gap-6`

---

## Regras (OBRIGATORIO)

1. **SOMENTE componentes listados acima** — se nao esta na tabela, nao use. Sinalize a lacuna.
2. **NUNCA cores hardcoded** — proibido `bg-blue-500`, `text-[#333]`, `bg-red-600`. Usar tokens semanticos.
3. **NUNCA spacing arbitrario** — proibido `p-[13px]`, `gap-[7px]`. Usar escala Tailwind.
4. **SEMPRE usar `cn()`** de `@/lib/utils` para merge de classes.
5. **SEMPRE importar com `@/`** — nunca caminhos relativos como `../../`.
6. **Icones via Lucide React** — `import { Icon } from "lucide-react"`, nunca SVG inline.
7. **Dark mode via tokens** — os tokens ja suportam `.dark`, nao crie estilos dark manuais.

---

## Se precisar de um componente novo

Se a tarefa exige um componente que nao esta listado acima:

1. **Informe o usuario**: "O componente X nao esta disponivel no Cycle Design System."
2. **Sugira a instalacao**: `npx shadcn@latest add <componente> --registry=<CYCLE_REGISTRY_URL>`
3. **NAO crie o componente por conta propria** — espere o usuario aprovar.

---

## Estrutura do Projeto

```
src/
├── components/
│   ├── ui/              ← Primitives (shadcn customizados)
│   ├── layout/          ← Layout primitives (Container, Stack, Grid)
│   └── composites/      ← Blocos maiores (combinam primitives)
├── hooks/               ← Custom hooks
├── lib/
│   └── utils.ts         ← cn() utility
```

---

## Exemplos de Uso

### Correto

```tsx
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

<Button variant="outline" size="sm">Cancelar</Button>
<div className={cn("bg-card text-card-foreground rounded-lg p-6")}>...</div>
```

### ERRADO (nao faca isso)

```tsx
// Errado: cor hardcoded
<div className="bg-blue-500 text-white">...</div>

// Errado: componente inventado
import { CustomButton } from "./my-button"

// Errado: spacing arbitrario
<div className="p-[13px] gap-[7px]">...</div>

// Errado: SVG inline em vez de Lucide
<svg>...</svg>
```
