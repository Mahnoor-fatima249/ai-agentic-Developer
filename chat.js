import express from "express";

import {
  chat,
} from "../controllers/chatController.js";

const router = express.Router();

// AI Chat
router.post("/", chat);

export default router;