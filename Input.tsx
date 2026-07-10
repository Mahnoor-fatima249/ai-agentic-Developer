import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3 text-text-secondary">{icon}</span>
        )}
        <input
          ref={ref}
          className={cn(
            "h-10 w-full rounded-[var(--radius-control)] border border-border bg-surface px-3 text-sm text-text-primary placeholder:text-text-secondary outline-none transition-colors",
            "focus:border-mono-500 focus:ring-1 focus:ring-mono-500",
            "disabled:opacity-50 disabled:pointer-events-none",
            icon && "pl-9",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
