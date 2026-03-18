# Cycle Design System

Design System próprio da Cycle, construído sobre shadcn/ui + Next.js 16 + Tailwind CSS 4.

> **Objetivo**: Criar uma biblioteca de componentes customizada para a marca Cycle,
> para que devs e IAs possam gerar front-end consistente usando nossos componentes
> padronizados — sem inventar nada fora do Design System.

---

## Visão Geral do Projeto

Este projeto segue uma arquitetura em **4 camadas**, inspirada em Atomic Design
e adaptada para shadcn/ui:

```
┌─────────────────────────────────────────────────────┐
│  4. Templates / Screens    → src/app/               │
│     Páginas reais montadas com composites           │
├─────────────────────────────────────────────────────┤
│  3. Composites             → src/components/composites/ │
│     Blocos reutilizáveis do produto                 │
│     (FormField, PageHeader, DataTable, etc.)        │
├─────────────────────────────────────────────────────┤
│  2. Primitives             → src/components/ui/     │
│     shadcn/ui customizados (Button, Input, Card...) │
│     + Layout Primitives    → src/components/layout/ │
│     (Container, Stack, Grid)                        │
├─────────────────────────────────────────────────────┤
│  1. Foundation             → src/app/globals.css    │
│     Design Tokens (cores, tipografia, spacing,      │
│     radius, shadows) como CSS variables             │
└─────────────────────────────────────────────────────┘
```

---

## Estrutura de Pastas

```
src/
├── app/
│   ├── globals.css          ← Foundation: todos os design tokens (CSS variables)
│   ├── layout.tsx           ← Root layout (fonts, metadata, html lang)
│   ├── page.tsx             ← Home page
│   └── favicon.ico
├── components/
│   ├── ui/                  ← PRIMITIVES: componentes shadcn/ui customizados
│   │   └── (vazio)          ← Ainda nenhum componente instalado
│   ├── layout/              ← LAYOUT PRIMITIVES: Container, Stack, Grid
│   │   └── (vazio)          ← Ainda nenhum componente criado
│   └── composites/          ← COMPOSITES: blocos maiores montados com primitives
│       └── (vazio)          ← Ainda nenhum composite criado
├── hooks/                   ← Custom React hooks
│   └── (vazio)
├── lib/
│   └── utils.ts             ← cn() utility (clsx + tailwind-merge)
└── styles/                  ← Estilos adicionais se necessário
    └── (vazio)
```

---

## Stack Técnica

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| Next.js | 16.1.7 | Framework (App Router, React Server Components) |
| React | 19.2.3 | UI library |
| TypeScript | ^5 | Tipagem estrita (strict mode) |
| Tailwind CSS | ^4 | Utility-first CSS |
| shadcn/ui | new-york style | Base dos componentes UI |
| Geist | ^1.7.0 | Fonte sans + mono (pacote local, sem Google Fonts) |
| Lucide React | ^0.577.0 | Ícones |
| CVA | ^0.7.1 | Class Variance Authority (variants de componentes) |
| clsx | ^2.1.1 | Concatenação condicional de classes |
| tailwind-merge | ^3.5.0 | Merge inteligente de classes Tailwind |
| tw-animate-css | ^1.4.0 | Animações para shadcn/ui |

---

## Comandos

```bash
npm run dev      # servidor de desenvolvimento (turbopack)
npm run build    # build de produção
npm run start    # serve o build de produção
npm run lint     # ESLint
```

---

## Regras para IA (IMPORTANTE)

### Regras de Componentes

1. **Sempre usar componentes de `@/components/ui/`** — NUNCA criar componentes base fora dessa pasta
2. **Componentes de layout ficam em `@/components/layout/`** — Container, Stack, Grid, etc.
3. **Composites ficam em `@/components/composites/`** — blocos maiores que combinam primitives
4. **Composites SÓ usam primitives** — componentes em `composites/` importam de `ui/` e `layout/`, nunca de outros composites
5. **Nunca criar um componente custom se shadcn/ui já resolve** — custom só existe se não há equivalente

### Regras de Estilo

6. **Sempre usar `cn()` de `@/lib/utils`** para merge de classes CSS
7. **NUNCA usar cores hardcoded** (ex: `bg-blue-500`, `text-[#333]`) — usar semantic tokens: `bg-primary`, `text-muted-foreground`, `border-border`, etc.
8. **NUNCA usar valores de spacing hardcoded fora da escala Tailwind** — usar a escala padrão: `p-4`, `gap-6`, `mt-8`, etc.
9. **Dark mode via classe `.dark`** — tokens light/dark já estão definidos no globals.css, o tema é controlado pela classe no `<html>`
10. **Usar variáveis de radius** — `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl` (mapeiam para os tokens `--radius-*`)

### Regras de Código

11. **Usar TypeScript strict** — tipar todas as props, nunca usar `any`
12. **Componentes devem exportar suas props** — `export interface ButtonProps extends ...`
13. **Usar `forwardRef` quando o componente aceitar ref** — padrão shadcn
14. **Ícones SEMPRE via `CycleIcon`** — nunca renderizar `<LucideIcon />` diretamente. Usar `<CycleIcon icon={IconName} size="sm" decorative />` (ou com `aria-label` para ícones semânticos). O `CycleIcon` aplica automaticamente `width`, `height` e `strokeWidth` baseado no token de size (`ICON_SIZES` em `src/components/icons/sizes.ts`). Isso garante consistência visual em todos os ícones do sistema.
15. **Imports com alias `@/`** — nunca usar caminhos relativos como `../../`

### Regras de Processo

