import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "outline" | "ghost";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const VARIANT_STYLES: Record<Variant, string> = {
  default: "bg-brand text-white hover:opacity-90",
  outline: "border border-border bg-transparent hover:bg-muted",
  ghost: "bg-transparent hover:bg-muted",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
          VARIANT_STYLES[variant],
          className,
        )}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
