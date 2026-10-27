# PROJECT CONTEXT — Aditya Pathak Portfolio

> **File Purpose:** This document is the single source of truth for the entire `portfolio-aditya` project. Any AI assistant or developer reading this document can understand the project architecture, tech stack, conventions, and operational requirements without reading other files.

---

## 1. Project Overview

- **Purpose & Goal:** An interactive personal portfolio and software engineering showcase for Aditya Pathak, highlighting full-stack engineering skills, real-world shipped applications, internship experience (Celebal Technologies), education (MCA 2024–2026 at Lovely Professional University), and verified certifications.
- **Design Philosophy:** Anti-generic luxury dark aesthetic utilizing glassmorphism, dynamic 3D canvas interaction (Three.js/R3F), electric lime accent (`#d0ff00`), typographic contrast (Space Grotesk display + Inter body), and fluid animations.
- **Target Audience / Use Case:** Technical recruiters, engineering hiring managers, founders, and prospective clients evaluating full-stack and frontend engineering capabilities.
- **Current Status:** **Ready for Production / Showcase**. The application compiles cleanly, runs locally on Next.js 14, and is configured for deployment to platforms like Vercel.

---

## 2. Tech Stack & Dependencies

### Core Frameworks & Languages
| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **Node.js** | `>= 20` (tested on `v24.19.0`) | JavaScript runtime |
| **npm** | `11.x` | Package manager |
| **Next.js** | `14.2.0` (App Router) | React framework (Server Components, static optimization, bundling) |
| **React** & **React-DOM** | `^18.3.0` | UI component library |
| **TypeScript** | `^5.6.0` | Static typing and interfaces |

### 3D & Graphics
| Library | Version | Purpose |
| :--- | :--- | :--- |
| **three** | `^0.160.0` | WebGL 3D rendering library |
| **@react-three/fiber** | `^8.16.0` | Declarative Three.js wrapper for React |
| **@react-three/drei** | `^9.92.0` | 3D helpers (`Float`, `OrbitControls`, materials) |

### Styling & Animation
| Library | Version | Purpose |
| :--- | :--- | :--- |
| **Tailwind CSS** | `^3.4.0` | Utility-first CSS framework |
| **PostCSS** & **Autoprefixer** | `^8.4.38` / `^10.4.19` | CSS transformation & vendor prefixing |
| **Framer Motion** | `^11.0.0` | Motion graphics, scroll-triggered viewports, enter/exit animations |
| **clsx** & **tailwind-merge** | `^2.1.1` / `^2.2.1` | Conditional class composition and deduplication |
| **Lucide React** | `^0.400.0` | Iconography (responsive SVG icons) |

### Forms & Notifications
| Library | Version | Purpose |
| :--- | :--- | :--- |
| **react-hook-form** | `^7.51.0` | Uncontrolled form validation and state management |
| **sonner** | `^1.4.0` | Toast notifications (used for contact form submission confirmation) |

### Smooth Scrolling (Installed)
| Library | Version | Purpose |
| :--- | :--- | :--- |
| **lenis** | `^1.1.13` | Smooth scroll utility |

### Databases & External Services
- **Database (Client App):** None directly hosted in this Next.js app; this portfolio is a client-side presentation app. However, project showcases describe external databases (MongoDB and MySQL in showcased full-stack projects).
- **External Services Referenced:**
  - **Sanity CMS:** Used in showcased e-commerce project for headless content.
  - **Stripe:** Used in showcased e-commerce project for payments.
  - **Puter.js:** Used in showcased AI Resume Analyzer project for cloud storage/auth.
  - **Google Fonts CDN:** Preconnected in `layout.tsx` for `Space Grotesk` and `Inter`.

---

## 3. Architecture & Structure

