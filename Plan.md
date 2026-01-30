# Crooked Lake Sandbar Music Festival 2026
## Complete Technical Specification & Build Plan

---

# 📋 PROJECT OVERVIEW

**Project Name:** Crooked Lake Sandbar Music Festival Website Redesign
**Target Launch:** Before July 24, 2026
**Design Philosophy:** "Liquid Summer" — Immersive, fluid, modern festival experience
**Performance Target:** Lighthouse score 90+ on all metrics

---

# 🛠 TECHNOLOGY STACK

## Core Framework
```
Framework:        Next.js 14+ (App Router)
Language:         TypeScript
Styling:          Tailwind CSS v4
Animation:        GSAP (GreenSock) + ScrollTrigger + SplitText
Smooth Scroll:    Lenis
3D/Shaders:       Three.js (optional WebGL water effects)
Icons:            Lucide React
Fonts:            Variable fonts (self-hosted)
Deployment:       Vercel
```

## Package Dependencies
```json
{
  "dependencies": {
    "next": "^14.x",
    "react": "^18.x",
    "react-dom": "^18.x",
    "gsap": "^3.12.x",
    "@gsap/react": "^2.x",
    "lenis": "^1.x",
    "three": "^0.160.x",
    "@react-three/fiber": "^8.x",
    "@react-three/drei": "^9.x",
    "lucide-react": "^0.300.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  }
}
```

---

# 📁 FILE STRUCTURE

```
crooked-lake-fest/
├── app/
│   ├── layout.tsx                 # Root layout with fonts, metadata
│   ├── page.tsx                   # Homepage
│   ├── lineup/
│   │   └── page.tsx               # Full lineup page
│   ├── tickets/
│   │   └── page.tsx               # Ticket purchasing info
│   ├── schedule/
│   │   └── page.tsx               # Day-by-day schedule
│   ├── venue/
│   │   └── page.tsx               # Venue info, map, directions
│   ├── sponsors/
│   │   └── page.tsx               # Sponsor showcase
│   ├── volunteer/
│   │   └── page.tsx               # Volunteer signup info
│   ├── contact/
│   │   └── page.tsx               # Contact form
│   ├── faq/
│   │   └── page.tsx               # FAQ accordion
│   ├── gallery/
│   │   └── page.tsx               # Past years photos/videos
│   ├── livestream/
│   │   └── page.tsx               # Livestream embed page
│   └── globals.css                # Global styles + Tailwind
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx         # Main nav (floating pill style)
│   │   ├── MobileMenu.tsx         # Full-screen mobile menu
│   │   ├── Footer.tsx             # Site footer
│   │   └── SmoothScroll.tsx       # Lenis wrapper
│   │
│   ├── home/
│   │   ├── HeroSection.tsx        # Main hero with water effect
│   │   ├── CountdownTimer.tsx     # Animated countdown
│   │   ├── LineupPreview.tsx      # Featured artists teaser
│   │   ├── VideoSection.tsx       # Promo video embed
│   │   ├── VenuePreview.tsx       # Map/location teaser
│   │   ├── SponsorsMarquee.tsx    # Auto-scrolling sponsor logos
│   │   └── NewsletterSignup.tsx   # Email capture
│   │
│   ├── lineup/
│   │   ├── ArtistCard.tsx         # Individual artist card
│   │   ├── ArtistModal.tsx        # Expanded artist detail modal
│   │   ├── LineupGrid.tsx         # Masonry/grid of artists
│   │   └── DayFilter.tsx          # Filter by day tabs
│   │
│   ├── schedule/
│   │   ├── ScheduleTimeline.tsx   # Visual timeline component
│   │   ├── StageSelector.tsx      # Stage filter buttons
│   │   └── EventBlock.tsx         # Individual schedule item
│   │
│   ├── venue/
│   │   ├── InteractiveMap.tsx     # Clickable venue map
│   │   ├── DirectionsCard.tsx     # How to get there
│   │   └── AccommodationList.tsx  # Nearby lodging
│   │
│   ├── ui/
│   │   ├── Button.tsx             # Reusable button (magnetic effect)
│   │   ├── Card.tsx               # Base card component
│   │   ├── Modal.tsx              # Reusable modal
│   │   ├── Accordion.tsx          # FAQ accordion
│   │   ├── Badge.tsx              # Tags/labels
│   │   ├── Input.tsx              # Form inputs
│   │   ├── Marquee.tsx            # Infinite scroll marquee
│   │   └── SectionHeading.tsx     # Animated section titles
│   │
│   └── effects/
│       ├── WaterRipple.tsx        # WebGL water shader
│       ├── ParticleField.tsx      # Floating particles
│       ├── GradientBlob.tsx       # Animated gradient mesh
│       ├── MagneticElement.tsx    # Magnetic hover wrapper
│       ├── TextReveal.tsx         # GSAP text animation wrapper
│       └── ScrollReveal.tsx       # Scroll-triggered reveal wrapper
│
├── hooks/
│   ├── useGSAP.ts                 # GSAP context hook
│   ├── useMousePosition.ts        # Track mouse for effects
│   ├── useMediaQuery.ts           # Responsive breakpoints
│   ├── useCountdown.ts            # Countdown timer logic
│   └── useLenis.ts                # Smooth scroll hook
│
├── lib/
│   ├── utils.ts                   # Utility functions (cn, etc.)
│   ├── constants.ts               # Site-wide constants
│   ├── animations.ts              # GSAP animation presets
│   └── fonts.ts                   # Font configurations
│
├── data/
│   ├── artists.ts                 # Lineup data
│   ├── schedule.ts                # Schedule data
│   ├── sponsors.ts                # Sponsor data
│   ├── faq.ts                     # FAQ content
│   └── navigation.ts              # Nav links
│
├── public/
│   ├── images/
│   │   ├── artists/               # Artist photos
│   │   ├── sponsors/              # Sponsor logos
│   │   ├── gallery/               # Past event photos
│   │   ├── venue/                 # Venue/map images
│   │   └── hero/                  # Hero backgrounds
│   ├── videos/                    # Background videos
│   ├── fonts/                     # Self-hosted fonts
│   └── favicon.ico
│
├── styles/
│   └── animations.css             # Complex keyframe animations
│
├── types/
│   └── index.ts                   # TypeScript interfaces
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

# 🎨 DESIGN SYSTEM

## Color Palette

```typescript
// tailwind.config.ts - extend colors
colors: {
  // Primary - Water/Lake Blues
  lake: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#b9e5fe',
    300: '#7cd4fd',
    400: '#36bffa',
    500: '#0ba5ec',   // Primary
    600: '#0086c9',
    700: '#026aa2',
    800: '#065986',
    900: '#0b4a6f',
    950: '#082f49',
  },
  // Secondary - Sunset/Sand
  sunset: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',   // Accent
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  // Accent - Vibrant Festival
  coral: {
    400: '#fb7185',
    500: '#f43f5e',
    600: '#e11d48',
  },
  // Neutrals
  sand: {
    50: '#fefdfb',
    100: '#fdf8f3',
    200: '#f5ebe0',
    800: '#44403c',
    900: '#1c1917',
  }
}
```

## Typography

```typescript
// Font Stack
fonts: {
  display: ['var(--font-display)', 'system-ui'],  // Bold headlines
  body: ['var(--font-body)', 'system-ui'],        // Body text
  mono: ['var(--font-mono)', 'monospace'],        // Countdown, dates
}

