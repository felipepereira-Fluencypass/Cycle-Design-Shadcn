# Cycle Design System — Regras para IA

Este projeto usa o **Cycle Design System**. Todos os componentes de UI, templates de pagina e blocos compostos ja existem no Design System e devem ser instalados, nunca recriados.

Registry: https://cycle-design.vercel.app/r/

---

## Regra Principal

**ANTES de criar qualquer componente, layout ou template, consultar o registry.**

```bash
# Ver todos os componentes disponiveis:
curl https://cycle-design.vercel.app/registry.json
```

Se o componente ou algo equivalente ja existe no registry, **instalar** em vez de criar:

```bash
npx shadcn@latest add https://cycle-design.vercel.app/r/[nome].json
```

---

## Componentes Disponiveis

### Primitives (componentes base)

| Nome | Comando de instalacao |
|------|----------------------|
| accordion | `npx shadcn@latest add https://cycle-design.vercel.app/r/accordion.json` |
| audio-player | `npx shadcn@latest add https://cycle-design.vercel.app/r/audio-player.json` |
| badge | `npx shadcn@latest add https://cycle-design.vercel.app/r/badge.json` |
| button | `npx shadcn@latest add https://cycle-design.vercel.app/r/button.json` |
| checkbox | `npx shadcn@latest add https://cycle-design.vercel.app/r/checkbox.json` |
| cycle-icon | `npx shadcn@latest add https://cycle-design.vercel.app/r/cycle-icon.json` |
| file-card | `npx shadcn@latest add https://cycle-design.vercel.app/r/file-card.json` |
| input | `npx shadcn@latest add https://cycle-design.vercel.app/r/input.json` |
| progress | `npx shadcn@latest add https://cycle-design.vercel.app/r/progress.json` |
| progress-stage | `npx shadcn@latest add https://cycle-design.vercel.app/r/progress-stage.json` |
| radio-group | `npx shadcn@latest add https://cycle-design.vercel.app/r/radio-group.json` |
| scroll-area | `npx shadcn@latest add https://cycle-design.vercel.app/r/scroll-area.json` |
| sheet | `npx shadcn@latest add https://cycle-design.vercel.app/r/sheet.json` |
| slider | `npx shadcn@latest add https://cycle-design.vercel.app/r/slider.json` |
| switch | `npx shadcn@latest add https://cycle-design.vercel.app/r/switch.json` |
| tabs | `npx shadcn@latest add https://cycle-design.vercel.app/r/tabs.json` |
| video-player | `npx shadcn@latest add https://cycle-design.vercel.app/r/video-player.json` |

### Composites (blocos maiores que combinam primitives)

| Nome | Comando de instalacao |
|------|----------------------|
| header-class | `npx shadcn@latest add https://cycle-design.vercel.app/r/header-class.json` |
| sidebar-course | `npx shadcn@latest add https://cycle-design.vercel.app/r/sidebar-course.json` |
| content-course | `npx shadcn@latest add https://cycle-design.vercel.app/r/content-course.json` |

### Templates de pagina e conteudo (IMPORTANTE)

Os composites acima incluem **templates completos de areas da pagina**. Antes de montar qualquer tela, verificar se ja existe um template:

| Quando a tela tiver... | Usar este composite |
|------------------------|---------------------|
| Header com logo, menu e navegacao do Class | `header-class` |
| Sidebar lateral com lista de unidades, modulos e atividades | `sidebar-course` |
| Area central de conteudo com video, titulo, botao concluir, descricao e arquivos | `content-course` (ContentVideo) |
| Area central de conteudo com audio | `content-course` (ContentAudio — proximo) |
| Area central com qualquer tipo de atividade (quiz, texto, flashcard) | `content-course` (ContentCourse wrapper + children) |
| Botao flutuante de reportar problema | Ja incluso no `content-course` (ReportButton) |

**Exemplo**: se a IA receber um screenshot de uma pagina de curso com sidebar, header e video no centro, ela deve instalar `header-class`, `sidebar-course` e `content-course` — NAO criar esses componentes manualmente.

---

## Como verificar se um componente existe

1. **Olhar esta tabela acima** — cobre os componentes mais comuns
2. **Consultar o registry online** — `curl https://cycle-design.vercel.app/registry.json`
3. **Verificar a documentacao** — https://cycle-design.vercel.app/docs/components

Se o componente nao existe no registry, ai sim criar. Mas usar os primitives do Design System como base (Button, Input, Badge, etc.), nunca HTML/CSS cru.

---

## Regras de Estilo

