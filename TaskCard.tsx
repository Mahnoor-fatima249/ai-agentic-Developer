import { Card } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Avatar from "@/components/ui/Avatar";

export interface Task {
  id: string;
  title: string;
  assignee: string;
  tag: "coder" | "reviewer" | "planner" | "you";
}

const tagVariant = {
  coder: "warning",
  reviewer: "info",
  planner: "danger",
  you: "success",
} as const;

export function TaskCard({ task }: { task: Task }) {
  return (
    <Card className="p-3 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <Badge variant={tagVariant[task.tag]}>{task.tag}</Badge>
        <Avatar name={task.assignee} size="sm" />
      </div>
      <p className="text-sm text-text-primary">{task.title}</p>
    </Card>
  );
}

export function TaskColumn({ title, tasks }: { title: string; tasks: Task[] }) {
  return (
    <div className="flex flex-col gap-3 min-w-[240px] flex-1">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-text-primary">{title}</h3>
        <span className="text-xs text-text-secondary">{tasks.length}</span>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