// Font Recommendations (Google Fonts or self-hosted):
// Display: "Clash Display" or "Space Grotesk" (variable)
// Body: "Inter" or "DM Sans" (variable)
// Mono: "JetBrains Mono" or "Space Mono"
```

## Typography Scale

```css
/* Responsive type scale */
--text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
--text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
--text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
--text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
--text-xl: clamp(1.25rem, 1rem + 1.25vw, 1.5rem);
--text-2xl: clamp(1.5rem, 1rem + 2.5vw, 2rem);
--text-3xl: clamp(1.875rem, 1rem + 4.375vw, 3rem);
--text-4xl: clamp(2.25rem, 1rem + 6.25vw, 4rem);
--text-5xl: clamp(3rem, 1rem + 10vw, 6rem);
--text-hero: clamp(3.5rem, 2rem + 12vw, 10rem);
```

## Spacing System
Use Tailwind defaults (4px base) with these custom additions:
```typescript
spacing: {
  'section': 'clamp(4rem, 10vw, 8rem)',      // Section padding
  'container': 'clamp(1rem, 5vw, 3rem)',     // Container padding
}
```

## Border Radius
```typescript
borderRadius: {
  'blob': '30% 70% 70% 30% / 30% 30% 70% 70%',  // Organic shapes
  'pill': '9999px',
  '2xl': '1rem',
  '3xl': '1.5rem',
  '4xl': '2rem',
}
```

## Shadows
```typescript
boxShadow: {
  'glow-sm': '0 0 20px rgba(11, 165, 236, 0.3)',
  'glow-md': '0 0 40px rgba(11, 165, 236, 0.4)',
  'glow-lg': '0 0 60px rgba(11, 165, 236, 0.5)',
  'glow-sunset': '0 0 40px rgba(251, 191, 36, 0.4)',
  'soft': '0 4px 30px rgba(0, 0, 0, 0.1)',
  'elevated': '0 20px 50px rgba(0, 0, 0, 0.15)',
}
```

---

# 🎬 ANIMATION SPECIFICATIONS

## Global Animation Presets

```typescript
// lib/animations.ts

export const easings = {
  smooth: 'power2.out',
  bounce: 'back.out(1.7)',
  elastic: 'elastic.out(1, 0.5)',
  sharp: 'power4.out',
  inOut: 'power2.inOut',
};

export const durations = {
  fast: 0.3,
  normal: 0.6,
  slow: 1,
  xslow: 1.5,
};

export const staggerPresets = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

// Reusable animation configs
export const fadeUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  duration: 0.8,
  ease: 'power3.out',
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  duration: 0.6,
  ease: 'back.out(1.7)',
};

export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  duration: 0.8,
  ease: 'power3.out',
};
```

## Page Transition Animations

```typescript
// Wrap each page in transition component
// On enter: Content fades/slides up
// On exit: Content fades out quickly

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};
```

## Scroll-Triggered Animations (ScrollTrigger)

```typescript
// Standard reveal pattern for sections
const scrollReveal = {
  trigger: element,
  start: 'top 80%',
  end: 'top 20%',
  toggleActions: 'play none none reverse',
};

