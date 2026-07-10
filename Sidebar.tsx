"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Sparkles,
  ListChecks,
  Github,
  StickyNote,
  BarChart3,
  Users,
  MessageCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "AI Assistant", href: "/assistant", icon: Sparkles },
  { label: "Tasks", href: "/tasks", icon: ListChecks },
  { label: "GitHub", href: "/github", icon: Github },
  { label: "Notes", href: "/notes", icon: StickyNote },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Team", href: "/team", icon: Users },
  { label: "Chat", href: "/chat", icon: MessageCircle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-56 shrink-0 flex-col border-r border-border bg-surface h-screen sticky top-0">
      <div className="flex items-center gap-2 px-5 h-14 border-b border-border">
        <div className="h-5 w-5 rounded-md bg-mono-900" />
        <span className="text-sm font-medium text-text-primary">
          AI Agentic Developer
        </span>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2.5 rounded-[var(--radius-control)] px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-mono-500/10 text-text-primary font-medium"
                  : "text-text-secondary hover:bg-mono-500/10 hover:text-text-primary"
              )}
            >
              <Icon size={17} strokeWidth={1.8} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
