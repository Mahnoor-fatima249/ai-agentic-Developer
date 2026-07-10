"use client";

import { Bell, Search } from "lucide-react";
import Input from "@/components/ui/Input";
import Avatar from "@/components/ui/Avatar";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between h-14 px-5 border-b border-border bg-surface sticky top-0 z-10">
      <div className="w-64">
        <Input
          placeholder="Search projects…"
          icon={<Search size={15} />}
          className="h-9 text-xs"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="text-text-secondary hover:text-text-primary transition-colors">
          <Bell size={18} strokeWidth={1.8} />
        </button>
        <Avatar name="Ali Raza" size="sm" />
      </div>
    </header>
  );
}
