import type { ComponentSpec } from "@/types/component-specs"

export const buttonSpec: ComponentSpec = {
  componentName: "Button",
  description: "Componente de botao com variants, sizes e suporte a temas de cor.",

  figmaNaming: {
    componentName: "Button",
    properties: [
      { property: "Variant", values: "Default, Secondary, Outline, Ghost, Link, Destructive" },
      { property: "Size", values: "xs, sm, md, lg" },
      { property: "State", values: "Default, Hover, Focused, Disabled" },
      { property: "Icon", values: "None, Left, Right, Only" },
      { property: "Theme", values: "Neutral, Brand, Class, Private, Group, Impulse, Positive, Warning, Critical" },
    ],
    examples: [
      "Button / Variant=Default, Size=md, State=Default, Icon=None",
      "Button / Variant=Outline, Size=sm, State=Hover, Icon=Left",
      "Button / Variant=Ghost, Size=md, State=Default, Icon=Only",
      "Button / Variant=Default, Size=lg, State=Default, Theme=Brand",
    ],
  },

  sizes: [
    {
      name: "xs",
      height: "24px",
      paddingX: "8px",
      borderRadius: "8px (rounded-lg)",
      fontSize: "12px",
      fontWeight: "500 (Medium)",
      lineHeight: "12px",
      iconSize: "12px (2xs)",
    },
    {
      name: "sm",
      height: "32px",
      paddingX: "12px",
      borderRadius: "8px (rounded-lg)",
      fontSize: "12px",
      fontWeight: "500 (Medium)",
      lineHeight: "12px",
      iconSize: "16px (xs)",
    },
    {
      name: "default (md)",
      height: "40px",
      paddingX: "16px",
      borderRadius: "8px (rounded-lg)",
      fontSize: "14px",
      fontWeight: "500 (Medium)",
      lineHeight: "14px",
      iconSize: "24px (sm)",
    },
    {
      name: "lg",
      height: "48px",
      paddingX: "24px",
      borderRadius: "8px (rounded-lg)",
      fontSize: "16px",
      fontWeight: "500 (Medium)",
      lineHeight: "16px",
      iconSize: "24px (sm)",
    },
  ],

  iconOnlySizes: [
    {
      name: "icon-xs",
      height: "24px x 24px",
      paddingX: "N/A (quadrado)",
      borderRadius: "8px (rounded-lg)",
      fontSize: "N/A",
      fontWeight: "N/A",
      lineHeight: "N/A",
      iconSize: "12px (2xs)",
    },
    {
      name: "icon-sm",
      height: "32px x 32px",
      paddingX: "N/A (quadrado)",
      borderRadius: "8px (rounded-lg)",
      fontSize: "N/A",
      fontWeight: "N/A",
      lineHeight: "N/A",
      iconSize: "16px (xs)",
    },
    {
      name: "icon (md)",
      height: "40px x 40px",
      paddingX: "N/A (quadrado)",
      borderRadius: "8px (rounded-lg)",
      fontSize: "N/A",
      fontWeight: "N/A",
      lineHeight: "N/A",
      iconSize: "24px (sm)",
    },
    {
      name: "icon-lg",
      height: "48px x 48px",
      paddingX: "N/A (quadrado)",
      borderRadius: "8px (rounded-lg)",
      fontSize: "N/A",
      fontWeight: "N/A",
      lineHeight: "N/A",
      iconSize: "24px (sm)",
    },
  ],

  variantColors: [
    {
      variant: "default",
      tokens: [
        { token: "bg-primary", usage: "Fundo" },
        { token: "text-primary-foreground", usage: "Texto e icone" },
        { token: "bg-primary/90", usage: "Fundo no hover" },
      ],
    },
    {
      variant: "secondary",
      tokens: [
        { token: "bg-secondary", usage: "Fundo" },
        { token: "text-secondary-foreground", usage: "Texto e icone" },
        { token: "bg-secondary/80", usage: "Fundo no hover" },
      ],
    },
    {
      variant: "outline",
      tokens: [
        { token: "bg-background", usage: "Fundo" },
        { token: "border-border", usage: "Borda (1px)" },
        { token: "text-foreground", usage: "Texto e icone" },
        { token: "bg-accent", usage: "Fundo no hover" },
        { token: "text-accent-foreground", usage: "Texto no hover" },
      ],
    },
    {
      variant: "ghost",
      tokens: [
        { token: "bg-transparent", usage: "Fundo (transparente)" },
        { token: "text-primary", usage: "Texto e icone" },
        { token: "bg-accent", usage: "Fundo no hover" },
        { token: "text-accent-foreground", usage: "Texto no hover" },
      ],
    },
    {
      variant: "link",
      tokens: [
        { token: "bg-transparent", usage: "Fundo (transparente)" },
        { token: "text-primary", usage: "Texto" },
      ],
    },
    {
      variant: "destructive",
      tokens: [
        { token: "bg-destructive", usage: "Fundo" },
        { token: "text-destructive-foreground", usage: "Texto e icone" },
        { token: "bg-destructive/90", usage: "Fundo no hover" },
      ],
    },
  ],

  notes: [
    "O gap entre icone e texto e 8px (gap-2) em todos os sizes.",
    "O tamanho do icone segue o icon size token: xs=12px (2xs), sm=16px (xs), md/lg=24px (sm).",
    "No estado Disabled, aplique opacity 50% sobre o botao inteiro.",
    "O focus ring e 3px com cor ring/50, offset 0.",
    "As classes .theme-* sobrescrevem os tokens semanticos (primary, secondary, accent, etc). Ao criar variantes de cor no Figma, troque os mesmos tokens.",
    "Fonte: Geist Sans (--font-geist-sans) em todos os sizes.",
  ],
}
