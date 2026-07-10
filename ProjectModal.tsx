"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

interface Project {
  _id?: string;
  title: string;
  description: string;
  status: string;
  githubRepo: string;
}

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (project: Project) => void;
  project?: Project | null;
}

export default function ProjectModal({
  open,
  onClose,
  onSave,
  project,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Planning");
  const [githubRepo, setGithubRepo] = useState("");

  useEffect(() => {
    if (project) {
      setTitle(project.title);
      setDescription(project.description);
      setStatus(project.status);
      setGithubRepo(project.githubRepo);
    } else {
      setTitle("");
      setDescription("");
      setStatus("Planning");
      setGithubRepo("");
    }
  }, [project]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-[#1f2937] rounded-xl p-6 w-[500px]">

        <h2 className="text-2xl font-bold mb-6 text-white">
          {project ? "Edit Project" : "New Project"}
        </h2>

        <div className="space-y-4">

          <div>
            <label className="block mb-2 text-sm">
              Project Name
            </label>

            <input
              className="w-full rounded-lg bg-[#111827] p-3 border border-gray-700"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Description
            </label>

            <textarea
              rows={4}
              className="w-full rounded-lg bg-[#111827] p-3 border border-gray-700"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">
              Status
            </label>

            <select
              className="w-full rounded-lg bg-[#111827] p-3 border border-gray-700"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Planning</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm">
              GitHub Repository
            </label>

            <input
              className="w-full rounded-lg bg-[#111827] p-3 border border-gray-700"
              value={githubRepo}
              onChange={(e) => setGithubRepo(e.target.value)}
            />
          </div>

        </div>

        <div className="flex justify-end gap-3 mt-6">

          <Button
            variant="secondary"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            onClick={() =>
              onSave({
                _id: project?._id,
                title,
                description,
                status,
                githubRepo,
              })
            }
          >
            {project ? "Update" : "Save"}
          </Button>

        </div>

      </div>

    </div>
  );
}