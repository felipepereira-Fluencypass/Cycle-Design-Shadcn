import { Home } from "lucide-react"
import { CycleIcon } from "@/components/icons"

const iconSizes = [
  { token: "2xs", size: 12, stroke: 1.0 },
  { token: "xs", size: 16, stroke: 1.2 },
  { token: "sm", size: 24, stroke: 1.5 },
  { token: "md", size: 32, stroke: 1.8 },
  { token: "lg", size: 40, stroke: 2.1 },
  { token: "xl", size: 48, stroke: 2.4 },
] as const

const sidebarItems = [
  { id: "cores", label: "Cores Semanticas" },
  { id: "variacoes", label: "Variacoes de Cor" },
  { id: "alpha", label: "Alpha / Overlay" },
  { id: "graficos", label: "Cores de Grafico" },
  { id: "radius", label: "Border Radius" },
  { id: "shadows", label: "Shadows" },
  { id: "spacing", label: "Spacing" },
  { id: "icons", label: "Icon Sizes" },
  { id: "tipografia", label: "Tipografia" },
  { id: "estilos", label: "Estilos Tipograficos" },
];

export default function TokensPage() {
  const semanticColors = [
    { token: "background", description: "Fundo principal da pagina" },
    { token: "foreground", description: "Texto principal" },
    { token: "card", description: "Fundo de cards" },
    { token: "card-foreground", description: "Texto em cards" },
    { token: "popover", description: "Fundo de popovers e dropdowns" },
    { token: "popover-foreground", description: "Texto em popovers" },
    { token: "primary", description: "Elementos primarios (botoes, CTAs)" },
    { token: "primary-foreground", description: "Texto sobre primary" },
    { token: "secondary", description: "Elementos secundarios" },
    { token: "secondary-foreground", description: "Texto sobre secondary" },
    { token: "muted", description: "Areas com menor destaque" },
    { token: "muted-foreground", description: "Texto secundario" },
    { token: "accent", description: "Elementos em hover/ativo" },
    { token: "accent-foreground", description: "Texto sobre accent" },
    { token: "destructive", description: "Acoes destrutivas (deletar, erro)" },
    { token: "destructive-foreground", description: "Texto sobre destructive" },
    { token: "border", description: "Bordas padrao" },
    { token: "input", description: "Bordas de inputs" },
    { token: "ring", description: "Anel de foco (acessibilidade)" },
  ];

  const colorVariations = [
    { name: "neutral", label: "Neutral", description: "Tema global (default)", className: "" },
    { name: "brand", label: "Brand", description: "Rose — marca Fluencypass", className: "theme-brand" },
    { name: "class", label: "Class", description: "Blue — aulas", className: "theme-class" },
    { name: "private", label: "Private", description: "Orange — particular", className: "theme-private" },
    { name: "group", label: "Group", description: "Green — grupo", className: "theme-group" },
    { name: "impulse", label: "Impulse", description: "Purple — impulso", className: "theme-impulse" },
    { name: "positive", label: "Positive", description: "Emerald — sucesso", className: "theme-positive" },
    { name: "warning", label: "Warning", description: "Amber — alerta", className: "theme-warning" },
    { name: "critical", label: "Critical", description: "Red — erro", className: "theme-critical" },
  ];

  const variationTokens = [
    "background", "foreground", "primary", "primary-foreground",
    "secondary", "secondary-foreground", "muted", "muted-foreground",
    "accent", "accent-foreground", "border", "input", "ring",
  ];

  const chartColors = [
    { token: "chart-1", description: "Brand (rose)" },
    { token: "chart-2", description: "Class (blue)" },
    { token: "chart-3", description: "Group (green)" },
    { token: "chart-4", description: "Warning (amber)" },
    { token: "chart-5", description: "Impulse (purple)" },
  ];

  const radiusTokens = [
    { classe: "rounded-sm", valor: "calc(var(--radius) - 4px)", description: "Pequeno" },
    { classe: "rounded-md", valor: "calc(var(--radius) - 2px)", description: "Medio" },
    { classe: "rounded-lg", valor: "var(--radius)", description: "Grande (padrao)" },
    { classe: "rounded-xl", valor: "calc(var(--radius) + 4px)", description: "Extra grande" },
  ];

  return (
    <div className="flex gap-10">
      {/* Sidebar */}
      <nav className="hidden lg:block w-48 shrink-0">
        <div className="sticky top-8 space-y-1">
          <p className="ui-overline text-muted-foreground mb-3">Tokens</p>
          {sidebarItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded-md hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 min-w-0 space-y-16">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Design Tokens</h1>
          <p className="text-muted-foreground mt-2">
            Todos os tokens semanticos do Cycle Design. Use sempre estes
            tokens — nunca cores ou valores hardcoded.
          </p>
        </div>

        {/* ====== CORES SEMANTICAS ====== */}
        <section id="cores" className="space-y-4 scroll-mt-8">
          <h2 className="text-xl font-semibold">Cores Semanticas</h2>
          <p className="text-sm text-muted-foreground">
            Tokens de cor do tema Neutral (global). Suportam light e dark mode automaticamente.
          </p>
          <div className="grid gap-3">
            {semanticColors.map((color) => (
              <div
                key={color.token}
                className="flex items-center gap-4 rounded-lg border border-border p-3"
              >
                <div
                  className="h-10 w-10 rounded-md border border-border shrink-0"
                  style={{ backgroundColor: `var(--${color.token})` }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-mono font-medium">--{color.token}</p>
                  <p className="text-xs text-muted-foreground">{color.description}</p>
                </div>
                <div className="hidden sm:flex gap-2 text-xs font-mono text-muted-foreground">
                  <span className="bg-muted px-2 py-1 rounded">
                    bg-{color.token.replace("-foreground", "")}
                  </span>
                  {color.token.includes("foreground") && (
                    <span className="bg-muted px-2 py-1 rounded">text-{color.token}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== VARIACOES DE COR ====== */}
        <section id="variacoes" className="space-y-6 scroll-mt-8">
          <div>
            <h2 className="text-xl font-semibold">Variacoes de Cor</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Cada variacao sobrescreve os mesmos tokens semanticos. Aplique via
              classe{" "}
              <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">.theme-*</code>{" "}
              em qualquer componente ou container.
            </p>
          </div>

          {colorVariations.map((variation) => (
            <div key={variation.name} className="space-y-3">
              <div className="flex items-center gap-3">
                <h3 className="heading-xs">{variation.label}</h3>
                <span className="text-xs text-muted-foreground">{variation.description}</span>
                {variation.className && (
                  <code className="text-xs font-mono bg-muted px-1.5 py-0.5 rounded">
                    .{variation.className}
                  </code>
                )}
              </div>
              <div className={variation.className}>
                <div className="flex gap-1.5 flex-wrap">
                  {variationTokens.map((token) => (
                    <div key={token} className="text-center">
                      <div
                        className="h-10 w-10 rounded-md border border-border/30"
                        style={{ backgroundColor: `var(--${token})` }}
                      />
                      <p className="text-[9px] font-mono text-muted-foreground mt-1 w-10 truncate">
                        {token.replace("-foreground", "-fg")}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-3 items-center flex-wrap">
                  <div className="rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-medium">
                    Primary
                  </div>
                  <div className="rounded-lg bg-secondary text-secondary-foreground px-4 py-2 text-sm font-medium border border-border">
                    Secondary
                  </div>
                  <div className="rounded-lg bg-muted text-muted-foreground px-4 py-2 text-sm font-medium">
                    Muted
                  </div>
                  <div className="rounded-lg bg-accent text-accent-foreground px-4 py-2 text-sm font-medium">
                    Accent
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ====== ALPHA / OVERLAY ====== */}
        <section id="alpha" className="space-y-4 scroll-mt-8">
          <h2 className="text-xl font-semibold">Alpha / Overlay</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="relative h-20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,white_0%_50%)] bg-[length:16px_16px]" />
                <div className="absolute inset-0" style={{ backgroundColor: "var(--alpha-backdrop)" }} />
              </div>
              <p className="text-sm font-mono">alpha-backdrop</p>
              <p className="text-xs text-muted-foreground">rgba(0,0,0,0.6) — modais, drawers</p>
            </div>
            <div className="space-y-2">
              <div className="relative h-20 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-conic-gradient(#e5e5e5_0%_25%,white_0%_50%)] bg-[length:16px_16px]" />
                <div className="absolute inset-0" style={{ backgroundColor: "var(--alpha-overlay)" }} />
              </div>
              <p className="text-sm font-mono">alpha-overlay</p>
              <p className="text-xs text-muted-foreground">rgba(255,255,255,0.6) — loading states</p>
            </div>
          </div>
        </section>

        {/* ====== CHART COLORS ====== */}
        <section id="graficos" className="space-y-4 scroll-mt-8">
          <h2 className="text-xl font-semibold">Cores de Grafico</h2>
          <div className="flex gap-3">
            {chartColors.map((color) => (
              <div key={color.token} className="flex-1 space-y-2 text-center">
                <div
                  className="h-16 rounded-lg border border-border"
                  style={{ backgroundColor: `var(--${color.token})` }}
                />
                <p className="text-xs font-mono text-muted-foreground">{color.token}</p>
                <p className="text-xs text-muted-foreground">{color.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ====== BORDER RADIUS ====== */}
        <section id="radius" className="space-y-4 scroll-mt-8">
          <h2 className="text-xl font-semibold">Border Radius</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {radiusTokens.map((radius) => (
              <div key={radius.classe} className="space-y-2 text-center">
                <div
                  className="h-20 w-full border-2 border-foreground/20 bg-muted"
                  style={{ borderRadius: radius.valor }}
                />
                <p className="text-sm font-mono font-medium">{radius.classe}</p>
                <p className="text-xs text-muted-foreground">{radius.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ====== SHADOWS ====== */}
        <section id="shadows" className="space-y-4 scroll-mt-8">
          <h2 className="text-xl font-semibold">Shadows</h2>
          <p className="text-sm text-muted-foreground">
            Escala de elevacao com 5 niveis. Os valores se adaptam automaticamente ao light/dark mode.
            No dark, as sombras sao mais fortes e incluem uma borda sutil de luz.
          </p>
          <div className="grid gap-6">
            {[
              { token: "shadow-xs", classe: "shadow-xs", description: "Inputs, elementos sutis", uso: "Input, Badge" },
              { token: "shadow-sm", classe: "shadow-sm", description: "Cards em repouso, elementos elevados", uso: "Card, Button outline" },
              { token: "shadow-md", classe: "shadow-md", description: "Cards em hover, dropdowns", uso: "Card:hover, Select" },
              { token: "shadow-lg", classe: "shadow-lg", description: "Popovers, menus flutuantes", uso: "Popover, Tooltip" },
              { token: "shadow-xl", classe: "shadow-xl", description: "Modais, toasts, elementos flutuantes", uso: "Dialog, Toast" },
            ].map((shadow) => (
              <div key={shadow.token} className="flex items-center gap-6">
                <div
                  className={`h-16 w-32 shrink-0 rounded-lg border border-border bg-card ${shadow.classe}`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-mono font-medium">{shadow.classe}</p>
                  <p className="text-xs text-muted-foreground">{shadow.description}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Uso: <span className="font-mono">{shadow.uso}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border border-border p-4 mt-6 space-y-3">
            <h3 className="heading-xs">Valores</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 font-medium">Token</th>
                    <th className="text-left p-2 font-medium">Light</th>
                    <th className="text-left p-2 font-medium">Dark</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-xs">
                  <tr className="border-b border-border">
                    <td className="p-2">shadow-xs</td>
                    <td className="p-2 text-muted-foreground">0 1px 2px rgba(0,0,0, 0.05)</td>
                    <td className="p-2 text-muted-foreground">0 1px 2px rgba(0,0,0, 0.40) + 1px border rgba(255,255,255, 0.03)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2">shadow-sm</td>
                    <td className="p-2 text-muted-foreground">0 1px 3px rgba(0,0,0, 0.08)</td>
                    <td className="p-2 text-muted-foreground">0 1px 3px rgba(0,0,0, 0.50) + 1px border rgba(255,255,255, 0.04)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2">shadow-md</td>
                    <td className="p-2 text-muted-foreground">0 4px 6px rgba(0,0,0, 0.08)</td>
                    <td className="p-2 text-muted-foreground">0 4px 6px rgba(0,0,0, 0.50) + 1px border rgba(255,255,255, 0.05)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2">shadow-lg</td>
                    <td className="p-2 text-muted-foreground">0 10px 15px rgba(0,0,0, 0.08)</td>
                    <td className="p-2 text-muted-foreground">0 10px 15px rgba(0,0,0, 0.60) + 1px border rgba(255,255,255, 0.05)</td>
                  </tr>
                  <tr>
                    <td className="p-2">shadow-xl</td>
                    <td className="p-2 text-muted-foreground">0 20px 25px rgba(0,0,0, 0.08)</td>
                    <td className="p-2 text-muted-foreground">0 20px 25px rgba(0,0,0, 0.60) + 1px border rgba(255,255,255, 0.06)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ====== SPACING ====== */}
        <section id="spacing" className="space-y-4 scroll-mt-8">
          <h2 className="text-xl font-semibold">Spacing</h2>
          <p className="text-sm text-muted-foreground">
            Usar a escala padrao do Tailwind. Nunca valores arbitrarios como{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">p-[13px]</code>.
          </p>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20].map((size) => (
              <div key={size} className="flex items-center gap-4">
                <span className="w-12 text-right text-sm font-mono text-muted-foreground">
                  {size}
                </span>
                <div
                  className="h-4 rounded-sm bg-primary"
                  style={{ width: `${size * 4}px` }}
                />
                <span className="text-xs text-muted-foreground">{size * 4}px</span>
              </div>
            ))}
          </div>
        </section>

        {/* ====== ICON SIZES ====== */}
        <section id="icons" className="space-y-4 scroll-mt-8">
          <h2 className="text-xl font-semibold">Icon Sizes</h2>
          <p className="text-sm text-muted-foreground">
            Tokens de tamanho e espessura de traço para ícones. Definidos em{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">ICON_SIZES</code>{" "}
            e aplicados automaticamente pelo{" "}
            <code className="bg-muted px-1.5 py-0.5 rounded text-foreground">CycleIcon</code>.
            O strokeWidth é sempre derivado do size — nunca configurado manualmente.
          </p>

          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left p-3 font-medium">Token</th>
                  <th className="text-left p-3 font-medium">Size (px)</th>
                  <th className="text-left p-3 font-medium">Stroke Width</th>
                  <th className="text-left p-3 font-medium">Preview</th>
                </tr>
              </thead>
              <tbody>
                {iconSizes.map((icon) => (
                  <tr key={icon.token} className="border-b border-border last:border-0">
                    <td className="p-3 font-mono text-xs font-medium">{icon.token}</td>
                    <td className="p-3 font-mono text-xs text-muted-foreground">{icon.size}</td>
                    <td className="p-3 font-mono text-xs text-muted-foreground">{icon.stroke}</td>
                    <td className="p-3">
                      <CycleIcon icon={Home} size={icon.token} decorative />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-border p-4 space-y-2">
            <p className="text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground shrink-0">•</span>
              <strong>Nunca</strong> renderize ícones Lucide diretamente. Sempre use{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">CycleIcon</code>.
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground shrink-0">•</span>
              O strokeWidth é compensado automaticamente para o viewBox 24x24 do Lucide,
              garantindo que o valor renderizado em pixels corresponda ao token.
            </p>
            <p className="text-sm text-muted-foreground flex gap-2">
              <span className="text-foreground shrink-0">•</span>
              Fonte da verdade:{" "}
              <code className="bg-muted px-1 py-0.5 rounded text-xs font-mono">src/components/icons/sizes.ts</code>
            </p>
          </div>
        </section>

        {/* ====== TIPOGRAFIA ====== */}
        <section id="tipografia" className="space-y-4 scroll-mt-8">
          <h2 className="text-xl font-semibold">Tipografia</h2>
          <div className="space-y-4">
            <div className="rounded-lg border border-border p-4">
              <p className="text-xs text-muted-foreground mb-2 font-mono">font-sans (Geist Sans)</p>
              <p className="font-sans text-2xl">The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="text-xs text-muted-foreground mb-2 font-mono">font-mono (Geist Mono)</p>
              <p className="font-mono text-2xl">The quick brown fox jumps over the lazy dog</p>
            </div>
          </div>
        </section>

        {/* ====== ESTILOS TIPOGRAFICOS ====== */}
        <section id="estilos" className="space-y-6 scroll-mt-8">
          <div>
            <h2 className="text-xl font-semibold">Estilos Tipograficos</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Classes utilitarias compostas do Figma. Cada classe aplica font-size,
              weight, line-height e letter-spacing de uma vez.
            </p>
          </div>

          {/* Body */}
          <div className="space-y-3">
            <h3 className="ui-overline text-muted-foreground">Body</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">body-xs</code>
                  <span className="text-xs text-muted-foreground">10px / 400 / 16px</span>
                </div>
                <p className="body-xs">The quick brown fox jumps over the lazy dog. Texto em body-xs para visualizacao.</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">body-sm</code>
                  <span className="text-xs text-muted-foreground">12px / 400 / 18px</span>
                </div>
                <p className="body-sm">The quick brown fox jumps over the lazy dog. Texto em body-sm para visualizacao.</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">body-md</code>
                  <span className="text-xs text-muted-foreground">14px / 400 / 20px</span>
                </div>
                <p className="body-md">The quick brown fox jumps over the lazy dog. Texto em body-md para visualizacao.</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">body-lg</code>
                  <span className="text-xs text-muted-foreground">16px / 400 / 24px</span>
                </div>
                <p className="body-lg">The quick brown fox jumps over the lazy dog. Texto em body-lg para visualizacao.</p>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h3 className="ui-overline text-muted-foreground">Heading</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">heading-xs</code>
                  <span className="text-xs text-muted-foreground">14px / 600 / 20px / tight</span>
                </div>
                <p className="heading-xs">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">heading-sm</code>
                  <span className="text-xs text-muted-foreground">16px / 600 / 24px / tight</span>
                </div>
                <p className="heading-sm">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">heading-md</code>
                  <span className="text-xs text-muted-foreground">18px / 600 / 28px / tight</span>
                </div>
                <p className="heading-md">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">heading-lg</code>
                  <span className="text-xs text-muted-foreground">20px / 600 / 30px / tight</span>
                </div>
                <p className="heading-lg">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">heading-xl</code>
                  <span className="text-xs text-muted-foreground">24px / 600 / 32px / tight</span>
                </div>
                <p className="heading-xl">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">heading-2xl</code>
                  <span className="text-xs text-muted-foreground">32px / 700 / 40px / tight</span>
                </div>
                <p className="heading-2xl">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">heading-3xl</code>
                  <span className="text-xs text-muted-foreground">40px / 700 / 48px / tight</span>
                </div>
                <p className="heading-3xl">The quick brown fox jumps over the lazy dog</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">heading-4xl</code>
                  <span className="text-xs text-muted-foreground">48px / 700 / 60px / tighter</span>
                </div>
                <p className="heading-4xl">The quick brown fox</p>
              </div>
            </div>
          </div>

          {/* Display */}
          <div className="space-y-3">
            <h3 className="ui-overline text-muted-foreground">Display</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">display-md</code>
                  <span className="text-xs text-muted-foreground">64px / 700 / 82px / tighter</span>
                </div>
                <p className="display-md">Display bold</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">display-md-light</code>
                  <span className="text-xs text-muted-foreground">64px / 300 / 82px / tighter</span>
                </div>
                <p className="display-md-light">Display light</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">display-lg</code>
                  <span className="text-xs text-muted-foreground">72px / 700 / 90px / tighter</span>
                </div>
                <p className="display-lg">Display bold</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">display-lg-light</code>
                  <span className="text-xs text-muted-foreground">72px / 300 / 90px / tighter</span>
                </div>
                <p className="display-lg-light">Display light</p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="space-y-3">
            <h3 className="ui-overline text-muted-foreground">Button</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">button-sm</code>
                  <span className="text-xs text-muted-foreground">12px / 500 / 12px</span>
                </div>
                <p className="button-sm">Button small text</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">button-md</code>
                  <span className="text-xs text-muted-foreground">14px / 500 / 14px</span>
                </div>
                <p className="button-md">Button medium text</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">button-lg</code>
                  <span className="text-xs text-muted-foreground">16px / 500 / 16px</span>
                </div>
                <p className="button-lg">Button large text</p>
              </div>
            </div>
          </div>

          {/* UI */}
          <div className="space-y-3">
            <h3 className="ui-overline text-muted-foreground">UI</h3>
            <div className="space-y-4">
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">ui-label</code>
                  <span className="text-xs text-muted-foreground">14px / 500 / 14px</span>
                </div>
                <p className="ui-label">Label text for form elements</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">ui-caption</code>
                  <span className="text-xs text-muted-foreground">12px / 400 / 16px</span>
                </div>
                <p className="ui-caption">Caption text for supporting information</p>
              </div>
              <div className="rounded-lg border border-border p-4">
                <div className="flex items-baseline justify-between mb-2">
                  <code className="text-xs font-mono text-muted-foreground">ui-overline</code>
                  <span className="text-xs text-muted-foreground">12px / 500 / 16px / wide / uppercase</span>
                </div>
                <p className="ui-overline">Overline text for section labels</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
