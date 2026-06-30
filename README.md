# NMMUN — New Millennium Model United Nations 2026-27

Explore the world of diplomacy and global affairs with the New Millennium Model United Nations Conference. This site presents the 2026-2027 event: councils, schedules, registration guidance, and team profiles, built with Next.js for a smooth, animated, and SEO-aware experience.

## What it does
- Publishes event information, dress code, itineraries, and rules of procedure.
- Highlights councils and chair details with per-council background guides.
- Guides delegates, chairs, runners, and security through registration steps and timelines.
- Shares media, contact points, and location details for the conference.

## Key features
- **Data-driven content:** Navigation, councils, teams, table-of-content blocks, and cards are driven from `lib/links.ts`; hero and banner copy, event schedule, itineraries, and dress code live in `lib/config.ts`.
- **Event awareness:** Countdown timer and call-to-action behavior use `useTime` plus `eventDate`/`eventEndDate` settings to show the right state before, during, and after the event.
- **Rich sections per page:** Councils list with per-council detail routes (`/council/[id]`), info page with itinerary timelines and dress code checklists, register page with payment guidance and Google Form links, contact page with map/embed and direct channels, and gallery/team pages wired for media and profile grids.
- **Animations and UI:** Framer Motion-driven transitions, Embla-based hero carousel, shadcn/ui components (Radix primitives), Tailwind CSS theme tokens, and Lucide icons for consistent styling.
- **SEO helpers:** `lib/metadata.ts` centralizes Open Graph/Twitter metadata generation for each route.
- **Legacy continuity:** Forked from the 2023 build by @Clupai8o0 and team, carried forward for the 2024-2025 batch with the same component system.

## Tech stack
- Next.js 14 (App Router) with React 18 and TypeScript.
- Tailwind CSS with shadcn/ui (Radix UI), tailwind-merge, and tailwindcss-animate.
- Framer Motion for animations; Embla carousel (+ autoplay) for hero slides.
- Lucide React icons, clsx, class-variance-authority, cmdk utilities.

## Architecture overview
- `app/`: Route handlers and pages (home, councils, council/[id], gallery, info, register, team, contact) plus global styles and root layout.
- `components/`: Reusable content (Hero, FAQ, Timer, Timeline), layouts (BaseLayout, Container, Background), navigation (Navbar, CTA, TableOfContent, Sidebar), typography primitives, and shadcn/ui elements.
- `hooks/useTime.ts`: Event-aware countdown and state helpers.
- `lib/`: Configuration for event copy/timing (`config.ts`), navigation/council/team/link data (`links.ts`), metadata generation (`metadata.ts`), animations, types, and utilities.
- `public/`: Static assets (hero imagery, council/team badges, icons).
