import express from "express";

import {
  getRepositories,
} from "../controllers/githubController.js";

const router = express.Router();

// Get GitHub Repositories
router.get("/repos", getRepositories);

export default router;