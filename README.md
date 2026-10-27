# Aditya Pathak — Portfolio (Glassmorphism + 3D)

## Setup
```bash
cd portfolio-aditya
npm install
npm run dev
```

## Key design choices (anti-generic-AI)
- Accent: electric lime (#d0ff00) — not purple-blue
- Fonts: Space Grotesk (display) + Inter (body)
- Background: dark navy (#0a0e17) with slow-moving gradient blobs + noise overlay
- Glass: 6% opacity white, 24px blur, 1px white/12% border, inner glow, 20px radius
- Asymmetric hero: large left text + right glass meta card; not centered-everything
- Preloader: name reveal + tagline, not spinner
- 3D: R3F floating icosahedron with MeshPhysicalMaterial, mouse-parallax, particles
- Sections vary: timeline, bento grid, horizontal scroll cards, stat cards — never identical 3-card rows
- Real content: all copy reflects aditya's MCA, Celebal internship, 3 live apps
- Custom cursor: dot + lagging ring; disabled on touch

## Where to swap placeholders
- `public/og.jpg` → real OpenGraph image (1200x630)
- `src/components/sections/Hero.tsx` → replace `#` demo/code links with real URLs
- `src/components/sections/Contact.tsx` → form already wired to `sonner` toast; no backend needed for demo
- Resume: add `/public/resume.pdf` and update download button href in `Hero.tsx`
- Project images/mockups: add real screenshots or abstract 3D shapes; current cards use text-only glass cards
- 3D: adjust `HeroScene.tsx` material/colors if you want a different crystal shape

## Deploy
Build with `npm run build`, deploy to Vercel. Make sure `next.config.js` (optional) sets `output: 'export'` only if static; otherwise use standard Next.js deploy.