// Parallax pattern
const parallax = {
  trigger: element,
  start: 'top bottom',
  end: 'bottom top',
  scrub: 1, // Smooth scrubbing
};
```

## Specific Animation Requirements

### Hero Section
1. **On Load Sequence** (timeline):
   - Background gradient mesh fades in (0.5s)
   - Water ripple effect initializes
   - Logo scales in from 0.8 with bounce (0.8s, delay 0.3s)
   - "2026" text reveals letter by letter (stagger 0.1s)
   - Date text fades up (0.6s)
   - CTA button scales in with glow pulse (0.5s)
   - Scroll indicator bounces in (0.4s)

2. **Continuous Animations**:
   - Water shader responds to mouse movement
   - Floating particles drift slowly
   - Gradient mesh subtly shifts colors (20s loop)
   - Scroll indicator bounces (1.5s loop)

3. **Scroll Behavior**:
   - Hero content parallax (moves slower than scroll)
   - Background scales slightly on scroll
   - Content fades out as user scrolls past 50vh

### Navigation
1. **Initial State**: Transparent, blends with hero
2. **On Scroll Past Hero**: 
   - Background blurs in (backdrop-blur-xl)
   - Shrinks slightly in height
   - Logo reduces in size
3. **Hover Effects**:
   - Nav items have underline that animates from left
   - Magnetic pull effect on CTA button
4. **Mobile Menu**:
   - Full-screen overlay slides in from right
   - Menu items stagger in (0.1s each)
   - Background has animated gradient

### Artist Cards (Lineup)
1. **Scroll Reveal**: Stagger in as they enter viewport
2. **Hover**:
   - Card lifts (translateY -10px)
   - Image zooms slightly (scale 1.05)
   - Overlay gradient intensifies
   - Artist name slides up revealing genre tag
3. **Click**: Modal opens with scale animation

### Countdown Timer
1. **Number Change**: 
   - Old number slides up and fades out
   - New number slides up from below
2. **Pulse Effect**: Subtle scale pulse on each second
3. **Final Hour**: Colors shift to urgent (coral accent)

### Buttons (Magnetic Effect)
1. **Idle**: Subtle glow pulse
2. **Hover**: 
   - Button follows cursor slightly (magnetic)
   - Background gradient shifts
   - Scale up 1.05
3. **Click**: 
   - Quick scale down then up
   - Ripple effect from click point

### Section Headings
1. **Text Split**: Split into characters using SplitText
2. **Reveal**: Characters fade up with stagger (0.03s)
3. **Decorative Line**: Draws in from center outward

---

# 📄 PAGE-BY-PAGE SPECIFICATIONS

---

## PAGE 1: HOMEPAGE (`app/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION - Fixed/Floating]                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     ███ HERO SECTION ███                        │
│                     (100vh, full bleed)                         │
│                                                                 │
│     - WebGL water ripple background                             │
│     - Large logo animation                                      │
│     - "JULY 24-25, 2026" with reveal effect                    │
│     - Countdown timer                                           │
│     - Primary CTA: "Get Tickets"                               │
│     - Scroll indicator                                          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                  ▼ LINEUP PREVIEW SECTION ▼                     │
│                                                                 │
│     - Section heading: "2026 LINEUP"                           │
│     - Headline artists (3-6 featured)                          │
│     - Staggered card reveal on scroll                          │
│     - "View Full Lineup" button                                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                   ▼ VIDEO SECTION ▼                             │
│                                                                 │
│     - Full-width video player (past highlight reel)            │
│     - Parallax background                                       │
│     - Play button with magnetic effect                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                 ▼ VENUE PREVIEW SECTION ▼                       │
│                                                                 │
│     - Split layout: Image | Info                               │
│     - Interactive mini-map                                      │
│     - Key venue highlights (icons + text)                      │
│     - "Explore Venue" button                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                  ▼ EXPERIENCE SECTION ▼                         │
│                                                                 │
│     - Three feature cards (Music, Water, Community)            │
│     - Hover animations with icons                              │
│     - Parallax images                                          │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                  ▼ SPONSORS MARQUEE ▼                           │
│                                                                 │
│     - Auto-scrolling logo carousel                             │
│     - Grayscale → Color on hover                               │
│     - "Become a Sponsor" CTA                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                ▼ NEWSLETTER SECTION ▼                           │
│                                                                 │
│     - Gradient background blob                                  │
│     - Email input with animated border                         │
│     - Submit button with success animation                     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
│   - Social links with hover effects                            │
│   - Quick nav links                                            │
│   - Copyright                                                   │
└─────────────────────────────────────────────────────────────────┘
```

### Component Requirements

#### HeroSection.tsx
- Full viewport height (100vh, 100dvh for mobile)
- WebGL canvas background with water shader (Three.js)
- Mouse-reactive ripple effect
- Fallback gradient for low-power devices
- Festival logo (SVG preferred, animated)
- Animated countdown timer component
- Primary CTA button with glow effect
- Bouncing scroll indicator (Lottie or CSS)
- Parallax on scroll (content moves at 0.5x speed)

#### CountdownTimer.tsx
- Calculates time until July 24, 2026, 12:00 PM
- Displays: Days, Hours, Minutes, Seconds
- Flip/slide animation on number change
- Responsive sizing
- Fallback text when event has started

#### LineupPreview.tsx
- Fetches from `data/artists.ts`
- Shows top 6 artists (filtered by `featured: true`)
- Masonry or grid layout
- Cards animate in on scroll (stagger)
- Link to full lineup page

#### VideoSection.tsx
- YouTube/Vimeo embed or self-hosted
- Custom play button overlay
- Lazy-loaded
- Poster image before play

#### VenuePreview.tsx
- Two-column layout (image left, content right)
- Static map image or interactive mini-map
- List of venue highlights with icons
- CTA to venue page

#### SponsorsMarquee.tsx
- Infinite horizontal scroll (CSS animation or GSAP)
- Grayscale filter, color on hover
- Duplicated items for seamless loop
- Pause on hover

#### NewsletterSignup.tsx
- Email validation
- Animated input focus state
- Loading state on submit
- Success/error feedback animation

---

## PAGE 2: LINEUP (`app/lineup/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ███ PAGE HEADER ███                          │
│                                                                 │
│     - "2026 LINEUP" with text reveal animation                 │
│     - Decorative background element                            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     [DAY 1: FRI]  [DAY 2: SAT]  [ALL]    ← Filter tabs         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌─────────────────────────────────────────┐                │
│     │           HEADLINERS SECTION            │                │
│     │                                         │                │
│     │   ┌─────────┐  ┌─────────┐             │                │
│     │   │ ARTIST  │  │ ARTIST  │   (Large)   │                │
│     │   │  CARD   │  │  CARD   │             │                │
│     │   └─────────┘  └─────────┘             │                │
│     └─────────────────────────────────────────┘                │
│                                                                 │
│     ┌─────────────────────────────────────────┐                │
│     │          SUPPORTING ARTISTS             │                │
│     │                                         │                │
│     │   ┌───┐ ┌───┐ ┌───┐ ┌───┐ (Medium)    │                │
│     │   └───┘ └───┘ └───┘ └───┘             │                │
│     └─────────────────────────────────────────┘                │
│                                                                 │
│     ┌─────────────────────────────────────────┐                │
│     │           LOCAL/OPENING ACTS            │                │
│     │   ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ (Small)     │                │
│     └─────────────────────────────────────────┘                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     "MORE ARTISTS COMING SOON" (if applicable)                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

### Data Structure
```typescript
// data/artists.ts

export interface Artist {
  id: string;
  name: string;
  slug: string;
  image: string;
  genre: string;
  tier: 'headliner' | 'supporting' | 'local';
  day: 'friday' | 'saturday' | 'both';
  performanceTime?: string;
  stage?: string;
  bio?: string;
  socialLinks?: {
    spotify?: string;
    instagram?: string;
    website?: string;
  };
  featured: boolean;
}

export const artists: Artist[] = [
  // Will be populated by user
];
```

### Component Requirements

#### DayFilter.tsx
- Tab buttons for filtering
- Active state with underline animation
- Updates URL params for shareable links
- Smooth transition when filtering

#### ArtistCard.tsx
- Three size variants based on tier
- Image with overlay gradient
- Name, genre badge
- Hover: lift + image zoom
- Click opens modal

#### ArtistModal.tsx
- Full artist details
- Large image
- Bio text
- Social links
- Performance time/stage (if available)
- Close button + click outside to close
- Animate in: scale + fade

---

