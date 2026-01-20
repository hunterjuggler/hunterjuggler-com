
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "inline-block outline-0 cursor-pointer rounded-md border-2 border-[#ED1C24] bg-[#ED1C24] text-white p-2 shadow-[rgba(0,0,0,0.07)_0px_2px_4px_0px,rgba(0,0,0,0.05)_0px_1px_1.5px_0px] font-extrabold text-base h-[42px] hover:bg-transparent hover:text-[#ED1C24] transition-colors duration-200",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md shadow-destructive/20",
        outline:
          "border-2 border-[#ED1C24] bg-transparent text-[#ED1C24] hover:bg-[#ED1C24] hover:text-white shadow-[rgba(0,0,0,0.07)_0px_2px_4px_0px,rgba(0,0,0,0.05)_0px_1px_1.5px_0px] font-extrabold text-base h-[42px] transition-colors duration-200",
        secondary:
          "inline-block outline-0 cursor-pointer rounded-md border-2 border-[#ED1C24] bg-[#ED1C24] text-white p-2 shadow-[rgba(0,0,0,0.07)_0px_2px_4px_0px,rgba(0,0,0,0.05)_0px_1px_1.5px_0px] font-extrabold text-base h-[42px] hover:bg-transparent hover:text-[#ED1C24] transition-colors duration-200",
        ghost: "hover:bg-[#ED1C24]/10 hover:text-[#ED1C24]",
        link: "text-[#ED1C24] underline-offset-4 hover:underline",
        gradient: "inline-block outline-0 cursor-pointer rounded-md border-2 border-[#ED1C24] bg-[#ED1C24] text-white p-2 shadow-[rgba(0,0,0,0.07)_0px_2px_4px_0px,rgba(0,0,0,0.05)_0px_1px_1.5px_0px] font-extrabold text-base h-[42px] hover:bg-transparent hover:text-[#ED1C24] transition-colors duration-200",
        glowing: "inline-block outline-0 cursor-pointer rounded-md border-2 border-[#ED1C24] bg-[#ED1C24] text-white p-2 shadow-[rgba(0,0,0,0.07)_0px_2px_4px_0px,rgba(0,0,0,0.05)_0px_1px_1.5px_0px,0_0_15px_rgba(237,28,36,0.5)] font-extrabold text-base h-[42px] hover:bg-transparent hover:text-[#ED1C24] hover:shadow-[rgba(0,0,0,0.07)_0px_2px_4px_0px,rgba(0,0,0,0.05)_0px_1px_1.5px_0px,0_0_20px_rgba(237,28,36,0.6)] transition-colors duration-200",
        'outline-gradient': "inline-block outline-0 cursor-pointer rounded-md border-2 border-[#ED1C24] bg-transparent text-[#ED1C24] p-2 shadow-[rgba(0,0,0,0.07)_0px_2px_4px_0px,rgba(0,0,0,0.05)_0px_1px_1.5px_0px] font-extrabold text-base h-[42px] hover:bg-[#ED1C24] hover:text-white transition-colors duration-200",
      },
      size: {
        default: "h-[42px] px-5 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
        "3d": "h-12 px-6 py-3 translate-y-[-4px] active:translate-y-[-2px] border-b-4 border-[#ED1C24]/50",
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
