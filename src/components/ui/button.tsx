
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-center from-white to-white/60 font-bold text-black border-style-none box-shadow-inset appearance-none transition-all hover:scale-1125 hover:bg-amber-300 hover:shadow-white active:scale-1025 custom-button",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md shadow-destructive/20",
        outline:
          "border-2 border-white bg-gradient-to-center from-white to-white/20 text-black hover:bg-white/10 shadow-[0_-12px_6px_inset_#ADCFFF] hover:shadow-[0_-6px_8px_inset_#FFFFFF] hover:scale-[1.125] active:scale-[1.025] transition-all custom-button",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
        ghost: "hover:bg-white/10 hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-center from-white to-white/60 font-bold text-black appearance-none shadow-[0_-12px_6px_inset_#ADCFFF] hover:bg-amber-300 hover:shadow-[0_-6px_8px_inset_#FFFFFF] hover:scale-[1.125] active:scale-[1.025] transition-all custom-button",
        glowing: "bg-gradient-to-center from-white to-white/20 font-bold text-black appearance-none shadow-[0_-12px_6px_inset_#ADCFFF,0_0_15px_rgba(255,255,255,0.5)] hover:bg-amber-300 hover:shadow-[0_-6px_8px_inset_#FFFFFF,0_0_20px_rgba(255,255,255,0.6)] hover:scale-[1.125] active:scale-[1.025] transition-all custom-button",
        'outline-gradient': "bg-gradient-to-center from-white to-white/10 font-bold text-black appearance-none shadow-[0_-12px_6px_inset_#ADCFFF] hover:bg-amber-300 hover:shadow-[0_-6px_8px_inset_#FFFFFF] hover:scale-[1.125] active:scale-[1.025] transition-all custom-button",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
        "3d": "h-12 px-6 py-3 translate-y-[-4px] active:translate-y-[-2px] border-b-4 border-primary/50",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
        pill: "rounded-[40em]",
        slant: "clip-path-slant",
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
