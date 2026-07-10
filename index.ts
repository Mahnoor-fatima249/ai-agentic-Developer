export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "planning" | "archived";
}

export interface TaskItem {
  id: string;
  title: string;
  status: "backlog" | "planned" | "in_progress" | "review" | "done";
  assignee: string;
}

export interface ChatMessage {
  id: string;
  sender: string;
  text: string;
  createdAt: string;
}
