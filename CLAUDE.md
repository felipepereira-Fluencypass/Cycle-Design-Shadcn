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

### Regras de Versionamento (IMPORTANTE)

22. **Bumpar versão ao alterar um componente** — qualquer mudança em um componente (cor, prop, comportamento, fix) exige atualizar o campo `meta.version` e `meta.updatedAt` no `registry.json`:
    - **Patch** (1.0.0 → 1.0.1): bug fix, ajuste de estilo que não muda API
    - **Minor** (1.0.0 → 1.1.0): nova prop, nova variant, novo comportamento (retrocompatível)
    - **Major** (1.0.0 → 2.0.0): breaking change — prop removida/renomeada, mudança de estrutura
23. **Rebuild obrigatório** — após bumpar versão, rodar `npx tsx scripts/build-registry.ts`
24. **Rotina de início de sessão** — toda sessão deve começar verificando:
    - Se há atualizações upstream do shadcn/ui nos componentes que usamos
    - Listar o que mudou, avaliar risco de quebra, decidir se aplica ou não
    - Se aplicar, bumpar a versão do componente afetado

---

## Registro de Componentes

### Primitives (`src/components/ui/`)

| Componente | Versão | Arquivo | Observações |
|------------|--------|---------|-------------|
| Button | 1.0.0 | `button.tsx` | 6 variants, 8 sizes (xs=24px, sm=32px, md=40px, lg=48px + icon-*). Ícones com strokeWidth automático via CSS. Suporta `.theme-*`. |
| Input | 1.1.0 | `input.tsx` | 2 variantes (outline, filled), 3 sizes (sm=32px, default=40px, lg=48px). Estados: default, focused, disabled, error (aria-invalid). Idle neutro (light e dark), tema só no hover/focus. |
| Sheet | 1.0.0 | `sheet.tsx` | Overlay lateral/bottom. Sides: top, right, bottom, left. Usado no HeaderClass mobile. |
| Tabs | 1.0.0 | `tabs.tsx` | 2 variants (default, line), orientação horizontal e vertical. |
| Audio Player | 1.0.1 | `audio-player.tsx` | Player de audio com controles customizados (Vidstack). 2 variantes (default, card). Suporta MP3, OGG, HLS. Icones via CycleIcon. showSpeed=true por padrao (EdTech). |
| Video Player | 1.2.0 | `video-player.tsx` | Player com controles customizados (Vidstack). Suporta MP4, WebM, HLS. Icones via CycleIcon. Props opcionais: chapters (VTT), showBuffering (spinner), announcer (screen reader). Tooltips em todos os botoes desktop. Live indicator automatico para streams ao vivo. |
| Accordion | 1.0.0 | `accordion.tsx` | Secoes colapsaveis com animacao. Suporta single e multiple. |
| Badge | 1.0.0 | `badge.tsx` | 10 variants (default, secondary, destructive, outline, ghost, link, muted, success, progress, progress-completed), 3 sizes (sm, default, lg). Suporta `.theme-*`. |
| File Card | 1.0.0 | `file-card.tsx` | Botao de download com icone, titulo, tipo e tamanho. 3 sizes (sm, md, lg). Props: icon, showDescription, showFileSize. |
| Progress | 1.0.0 | `progress.tsx` | 4 sizes (xs, sm, default, lg), 4 variants (default, secondary, destructive, muted). Prop `theme` aplica cor apenas no indicator, track permanece `bg-accent` neutral. |
| Progress Stage | 1.0.0 | `progress-stage.tsx` | Progresso segmentado em pills (2-10 stages). Prop `theme` aplica cor apenas nas pills preenchidas, vazias ficam `bg-accent` neutral. |
| Checkbox | 1.0.0 | `checkbox.tsx` | 3 sizes (sm, default, lg), 2 variants (default, circular). Prop `theme` aplica cor apenas no estado checked. |
| Radio Group | 1.0.0 | `radio-group.tsx` | 3 sizes (sm, default, lg). Prop `theme` aplica cor apenas no estado checked. Border unchecked neutro fixo. |
| Scroll Area | 1.0.0 | `scroll-area.tsx` | Area de scroll customizada com scrollbar estilizado. Vertical e horizontal. |
| Slider | 1.0.0 | `slider.tsx` | 3 sizes (sm, default, lg), suporte a range (2 thumbs). Track preenchido `bg-primary`, track vazio `bg-accent`, thumb `bg-primary-foreground` com `border-primary`. Suporta `.theme-*`. |
| Switch | 1.0.0 | `switch.tsx` | Toggle on/off. 3 sizes (sm, default, lg). Prop `theme` aplica cor apenas no estado checked. |
| Toggle | 1.2.0 | `toggle.tsx` | Botão toggle (on/off). 2 variants (default, outline), 8 sizes (xs, sm, default, lg + icon-*). Prop `fillOnPress` para preencher ícones SVG no on. Alinhado com shadcn/ui (bg-accent/text-accent-foreground). |
| Label | 1.0.0 | `label.tsx` | Rotulo acessivel para campos de formulario. Baseado no Radix UI Label. Reage a disabled via peer-disabled:. |
| Textarea | 1.1.0 | `textarea.tsx` | Campo multi-linha. 2 variantes (outline, filled), 3 sizes (sm=60px, default=80px, lg=120px). Mesmos tokens e estados do Input. Resize-y. Suporta `.theme-*`. |
| Avatar | 1.0.0 | `avatar.tsx` | Avatar com imagem, fallback de iniciais, badge de status e group. 3 sizes (sm=24px, default=32px, lg=40px). Prop `theme` colore fallback via tokens primary. Sub-componentes: AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount. Suporta `.theme-*`. |
| Chat Bubble | 1.0.0 | `chat-bubble.tsx` | Bolha de mensagem. 3 variantes: default (aluno), instructor (destaque primary), system (italic central). Usa Avatar para imagem/fallback. |
| Chat Panel | 1.0.0 | `chat-panel.tsx` | Painel de chat com lista de ChatBubbles, ScrollArea, auto-scroll, e input para envio. Usado no LiveContent. |
| Like Dislike | 1.0.0 | `like-dislike.tsx` | Botões de like/dislike mutuamente exclusivos. 4 sizes (xs, sm, default, lg). Animação burst no like (raios coloridos, default theme-brand). Feedback opcional no dislike via Textarea inline (showFeedback). |
| Live Waiting | 1.0.0 | `live-waiting.tsx` | Tela de espera para lives com countdown em tempo real, badge, info do professor (Avatar) e tópico. Reutilizável em qualquer contexto de live/evento. |

