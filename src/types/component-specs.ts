export interface SizeSpec {
  name: string
  height: string
  paddingX: string
  borderRadius: string
  fontSize: string
  fontWeight: string
  lineHeight: string
  iconSize: string
}

export interface VariantColorSpec {
  variant: string
  tokens: { token: string; usage: string }[]
}

export interface FigmaNaming {
  componentName: string
  properties: { property: string; values: string }[]
  examples: string[]
}

export interface ComponentSpec {
  componentName: string
  description: string
  figmaNaming: FigmaNaming
  sizes: SizeSpec[]
  iconOnlySizes?: SizeSpec[]
  variantColors: VariantColorSpec[]
  notes?: string[]
}
