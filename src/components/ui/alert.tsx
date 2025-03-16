
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        primary: 
          "border-primary/50 text-primary [&>svg]:text-primary bg-primary/5",
        accent:
          "border-accent/50 text-accent [&>svg]:text-accent bg-accent/5",
        gradient:
          "border-none bg-gradient-to-r from-primary/20 via-red-300/20 to-red-400/20 text-foreground backdrop-blur-sm",
        diamond: 
          "border-primary bg-white text-primary relative overflow-hidden before:absolute before:content-[''] before:w-16 before:h-16 before:bg-primary/10 before:rotate-45 before:-left-8 before:-top-8 after:absolute after:content-[''] after:w-16 after:h-16 after:bg-primary/10 after:rotate-45 after:-right-8 after:-bottom-8",
        neon:
          "border-2 border-primary bg-black text-primary shadow-[0_0_20px_rgba(255,0,0,0.5),inset_0_0_5px_rgba(255,0,0,0.3)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
