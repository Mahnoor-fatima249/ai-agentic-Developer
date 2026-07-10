import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import projectRoutes from "./routes/projects.js";
import taskRoutes from "./routes/tasks.js";
import githubRoutes from "./routes/github.js";
import chatRoutes from "./routes/chat.js";
import notesRoutes from "./routes/notes.js";
import teamRoutes from "./routes/team.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/team", teamRoutes);

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Agentic Developer Backend Running 🚀",
  });
});

export default app;