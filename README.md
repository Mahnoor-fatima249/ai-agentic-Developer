# 🤖 AI Agentic Developer Platform

A modern Full Stack AI-powered Developer Workspace built with **Next.js**, **Node.js**, **Express.js**, **MongoDB**, and **Groq AI**.

This platform helps developers manage projects, tasks, team collaboration, notes, GitHub repositories, and interact with AI assistants from a single dashboard.

---

## 🚀 Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Authentication
- Secure Password Hashing (bcrypt)

### 📁 Project Management
- Create Projects
- View Projects
- Update Projects
- Delete Projects

### ✅ Task Management
- Create Tasks
- Track Task Status
- Update Tasks
- Delete Tasks

### 📝 Notes Management
- Create Notes
- Save Notes
- Delete Notes

### 👥 Team Management
- Invite Team Members
- Store Team Information
- Online / Offline Status
- Delete Members

### 🤖 AI Assistant
- Chat with AI
- Powered by Groq LLM
- Instant AI Responses

### 💬 Team Chat
- AI Chat Interface
- Real-time Ready UI
- Backend Connected

### 🐙 GitHub Integration
- Fetch GitHub Repositories
- GitHub API Integration
- Repository Viewer

---

# 🛠 Tech Stack

## Frontend

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Axios

## AI

- Groq API
- Llama Models

---

# 📂 Project Structure

```
ai-agentic-developer
│
├── app
│   ├── assistant
│   ├── chat
│   ├── github
│   ├── notes
│   ├── projects
│   ├── tasks
│   ├── team
│   └── auth
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   └── server.js
│
├── components
├── lib
├── public
└── types
```

---

# ⚡ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/ai-agentic-developer.git
```

Go inside the project

```bash
cd ai-agentic-developer
```

---

## Frontend

Install packages

```bash
npm install
```

Create

```
.env.local
```

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Run

```bash
npm run dev
```

Frontend runs on

```
http://localhost:3000
```

---

## Backend

Go to backend

```bash
cd backend
```

Install packages

```bash
npm install
```

Create

```
.env
```

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET

GROQ_API_KEY=YOUR_GROQ_API_KEY

GITHUB_TOKEN=YOUR_GITHUB_TOKEN
```

Run

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

## Projects

```
GET /api/projects
POST /api/projects
PUT /api/projects/:id
DELETE /api/projects/:id
```

## Tasks

```
GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
```

## Notes

```
GET /api/notes
POST /api/notes
DELETE /api/notes/:id
```

## Team

```
GET /api/team
POST /api/team
DELETE /api/team/:id
```

## AI Chat

```
POST /api/chat
```

## GitHub

```
GET /api/github/repos
```

---

# ✨ Current Modules

- ✅ Authentication
- ✅ Projects CRUD
- ✅ Tasks CRUD
- ✅ Notes CRUD
- ✅ Team CRUD
- ✅ AI Chat Assistant
- ✅ GitHub Integration
- ✅ Responsive Dashboard

---

# 🔮 Future Improvements

- Google Authentication
- GitHub OAuth
- File Uploads
- AI Code Generation
- Real-time Team Chat
- Notifications
- Calendar
- AI Task Planner
- Dark / Light Theme
- Docker Deployment

---

# 👨‍💻 Developed By

**Mahnoor Fatima**

AI & Backend Developer

**Lokesh Kumar**

Frontend Developer

---

# 📜 License

This project is licensed under the MIT License.

---


