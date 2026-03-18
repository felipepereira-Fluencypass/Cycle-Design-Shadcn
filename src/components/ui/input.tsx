import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.ComponentProps<"input"> {
  inputSize?: "sm" | "default" | "lg"
}

function Input({ className, type, inputSize = "default", ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-size={inputSize}
      className={cn(
        "w-full min-w-0 rounded-lg border border-neutral-border bg-transparent text-neutral-foreground shadow-xs transition-[color,border-color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:border-0 file:bg-transparent file:font-medium file:text-neutral-foreground placeholder:text-neutral-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-input dark:bg-input/30 dark:shadow-none",
        "hover:border-ring hover:bg-ring/5",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:bg-ring/5",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-invalid:hover:border-destructive dark:aria-invalid:ring-destructive/40",
        inputSize === "sm" && "h-8 px-3 py-2 text-sm",
        inputSize === "default" && "h-10 px-4 py-2 text-sm",
        inputSize === "lg" && "h-12 px-4 py-3 text-base",
        className
      )}
      {...props}
    />
  )
}

export { Input }