PAGE 3: BOARD & TEAM (app/team/page.tsx)
Layout Structure
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ███ PAGE HEADER ███                          │
│     "MEET THE TEAM"                                            │
│     "The people behind the sandbar"                            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │                 OUR STORY                             │   │
│     │                                                       │   │
│     │   Brief paragraph about the festival's history,      │   │
│     │   mission, and the community that makes it happen.   │   │
│     │   How it started, why it exists, what drives us.     │   │
│     │                                                       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │               BOARD OF DIRECTORS                      │   │
│     │                                                       │   │
│     │   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │   │
│     │   │   PHOTO     │ │   PHOTO     │ │   PHOTO     │   │   │
│     │   │             │ │             │ │             │   │   │
│     │   │   Name      │ │   Name      │ │   Name      │   │   │
│     │   │   Title     │ │   Title     │ │   Title     │   │   │
│     │   └─────────────┘ └─────────────┘ └─────────────┘   │   │
│     │                                                       │   │
│     │   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │   │
│     │   │   PHOTO     │ │   PHOTO     │ │   PHOTO     │   │   │
│     │   │             │ │             │ │             │   │   │
│     │   │   Name      │ │   Name      │ │   Name      │   │   │
│     │   │   Title     │ │   Title     │ │   Title     │   │   │
│     │   └─────────────┘ └─────────────┘ └─────────────────┘   │
│     │                                                       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │               TEAM LEADS / CREW                       │   │
│     │                                                       │   │
│     │   ┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐           │   │
│     │   │ PHOTO │ │ PHOTO │ │ PHOTO │ │ PHOTO │           │   │
│     │   │ Name  │ │ Name  │ │ Name  │ │ Name  │           │   │
│     │   │ Role  │ │ Role  │ │ Role  │ │ Role  │           │   │
│     │   └───────┘ └───────┘ └───────┘ └───────┘           │   │
│     │                                                       │   │
│     │   (Smaller cards than board members)                 │   │
│     │   (Stage managers, volunteer coordinators, etc.)     │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              THANK YOU SECTION                        │   │
│     │                                                       │   │
│     │   "Special thanks to our volunteers, sponsors,       │   │
│     │    and the Crooked Lake community..."                │   │
│     │                                                       │   │
│     │   Optional: List of past board members or            │   │
│     │   "In Memoriam" acknowledgments                      │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │               JOIN US CTA                             │   │
│     │                                                       │   │
│     │   "Want to be part of the team?"                     │   │
│     │                                                       │   │
│     │   [VOLUNTEER WITH US]     [CONTACT US]               │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
Data Structure
typescript// data/team.ts

export interface TeamMember {
  id: string;
  name: string;
  title: string;           // "President", "Treasurer", "Stage Manager", etc.
  image: string;           // Path to headshot
  bio?: string;            // Optional short bio (1-2 sentences)
  category: 'board' | 'team';
  order: number;           // For sorting display order
  socialLinks?: {
    email?: string;
    linkedin?: string;
    facebook?: string;
  };
  yearJoined?: number;     // Optional: "Member since 2019"
}

export const teamMembers: TeamMember[] = [
  // Will be populated by user
];

export const festivalStory: string = `
  // Will be populated by user - paragraph about festival history/mission
`;
Component Requirements
TeamMemberCard.tsx
typescriptinterface TeamMemberCardProps {
  member: TeamMember;
  size: 'large' | 'medium' | 'small';
}
```

**Large (Board Members):**
- Larger photo (aspect-ratio 3:4 or square)
- Name prominently displayed
- Title below name
- Optional bio text on hover or below
- Optional social icons on hover

**Medium/Small (Team Leads):**
- Smaller photo
- Name and role only
- Compact layout

**Animations:**
- Cards stagger in on scroll reveal
- Hover: Image subtle zoom (scale 1.05), card lifts slightly
- Photo has subtle gradient overlay that lightens on hover
- Social icons fade in on hover (if present)

#### TeamGrid.tsx
- Responsive grid layout
- Board members: 3 columns desktop, 2 tablet, 1 mobile
- Team leads: 4 columns desktop, 3 tablet, 2 mobile
- Centered layout when row isn't full

### Animation Specifications

**Page Load:**
1. Header text reveals with character stagger
2. "Our Story" section fades up

**Scroll Reveals:**
1. "Board of Directors" heading animates in
2. Board member cards stagger in (0.1s delay each)
3. "Team Leads" heading animates in
4. Team cards stagger in (0.08s delay each)
5. Thank you section fades up
6. CTA section scales in

**Hover Effects:**
- Card lift: `translateY(-8px)`
- Image zoom: `scale(1.05)` with overflow hidden
- Subtle shadow increase
- Social icons fade in from bottom

### Responsive Behavior

**Desktop (1024px+):**
- Three-column board grid
- Four-column team grid
- Horizontal "Our Story" layout

**Tablet (768px - 1023px):**
- Two-column board grid
- Three-column team grid

**Mobile (< 768px):**
- Single column board grid (larger cards)
- Two-column team grid
- Stacked layout throughout

---

# PAGE 4: DONATE (`app/donate/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              HERO SECTION                             │   │
│     │                                                       │   │
│     │     "SUPPORT THE SANDBAR"                            │   │
│     │                                                       │   │
│     │     "Help us keep the music alive on                 │   │
│     │      Crooked Lake for generations to come"           │   │
│     │                                                       │   │
│     │     Background: Subtle image or gradient             │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              WHY DONATE                               │   │
│     │                                                       │   │
│     │   Brief compelling paragraph about:                  │   │
│     │   - Festival is free to attend                       │   │
│     │   - Run by volunteers / non-profit                   │   │
│     │   - Donations fund artists, equipment, safety        │   │
│     │   - Community impact                                 │   │
│     │                                                       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │           DONATION OPTIONS                            │   │
│     │                                                       │   │
│     │   ┌───────────┐ ┌───────────┐ ┌───────────┐         │   │
│     │   │           │ │           │ │           │         │   │
│     │   │   $25     │ │   $50     │ │   $100    │         │   │
│     │   │           │ │    ★      │ │           │         │   │
│     │   │  "Friend" │ │"Supporter"│ │ "Patron"  │         │   │
│     │   │           │ │ POPULAR   │ │           │         │   │
│     │   └───────────┘ └───────────┘ └───────────┘         │   │
│     │                                                       │   │
│     │   ┌───────────┐ ┌───────────┐ ┌───────────┐         │   │
│     │   │           │ │           │ │           │         │   │
│     │   │   $250    │ │   $500    │ │  Custom   │         │   │
│     │   │           │ │           │ │    $      │         │   │
│     │   │"Benefactor│ │ "Champion"│ │  [____]   │         │   │
│     │   │           │ │           │ │           │         │   │
│     │   └───────────┘ └───────────┘ └───────────┘         │   │
│     │                                                       │   │
│     │   ☐ Make this a monthly donation                     │   │
│     │                                                       │   │
│     │         [ DONATE NOW ]  ← Primary CTA                │   │
│     │                                                       │   │
│     │   🔒 Secure payment via Stripe/PayPal               │   │
│     │                                                       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │           WHERE YOUR MONEY GOES                       │   │
│     │                                                       │   │
│     │   Visual breakdown (icons + percentages or bars):    │   │
│     │                                                       │   │
│     │   🎸 Artist Fees & Sound         40%  ████████░░    │   │
│     │   🛡️ Safety & Medical            20%  ████░░░░░░    │   │
│     │   🎪 Stage & Equipment           20%  ████░░░░░░    │   │
│     │   🍔 Operations & Logistics      15%  ███░░░░░░░    │   │
│     │   📣 Marketing & Community        5%  █░░░░░░░░░    │   │
│     │                                                       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │           DONOR RECOGNITION                           │   │
│     │           (Optional - if applicable)                  │   │
│     │                                                       │   │
│     │   "Champion Level" donors ($500+) recognized on:     │   │
│     │   - Festival signage                                 │   │
│     │   - Website donor wall                               │   │
│     │   - Social media thank you                           │   │
│     │                                                       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │           OTHER WAYS TO HELP                          │   │
│     │                                                       │   │
│     │   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │   │
│     │   │             │ │             │ │             │   │   │
│     │   │  VOLUNTEER  │ │   SPONSOR   │ │   SPREAD    │   │   │
│     │   │             │ │             │ │  THE WORD   │   │   │
│     │   │  Donate     │ │  Business   │ │             │   │
│     │   │  your time  │ │  partner-   │ │  Share on   │   │
│     │   │             │ │  ships      │ │  social     │   │
│     │   │             │ │             │ │             │   │
│     │   │ [SIGN UP]   │ │[LEARN MORE] │ │  [f][ig][x] │   │   │
│     │   └─────────────┘ └─────────────┘ └─────────────────┘   │
│     │                                                       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │               TAX INFO                                │   │
│     │                                                       │   │
│     │   "Crooked Lake Sandbar Music Festival is a          │   │
│     │    501(c)(3) non-profit organization.                │   │
│     │    Your donation may be tax-deductible.              │   │
│     │    EIN: XX-XXXXXXX"                                  │   │
│     │                                                       │   │
│     │   (Adjust if different organization structure)       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │               QUESTIONS?                              │   │
│     │                                                       │   │
│     │   "Contact us at donate@crookedlakefest.com"         │   │
│     │   or [CONTACT PAGE] link                             │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
Data Structure
typescript// data/donations.ts

