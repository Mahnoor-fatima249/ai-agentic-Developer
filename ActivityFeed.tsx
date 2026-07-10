import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

export interface ActivityItem {
  id: string;
  icon: LucideIcon;
  text: string;
  time: string;
}

export default function ActivityFeed({ items }: { items: ActivityItem[] }) {
  return (
    <Card className="overflow-hidden">
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className={`flex items-center gap-3 px-4 py-3 ${
              i !== items.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <div className="h-8 w-8 rounded-md bg-mono-500/10 flex items-center justify-center shrink-0">
              <Icon size={15} strokeWidth={1.8} className="text-text-primary" />
            </div>
            <span className="text-sm text-text-primary flex-1">{item.text}</span>
            <span className="text-xs text-text-secondary shrink-0">{item.time}</span>
          </div>
        );
      })}
    </Card>
  );
}
