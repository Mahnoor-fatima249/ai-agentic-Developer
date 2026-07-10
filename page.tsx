"use client";

import { useState } from "react";
import { Send, Sparkles } from "lucide-react";

import { api } from "@/lib/api";

import { Card } from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

import ChatWindow, {
  Message,
} from "@/components/chat/ChatWindow";

export default function AssistantPage() {

  const [messages, setMessages] =
    useState<Message[]>([]);

  const [message, setMessage] =
    useState("");

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "You",
      text: message,
      self: true,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    const prompt = message;

    setMessage("");

    try {

      const res = await api.post<any>(
        "/api/chat",
        {
          message: prompt,
        }
      );

      const aiMessage: Message = {
        id: Date.now().toString(),
        sender: "AI Assistant",
        text: res.reply,
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (err) {

      console.log(err);

    }

  };

  return (

    <div className="flex flex-col gap-6 h-[calc(100vh-8rem)]">

      <div className="flex items-center gap-2">

        <Sparkles size={20} />

        <div>

          <h1 className="text-xl font-bold">
            AI Assistant
          </h1>

          <p>
            Chat with your coding assistant
          </p>

        </div>

      </div>

      <Card className="flex-1 flex flex-col">

        <div className="flex-1 overflow-y-auto">

          <ChatWindow
            messages={messages}
          />

        </div>

        <div className="border-t p-3 flex gap-2">

          <Input
            className="flex-1"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Ask AI..."
          />

          <Button
            onClick={sendMessage}
          >
            <Send size={16} />
          </Button>

        </div>

      </Card>

    </div>

  );
}