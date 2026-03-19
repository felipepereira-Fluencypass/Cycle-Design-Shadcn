"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { CycleLogo } from "@/components/cycle-logo"
import { CycleIcon } from "@/components/icons"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Setup Guide", href: "/docs" },
  { label: "Tokens", href: "/docs/tokens" },
  { label: "Componentes", href: "/docs/components" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger className="inline-flex size-9 items-center justify-center rounded-md text-foreground hover:bg-accent transition-colors md:hidden">
                <CycleIcon icon={Menu} size="sm" decorative />
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-0">
                <SheetHeader className="border-b border-border px-4 py-4">
                  <SheetTitle className="flex items-center gap-2 text-base font-semibold">
                    <CycleLogo />
                    Cycle Design
                  </SheetTitle>
                </SheetHeader>
                <nav className="px-3 py-4 space-y-1">
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <span className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <CycleLogo />
              Cycle Design
            </span>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.href === "/"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground transition-colors"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-20">
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Cycle Design
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Design System da Fluencypass, construido sobre shadcn/ui + Next.js +
            Tailwind CSS 4. Devs e IAs geram front-end consistente usando
            componentes padronizados.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-3">
          <Link
            href="/docs"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h2 className="text-lg font-semibold mb-2">Setup Guide</h2>
            <p className="text-sm text-muted-foreground">
              Como instalar e configurar o Design System no seu projeto.
            </p>
          </Link>

          <Link
            href="/docs/tokens"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
          >
            <h2 className="text-lg font-semibold mb-2">Tokens</h2>
            <p className="text-sm text-muted-foreground">
              Cores, tipografia, spacing e radius do sistema.
            </p>
          </Link>

          <Link
            href="/docs/components"
            className="group rounded-lg border border-border p-6 shadow-sm hover:shadow-md hover:border-foreground/20 transition-all"
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
              <p className="font-mono font-semibold">16</p>
            </div>
            <div>
              <p className="text-muted-foreground">Layout</p>
              <p className="font-mono font-semibold">0</p>
            </div>
            <div>
              <p className="text-muted-foreground">Composites</p>
              <p className="font-mono font-semibold">2</p>
            </div>
            <div>
              <p className="text-muted-foreground">Hooks</p>
              <p className="font-mono font-semibold">0</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
