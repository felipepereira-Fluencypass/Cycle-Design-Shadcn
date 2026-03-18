"use client"

import * as React from "react"
import { Home, PanelLeftClose, PanelLeftOpen, EllipsisVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
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

  return (
    <header
      className={cn(
        "flex items-center gap-6 border-b border-border bg-muted p-6 max-[740px]:p-4",
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
        <span className="heading-md truncate max-[740px]:hidden">
          {courseName}
        </span>
      </div>

      {/* Center — Class logo */}
      <ClassLogo size="lg" className="shrink-0" />

      {/* Right — Desktop actions */}
      <div className="flex flex-1 items-center justify-end gap-3 min-w-0 max-[740px]:hidden">
        <ThemeToggle variant="outline" size="icon" />
        <Button variant="outline" onClick={onNavigateHome}>
          <Home /> Ir para o inicio
        </Button>
      </div>

      {/* Right — Mobile actions (bottom sheet) */}
      <div className="flex flex-1 items-center justify-end min-w-0 min-[741px]:hidden">
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
            <div className="flex flex-col gap-2 px-4 pb-6">
              <div className="flex items-center justify-between rounded-lg border border-border p-3">
                <span className="text-sm font-medium">Tema</span>
                <ThemeToggle variant="outline" size="icon-sm" />
              </div>
              <Button variant="outline" className="w-full justify-start" onClick={onNavigateHome}>
                <Home /> Ir para o inicio
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
