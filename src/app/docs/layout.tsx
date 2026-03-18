import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { CycleLogo } from "@/components/cycle-logo";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <CycleLogo />
            Cycle Design
          </Link>
          <div className="flex items-center gap-6">
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
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>
    </div>
  );
}
