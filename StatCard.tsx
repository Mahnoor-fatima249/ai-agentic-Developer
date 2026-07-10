import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
  accent?: "default" | "success" | "warning" | "danger";
}

export default function StatCard({ label, value, icon: Icon, accent = "default" }: StatCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs text-text-secondary">{label}</span>
        <Icon
          size={16}
          strokeWidth={1.8}
          className={cn(
            "text-text-secondary",
            accent === "success" && "text-success",
            accent === "warning" && "text-warning",
            accent === "danger" && "text-danger"
          )}
        />
      </div>
      <div className="text-2xl font-semibold text-text-primary">{value}</div>
    </Card>
  );
}
