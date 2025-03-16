
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 button-flashy",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 animate-pulse-subtle",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md shadow-destructive/20",
        outline:
          "border-2 border-input bg-background hover:bg-accent/10 hover:text-accent-foreground hover:border-accent",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-primary to-red-400 text-primary-foreground hover:from-primary/90 hover:to-red-400/90 shadow-md shadow-primary/20 shine-effect",
        glowing: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_25px_rgba(255,0,0,0.8)] animate-pulse-subtle",
        'outline-gradient': "border-2 border-transparent bg-background red-gradient-border hover:bg-accent/5",
        'diamond': "bg-white text-primary relative overflow-hidden border-2 border-primary hover:text-white hover:bg-primary transition-all duration-500 before:content-[''] before:absolute before:w-8 before:h-8 before:rotate-45 before:bg-primary/20 before:-left-4 before:-top-4 after:content-[''] after:absolute after:w-8 after:h-8 after:rotate-45 after:bg-primary/20 after:-right-4 after:-bottom-4",
        'neon': "bg-black text-white border-2 border-primary shadow-[0_0_20px_rgba(255,0,0,0.8),inset_0_0_10px_rgba(255,0,0,0.5)] hover:shadow-[0_0_30px_rgba(255,0,0,1),inset_0_0_15px_rgba(255,0,0,0.8)] transition-all duration-300",
        'parallax': "relative bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 before:content-[''] before:absolute before:w-full before:h-full before:bg-primary/10 before:top-0 before:left-0 before:transform before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
        "3d": "h-12 px-6 py-3 translate-y-[-4px] active:translate-y-[-2px] border-b-4 border-primary/50",
        "xl": "h-14 px-10 py-4 text-lg font-bold",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
        pill: "rounded-3xl",
        slant: "clip-path-slant",
        diamond: "rotate-45 after:content-[''] after:absolute after:inset-0 after:-rotate-45 after:flex after:items-center after:justify-center",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
