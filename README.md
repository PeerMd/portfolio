# Beermohamed K — Senior Frontend Engineer Portfolio

A responsive personal portfolio built with **Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React and next-themes**.

## Design

The implementation follows the approved reference layout:

- Dark hero with front-facing original profile photo
- Hero copy focused on React.js, Next.js and TypeScript
- No duplicate location/email/LinkedIn row in the hero; those details live in About
- About section with contact card, availability and professional stats
- Skills grid
- Professional journey timeline
- Four featured project cards
- Non-blue pastel wavy CTA/footer transition
- Light / Dark theme toggle
- Responsive desktop, tablet and mobile navigation/layout
- Subtle entrance and hover animations with reduced-motion support

## Stack

- Next.js 15 + React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next-themes
- ESLint + Prettier

## Folder structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  about.tsx
  contact-cta.tsx
  experience.tsx
  footer.tsx
  header.tsx
  hero.tsx
  projects.tsx
  reveal.tsx
  skills.tsx
  theme-provider.tsx
  theme-toggle.tsx
lib/
  data.ts
public/
  images/
    profile-transparent.png
    profile.jpg
    wave-bg-section.png
  projects/
    oms-preview.jpg
    ecommerce-preview.jpg
    ticketing-preview.jpg
    crm-preview.jpg
    poorvika-mark.jpg
  resume.pdf
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run lint
npm run build
npm start
```

## Personalization

- Replace project preview images in `public/projects/` with your actual screenshots when available.
- Update project links and GitHub URL in `lib/data.ts` / components.
- Replace `public/resume.pdf` with the latest resume when needed.
- Keep the original profile image at `public/images/profile-transparent.png` so the hero uses your real photo rather than an AI-generated face.

### Hero image

The hero uses `public/images/hero-bg.jpg`, a composed hero background containing the supplied profile photo, office background, and laptop. The original supplied profile image remains in `public/images/profile-transparent.png` for reuse elsewhere.
