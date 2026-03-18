import { type LucideIcon } from "lucide-react"
import { GraduationCap, UserLock, MessagesSquare } from "lucide-react"

import { cn } from "@/lib/utils"
import { CycleIcon, type IconSize } from "@/components/icons"

const sizeMap = {
  xs: { icon: "xs" as IconSize, text: "button-sm" },
  sm: { icon: "sm" as IconSize, text: "heading-xs" },
  md: { icon: "md" as IconSize, text: "heading-sm" },
  lg: { icon: "lg" as IconSize, text: "heading-md" },
  xl: { icon: "xl" as IconSize, text: "heading-lg" },
} as const

type ProductLogoSize = keyof typeof sizeMap

interface ProductLogoProps {
  icon: LucideIcon
  label: string
  size?: ProductLogoSize
  className?: string
}

export function ProductLogo({ icon, label, size = "sm", className }: ProductLogoProps) {
  const { icon: iconSize, text } = sizeMap[size]
  return (
    <span className={cn("inline-flex items-center", size === "xs" ? "gap-1" : "gap-2", className)}>
      <CycleIcon icon={icon} size={iconSize} decorative />
      <span className={cn(text, "text-neutral-foreground")}>{label}</span>
    </span>
  )
}

/* Pre-built product logos */
export function ClassLogo({ size = "sm", className }: { size?: ProductLogoSize; className?: string }) {
  return <ProductLogo icon={GraduationCap} label="Class" size={size} className={cn("theme-class text-foreground", className)} />
}

export function PrivateTalkLogo({ size = "sm", className }: { size?: ProductLogoSize; className?: string }) {
  return <ProductLogo icon={UserLock} label="Private Talk" size={size} className={cn("theme-private text-foreground", className)} />
}

export function GroupTalkLogo({ size = "sm", className }: { size?: ProductLogoSize; className?: string }) {
  return <ProductLogo icon={MessagesSquare} label="Group Talk" size={size} className={cn("theme-group text-foreground", className)} />
}
