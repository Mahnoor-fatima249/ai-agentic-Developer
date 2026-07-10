import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  size?: "sm" | "md" | "lg";
}

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, name, size = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-full bg-mono-900 text-mono-50 font-medium shrink-0",
          {
            sm: "h-7 w-7 text-[10px]",
            md: "h-9 w-9 text-xs",
            lg: "h-11 w-11 text-sm",
          }[size],
          className
        )}
        {...props}
      >
        {getInitials(name)}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

export default Avatar;