export interface DonationTier {
  id: string;
  amount: number;
  name: string;           // "Friend", "Supporter", etc.
  description?: string;   // Optional perk description
  isPopular?: boolean;    // Highlight this option
  perks?: string[];       // List of benefits at this level
}

export const donationTiers: DonationTier[] = [
  {
    id: 'friend',
    amount: 25,
    name: 'Friend',
    description: 'Every bit helps!',
  },
  {
    id: 'supporter',
    amount: 50,
    name: 'Supporter',
    isPopular: true,
    description: 'Most popular choice',
  },
  {
    id: 'patron',
    amount: 100,
    name: 'Patron',
    description: 'Make a real impact',
  },
  {
    id: 'benefactor',
    amount: 250,
    name: 'Benefactor',
    perks: ['Name on donor wall'],
  },
  {
    id: 'champion',
    amount: 500,
    name: 'Champion',
    perks: ['Name on signage', 'Social media recognition', 'Donor wall'],
  },
];

export interface FundAllocation {
  category: string;
  percentage: number;
  icon: string;           // Lucide icon name
  color: string;          // Tailwind color class
}

export const fundAllocations: FundAllocation[] = [
  { category: 'Artist Fees & Sound', percentage: 40, icon: 'Guitar', color: 'lake-500' },
  { category: 'Safety & Medical', percentage: 20, icon: 'Shield', color: 'coral-500' },
  { category: 'Stage & Equipment', percentage: 20, icon: 'Tent', color: 'sunset-500' },
  { category: 'Operations & Logistics', percentage: 15, icon: 'Truck', color: 'lake-400' },
  { category: 'Marketing & Community', percentage: 5, icon: 'Megaphone', color: 'sunset-400' },
];

export const taxInfo = {
  isNonProfit: true,
  ein: 'XX-XXXXXXX',      // To be filled in
  organizationType: '501(c)(3)',
};
Component Requirements
DonationTierCard.tsx
typescriptinterface DonationTierCardProps {
  tier: DonationTier;
  isSelected: boolean;
  onSelect: (tier: DonationTier) => void;
}
Visual States:

Default: Subtle border, clean background
Hover: Border color intensifies, slight lift
Selected: Filled background (gradient), checkmark or glow ring
Popular: Badge overlay ("Most Popular" or star)

Layout:

Amount prominently displayed (large)
Tier name below
Optional description text
Perks list (if any) shown on hover or always visible

CustomAmountInput.tsx
typescriptinterface CustomAmountInputProps {
  value: number | null;
  onChange: (amount: number) => void;
  isSelected: boolean;
  onSelect: () => void;
  minAmount?: number;     // Default $5
}
Features:

Dollar sign prefix
Number input with validation
Minimum amount enforcement
Clear button
Focus state animation

DonationForm.tsx
typescriptinterface DonationFormProps {
  selectedTier: DonationTier | null;
  customAmount: number | null;
  isMonthly: boolean;
  onSubmit: () => void;
}
Elements:

Tier selection grid
Custom amount input
Monthly toggle checkbox with animated switch
Submit button ("Donate $XX" with dynamic amount)
Security badge/text
Links to payment processor (Stripe, PayPal, etc.)

Note: Actual payment processing happens on external platform. This form either:

Redirects to external donation page (PayPal.me, Stripe link, etc.)
Or embeds an iframe/widget from donation platform

FundAllocationChart.tsx
typescriptinterface FundAllocationChartProps {
  allocations: FundAllocation[];
  animate?: boolean;
}
Visual Options (choose one):

Horizontal bars that animate width on scroll
Donut/pie chart with animated segments
Icon grid with percentage labels

Animation:

Bars grow from 0 to full width on scroll reveal
Stagger each category (0.1s delay)
Numbers count up

OtherWaysCard.tsx
Simple card component for the three alternative ways to help:

