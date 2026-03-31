<div align="center">

```
██████╗ ██████╗  █████╗ ███████╗██╗  ██╗ █████╗ ███╗   ██╗████████╗
██╔══██╗██╔══██╗██╔══██╗██╔════╝██║  ██║██╔══██╗████╗  ██║╚══██╔══╝
██████╔╝██████╔╝███████║███████╗███████║███████║██╔██╗ ██║   ██║   
██╔═══╝ ██╔══██╗██╔══██║╚════██║██╔══██║██╔══██║██║╚██╗██║   ██║   
██║     ██║  ██║██║  ██║███████║██║  ██║██║  ██║██║ ╚████║   ██║   
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   
```

# Prashant Choudhary — Portfolio

**AI Systems · Backend Engineering · Developer Tooling**

[![Live Site](https://img.shields.io/badge/Live%20Site-prashant--portfolio--rosy.vercel.app-black?style=for-the-badge&logo=vercel&logoColor=white)](https://prashant-portfolio-rosy.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## What This Is

An interactive, single-page personal portfolio — built to feel like a professional vCard rather than a static resume site. Clean dark surfaces, section-based navigation, filtered project showcase, and a live AI chat widget that's ready to connect to any LLM backend.

> Built with Next.js 16, React 19, Framer Motion, and custom CSS. Deployable to Vercel in one click.

---

## Live Demo

**[→ prashant-portfolio-rosy.vercel.app](https://prashant-portfolio-rosy.vercel.app)**

---

## Sections

| Section | What's Inside |
|---|---|
| **About** | Professional summary, focus areas, core stack highlights |
| **Resume** | Education timeline, work experience, technical skills |
| **Portfolio** | Project cards with category filtering |
| **Experience** | Detailed experience cards with skill tags |
| **Contact** | GitHub, LinkedIn tiles + placeholder contact form |

---

## Tech Stack

```
Framework      Next.js 16 (App Router)
UI Library     React 19
Animation      Framer Motion
Styling        Tailwind CSS 4 tooling + custom CSS
Fonts          Google Fonts via next/font
Icons          Ionicons via next/script
Deployment     Vercel
```

---

## Project Structure

```
.
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js          # Chat API endpoint
│   ├── layout.js                 # Root layout + metadata
│   └── page.js                   # Main portfolio page (all content lives here)
├── components/                   # Reusable / experimental UI components
├── lib/
│   └── chatService.js            # Chat response logic
├── public/                       # Static assets
└── styles/
    ├── globals.css               # Base theme variables + global styles
    └── vcard.css                 # Layout, sidebar, section cards, chat UI
```

---

## Getting Started

### Prerequisites

- Node.js 20.x
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm run start
```

---

## Available Scripts

```bash
npm run dev      # Development server (with HMR)
npm run build    # Production build
npm run start    # Serve production build locally
npm run lint     # ESLint
```

---

## Customization

Most content lives in `app/page.js` as structured arrays — no CMS, no database, just code you can edit directly.

| File | What to Change |
|---|---|
| `app/page.js` | Projects, skills, education, experience, highlights |
| `app/layout.js` | Page title, metadata, SEO |
| `styles/vcard.css` | Layout, card sizing, typography scale, responsive behavior |
| `styles/globals.css` | Shared theme variables, base colors |

### Common Extensions

- Add real project links and live demo URLs to the projects array
- Replace the placeholder contact form with [Resend](https://resend.com), [Formspree](https://formspree.io), or similar
- Add a downloadable resume via a public PDF link
- Integrate Plausible or Vercel Analytics for visitor tracking
- Pull content from a headless CMS (e.g. Sanity, Notion API) instead of hardcoding

---

## AI Chat Widget

The floating chat widget is wired up and ready — it just needs a real model behind it.

**Current behavior:**

```
User message  →  POST /api/chat  →  handleChat()  →  "AI module under construction."
```

**To connect a real LLM**, edit these two files:

- `app/api/chat/route.js` — the Next.js API route
- `lib/chatService.js` — the response logic (currently returns a placeholder)

**Recommended upgrades:**

```
Connect OpenAI / Anthropic / Gemini            ← swap in lib/chatService.js
Ground responses on portfolio context          ← pass your bio + projects as system prompt
Stream tokens for real-time feel               ← use ReadableStream in route.js
Persist conversation history                   ← localStorage or a simple DB
Rate-limit abusive requests                    ← upstash/ratelimit or Vercel Edge Config
```

---

## Styling System

Two CSS files power the visual design:

**`styles/globals.css`** — design tokens and base resets
- CSS custom properties for colors, spacing, typography
- Dark theme base

**`styles/vcard.css`** — the full layout system
- Sticky sidebar + main content composition
- Section card styling
- Project filter UI
- Chat widget
- Mobile responsive overrides

Design direction: dark layered card surfaces, accent gradients, compact sidebar, rounded panels.

---

## Deployment

This project is Vercel-native. No special configuration needed.

### Deploy in 3 Steps

1. Push this repo to GitHub
2. Import it at [vercel.com/new](https://vercel.com/new)
3. Keep the default Next.js settings → **Deploy**

That's it. Environment variables are only needed if you wire up a real LLM API key.

---

## Known Limitations

- Chat backend returns a placeholder — no real LLM connected yet
- Contact form is presentational — no form submission handler
- All content is hardcoded in `app/page.js`
- Some files in `components/` are experiments, not the primary rendered content

---

## Roadmap Ideas

- [ ] Connect AI chat to a real model (Anthropic, OpenAI, or local via Ollama)
- [ ] Add portfolio-aware system prompt to chat (grounded on bio + projects)
- [ ] Wire up contact form (Resend or Formspree)
- [ ] Add downloadable PDF resume
- [ ] Light/dark theme toggle
- [ ] CMS-backed content (Notion API or Sanity)
- [ ] Analytics integration
- [ ] Blog section

---

## License

Personal portfolio use. Not licensed for redistribution.

---

<div align="center">

Built by **Prashant Choudhary**

[![GitHub](https://img.shields.io/badge/GitHub-black?style=flat-square&logo=github)](https://github.com/your-username)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/your-profile)

</div>
