import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

// Extend the button variants to include a success variant
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        success: "bg-green-500 text-primary-foreground hover:bg-green-500/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
  },
)

// Extend the Button component to include the success variant
export interface SuccessButtonProps extends ButtonProps {
  variant?: "success" | ButtonProps["variant"]
}

// This component is not actually needed since we're using the variant directly
// But I'm including it for completeness
export function SuccessButton({ className, variant, ...props }: SuccessButtonProps) {
  return (
    <Button
      className={cn(variant === "success" && buttonVariants({ variant: "success" }), className)}
      variant={variant === "success" ? "default" : variant}
      {...props}
    />
  )
}

