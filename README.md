# Personal Portfolio

A modern, responsive portfolio website built with Astro, featuring an AI-powered chat assistant.

## Tech Stack

- **Framework:** Astro 5
- **UI Components:** React 18
- **Styling:** Tailwind CSS 4
- **Chat:** Server-Sent Events (SSE) streaming with markdown support

## Features

- Responsive design with dark/light theme toggle
- AI chat assistant with real-time streaming responses
- Markdown rendering in chat messages
- Chat history persistence using IndexedDB
- Deployed to GitHub Pages

## Project Structure

```
src/
├── components/
│   ├── chat/           # Chat widget components
│   │   ├── ChatWidget.tsx
│   │   ├── ChatMessage.tsx
│   │   ├── ChatInput.tsx
│   │   └── SuggestedQuestions.tsx
│   ├── Hero.astro
│   ├── About.astro
│   ├── Experience.astro
│   ├── Contact.astro
│   └── ...
├── layouts/
│   └── Layout.astro
├── lib/
│   ├── chatApi.ts      # SSE streaming API client
│   └── chatStorage.ts  # IndexedDB persistence
├── styles/
│   └── global.css
└── pages/
    └── index.astro
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file for local development:

```
PUBLIC_CHAT_API_URL=http://localhost:8000
```

## Related

- [Portfolio Assistant](../portfolio-assistant) - Backend API for the chat assistant
