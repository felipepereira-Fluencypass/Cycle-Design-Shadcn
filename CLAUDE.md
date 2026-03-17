# Cycle Design System

Design System da Cycle baseado em shadcn/ui + Next.js 15 + Tailwind CSS 4.

## Estrutura de Camadas

```
Foundation (tokens)     → src/app/globals.css (CSS variables)
Primitives (shadcn)     → src/components/ui/
Layout Primitives       → src/components/layout/
Composites (blocos)     → src/components/composites/
Templates (páginas)     → src/app/
```

## Regras para IA

1. **Sempre usar componentes de `@/components/ui`** — nunca criar componentes base fora dessa pasta
2. **Sempre usar `cn()` de `@/lib/utils`** para merge de classes
3. **Nunca usar cores hardcoded** — usar semantic tokens (bg-primary, text-muted-foreground, etc.)
4. **Composites combinam Primitives** — componentes em `composites/` só usam componentes de `ui/` e `layout/`
5. **Dark mode via classe `.dark`** — tokens já suportam light/dark

## Stack

- Next.js 16 (App Router, RSC)
- TypeScript strict
- Tailwind CSS 4
- shadcn/ui (new-york style)
- Geist font (sans + mono)
- Lucide icons

## Comandos

```bash
npm run dev      # dev server
npm run build    # production build
npm run lint     # eslint
```
