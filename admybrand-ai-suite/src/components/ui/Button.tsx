// src/components/ui/Button.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-primary-start to-primary-end text-white hover:opacity-90 active:scale-95",
        secondary: "bg-secondary text-white hover:bg-secondary/90 active:scale-95",
        outline: "border border-border text-text-primary hover:bg-white/10 active:scale-95",
        ghost: "hover:bg-white/10 text-text-primary active:scale-95",
      },
      size: {
        sm: "h-9 rounded-md px-4",
        md: "h-10 px-5 py-2",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

const iconVariants = cva(
  "",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6",
        xl: "h-7 w-7",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  icon?: React.ComponentType<{ className?: string }>
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading, icon: Icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading 
          ? <Loader2 className={cn(iconVariants({ size }), children ? "mr-2" : "", "animate-spin")} />
          : Icon && <Icon className={cn(iconVariants({ size }), children ? "mr-2" : "")} />
        }
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants, iconVariants }