16. **Um componente por vez** — instalar, customizar, documentar e validar antes de seguir para o próximo
17. **Sempre rodar `npm run build` após mudanças** — garantir que compila sem erros
18. **Atualizar este CLAUDE.md** — ao adicionar um componente, atualizar o registro abaixo
19. **Sempre atualizar o registry** — ao adicionar ou alterar um componente, atualizar `public/registry.json` e rodar `npx tsx scripts/build-registry.ts` para regenerar os JSONs em `public/r/`
20. **Sempre atualizar o catálogo de componentes** — ao adicionar um componente, incluir o nome no array da seção "Como instalar" em `src/app/docs/components/page.tsx`
21. **Sempre criar documentação** — ao adicionar qualquer componente, token, logo ou recurso, criar ou atualizar a página de documentação correspondente em `src/app/docs/`

---

## Registro de Componentes

### Primitives (`src/components/ui/`)

| Componente | Status | Arquivo | Observações |
|------------|--------|---------|-------------|
| Button | Instalado | `button.tsx` | 6 variants, 8 sizes (xs=24px, sm=32px, md=40px, lg=48px + icon-*). Ícones: xs=12px, sm=16px, md/lg=24px. Suporta `.theme-*`. |
| Input | Instalado | `input.tsx` | 3 sizes (sm=32px, default=40px, lg=48px). Estados: default, focused, disabled, error (aria-invalid). |
| Tabs | Instalado | `tabs.tsx` | Componente auxiliar usado na documentação (DocsTabs). |

> **Próximo a instalar**: Label, Textarea

### Layout Primitives (`src/components/layout/`)

| Componente | Status | Arquivo | Observações |
|------------|--------|---------|-------------|
| — | — | — | Nenhum componente criado ainda |

### Composites (`src/components/composites/`)

| Componente | Status | Arquivo | Observações |
|------------|--------|---------|-------------|
| — | — | — | Nenhum composite criado ainda |

### Hooks (`src/hooks/`)

| Hook | Status | Arquivo | Observações |
|------|--------|---------|-------------|
| — | — | — | Nenhum hook criado ainda |

---

## Foundation Tokens (Estado Atual)

Os tokens estão definidos em `src/app/globals.css` como CSS variables usando **oklch**.

**Status**: Usando paleta neutra padrão do shadcn. Os tokens da marca Cycle ainda
precisam ser definidos (cores primárias, secundárias, etc. do Figma).

### Tokens semânticos disponíveis

```
Backgrounds:  bg-background, bg-card, bg-popover, bg-primary, bg-secondary, bg-muted, bg-accent, bg-destructive
Foregrounds:  text-foreground, text-card-foreground, text-popover-foreground, text-primary-foreground,
              text-secondary-foreground, text-muted-foreground, text-accent-foreground, text-destructive-foreground
Borders:      border-border, border-input
Focus:        ring-ring
Charts:       bg-chart-1 a bg-chart-5
Sidebar:      bg-sidebar, text-sidebar-foreground, bg-sidebar-primary, bg-sidebar-accent, border-sidebar-border
Radius:       rounded-sm (calc(--radius - 4px)), rounded-md (calc(--radius - 2px)),
              rounded-lg (--radius), rounded-xl (calc(--radius + 4px))
```

### Pendências de Foundation

- [ ] Definir cores da marca Cycle (primary, secondary, accent)
- [ ] Confirmar tipografia (manter Geist ou usar fonte da marca?)
- [ ] Definir escala de radius preferida
- [ ] Definir se precisa de tokens adicionais de spacing/shadow

---

## Configuração do shadcn/ui

O shadcn foi configurado manualmente (sem CLI init). Arquivo `components.json`:

```json
{
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

**Para instalar um componente shadcn**:
```bash
npx shadcn@latest add [componente]
```

Se a CLI do shadcn não funcionar (problemas de rede), os componentes podem ser
criados manualmente seguindo o código-fonte do shadcn/ui no GitHub.

---

## Fluxo de Trabalho por Componente

Para cada novo componente, seguir este fluxo:

```
1. INSTALAR   → npx shadcn@latest add [componente] (ou criar manualmente)
2. CUSTOMIZAR → ajustar variants, sizes e tokens para a marca Cycle
3. TESTAR     → npm run build (garantir que compila)
4. REGISTRAR  → atualizar a tabela de componentes neste CLAUDE.md
5. VALIDAR    → apresentar ao usuário para aprovação antes de seguir
```

---

## Objetivo Futuro

Permitir que uma IA receba um layout do Figma e gere o front-end utilizando
corretamente nosso Design System customizado, sem inventar componentes fora do padrão.

Para isso, este arquivo serve como **contrato**: a IA deve consultar as tabelas
de componentes acima e usar APENAS o que está registrado. Se um componente necessário
não existir, a IA deve sinalizar a lacuna em vez de inventar.

---

## Histórico de Decisões

| Data | Decisão | Motivo |
|------|---------|--------|
| 2026-03-17 | Next.js 16 com App Router | Padrão atual, RSC nativo |
| 2026-03-17 | shadcn/ui new-york style | Estilo mais profissional e compacto |
| 2026-03-17 | Tailwind CSS 4 | Versão mais recente, CSS-first config |
| 2026-03-17 | oklch para tokens de cor | Gamut mais amplo, interpolação perceptual |
| 2026-03-17 | Geist font local | Sem dependência de Google Fonts CDN |
| 2026-03-17 | Paleta neutral como base | Placeholder até definir cores da marca |
| 2026-03-17 | Configuração manual do shadcn | CLI teve problema de rede, config equivalente |