Icon
Title
Short description
CTA button or social icons

Animation Specifications
Page Load:

Hero text fades up with stagger
Subtle background parallax or gradient shift

Scroll Reveals:

"Why Donate" section fades up
Donation tier cards stagger in from bottom
Fund allocation bars animate (grow from left)
"Other Ways" cards stagger in
Tax info fades in

Interaction Animations:

Tier card selection: Quick scale pulse (1.05 → 1.0), border glow animates in
Custom amount focus: Input border animates, subtle glow
Monthly toggle: Smooth slide animation
Submit button: Magnetic effect, glow pulse when amount selected
Hover on tier: Lift (translateY -6px), shadow deepens

Success State (if handling inline):

Confetti burst or gentle celebration animation
Thank you message fades in
Share prompt appears

Responsive Behavior
Desktop (1024px+):

3x2 grid for donation tiers
Fund allocation as horizontal bars
Three-column "Other Ways" section

Tablet (768px - 1023px):

2x3 grid for donation tiers
Fund allocation bars narrower
Three-column "Other Ways" (smaller)

Mobile (< 768px):

2x3 grid for tiers (compact) or single column
Fund allocation as stacked vertical bars
Single column "Other Ways" cards
Sticky "Donate Now" button at bottom of screen

Integration Notes
Payment Processing Options:

External Link: Button links to PayPal.me, Stripe Payment Link, or GoFundMe
Embedded Widget: Stripe Checkout, PayPal Button, or Donorbox embed
Custom Form: Collect info, process via Stripe API (requires backend)

Recommended for simplicity: External link to Stripe Payment Links or PayPal donation page, with amount pre-filled based on selection.
typescript// Example redirect logic
const handleDonate = () => {
  const amount = selectedTier?.amount || customAmount;
  const donationUrl = `https://donate.stripe.com/your-link?amount=${amount}`;
  window.open(donationUrl, '_blank');
};
SEO & Meta
typescript// Metadata for donate page
export const metadata = {
  title: 'Donate | Crooked Lake Sandbar Music Festival',
  description: 'Support the Crooked Lake Sandbar Music Festival. Your donation helps keep live music free on the lake for our community.',
  openGraph: {
    title: 'Support the Sandbar',
    description: 'Help us keep the music alive on Crooked Lake',
    // Include compelling OG image
  },
};

Updated Navigation Links
With these changes, update the navigation structure:
typescript// data/navigation.ts

export const mainNavLinks = [
  { label: 'Home', href: '/' },
  { label: 'Lineup', href: '/lineup' },
  { label: 'Schedule', href: '/schedule' },
  { label: 'Venue', href: '/venue' },
  { label: 'Donate', href: '/donate' },  // Prominent placement
];

export const moreNavLinks = [
  { label: 'Team', href: '/team' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: 'Livestream', href: '/livestream' },
];
Navigation CTA Button: Change from "Get Tickets" to "Donate" with heart icon or keep as secondary link and use "Livestream" or "Volunteer" as CTA during event season.

---

## PAGE 4: SCHEDULE (`app/schedule/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ███ PAGE HEADER ███                          │
│     "FESTIVAL SCHEDULE"                                        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     [FRI JULY 24]  [SAT JULY 25]      ← Day selector          │
│                                                                 │
│     [MAIN STAGE] [SANDBAR STAGE] [ALL] ← Stage filter         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │                 TIMELINE VIEW                         │   │
│     │                                                       │   │
│     │  12:00 PM  ┌─────────────────────────────────────┐   │   │
│     │     │      │ Gates Open                           │   │   │
│     │     │      └─────────────────────────────────────┘   │   │
│     │     │                                                 │   │
│     │  1:00 PM   ┌─────────────────────────────────────┐   │   │
│     │     │      │ Artist Name - Main Stage            │   │   │
│     │     │      │ Genre • 60 min set                  │   │   │
│     │     │      └─────────────────────────────────────┘   │   │
│     │     │                                                 │   │
│     │  2:30 PM   ┌─────────────────────────────────────┐   │   │
│     │     │      │ Artist Name - Sandbar Stage         │   │   │
│     │     │      └─────────────────────────────────────┘   │   │
│     │     ▼                                                 │   │
│     │    ...                                                │   │
│     │                                                       │   │
│     │ 10:00 PM   ┌─────────────────────────────────────┐   │   │
│     │            │ HEADLINER - Main Stage              │   │   │
│     │            │ ★ Highlighted                       │   │   │
│     │            └─────────────────────────────────────┘   │   │
│     │                                                       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     [DOWNLOAD SCHEDULE PDF]  [ADD TO CALENDAR]                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

### Data Structure
```typescript
// data/schedule.ts

export interface ScheduleEvent {
  id: string;
  title: string;
  artistId?: string;  // Links to artist data
  stage: 'main' | 'sandbar' | 'general';
  day: 'friday' | 'saturday';
  startTime: string;  // "13:00"
  endTime: string;    // "14:00"
  description?: string;
  isHeadliner?: boolean;
}
```

### Component Requirements

#### ScheduleTimeline.tsx
- Vertical timeline with time markers
- Color-coded by stage
- Click event to see artist details
- Current time indicator (during event)
- Smooth scroll to specific time

#### EventBlock.tsx
- Time, artist name, stage indicator
- Headliner gets special styling (larger, glowing border)
- Click expands or links to artist modal

---

## PAGE 5: VENUE (`app/venue/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │            HERO IMAGE/VIDEO OF VENUE                  │   │
│     │                                                       │   │
│     │     "THE SANDBAR"                                    │   │
│     │     Crooked Lake, Indiana                            │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              INTERACTIVE VENUE MAP                    │   │
│     │                                                       │   │
│     │   [Main Stage] [Sandbar Stage] [Food] [Parking]      │   │
│     │                                                       │   │
│     │         ┌───────────────────────────┐                │   │
│     │         │                           │                │   │
│     │         │    Illustrated or         │                │   │
│     │         │    Satellite Map          │                │   │
│     │         │    with clickable         │                │   │
│     │         │    hotspots               │                │   │
│     │         │                           │                │   │
│     │         └───────────────────────────┘                │   │
│     │                                                       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │               GETTING THERE                           │   │
│     │                                                       │   │
│     │   📍 Address: [Full address]                         │   │
│     │   🚗 Driving directions                              │   │
│     │   🅿️ Parking information                             │   │
│     │   🚐 Shuttle services (if any)                       │   │
│     │                                                       │   │
│     │   [OPEN IN GOOGLE MAPS]                              │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              ACCOMMODATIONS                           │   │
│     │                                                       │   │
│     │   Nearby hotels, campgrounds, rentals                │   │
│     │   Listed with links                                   │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │               VENUE RULES                             │   │
│     │                                                       │   │
│     │   What to bring / What NOT to bring                  │   │
│     │   Accordion or list format                           │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