- Icones SEMPRE via `CycleIcon` — nunca renderizar `<LucideIcon />` diretamente
- Cores SEMPRE via semantic tokens — `bg-primary`, `text-muted-foreground`, nunca `bg-blue-500` ou `#hex`
- Usar `cn()` de `@/lib/utils` para merge de classes
- Imports com alias `@/` — nunca caminhos relativos como `../../`

---

## Fluxo ao receber um design/screenshot

**IMPORTANTE: A IA NUNCA deve comecar a codar direto. Sempre seguir este fluxo:**

1. **Identificar as areas da tela** — header? sidebar? conteudo central? modal? formulario?
2. **Para cada area, verificar se existe um template** — consultar a tabela "Templates de pagina" e o registry
3. **Apresentar ao dev a lista de componentes** — antes de escrever qualquer codigo, mostrar:
   - Quais componentes do Design System serao reusados (com nome e import)
   - Quais componentes precisam ser criados do zero
   - Quais primitives serao usados como base nos componentes novos
4. **Aguardar aprovacao do dev** — so comecar a codar apos o dev confirmar a lista
5. **Instalar os composites necessarios** via registry
6. **Montar a pagina** compondo os composites instalados
7. **Criar apenas o que NAO existe** no Design System, usando primitives como base

Exemplo de resposta esperada da IA antes de codar:

```
Analisei o design. Vou usar os seguintes componentes do Cycle Design System:

Do registry (ja prontos):
- header-class → Header com logo e navegacao
- sidebar-course → Sidebar com unidades e atividades
- content-course (ContentVideo) → Area de conteudo com video player
- button → Botoes de acao
- badge → Tags de status

Preciso criar:
- Nenhum componente novo necessario. Tudo esta coberto pelo Design System.

Posso prosseguir com a implementacao?
```

---

## Boas Praticas para o Dev ao Interagir com a IA

### Antes de pedir uma tela nova

Antes de colar um screenshot ou descrever uma tela, adicione contexto para a IA:

> "Analise esse design. Antes de criar qualquer coisa, verifique no Cycle Design System
> (registry e tabela de templates neste CLAUDE.md) se ja existe um componente ou template
> que cobre total ou parcialmente o que esta na tela."

### Prompts recomendados

**Ao iniciar uma tela nova:**
> "Quero implementar esta tela. Primeiro me diga quais componentes do Cycle Design System
> voce vai usar e quais precisam ser criados do zero. Nao crie nada ate eu aprovar."

**Ao ver a IA criando um componente que parece existir:**
> "Antes de criar esse componente, verifique se nao tem algo parecido no registry.
> Confira os composites tambem — templates como content-course, sidebar-course e
> header-class cobrem areas inteiras da pagina, nao so componentes pequenos."

**Ao pedir uma variacao de algo existente:**
> "Quero uma pagina de conteudo com audio em vez de video. Verifique se o content-course
> ja suporta isso (ContentCourse wrapper aceita children). Se sim, use o template existente
> em vez de criar um novo."

**Ao revisar o codigo gerado:**
> "Revise o codigo que voce gerou. Tem algum componente que voce criou manualmente
> que poderia ser substituido por um do Cycle Design System?"

### Checklist rapido para o dev

Antes de aceitar o codigo da IA, pergunte:

- [ ] A IA consultou o registry antes de criar componentes?
- [ ] Nenhum componente foi recriado manualmente sendo que ja existe no Design System?
- [ ] Os templates de pagina (header, sidebar, content) foram reusados e nao recriados?
- [ ] Componentes novos usam primitives do DS como base (Button, Input, etc.)?
- [ ] Nenhuma cor hardcoded (`#hex`, `bg-blue-500`)? Somente semantic tokens?
- [ ] Icones estao usando `CycleIcon` e nao `<LucideIcon />` direto?

### Erros comuns a evitar

| O dev pede... | O que a IA faz errado | O que deveria fazer |
|---------------|----------------------|---------------------|
| "Cria a pagina do curso" | Cria header, sidebar e player do zero | Instalar `header-class` + `sidebar-course` + `content-course` |
| "Adiciona um player de video" | Cria um `<video>` com controles HTML | Instalar `video-player` do registry |
| "Faz um botao de download" | Cria um botao custom com icone | Instalar `file-card` do registry |
| "Coloca uma barra de progresso" | Cria um `<div>` com width dinamico | Instalar `progress` ou `progress-stage` |
| "Monta a area de conteudo da aula" | Cria layout custom com titulo, botao, descricao | Instalar `content-course` e usar ContentVideo ou ContentCourse wrapper |
