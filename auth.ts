import { api } from "./api";

const TOKEN_KEY = "agentic_token";

export function saveToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export async function login(
  email: string,
  password: string
) {
  const data = await api.post<any>(
    "/api/auth/login",
    {
      email,
      password,
    }
  );

  saveToken(data.token);

  return data;
}

export async function register(
  name: string,
  email: string,
  password: string
) {
  const data = await api.post<any>(
    "/api/auth/register",
    {
      name,
      email,
      password,
    }
  );

  saveToken(data.token);

  return data;
}

export async function getCurrentUser() {
  return api.get("/api/auth/me");
}