### Directory Tree & Purpose
```
c:\portfolio-aditya\
├── .next/                    # Next.js build output and dev cache (auto-generated)
├── node_modules/             # Installed dependencies
├── public/                   # Static public assets
│   └── og.jpg                # OpenGraph social preview image (1200x630)
├── src/
│   ├── app/                  # Next.js App Router root
│   │   ├── globals.css       # Core design tokens, glassmorphism utilities, CSS reset
│   │   ├── layout.tsx        # Root HTML shell, fonts, metadataBase, ToastProvider
│   │   └── page.tsx          # Single-page portfolio aggregating all section components
│   ├── components/
│   │   ├── sections/         # Visual portfolio sections
│   │   │   ├── Preloader.tsx     # Timed entrance animation overlay (1.2s timeout)
│   │   │   ├── Navbar.tsx        # Floating glass navigation bar with active section spy
│   │   │   ├── Hero.tsx          # Asymmetric hero with 3D canvas and call-to-actions
│   │   │   ├── HeroScene.tsx     # Three.js 3D Icosahedron + floating particle field
│   │   │   ├── About.tsx         # Story bento, animated stat counter (CountUp)
│   │   │   ├── Skills.tsx        # Categorized skill badges and tool stack
│   │   │   ├── Experience.tsx    # Chronological career timeline (Celebal internship)
│   │   │   ├── Projects.tsx      # Bento grid of shipped projects (Chatify, E-Commerce, AI Resume)
│   │   │   ├── Education.tsx     # Academic qualifications (MCA & BCA)
│   │   │   ├── Certifications.tsx# Industry certifications with official logos (HackerRank, Google Cloud, IBM)
│   │   │   ├── Contact.tsx       # Contact form with react-hook-form + Sonner toast
│   │   │   └── Footer.tsx        # Signature footer, navigation links, and back-to-top button
│   │   └── ui/               # Reusable presentational components
│   │       ├── MockupGrad.tsx    # Decorative gradient container for project cards
│   │       └── ToastProvider.tsx # Sonner Toaster component configuration
├── next-env.d.ts             # Next.js TypeScript declarations
├── next.config.js            # Next.js bundler and image optimization configuration
├── package.json              # Project scripts and dependencies
├── package-lock.json         # Exact dependency lockfile
├── postcss.config.js         # PostCSS plugins config (tailwindcss, autoprefixer)
├── README.md                 # Brief setup guide and design rationale
├── tailwind.config.ts        # Extended Tailwind theme, colors, fonts, glass tokens
└── tsconfig.json             # TypeScript compiler settings and path aliases (@/* -> ./src/*)
```

### Key Design Patterns
1. **Single-Page Application (SPA) with Section Anchoring:**
   - The entire website is rendered on a single route (`/`), with anchor IDs (`#hero`, `#about`, `#stack`, `#experience`, `#projects`, `#education`, `#certifications`, `#contact`).
   - Smooth native scroll behavior enabled via `html { scroll-behavior: smooth; }`.
2. **Client Component Composition:**
   - Most interactive components use Next.js `"use client"` directives for state (`useState`, `useEffect`), Three.js WebGL hooks (`useFrame`), or Framer Motion (`useInView`).
   - The Root Layout (`src/app/layout.tsx`) remains a Server Component responsible for SEO metadata and font pre-fetching.
3. **Glassmorphic Design System:**
   - Reusable `.glass` and `.glass-btn` CSS utility classes defined in `globals.css` with `backdrop-filter: blur(24px)`, subtle translucent borders (`rgba(255,255,255,0.12)`), and inner highlights.
4. **Optimized Particle Mathematics:**
   - `HeroScene.tsx` uses deterministic pseudo-random number generator (PRNG) logic in `useMemo` to ensure zero hydration mismatch or frame spikes when instantiating 300 3D particle coordinates.

