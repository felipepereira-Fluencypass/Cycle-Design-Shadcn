import type { ComponentSpec } from "@/types/component-specs"

export const inputSpec: ComponentSpec = {
  componentName: "Input",
  description: "Campo de entrada de texto com suporte a diferentes tamanhos e estados.",

  figmaNaming: {
    componentName: "Input",
    properties: [
      { property: "Size", values: "sm, md, lg" },
      { property: "State", values: "Default, Hover, Focused, Disabled, Error" },
      { property: "Placeholder", values: "Texto do placeholder" },
    ],
    examples: [
      "Input / Size=md, State=Default",
      "Input / Size=sm, State=Focused",
      "Input / Size=lg, State=Error",
      "Input / Size=md, State=Disabled",
    ],
  },

  sizes: [
    {
      name: "sm",
      height: "32px",
      paddingX: "12px",
      borderRadius: "8px (rounded-lg)",
      fontSize: "14px (text-sm)",
      fontWeight: "400 (Regular)",
      lineHeight: "20px",
      iconSize: "16px (xs)",
    },
    {
      name: "default (md)",
      height: "40px",
      paddingX: "16px",
      borderRadius: "8px (rounded-lg)",
      fontSize: "14px (text-sm)",
      fontWeight: "400 (Regular)",
      lineHeight: "20px",
      iconSize: "24px (sm)",
    },
    {
      name: "lg",
      height: "48px",
      paddingX: "16px",
      borderRadius: "8px (rounded-lg)",
      fontSize: "16px (text-base)",
      fontWeight: "400 (Regular)",
      lineHeight: "24px",
      iconSize: "24px (sm)",
    },
  ],

  variantColors: [
    {
      variant: "default",
      tokens: [
        { token: "bg-transparent", usage: "Fundo" },
        { token: "border-input", usage: "Borda (1px)" },
        { token: "text-foreground", usage: "Texto digitado" },
        { token: "text-muted-foreground", usage: "Placeholder" },
      ],
    },
    {
      variant: "focused",
      tokens: [
        { token: "border-ring", usage: "Borda no foco" },
        { token: "ring-ring/50", usage: "Ring de 3px" },
      ],
    },
    {
      variant: "error",
      tokens: [
        { token: "border-destructive", usage: "Borda no erro" },
        { token: "ring-destructive/20", usage: "Ring de erro" },
      ],
    },
  ],

  notes: [
    "O border radius e 8px (rounded-lg) em todos os tamanhos, consistente com o Button.",
    "O foco usa ring de 3px com cor ring/50, identico ao Button.",
    "Suporta .theme-* (Brand, Class, Private, Group, etc.) — o focus ring assume a cor do tema.",
    "O estado de erro (aria-invalid) usa SEMPRE border-destructive, independente do tema aplicado.",
    "O estado de erro e ativado via atributo aria-invalid no HTML.",
    "No estado Disabled, aplique opacity 50% e cursor not-allowed.",
    "Fonte: Geist Sans (--font-geist-sans) em todos os sizes.",
    "Dark mode: fundo usa bg-input/30 para leve contraste.",
  ],
}
