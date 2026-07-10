"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ListChecks, Sparkles, MessageCircle, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { label: "Home", href: "/dashboard", icon: LayoutDashboard },
  { label: "Assistant", href: "/assistant", icon: Sparkles },
  { label: "Tasks", href: "/tasks", icon: ListChecks },
  { label: "Chat", href: "/chat", icon: MessageCircle },
  { label: "More", href: "/projects", icon: Menu },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-20 flex items-center justify-around border-t border-border bg-surface h-14">
      {items.map((item) => {
        const active = pathname === item.href;
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center gap-0.5 text-[10px]",
              active ? "text-text-primary" : "text-text-secondary"
            )}
          >
            <Icon size={18} strokeWidth={1.8} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
