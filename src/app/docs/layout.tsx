"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Setup Guide", href: "/docs" },
  { label: "Tokens", href: "/docs/tokens" },
  { label: "Componentes", href: "/docs/components" },
]

const sidebarItems = [
  { type: "separator" as const, label: "Primitives" },
  { label: "Accordion", href: "/docs/components/accordion" },
  { label: "Audio Player", href: "/docs/components/audio-player" },
  { label: "Avatar", href: "/docs/components/avatar" },
  { label: "Badge", href: "/docs/components/badge" },
  { label: "Button", href: "/docs/components/button" },
  { label: "Chat", href: "/docs/components/chat" },
  { label: "Checkbox", href: "/docs/components/checkbox" },
  { label: "Cycle Icon", href: "/docs/components/cycle-icon" },
  { label: "File Card", href: "/docs/components/file-card" },
  { label: "Input", href: "/docs/components/input" },
  { label: "Label", href: "/docs/components/label" },
  { label: "Like Dislike", href: "/docs/components/like-dislike" },
  { label: "Progress", href: "/docs/components/progress" },
  { label: "Radio Group", href: "/docs/components/radio-group" },
  { label: "Progress Stage", href: "/docs/components/progress-stage" },
  { label: "Scroll Area", href: "/docs/components/scroll-area" },
  { label: "Sheet", href: "/docs/components/sheet" },
  { label: "Slider", href: "/docs/components/slider" },
  { label: "Switch", href: "/docs/components/switch" },
  { label: "Tabs", href: "/docs/components/tabs" },
  { label: "Textarea", href: "/docs/components/textarea" },
  { label: "Toggle", href: "/docs/components/toggle" },
  { label: "Video Player", href: "/docs/components/video-player" },
  { type: "separator" as const, label: "Brand" },
  { label: "Logos", href: "/docs/components/logos" },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isComponentsSection = pathname.startsWith("/docs/components")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
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
                <nav className="px-3 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-80px)]">
                  {/* Main nav */}
                  {navLinks.map((link) => (
                    <SheetClose key={link.href} asChild>
                      <Link
                        href={link.href}
                        className={cn(
                          "block rounded-md px-3 py-2 text-sm transition-colors",
                          (link.href === "/" ? pathname === "/" : pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)))
                            ? "bg-muted font-medium text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                        )}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}

                  {/* Component sidebar items (always visible in mobile menu) */}
                  {isComponentsSection && (
                    <>
                      <div className="pt-2 border-t border-border mt-2" />
                      {sidebarItems.map((item, i) => {
                        if ("type" in item && item.type === "separator") {
                          return (
                            <p
                              key={i}
                              className="pt-3 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3"
                            >
                              {item.label}
                            </p>
                          )
                        }

                        const isActive =
                          item.href === "/docs/components"
                            ? pathname === "/docs/components"
                            : pathname.startsWith(item.href!)

                        return (
                          <SheetClose key={item.href} asChild>
                            <Link
                              href={item.href!}
                              className={cn(
                                "block rounded-md px-3 py-1.5 text-sm transition-colors",
                                isActive
                                  ? "bg-muted font-medium text-foreground"
                                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                              )}
                            >
                              {item.label}
                            </Link>
                          </SheetClose>
                        )
                      })}
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
              <CycleLogo />
              Cycle Design
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6 text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">{children}</main>
    </div>
  )
}
