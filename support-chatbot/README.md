# NovaSupportAI — Customer Support Chatbot
### Hackathon Submission | Category: Support Chat Bot

---

## 🧠 What It Does

NovaSupportAI is an AI-powered customer support chatbot for **NovaTech Solutions** (a fictional SaaS company). It handles:

- 🔐 Login & access issues (password reset, 2FA, SSO)
- 💳 Billing & subscription management
- 🐛 Bug reports & technical troubleshooting
- 👥 Team & permissions management
- 🔗 Integration help (Slack, Zapier, Google Workspace)
- ↩️ Refund requests

Powered by **Claude claude-sonnet-4-20250514** via the Anthropic API.

---

## 🗂️ Project Structure

```
support-chatbot/
├── backend/
│   ├── server.js          # Express API server
│   ├── package.json
│   └── .env.example       # Copy to .env and add your API key
├── frontend/
│   └── index.html         # Complete single-file frontend
└── README.md
```

---

## 🚀 Setup & Run

### Step 1 — Backend

```bash
cd backend
npm install
cp .env.example .env
# Add your Anthropic API key to .env
npm start
```

Backend runs at: `http://localhost:3001`

### Step 2 — Frontend

Open `frontend/index.html` in your browser **or** serve it with any static server:

```bash
# Option A: Python
cd frontend && python3 -m http.server 8080

# Option B: VS Code Live Server
# Right-click index.html → Open with Live Server
```

> The frontend connects to `http://localhost:3001` by default. No build step required.

---

## ⚙️ Tech Stack

| Layer     | Tech                                  |
|-----------|---------------------------------------|
| AI Model  | Claude claude-sonnet-4-20250514 (Anthropic)     |
| Backend   | Node.js + Express                     |
| Frontend  | Vanilla HTML/CSS/JS (no dependencies) |
| Fonts     | Syne + DM Sans + DM Mono (Google)     |

---

## ✨ Features

- **Conversational memory** — full multi-turn chat history
- **Typing indicator** — real-time UX feedback
- **Ticket ID generation** — auto-assigns NT-XXXX ticket reference
- **Quick actions sidebar** — one-click access to common issues
- **Suggestion chips** — onboarding help for new users
- **Export chat** — download conversation as `.txt`
- **Mobile responsive** — works on all screen sizes
- **Error handling** — graceful fallback with retry hint

---

## 🔑 Environment Variables

| Variable            | Description                        |
|---------------------|------------------------------------|
| `ANTHROPIC_API_KEY` | Your Anthropic API key (required)  |
| `PORT`              | Backend port (default: `3001`)     |

---

## 🏷️ Hackathon Info

- **Category:** Support Chat Bot
- **Built with:** Anthropic Claude API
- **Model:** claude-sonnet-4-20250514

---

*Built for the hackathon. All company names are fictional.*
