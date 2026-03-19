import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export interface SidebarCourseProps {
  /** Conteudo fixo no topo (ex: ProgressCourse) */
  header?: React.ReactNode
  /** Conteudo scrollavel (accordions, tasks, etc.) */
  children: React.ReactNode
  className?: string
}

function SidebarCourse({ header, children, className }: SidebarCourseProps) {
  return (
    <aside
      data-slot="sidebar-course"
      className={cn("flex flex-col w-full max-w-[354px] h-full", className)}
    >
      {header && <div className="shrink-0">{header}</div>}
      <ScrollArea className="flex-1">
        <div className="flex flex-col">{children}</div>
      </ScrollArea>
    </aside>
  )
}

export { SidebarCourse }
