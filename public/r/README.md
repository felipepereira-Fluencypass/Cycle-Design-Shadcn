# Cycle Custom Registry

Esta pasta contem os JSONs do shadcn Custom Registry.

## Estrutura

```
public/r/
├── index.json       ← Indice com todos os componentes
├── button.json      ← (exemplo) Definicao do Button
├── card.json        ← (exemplo) Definicao do Card
└── ...
```

## Como funciona

Cada arquivo JSON descreve um componente para o shadcn CLI:

```json
{
  "name": "button",
  "type": "registry:ui",
  "dependencies": ["class-variance-authority"],
  "files": [
    {
      "path": "ui/button.tsx",
      "type": "registry:ui",
      "content": "... codigo do componente ..."
    }
  ]
}
```

## Como o dev consome

```bash
npx shadcn@latest add button --registry=https://cycle-ds.vercel.app/r
```

## Como adicionar um componente

1. Crie o componente em `src/components/ui/`
2. Gere o JSON correspondente nesta pasta
3. Adicione ao array `items` do `index.json`
