"use client";

import { X } from "lucide-react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";

interface TaskModalProps {
  open: boolean;
  onClose: () => void;
}

export default function TaskModal({ open, onClose }: TaskModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-mono-900/40 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>New task</CardTitle>
          <button onClick={onClose} className="text-text-secondary hover:text-text-primary">
            <X size={16} />
          </button>
        </CardHeader>
        <div className="p-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-text-secondary">Title</label>
            <Input placeholder="e.g. Fix auth token refresh bug" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-text-secondary">Description</label>
            <Textarea placeholder="Give the AI agent enough context to work with…" />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button variant="secondary" size="sm" onClick={onClose}>
              Cancel
            </Button>
            <Button size="sm" onClick={onClose}>
              Create task
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
