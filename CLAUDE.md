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
| Button | Instalado | `button.tsx` | 6 variants, 8 sizes (xs=24px, sm=32px, md=40px, lg=48px + icon-*). Ícones com strokeWidth automático via CSS. Suporta `.theme-*`. |
| Input | Instalado | `input.tsx` | 3 sizes (sm=32px, default=40px, lg=48px). Estados: default, focused, disabled, error (aria-invalid). |
| Sheet | Instalado | `sheet.tsx` | Overlay lateral/bottom. Sides: top, right, bottom, left. Usado no HeaderClass mobile. |
| Tabs | Instalado | `tabs.tsx` | 2 variants (default, line), orientação horizontal e vertical. |
| Audio Player | Instalado | `audio-player.tsx` | Player de audio com controles customizados (Vidstack). 2 variantes (default, card). Suporta MP3, OGG, HLS. Icones via CycleIcon. showSpeed=true por padrao (EdTech). |
| Video Player | Instalado | `video-player.tsx` | Player com controles customizados (Vidstack). Suporta MP4, WebM, HLS. Icones via CycleIcon. |
| Accordion | Instalado | `accordion.tsx` | Secoes colapsaveis com animacao. Suporta single e multiple. |
| Badge | Instalado | `badge.tsx` | 10 variants (default, secondary, destructive, outline, ghost, link, muted, success, progress, progress-completed), 3 sizes (sm, default, lg). Suporta `.theme-*`. |
| File Card | Instalado | `file-card.tsx` | Botao de download com icone, titulo, tipo e tamanho. 3 sizes (sm, md, lg). Props: icon, showDescription, showFileSize. |
| Progress | Instalado | `progress.tsx` | 4 sizes (xs, sm, default, lg), 4 variants (default, secondary, destructive, muted). Prop `theme` aplica cor apenas no indicator, track permanece `bg-accent` neutral. |
| Progress Stage | Instalado | `progress-stage.tsx` | Progresso segmentado em pills (2-10 stages). Prop `theme` aplica cor apenas nas pills preenchidas, vazias ficam `bg-accent` neutral. |
| Checkbox | Instalado | `checkbox.tsx` | 3 sizes (sm, default, lg), 2 variants (default, circular). Prop `theme` aplica cor apenas no estado checked. |
| Radio Group | Instalado | `radio-group.tsx` | 3 sizes (sm, default, lg). Prop `theme` aplica cor apenas no estado checked. Border unchecked neutro fixo. |
| Scroll Area | Instalado | `scroll-area.tsx` | Area de scroll customizada com scrollbar estilizado. Vertical e horizontal. |
| Slider | Instalado | `slider.tsx` | 3 sizes (sm, default, lg), suporte a range (2 thumbs). Track preenchido `bg-primary`, track vazio `bg-accent`, thumb `bg-primary-foreground` com `border-primary`. Suporta `.theme-*`. |
| Switch | Instalado | `switch.tsx` | Toggle on/off. 3 sizes (sm, default, lg). Prop `theme` aplica cor apenas no estado checked. |

> **Próximo a instalar**: Label, Textarea

### Layout Primitives (`src/components/layout/`)

| Componente | Status | Arquivo | Observações |
|------------|--------|---------|-------------|
| — | — | — | Nenhum componente criado ainda |

### Composites (`src/components/composites/`)

| Componente | Status | Arquivo | Observações |
|------------|--------|---------|-------------|
| HeaderClass | Criado | `header-class.tsx` | Header do produto Class. Responsivo (740px breakpoint). Props: courseName, isSidebarOpen, onToggleSidebar, onNavigateHome. Mobile usa bottom sheet. |
| Sidebar Course | Criado | `sidebar-course/` | Navegação lateral do produto Class. Componente principal: SidebarCourse (container com ScrollArea, max-w-[354px]). Sub-componentes: ProgressCourse (header com progresso bar/stage), AccordionConclusion (accordion simples para conclusão), AccordionCourse (accordion com badge de progresso e tag live), TaskCourse (item de atividade com icon/badge/checkbox, 3 estados: default/active/completed), ListTaskCourse (container flex-col para TaskCourse items). |

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

## Fluxo Figma → Código

Este Design System é usado com o **Figma MCP** para converter telas do Figma em código
real usando os componentes registrados. O fluxo funciona assim:

### Como usar

1. **Colar a URL do Figma** — o MCP retorna layout, screenshot, tokens e hints do design
2. **IA interpreta e gera código** — usando APENAS componentes registrados neste CLAUDE.md
3. **Resultado**: código React + Tailwind que usa os primitives e composites do Cycle Design

### Regras para a IA ao receber um design do Figma

1. **Usar APENAS componentes registrados** — consultar as tabelas de Primitives, Composites e Layout acima. Se um componente necessário não existir, **sinalizar a lacuna** em vez de inventar
2. **Mapear tokens do Figma para tokens semânticos** — cores do Figma devem ser traduzidas para `bg-primary`, `text-muted-foreground`, `border-border`, etc. NUNCA usar valores hardcoded
3. **Respeitar variantes e sizes existentes** — se o design mostra um botão pequeno, usar `size="sm"`, não criar CSS custom
4. **Aplicar temas via `.theme-*`** — se o design usa cor de marca, usar a classe de tema correspondente (ex: `className="theme-brand"`)
5. **Usar CycleIcon para ícones** — identificar o ícone Lucide mais próximo e renderizar via `<CycleIcon icon={...} />`
6. **Seguir a hierarquia de camadas** — pages usam composites, composites usam primitives, primitives usam tokens
7. **Dar contexto ao colar a URL** — informar qual produto/tela é (ex: "tela de curso do Class", "landing page") para melhor interpretação

### Para maximizar a assertividade (dicas para designers)

- Usar tokens com os mesmos nomes do código (`primary`, `muted`, `accent`, `destructive`...)
- Nomear componentes no Figma igual ao código (`Button`, `Badge`, `Switch`...)
- Manter spacing dentro da escala Tailwind (4px, 8px, 12px, 16px, 24px, 32px...)
- Usar Auto Layout no Figma (traduz diretamente para Flexbox)

### Limitações

- O fluxo é **Figma → Código** (não o inverso — não criamos componentes no Figma a partir do código)
- Nuances visuais muito sutis podem precisar de ajuste manual após geração
- Componentes que não existem no Design System precisam ser criados antes de serem usados

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
