import { fetchRepositories } from "../services/githubService.js";

export const getRepositories = async (req, res) => {
  try {
    const repos = await fetchRepositories();

    res.json(repos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};