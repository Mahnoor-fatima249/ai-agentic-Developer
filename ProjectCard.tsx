"use client";

import { FolderKanban, Pencil, Trash2, Github } from "lucide-react";

import { Card } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

interface Project {
  _id: string;
  title: string;
  description: string;
  status: string;
  githubRepo: string;
}

interface Props {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const statusVariant: Record<string, any> = {
  Planning: "warning",
  "In Progress": "info",
  Completed: "success",
};

export default function ProjectCard({
  project,
  onEdit,
  onDelete,
}: Props) {
  return (
    <Card className="p-5 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="h-12 w-12 rounded-xl bg-slate-800 flex items-center justify-center">
          <FolderKanban size={22} />
        </div>

        <Badge
          variant={
            statusVariant[project.status] || "default"
          }
        >
          {project.status}
        </Badge>

      </div>

      {/* Title */}
      <div>

        <h2 className="text-xl font-bold">
          {project.title}
        </h2>

        <p className="text-sm text-gray-400 mt-2">
          {project.description}
        </p>

      </div>

      {/* Github Repo */}
      <div className="flex items-center gap-2 text-sm text-gray-400">

        <Github size={16} />

        <span className="truncate">
          {project.githubRepo || "No Repository"}
        </span>

      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-2">

        <Button
          className="flex-1"
          variant="secondary"
          onClick={() => onEdit(project)}
        >
          <Pencil size={15} />
          Edit
        </Button>

        <Button
          className="flex-1"
          variant="danger"
          onClick={() => {
            if (
              confirm(
                "Delete this project permanently?"
              )
            ) {
              onDelete(project._id);
            }
          }}
        >
          <Trash2 size={15} />
          Delete
        </Button>

      </div>

    </Card>
  );
}