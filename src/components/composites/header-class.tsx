"use client"

import * as React from "react"
import { Home, PanelLeftClose, PanelLeftOpen, EllipsisVertical, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { CycleIcon } from "@/components/icons"
import { ClassLogo } from "@/components/product-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

export interface HeaderClassProps {
  /** Nome do curso exibido ao lado do botao de sidebar (desktop only) */
  courseName: string
  /** Estado do menu lateral */
  isSidebarOpen?: boolean
  /** Callback para abrir/fechar o menu lateral */
  onToggleSidebar?: () => void
  /** Callback do botao "Ir para o inicio" */
  onNavigateHome?: () => void
  className?: string
}

export function HeaderClass({
  courseName,
  isSidebarOpen = false,
  onToggleSidebar,
  onNavigateHome,
  className,
}: HeaderClassProps) {
  const SidebarIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen
  const { theme, setTheme } = useTheme()

  return (
    <header
      className={cn(
        "flex items-center gap-3 border-b border-border bg-muted p-4 lg:gap-6 lg:p-6",
        className
      )}
    >
      {/* Left — Sidebar toggle + course name */}
      <div className="flex flex-1 items-center gap-3 min-w-0">
        <Button
          variant="outline"
          size="icon"
          aria-label={isSidebarOpen ? "Fechar menu lateral" : "Abrir menu lateral"}
          onClick={onToggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <span className="heading-md truncate hidden lg:inline">
          {courseName}
        </span>
      </div>

      {/* Center — Class logo */}
      <ClassLogo size="lg" className="shrink-0" />

      {/* Right — Desktop actions */}
      <div className="hidden lg:flex flex-1 items-center justify-end gap-3 min-w-0">
        <ThemeToggle variant="outline" size="icon" />
        <Button variant="outline" onClick={onNavigateHome}>
          <Home /> Ir para o inicio
        </Button>
      </div>

      {/* Right — Mobile actions (bottom sheet) */}
      <div className="flex flex-1 items-center justify-end min-w-0 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" aria-label="Mais opcoes">
              <EllipsisVertical />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="rounded-t-xl">
            <SheetHeader>
              <SheetTitle>Opcoes</SheetTitle>
            </SheetHeader>
            <ul className="pb-6">
              <li>
                <button
                  type="button"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <CycleIcon icon={theme === "dark" ? Moon : Sun} size="sm" decorative className="text-muted-foreground" />
                  <span>{theme === "dark" ? "Tema escuro" : "Tema claro"}</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="flex w-full items-center gap-3 px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <CycleIcon icon={Home} size="sm" decorative className="text-muted-foreground" />
                  <span>Ir para o inicio</span>
                </button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
