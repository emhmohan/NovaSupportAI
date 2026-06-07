const express = require("express");
const cors = require("cors");
const Anthropic = require("@anthropic-ai/sdk");

const app = express();
app.use(cors());
app.use(express.json());

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are NovaSupportAI, the intelligent customer support assistant for NovaTech Solutions — a SaaS company offering project management, analytics, and team collaboration tools.

Your personality:
- Friendly, efficient, and professional
- Speak concisely — no fluff, no filler
- Use emojis sparingly (1–2 per response max) only when it adds warmth
- Always confirm what the user needs before diving in

Your capabilities:
- Troubleshoot login, billing, integrations, and account issues
- Guide users through features (dashboards, reports, team settings)
- Escalate complex issues: say "I'll connect you with our team — expect a reply within 2 hours."
- Handle refund inquiries: validate within 30-day purchase window
- Provide status updates: always acknowledge delays empathetically

Topics you handle:
1. Account & Login Issues (password reset, 2FA, SSO)
2. Billing & Subscriptions (plans, invoices, refunds)
3. Product Features (how-to guides, tips)
4. Technical Bugs (collect info, log ticket)
5. Integrations (Slack, Zapier, Google Workspace, Jira)
6. Team & Permissions (admin roles, invites, access control)

Rules:
- NEVER make up policy details you're unsure of
- If unsure, say: "Let me confirm that for you — one moment."
- Keep responses under 120 words unless a step-by-step is needed
- Always end with a follow-up question or offer to help further`;

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  const { messages } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages array" });
  }

  try {
    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const reply = response.content[0]?.text || "Sorry, I couldn't process that.";

    res.json({
      message: reply,
      usage: response.usage,
    });
  } catch (err) {
    console.error("Anthropic API error:", err);
    res.status(500).json({ error: "AI service unavailable. Please try again." });
  }
});

// Suggested questions endpoint
app.get("/api/suggestions", (req, res) => {
  res.json({
    suggestions: [
      "How do I reset my password?",
      "I can't access my account after enabling 2FA",
      "How do I upgrade my plan?",
      "My dashboard is showing incorrect data",
      "How do I invite team members?",
      "I want a refund for my subscription",
      "How do I connect Slack integration?",
      "Where can I find my invoices?",
    ],
  });
});

// Health check
app.get("/health", (req, res) => res.json({ status: "ok", service: "NovaSupportAI" }));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ NovaSupportAI backend running on http://localhost:${PORT}`);
});
