import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            Cycle Design System
          </span>
          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-foreground font-medium">
              Home
            </Link>
            <Link
              href="/docs"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Setup Guide
            </Link>
            <Link
              href="/docs/tokens"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tokens
            </Link>
            <Link
              href="/docs/components"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Componentes
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Cycle Design System
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Biblioteca de componentes customizada para a marca Cycle, construida
            sobre shadcn/ui + Next.js + Tailwind CSS 4. Devs e IAs geram
            front-end consistente usando componentes padronizados.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-3">
          <Link
            href="/docs"
            className="group rounded-lg border border-border p-6 hover:border-foreground/20 transition-colors"
          >
            <h2 className="text-lg font-semibold mb-2">Setup Guide</h2>
            <p className="text-sm text-muted-foreground">
              Como instalar e configurar o Design System no seu projeto.
            </p>
          </Link>

          <Link
            href="/docs/tokens"
            className="group rounded-lg border border-border p-6 hover:border-foreground/20 transition-colors"
          >
            <h2 className="text-lg font-semibold mb-2">Tokens</h2>
            <p className="text-sm text-muted-foreground">
              Cores, tipografia, spacing e radius do sistema.
            </p>
          </Link>

          <Link
            href="/docs/components"
            className="group rounded-lg border border-border p-6 hover:border-foreground/20 transition-colors"
          >
            <h2 className="text-lg font-semibold mb-2">Componentes</h2>
            <p className="text-sm text-muted-foreground">
              Catalogo de componentes disponiveis e exemplos de uso.
            </p>
          </Link>
        </div>

        {/* Status */}
        <div className="mt-12 rounded-lg border border-border p-6">
          <h2 className="text-lg font-semibold mb-4">Status Atual</h2>
          <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
            <div>
              <p className="text-muted-foreground">Primitives</p>
              <p className="font-mono font-semibold">0</p>
            </div>
            <div>
              <p className="text-muted-foreground">Layout</p>
              <p className="font-mono font-semibold">0</p>
            </div>
            <div>
              <p className="text-muted-foreground">Composites</p>
              <p className="font-mono font-semibold">0</p>
            </div>
            <div>
              <p className="text-muted-foreground">Hooks</p>
              <p className="font-mono font-semibold">0</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
