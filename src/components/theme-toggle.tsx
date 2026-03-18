"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button, type ButtonProps } from "@/components/ui/button"
import { CycleIcon } from "@/components/icons"

interface ThemeToggleProps {
  variant?: ButtonProps["variant"]
  size?: ButtonProps["size"]
  className?: string
}

export function ThemeToggle({ variant = "ghost", size = "icon-sm", className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Alternar tema"
    >
      <CycleIcon icon={Sun} size="xs" decorative className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <CycleIcon icon={Moon} size="xs" decorative className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
