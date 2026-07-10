import axios from "axios";

export const fetchRepositories = async () => {
  try {
    const response = await axios.get(
      "https://api.github.com/user/repos",
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error.response?.data);

    throw new Error("Unable to fetch GitHub repositories.");
  }
};