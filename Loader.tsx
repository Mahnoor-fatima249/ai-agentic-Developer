import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Loader({ className, label }: { className?: string; label?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-2 py-10 text-text-secondary", className)}>
      <Loader2 size={20} className="animate-spin" />
      {label && <span className="text-xs">{label}</span>}
    </div>
  );
}
