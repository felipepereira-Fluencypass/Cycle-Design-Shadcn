"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarItems = [
  { label: "Introducao", href: "/docs/components" },
  { type: "separator" as const, label: "Primitives" },
  { label: "Button", href: "/docs/components/button" },
  { label: "Input", href: "/docs/components/input" },
  { label: "Tabs", href: "/docs/components/tabs" },
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
    <div className="flex gap-10">
      {/* Sidebar */}
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
