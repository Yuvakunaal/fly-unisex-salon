# Fly Unisex Salon

Website for Fly Unisex Salon, a unisex hair, skin, spa, and grooming salon in Yousufguda, Hyderabad.

The site is a React + TypeScript + Vite single page app with Tailwind CSS, GSAP entrance/scroll animations, theme switching, and multilingual content for English, Hindi, and Telugu.

## Highlights

- Responsive salon landing page with sections for hero, story, services, gallery, reviews, location, and footer.
- Quick actions for phone, WhatsApp, Google Maps directions, JustDial, and Instagram.
- Light/dark theme support with a smooth View Transitions API reveal where supported.
- Language switcher for English, Hindi, and Telugu with local preference storage.
- SEO basics in `index.html`, including description, Open Graph metadata, favicon links, and HairSalon structured data.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- GSAP
- Phosphor Icons
- Oxlint

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Project Structure

```text
src/
  App.tsx                     Page composition
  main.tsx                    React entry point and language provider
  index.css                   Tailwind theme tokens and global styles
  components/                 Page sections and shared UI components
  data/content.ts             Business facts, links, map URLs, nav anchors
  hooks/                      Theme and scroll reveal hooks
  i18n/                       Language context and translated copy
  lib/                        Small shared utilities

public/
  logo*.png / logo.jpeg       Brand assets
  favicon.*                   Browser icons
  media/brand-intro.mp4       Public media asset
```

## Editing Content

Business facts live in `src/data/content.ts`. Update this file for:

- Salon name, area, city, and address
- Phone number and click-to-call link
- WhatsApp link
- Instagram link
- JustDial link
- Google Maps direction and embed URLs
- Navigation anchors and service card layout sizing

Current Instagram link:

```text
https://www.instagram.com/flyunisexsalon.raj430/
```

Translated site copy lives in `src/i18n/translations.ts`. Update this file for:

- Navigation labels
- Hero text
- About/story copy
- Services and prices
- Gallery labels
- Testimonials
- Hours and footer text

If service categories are added, removed, or reordered in `translations.ts`, also update `serviceLayout` in `src/data/content.ts` so the service grid remains balanced.

## SEO and Metadata

Edit `index.html` for:

- Page title
- Meta description
- Open Graph title and description
- Favicon and touch icon links
- Schema.org `HairSalon` structured data

Keep the structured data links in sync with `src/data/content.ts`, especially Instagram, address, and map coordinates.

## Assets

Static assets are served from `public/`.

- Replace logo files in `public/` when brand artwork changes.
- Keep favicon files updated when the main logo changes.
- Store public videos and other static media under `public/media/`.

References to assets should use root-relative paths such as `/logo.png` or `/media/brand-intro.mp4`.

## Deployment Checklist

Before publishing:

1. Run `npm run build`.
2. Check the page on mobile and desktop widths.
3. Test call, WhatsApp, Instagram, JustDial, and Maps links.
4. Verify language switching for English, Hindi, and Telugu.
5. Confirm the embedded map loads correctly.
6. Confirm `index.html` metadata matches the latest business details.

## Business Details

- Name: Fly Unisex Salon
- Location: Yousufguda, Hyderabad, Telangana
- Phone: +91 97018 81430
- WhatsApp: https://wa.me/919701881430
- Instagram: https://www.instagram.com/flyunisexsalon.raj430/