### Data Flow
```
User Enters URL (http://localhost:3000)
    │
    ▼
RootLayout (src/app/layout.tsx)
    │  ├─ Sets HTML language & metadata
    │  ├─ Loads Google Fonts (Space Grotesk & Inter)
    │  └─ Injects ToastProvider
    │
    ▼
HomePage (src/app/page.tsx)
    │
    ├─ Preloader (Animates for 1.2s, unmounts via AnimatePresence)
    ├─ Navbar (Listens to scroll, highlights current section)
    ├─ Hero + HeroScene (Renders 3D Icosahedron canvas + CTAs)
    ├─ About (Animates CountUp stats upon viewport enter)
    ├─ Skills (Renders categorized tech stacks)
    ├─ Experience (Renders timeline)
    ├─ Projects (Renders project bento grid)
    ├─ Education & Certifications
    ├─ Contact (User submits form -> react-hook-form validates -> triggers Sonner toast)
    └─ Footer (Back-to-top handler)
```

---

## 4. Core Features & Entry Points

### Key Features
1. **Interactive 3D Hero Scene (`HeroScene.tsx`):**
   - Real-time WebGL canvas featuring a floating icosahedron with physical transmission/glass material (`MeshPhysicalMaterial`) responding to mouse coordinates and clock oscillations.
   - Surrounding floating particle cloud with rotation.
2. **Dynamic Navigation (`Navbar.tsx`):**
   - Floating pill navigation bar that shrinks on scroll.
   - Built-in scroll spy tracking section visibility.
   - Responsive mobile overlay drawer with Escape key and click-outside listeners.
3. **Animated Stats Counter (`About.tsx`):**
   - Custom `CountUp` hook utilizing `requestAnimationFrame` for buttery smooth numerical counting when the section scrolls into view.
4. **Interactive Bento Projects (`Projects.tsx`):**
   - Highlighting key applications with technology tags, abstract glowing gradient mockups, and external links.
5. **Contact Form with Client-Side Feedback (`Contact.tsx`):**
   - Validates name, email format, and message using `react-hook-form`.
   - Simulates submission delay and displays notification via `sonner`.

