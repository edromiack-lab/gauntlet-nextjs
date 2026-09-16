# The Sales Gauntlet — Next.js Site

Server-side rendered marketing site for The Sales Gauntlet leasing training app.

Built with Next.js 14 App Router. Full SEO metadata per page. Auto-generated sitemap and robots.txt.

## Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a new GitHub repo
2. Import the repo in Vercel
3. Vercel auto-detects Next.js and deploys
4. Point domain at the new deployment

## Structure

- `app/` — Next.js App Router pages
- `app/globals.css` — All global styles
- `app/layout.jsx` — Root layout with fonts, metadata, Header/Footer
- `app/page.jsx` — Home page (server rendered)
- `app/features/page.jsx` — Features page (server rendered)
- `app/demo/` — Demo page + interactive tabs (mixed)
- `app/pricing/` — Pricing page + calculator (mixed)
- `app/about/page.jsx` — About page (server rendered)
- `app/contact/` — Contact page + form (mixed)
- `components/Header.jsx` — Navigation with mobile menu (client)
- `components/Footer.jsx` — Footer (server)

## Client vs Server Components

Server components (default): all static content, layouts, page metadata.
Client components (`'use client'`): anything with state, timers, forms.

## SEO Features

- Per-page metadata (title, description, OG tags)
- Automatic sitemap.xml
- Automatic robots.txt
- Structured semantic HTML
- Server-rendered content indexed by search engines
- Twitter card and OpenGraph tags

## Notes

- Contact form uses mailto: as fallback. Integrate Formspree or similar for direct sending.
- Fonts loaded from Google Fonts via CSS import.
- No client-side routing state — real URLs per page.
