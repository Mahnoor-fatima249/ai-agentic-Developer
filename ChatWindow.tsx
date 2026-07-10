import { cn } from "@/lib/utils";

export interface Message {
  id: string;
  sender: string;
  text: string;
  self?: boolean;
}

export function MessageBubble({ message }: { message: Message }) {
  return (
    <div className={cn("flex flex-col gap-1 max-w-[80%]", message.self ? "self-end items-end" : "self-start items-start")}>
      <span className="text-[10px] text-text-secondary px-1">{message.sender}</span>
      <div
        className={cn(
          "rounded-[var(--radius-control)] px-3 py-2 text-sm",
          message.self
            ? "bg-mono-900 text-mono-50"
            : "bg-mono-500/10 text-text-primary"
        )}
      >
        {message.text}
      </div>
    </div>
  );
}

export default function ChatWindow({ messages }: { messages: Message[] }) {
  return (
    <div className="flex flex-col gap-3 p-4">
      {messages.map((m) => (
        <MessageBubble key={m.id} message={m} />
      ))}
    </div>
  );
}
