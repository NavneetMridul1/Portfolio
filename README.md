# Premium Portfolio - Navneet Kumar Mridul

Recruiter-first, modern personal portfolio built with Next.js, Tailwind CSS, Framer Motion, and a lightweight 3D hero accent.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- React Three Fiber + Drei (subtle 3D hero)
- React Hook Form + Zod
- Resend (contact form email delivery)

## Project Structure

```text
src/
  app/
    api/contact/route.ts
    globals.css
    layout.tsx
    page.tsx
  components/
    sections/
      about.tsx
      achievements.tsx
      contact.tsx
      experience.tsx
      hero.tsx
      profiles.tsx
      projects.tsx
      schooling.tsx
      small-projects.tsx
      site-footer.tsx
      skills.tsx
      top-nav.tsx
    three/
      hero-canvas.tsx
      hero-orb.tsx
    ui/
      container.tsx
      pill.tsx
      reveal.tsx
      section-heading.tsx
  data/
    achievements.json
    experience.json
    profile.json
    projects.json
    schooling.json
    small-projects.json
    skills.json
  lib/
    cn.ts
    contact-schema.ts
    rate-limit.ts
  types/
    content.ts
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env.local
```

Set these in `.env.local`:

- `RESEND_API_KEY` for email delivery
- `CONTACT_TO_EMAIL` (optional override)
- `CONTACT_FROM_EMAIL` (optional sender, default uses Resend onboarding sender)

3. Run the dev server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Build and Validate

```bash
npm run lint
npm run build
```

## Content Source of Truth

Portfolio content is based on `Navneet_Mridul_Resume.pdf` and transformed into concise, impact-focused copy for recruiter readability.