> **Próximo a instalar**: (a definir)

### Layout Primitives (`src/components/layout/`)

| Componente | Status | Arquivo | Observações |
|------------|--------|---------|-------------|
| — | — | — | Nenhum componente criado ainda |

### Composites (`src/components/composites/`)

> **Composites específicos de produto foram movidos para seus respectivos projetos.**
> Os composites do Class (HeaderClass, SidebarCourse, CourseContent, LiveContent) estão no projeto `class-page`.

| Componente | Versão | Arquivo | Observações |
|------------|--------|---------|-------------|
| — | — | — | Nenhum composite no Cycle (são específicos de produto) |

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

Para cada **novo** componente, seguir este fluxo:

```
1. INSTALAR   → npx shadcn@latest add [componente] (ou criar manualmente)
2. CUSTOMIZAR → ajustar variants, sizes e tokens para a marca Cycle
3. TESTAR     → npm run build (garantir que compila)
4. VERSIONAR  → adicionar meta.version "1.0.0" e meta.updatedAt no registry.json
5. REGISTRAR  → atualizar a tabela de componentes neste CLAUDE.md (com versão)
6. REBUILD    → npx tsx scripts/build-registry.ts
7. VALIDAR    → apresentar ao usuário para aprovação antes de seguir
```

Para **alterar** um componente existente:

```
1. ALTERAR    → fazer a mudança (cor, prop, comportamento, fix)
2. TESTAR     → npm run build (garantir que compila)
3. VERSIONAR  → bumpar meta.version no registry.json (patch/minor/major) + meta.updatedAt
4. REGISTRAR  → atualizar versão na tabela deste CLAUDE.md
5. REBUILD    → npx tsx scripts/build-registry.ts
6. VALIDAR    → apresentar ao usuário para aprovação
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
