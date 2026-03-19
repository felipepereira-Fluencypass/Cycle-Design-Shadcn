import * as React from "react"
import { cn } from "@/lib/utils"

export interface ListTaskCourseProps {
  children: React.ReactNode
  className?: string
}

function ListTaskCourse({ children, className }: ListTaskCourseProps) {
  return (
    <div data-slot="list-task-course" className={cn("flex flex-col", className)}>
      {children}
    </div>
  )
}

export { ListTaskCourse }
