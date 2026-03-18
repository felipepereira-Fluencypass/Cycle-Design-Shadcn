import type { ComponentSpec } from "@/types/component-specs"

export const tabsSpec: ComponentSpec = {
  componentName: "Tabs",
  description: "Componente de abas para alternar entre conteudos. Suporta 2 variants e orientacao horizontal/vertical.",

  figmaNaming: {
    componentName: "Tabs",
    properties: [
      { property: "Variant", values: "Default, Line" },
      { property: "Orientation", values: "Horizontal, Vertical" },
      { property: "State", values: "Default, Hover, Active, Focused, Disabled" },
    ],
    examples: [
      "Tabs / Variant=Default, Orientation=Horizontal",
      "Tabs / Variant=Line, Orientation=Horizontal",
      "Tabs / Variant=Default, Orientation=Vertical",
      "TabsTrigger / State=Active",
    ],
  },

  sizes: [
    {
      name: "default",
      height: "36px (TabsList)",
      paddingX: "8px (TabsTrigger)",
      borderRadius: "8px (rounded-lg)",
      fontSize: "14px (text-sm)",
      fontWeight: "500 (Medium)",
      lineHeight: "20px",
      iconSize: "16px (xs)",
    },
  ],

  variantColors: [
    {
      variant: "default",
      tokens: [
        { token: "bg-muted", usage: "Fundo da TabsList" },
        { token: "text-muted-foreground", usage: "Texto das tabs inativas" },
        { token: "bg-background", usage: "Fundo da tab ativa" },
        { token: "text-foreground", usage: "Texto da tab ativa" },
      ],
    },
    {
      variant: "line",
      tokens: [
        { token: "bg-transparent", usage: "Fundo da TabsList (transparente)" },
        { token: "text-muted-foreground", usage: "Texto das tabs inativas" },
        { token: "text-foreground", usage: "Texto da tab ativa" },
        { token: "bg-foreground", usage: "Linha indicadora da tab ativa" },
      ],
    },
  ],

  notes: [
    "A variant Default usa fundo muted com tab ativa em background (card-like).",
    "A variant Line usa fundo transparente com linha indicadora na tab ativa.",
    "Orientacao Vertical: as tabs ficam empilhadas a esquerda com conteudo a direita.",
    "O border radius da TabsList e 8px (rounded-lg), consistente com Button e Input.",
    "Hover: texto muda de muted-foreground para foreground.",
    "Focus ring: 3px com cor ring/50, identico aos outros componentes.",
    "Icones dentro das tabs sao dimensionados automaticamente para 16px.",
  ],
}