### Main Entry Points
- **Next.js Root Layout:** [src/app/layout.tsx](file:///c:/portfolio-aditya/src/app/layout.tsx)
- **Home View:** [src/app/page.tsx](file:///c:/portfolio-aditya/src/app/page.tsx)
- **Global Styles & CSS Tokens:** [src/app/globals.css](file:///c:/portfolio-aditya/src/app/globals.css)
- **Theme Configuration:** [tailwind.config.ts](file:///c:/portfolio-aditya/tailwind.config.ts)

---

## 5. Setup & Running Instructions

### Prerequisites
- **Node.js:** v18.18+ or v20+ recommended (Node v24 supported).
- **npm:** v9+ or v10+.

### Commands
```bash
# 1. Install dependencies
npm install

# 2. Start local development server (runs on port 3000)
npm run dev

# 3. Create production build
npm run build

# 4. Start production server after build
npm run start

# 5. Run ESLint code checks
npm run lint
```

### Environment Variables
- **Currently Required:** None. The portfolio runs entirely self-contained without mandatory `.env` keys.
- **Optional (if connecting a real email backend or analytics):**
  - `NEXT_PUBLIC_SITE_URL`: Optional custom domain override for social cards (defaults to `http://localhost:3000` via `metadataBase`).
  - `RESEND_API_KEY` / `NEXT_PUBLIC_FORM_ENDPOINT`: Optional if wiring Contact form to an external email service (currently simulated with `sonner` toast).

---

## 6. Key Conventions & Architectural Decisions

### Design System Tokens
- **Color Palette:**
  - Dark background (`ink`): `#0a0e17`
  - Secondary dark (`navy`): `#0f172a`
  - Primary Accent (`lime`): `#d0ff00`
  - Glow Accent (`limeGlow`): `rgba(208,255,0,0.35)`
  - Primary Typography (`warm`): `#f7f3e8`
  - Secondary Typography (`steel`): `#8892b0`
  - Glass Surfaces (`surface` / `glass`): `rgba(255,255,255,0.06)` with `rgba(255,255,255,0.12)` border
- **Typography:**
  - Display Font: `Space Grotesk` (Headings, titles, numbers)
  - Body Font: `Inter` (Body copy, descriptions, navigation)
- **Accessibility & Motion:**
  - Respects `prefers-reduced-motion` in `globals.css` by reducing transition durations to `0.01ms`.

### Why Key Decisions Were Made
1. **Next.js 14 App Router:** Provides fast compilation, tree-shaking, automated font optimization, and modern React 18 support.
2. **Three.js with `@react-three/fiber`:** Enables WebGL 3D graphics in declarative React syntax, allowing the 3D canvas to live seamlessly inside the React DOM tree without imperative canvas management.
3. **No Database on Portfolio Server:** Eliminates cold starts, hosting costs, and security attack vectors; contact submissions trigger direct client-side feedback or can connect to serverless API routes.
4. **Client-side Preloader (`Preloader.tsx`):** Gives the Three.js canvas and web fonts ~1.2s to initialize smoothly, avoiding layout shift.

### Known Limitations
- The 3D canvas relies on WebGL. Very low-end devices or environments with disabled hardware acceleration fallback to the HTML layout without 3D crystal rendering.
- `next.config.js` specifies `images: { unoptimized: true }` to allow static exports without requiring a dedicated Next.js image optimization server.

---

## 7. Critical Do's and Don'ts

### DO:
- **Keep path aliases:** Always import from `@/components/...` or `@/app/...` matching the `tsconfig.json` path mapping.
- **Keep `"use client"` on interactive components:** Any component using Framer Motion, Three.js hooks (`useFrame`), or React hooks (`useState`, `useEffect`) must have `"use client"` at line 1.
- **Maintain Section IDs:** The Navbar links rely strictly on `#about`, `#stack`, `#experience`, `#projects`, `#contact`. Changing an ID in a section will break the Navbar scroll-spy and anchor navigation.
- **Use the Glassmorphism utility classes:** Reuse `.glass` and `.glass-btn` classes to preserve design consistency across new cards or buttons.

### DON'T:
- **Do NOT re-add heavy cursor libraries without performance testing:** `CustomCursor.tsx` was disabled/removed to keep mobile scrolling and pointer responsiveness at 60+ FPS.
- **Do NOT delete `metadataBase` in `layout.tsx`:** Next.js 14 requires `metadataBase` to resolve relative social images (`/og.jpg`) without build-time warnings.
- **Do NOT place large heavy textures in `HeroScene.tsx`:** The current 3D crystal uses procedural shaders and lightweight geometry for instant loading without large `.gltf` / `.bin` network requests.

---

## 8. Glossary

- **R3F:** `@react-three/fiber`, the React renderer for Three.js.
- **Drei:** A helper collection of components, shaders, and controls for `@react-three/fiber`.
- **Glassmorphism:** A UI visual style featuring frosted glass-like background blur, thin borders, and subtle inner glows.
- **Bento Grid:** A layout pattern inspired by Japanese bento boxes, utilizing cards of varying grid sizes (e.g., `col-span-2`, `row-span-2`) to create visual hierarchy.
- **Scroll-Spy:** A script in `Navbar.tsx` that determines which section is currently closest to the top of the viewport to highlight the corresponding navigation link.
- **MCA:** Master of Computer Applications (postgraduate degree currently pursued by Aditya Pathak).

---

## 9. Assumptions Made

- **Contact Form Backend:** Assumed to remain client-side (Sonner toast feedback) for demo purposes until a dedicated mailing provider (like Resend, Formspree, or Nodemailer API) is selected by the user.
- **Custom Cursor:** Assumed intentionally removed/disabled per previous cleanup request to maintain high frame rates across touch and desktop devices.
- **Resume File & Live Links:** Verified and active. `public/resume.pdf` is linked directly in `Hero.tsx` and `Footer.tsx`. All project demo links, GitHub repo URLs, and certification verification links are live and configured with `target="_blank"`.