### Component Requirements

#### InteractiveMap.tsx
- SVG or canvas-based illustrated map
- Clickable areas for: stages, food, restrooms, first aid, parking
- Tooltip/popover on hover with details
- Mobile: tap to select
- Optional: use actual satellite image with overlays

---

## PAGE 6: SPONSORS (`app/sponsors/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ███ PAGE HEADER ███                          │
│     "OUR SPONSORS"                                             │
│     "Making the magic possible"                                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │           TITLE SPONSORS (Largest)                    │   │
│     │                                                       │   │
│     │      ┌─────────────┐    ┌─────────────┐             │   │
│     │      │    LOGO     │    │    LOGO     │             │   │
│     │      └─────────────┘    └─────────────┘             │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │            GOLD SPONSORS (Medium)                     │   │
│     │   ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐                    │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │           SILVER SPONSORS (Small)                     │   │
│     │   ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐                  │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │           COMMUNITY PARTNERS                          │   │
│     │   ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐ ┌─┐                  │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │           BECOME A SPONSOR                            │   │
│     │                                                       │   │
│     │   CTA with benefits overview                         │   │
│     │   Link to contact or sponsorship packet              │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

### Data Structure
```typescript
// data/sponsors.ts

export interface Sponsor {
  id: string;
  name: string;
  logo: string;  // Path to logo image
  website: string;
  tier: 'title' | 'gold' | 'silver' | 'community';
}
```

---

## PAGE 7: VOLUNTEER (`app/volunteer/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ███ PAGE HEADER ███                          │
│     "JOIN THE TEAM"                                            │
│     "Volunteer with us"                                        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              WHY VOLUNTEER?                           │   │
│     │                                                       │   │
│     │   Benefits list with icons:                          │   │
│     │   - Free festival access                             │   │
│     │   - Volunteer t-shirt                                │   │
│     │   - Food/drink during shift                          │   │
│     │   - Be part of the community                         │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              VOLUNTEER ROLES                          │   │
│     │                                                       │   │
│     │   Grid of role cards:                                │   │
│     │   - Gate/Tickets                                     │   │
│     │   - Parking                                          │   │
│     │   - Setup/Teardown                                   │   │
│     │   - Info Booth                                       │   │
│     │   - etc.                                             │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              SIGN UP FORM                             │   │
│     │                                                       │   │
│     │   - Name                                             │   │
│     │   - Email                                            │   │
│     │   - Phone                                            │   │
│     │   - Preferred role (dropdown)                        │   │
│     │   - Availability (checkboxes)                        │   │
│     │   - Experience/notes (textarea)                      │   │
│     │                                                       │   │
│     │   [SUBMIT APPLICATION]                               │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

### Notes
- Form submissions to email or external service (Formspree, etc.)
- Success state with thank you message
- Form validation with helpful error messages

---

## PAGE 8: CONTACT (`app/contact/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ███ PAGE HEADER ███                          │
│     "GET IN TOUCH"                                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌────────────────────┐  ┌────────────────────────────┐    │
│     │   CONTACT INFO     │  │      CONTACT FORM          │    │
│     │                    │  │                            │    │
│     │   📧 Email         │  │   Name                     │    │
│     │   📱 Phone         │  │   Email                    │    │
│     │   📍 Location      │  │   Subject (dropdown)       │    │
│     │                    │  │   Message                  │    │
│     │   SOCIAL LINKS     │  │                            │    │
│     │   [f] [ig] [tw]    │  │   [SEND MESSAGE]           │    │
│     └────────────────────┘  └────────────────────────────┘    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              BOARD & TEAM                             │   │
│     │              (Optional section)                       │   │
│     │                                                       │   │
│     │   Grid of team member cards with photos/roles        │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## PAGE 9: FAQ (`app/faq/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ███ PAGE HEADER ███                          │
│     "FREQUENTLY ASKED QUESTIONS"                               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     [GENERAL] [TICKETS] [VENUE] [LODGING]  ← Category tabs    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │  + Question 1?                                        │   │
│     ├──────────────────────────────────────────────────────┤   │
│     │  + Question 2?                                        │   │
│     ├──────────────────────────────────────────────────────┤   │
│     │  - Question 3? (expanded)                             │   │
│     │    Answer text here with smooth height animation...   │   │
│     ├──────────────────────────────────────────────────────┤   │
│     │  + Question 4?                                        │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     Still have questions? [CONTACT US]                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

### Data Structure
```typescript
// data/faq.ts

export interface FAQItem {
  id: string;
  question: string;
  answer: string;  // Can contain HTML/markdown
  category: 'general' | 'tickets' | 'venue' | 'lodging';
}
```

### Component Requirements

#### Accordion.tsx
- Smooth height animation on open/close
- Only one open at a time (or allow multiple)
- Icon rotates on open
- Accessible (aria attributes)

---

## PAGE 10: GALLERY (`app/gallery/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ███ PAGE HEADER ███                          │
│     "GALLERY"                                                  │
│     "Memories from past festivals"                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     [2025] [2024] [2023] [ALL]    ← Year filter               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              MASONRY PHOTO GRID                       │   │
│     │                                                       │   │
│     │   ┌─────┐ ┌───┐ ┌─────────┐                         │   │
│     │   │     │ │   │ │         │                         │   │
│     │   │     │ └───┘ │         │                         │   │
│     │   └─────┘ ┌───┐ └─────────┘                         │   │
│     │   ┌───┐   │   │ ┌───┐ ┌───────┐                     │   │
│     │   │   │   │   │ │   │ │       │                     │   │
│     │   └───┘   └───┘ └───┘ └───────┘                     │   │
│     │                                                       │   │
│     │   Click to open lightbox                             │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     [LOAD MORE] or infinite scroll                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

### Component Requirements

#### Lightbox
- Full-screen image viewer
- Previous/next navigation
- Close on escape or click outside
- Swipe support on mobile
- Image zoom on click/pinch

---

## PAGE 11: LIVESTREAM (`app/livestream/page.tsx`)

### Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ [NAVIGATION]                                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     ┌──────────────────────────────────────────────────────┐   │
│     │              VIDEO PLAYER (16:9)                      │   │
│     │                                                       │   │
│     │         YouTube/Vimeo embed or custom player         │   │
│     │                                                       │   │
│     └──────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     LIVE NOW: [Artist Name] - Main Stage                       │
│                                                                 │
│     COMING UP:                                                 │
│     - 3:00 PM: Artist 2                                        │
│     - 4:30 PM: Artist 3                                        │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│     Before event: Countdown + "Stream starts July 24"          │
│     After event: "Thanks for watching!" + VOD links            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [FOOTER]                                                        │
└─────────────────────────────────────────────────────────────────┘
```

---

# 🧩 SHARED COMPONENTS DETAIL

## Navigation.tsx

### States
1. **Transparent** (on hero): Logo white, links white, no background
2. **Scrolled**: Background blur, reduced height, logo smaller
3. **Mobile**: Hamburger menu, full-screen overlay

### Structure
```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO]          [Links...]                    [GET TICKETS]   │
└─────────────────────────────────────────────────────────────────┘
```

### Links
- Home
- Lineup
- Schedule
- Tickets
- Venue
- More ▼ (dropdown: Sponsors, Volunteer, FAQ, Gallery, Contact)

### Animation Requirements
- Logo morphs between sizes smoothly
- Background fades in on scroll
- Underline animates on hover
- Mobile menu slides in with staggered link reveals

---

## Footer.tsx

### Structure
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ┌─────────────────┐  ┌────────────┐  ┌──────────────────┐   │
│   │     LOGO        │  │   LINKS    │  │    SOCIAL        │   │
│   │                 │  │            │  │                  │   │
│   │   Tagline       │  │  Lineup    │  │  [f] [ig] [tw]   │   │
│   │                 │  │  Tickets   │  │  [yt] [spotify]  │   │
│   │                 │  │  Venue     │  │                  │   │
│   │                 │  │  Contact   │  │                  │   │
│   │                 │  │  FAQ       │  │                  │   │
│   └─────────────────┘  └────────────┘  └──────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│   © 2026 Crooked Lake Sandbar Music Festival. All rights.      │
│   Privacy Policy  |  Terms                                      │
└─────────────────────────────────────────────────────────────────┘
```

---

## Button.tsx

### Variants
1. **Primary**: Gradient background, glow effect
2. **Secondary**: Outline style, fill on hover
3. **Ghost**: No background, subtle hover
4. **Link**: Underline style

### Sizes
- `sm`: Small padding, smaller text
- `md`: Default
- `lg`: Large padding, larger text

### Props
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'link';
  size: 'sm' | 'md' | 'lg';
  magnetic?: boolean;  // Enable magnetic hover effect
  glow?: boolean;      // Enable glow pulse
  href?: string;       // Makes it a link
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}
```

### Magnetic Effect
- On hover, button subtly follows cursor within bounds
- Uses `useMousePosition` hook
- Smooth spring animation

---

## SectionHeading.tsx

### Props
```typescript
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  animate?: boolean;
}
```

### Animation
- Title text splits into characters
- Characters fade up with stagger
- Optional decorative line draws in

---

## ScrollReveal.tsx

### Usage
Wraps any element to add scroll-triggered animation.

```tsx
<ScrollReveal animation="fadeUp" delay={0.2}>
  <Card />
</ScrollReveal>
```

### Props
```typescript
interface ScrollRevealProps {
  children: React.ReactNode;
  animation: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
  threshold?: number;  // 0-1, how much element visible before trigger
}
```

---

# 🔧 UTILITY HOOKS

## useGSAP.ts
Custom hook for GSAP context management in React.

## useMousePosition.ts
Tracks mouse position for magnetic effects and cursor interactions.

## useMediaQuery.ts
Returns boolean for responsive breakpoint checks.

## useCountdown.ts
Calculates and returns time remaining to target date.

## useLenis.ts
Provides smooth scroll instance for programmatic scrolling.

---

# 📱 RESPONSIVE BREAKPOINTS

```typescript
// tailwind.config.ts
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

### Mobile-First Approach
- Design for mobile first
- Enhance for larger screens
- Touch-friendly targets (min 44px)
- Reduced animations on mobile (respect prefers-reduced-motion)

---

# ⚡ PERFORMANCE REQUIREMENTS

1. **Images**
   - Use Next.js Image component
   - WebP format with fallbacks
   - Lazy loading below fold
   - Blur placeholder for LCP images

2. **Fonts**
   - Self-host critical fonts
   - Use `font-display: swap`
   - Subset fonts for used characters

3. **Animations**
   - Use `will-change` sparingly
   - Prefer transforms over layout properties
   - Respect `prefers-reduced-motion`
   - Disable heavy animations on low-power devices

4. **Code Splitting**
   - Dynamic imports for heavy components (Three.js)
   - Route-based splitting (automatic with Next.js)

5. **Targets**
   - LCP: < 2.5s
   - FID: < 100ms
   - CLS: < 0.1
   - Lighthouse: 90+ all categories

---

# 🚀 DEPLOYMENT NOTES

1. **Environment Variables**
   ```
   NEXT_PUBLIC_SITE_URL=https://crookedlakesandbarmusicfest.com
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

2. **SEO**
   - Metadata for each page
   - Open Graph images
   - Structured data (Event schema)
   - Sitemap generation

3. **Analytics**
   - Google Analytics 4
   - Event tracking for key actions (ticket clicks, etc.)

---

# ✅ IMPLEMENTATION CHECKLIST

## Phase 1: Foundation
- [ ] Next.js project setup with TypeScript
- [ ] Tailwind configuration with custom theme
- [ ] GSAP + Lenis integration
- [ ] Base layout components (Nav, Footer)
- [ ] Smooth scroll implementation

## Phase 2: Core Pages
- [ ] Homepage with all sections
- [ ] Lineup page with filtering
- [ ] Tickets page
- [ ] Schedule page

## Phase 3: Supporting Pages
- [ ] Venue page with map
- [ ] Sponsors page
- [ ] FAQ page
- [ ] Contact page
- [ ] Volunteer page
- [ ] Gallery page
- [ ] Livestream page

## Phase 4: Polish
- [ ] All animations implemented
- [ ] Responsive testing
- [ ] Performance optimization
- [ ] SEO implementation
- [ ] Analytics setup

## Phase 5: Launch
- [ ] Content population
- [ ] Final QA
- [ ] Deployment
- [ ] Monitoring setup

---

This document should give Claude Code everything needed to build the site systematically. Want me to expand on any specific section or add more technical detail to any component?