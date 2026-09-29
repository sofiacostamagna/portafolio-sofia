# Sofía Costamagna — Portfolio

Personal portfolio of **Sofía Costamagna**, Frontend Developer & UX/UI Designer based in Argentina.

Built with **Next.js (App Router)**, **React**, **Tailwind CSS** and **Framer Motion**. Bilingual (English / Spanish).

## Features

- Scrollable device mockups (laptop & phone) showing full-page screenshots of real client projects
- Client reviews carousel, sourced from Upwork
- English / Spanish with browser-language detection and a remembered choice
- Contact form powered by EmailJS
- Auto-generated Open Graph image for link previews

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project screenshots

The mockups use static screenshots in `public/previews/` instead of live iframes, so pages stay fast.
To refresh them after a project site changes:

```bash
npx playwright install chromium   # first time only
npm run screenshots               # all sites
npm run screenshots aruma         # only sites matching "aruma"
```

The list of sites lives in `lib/previews.js`.

## Content

| What | Where |
| --- | --- |
| Home texts & featured projects | `lib/translations.js` |
| All projects | `app/work/page.jsx` |
| Client reviews | `lib/testimonials.js` |

## Environment

- `NEXT_PUBLIC_SITE_URL` — public URL of the site, used for link previews. Not needed on Vercel.
