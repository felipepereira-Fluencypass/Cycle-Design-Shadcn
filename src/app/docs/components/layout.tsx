"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { label: "Introducao", href: "/docs/components" },
  { type: "separator" as const, label: "Primitives" },
  { label: "Accordion", href: "/docs/components/accordion" },
  { label: "Audio Player", href: "/docs/components/audio-player" },
  { label: "Badge", href: "/docs/components/badge" },
  { label: "Button", href: "/docs/components/button" },
  { label: "Checkbox", href: "/docs/components/checkbox" },
  { label: "File Card", href: "/docs/components/file-card" },
  { label: "Input", href: "/docs/components/input" },
  { label: "Progress", href: "/docs/components/progress" },
  { label: "Radio Group", href: "/docs/components/radio-group" },
  { label: "Progress Stage", href: "/docs/components/progress-stage" },
  { label: "Scroll Area", href: "/docs/components/scroll-area" },
  { label: "Sheet", href: "/docs/components/sheet" },
  { label: "Slider", href: "/docs/components/slider" },
  { label: "Switch", href: "/docs/components/switch" },
  { label: "Tabs", href: "/docs/components/tabs" },
  { label: "Video Player", href: "/docs/components/video-player" },
  { type: "separator" as const, label: "Composites" },
  { label: "Headers", href: "/docs/components/headers" },
  { label: "Sidebar Course", href: "/docs/components/sidebar-course" },
  { type: "separator" as const, label: "Brand" },
  { label: "Logos", href: "/docs/components/logos" },
]

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex gap-6 md:gap-10">
      {/* Sidebar — desktop only (mobile uses Sheet in header) */}
      <aside className="hidden md:block w-52 shrink-0">
        <nav className="sticky top-24 space-y-1">
          {sidebarItems.map((item, i) => {
            if ("type" in item && item.type === "separator") {
              return (
                <p
                  key={i}
                  className="pt-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider"
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
              <Link
                key={item.href}
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
            )
          })}
        </nav>
      </aside>

      {/* Content */}
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  )
}
