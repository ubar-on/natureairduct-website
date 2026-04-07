# Nature Airduct — Brand Guidelines

## Core Visual Principle: "The Breath of Fresh Air"

The overall aesthetic is light, airy, and clinical yet welcoming. Deep forest green anchors trust and nature, balanced against an expanse of pure white to symbolize absolute cleanliness.

---

## 1. Color Palette

| Token | Name | HEX | Usage |
|-------|------|-----|-------|
| Primary | Forest Trust Green | `#1A531A` | Logo, primary CTA buttons, H1/H2 headers, key icons |
| Secondary | Sky Clarity Blue | `#7DD3F7` | Secondary CTAs, hover states, service block accents, benefit icons |
| Background | Pure Clean White | `#FFFFFF` | 90% of landing page background |
| Body Text | Dark Charcoal | `#333333` | Body paragraphs, smaller subheaders |
| Header Text | Forest Trust Green | `#1A531A` | H1 headlines, H2 section titles |
| Inverted Text | Pure White | `#FFFFFF` | Text inside buttons |
| Section Wash | Faint Sky Blue | `#F0F9FF` | Alternate section backgrounds to break up white |

### Color Psychology
- **Forest Green:** Growth, nature, stability, reliability — anchors the brand as established and trustworthy.
- **Sky Blue:** Fresh, clean air and clarity — modern, energetic contrast to the deep green.
- **White:** Cleanliness, negative space, minimalism — lets green and blue pop.

---

## 2. Typography

### Font Pairing (updated from original guidelines)

Per design system rules, headings use a display/serif font paired with a clean sans-serif body font for visual contrast and premium feel.

- **Headings (H1, H2, H3):** **DM Serif Display** — elegant serif with warmth and trust. Tight tracking (`letter-spacing: -0.03em`) on large sizes (H1, H2).
- **Body (paragraphs, UI, buttons, forms):** **Inter** — highly legible, modern humanist sans-serif. Line-height `1.7` for comfortable reading.

### Font Color Hierarchy
| Element | Color | Why |
|---------|-------|-----|
| Body text & subheaders | `#333333` | High contrast without harshness; reduces eye strain |
| Main titles (H1, H2) | `#1A531A` | Establishes brand presence, anchors content |
| Button text (inverted) | `#FFFFFF` | White on green/blue buttons |

---

## 3. Design Tokens

### Shadows
Never use flat `shadow-md`. Use layered, green-tinted shadows:
- **Elevated (cards):** `0 1px 3px rgba(26,83,26,0.08), 0 4px 12px rgba(26,83,26,0.06)`
- **Floating (sticky header, modals):** `0 2px 8px rgba(26,83,26,0.10), 0 8px 24px rgba(26,83,26,0.08)`

### Depth System
| Level | Usage | Shadow |
|-------|-------|--------|
| Base | White backgrounds, body | None |
| Elevated | Cards, form containers | Elevated shadow |
| Floating | Sticky header, mobile menu | Floating shadow |

### Spacing Scale
Use consistent tokens — never random Tailwind steps:
`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 px`

### Border Radius
- Buttons: `8px` (rounded-lg)
- Cards: `12px` (rounded-xl)
- Inputs: `8px` (rounded-lg)

### Animations
- Only animate `transform` and `opacity` — never `transition-all`
- Spring easing: `cubic-bezier(0.34, 1.56, 0.64, 1)`
- Duration: 200–300ms for micro-interactions, 400–500ms for entrances

### Interactive States
Every clickable element must have:
- `hover` — subtle scale or color shift
- `focus-visible` — visible ring (sky blue `#7DD3F7`)
- `active` — slight scale-down or darker shade

---

## 4. Images & Media
- Placeholder images via `https://placehold.co/WIDTHxHEIGHT`
- Add gradient overlay on hero/background images: `bg-gradient-to-t from-black/60`
- Add color treatment layer: `mix-blend-multiply` with brand green
- Before/after photos are a key trust signal — always include when available

---

## 5. Logo Guidelines

### Font
Montserrat (used in the SVG logos)

### Variants
- **Desktop (horizontal):** `brand-assets/NatureAirductLogoWeb.svg` — 560×280, "Nature Airduct" in Bold, "Airduct & Dryer Cleaning" in Regular weight
- **Mobile (square):** `brand-assets/NatureAirductLogoMobile.svg` — 290×290, both text lines in Bold

### Logo Colors
- Container: Forest green rounded rectangle (`#2D5E35` in SVG) with white border
- All text and decorative elements: Pure white
- Decorative: Three wavy lines + sparkle/star shapes

### Usage Rules
- Use web version in desktop header, mobile version in mobile header
- Always on white or very light background
- Minimum clear space: 16px around all sides

---

## 6. Strategic Layout

### Header
- Logo top-left (web version on desktop, mobile version on mobile)
- Navigation in body font at medium weight in `#333333`
- Phone CTA button always visible

### Hero Section
- Clean background (gradient, subtle pattern, or hero image with overlay)
- H1 in display serif, forest green
- Sub-headline in body font, charcoal
- Primary CTA: Solid green (`#1A531A`) button with white text — most important element
- Secondary CTA: Outlined or sky blue variant

### Services/Pricing
- Card-based layout (3 cards on desktop, stacked on mobile)
- Icons in forest green or sky blue
- Optional faint sky blue wash background (`#F0F9FF`)

### Social Proof
- Simple text blocks in body font on white
- Sky blue quote mark accents
- Star ratings in gold/amber

### Contact/CTA
- Clean form with minimal fields
- Submit button: Primary green with white text
- Phone number prominently displayed alongside form
