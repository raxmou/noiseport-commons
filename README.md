# NoisePort Commons

Official website, manifesto and installer for NoisePort.

## What is NoisePort?

**NoisePort** is a free and open-source ecosystem to take back control of your music.

It consists of two main components:
- **NoisePort App** — Desktop and mobile application to listen, manage your self-hosted music library, explore discographies, and download albums via the Soulseek network
- **NoisePort Server** — Self-hosted server that can be deployed on a Raspberry Pi, old computer, or cloud hosting to make your music accessible everywhere

NoisePort lets you own your music library and stream it anywhere, without relying on commercial platforms or algorithms.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **React** + **TypeScript** + **Vite**
- **Tailwind CSS** (with typography plugin)
- **Framer Motion** (animations)
- **React Router DOM** (routing)
- **Google Fonts**: Kode Mono (headings/logo), Syne (body text)

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Route pages (Home, Manifeste, Installer, Contact)
├── contexts/       # React contexts (ThemeContext)
└── assets/         # Images and static files
```

## Features

- Dark theme with neutral palette
- Fully responsive layout
- Smooth animations with Framer Motion
- Multi-page routing:
  - `/` — Home
  - `/manifeste` — Manifesto
  - `/installer` — Installation guide
  - `/contact` — Contact

## Deployment

The site is static and builds to `/dist`. Ready for deployment on:
- GitHub Pages
- Cloudflare Pages
- Netlify
- Any static hosting or Nginx server

## License

© 2025 NoisePort — Open-source & independent
