
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm",
        outline: "text-foreground",
        gradient: "border-transparent bg-gradient-to-r from-primary via-red-300 to-red-400 text-primary-foreground shadow-sm shine-effect",
        glow: "border-transparent bg-primary text-primary-foreground shadow-[0_0_15px_rgba(255,0,0,0.8)] animate-pulse-subtle",
        diamond: "relative border-2 border-primary bg-white text-primary before:absolute before:content-[''] before:w-2 before:h-2 before:bg-primary before:rotate-45 before:-left-1 before:top-1/2 before:-translate-y-1/2 after:absolute after:content-[''] after:w-2 after:h-2 after:bg-primary after:rotate-45 after:-right-1 after:top-1/2 after:-translate-y-1/2",
        neon: "border-2 border-primary text-primary bg-black shadow-[0_0_10px_rgba(255,0,0,0.5),inset_0_0_5px_rgba(255,0,0,0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
