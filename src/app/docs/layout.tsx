import Link from "next/link";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Cycle Design System
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
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

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
    </div>
  );
}
