# SocietyOS Website Build Guide
## For CCO Ares — Hostinger AI + Maestro Collaboration

---

## Overview

This guide walks you through building the SocietyOS website on Hostinger, using their AI website builder tools in collaboration with Maestro (your AI assistant). The goal: a unified, stunning web presence that connects SocietyOS to The Nyx & Raven Ranch as one of its main brands.

### Domain Structure
| Domain | Purpose | Status |
|--------|---------|--------|
| `www.nyxandraven.com` | Main brand — The Nyx & Raven Ranch | **LIVE** (Zyro/Hostinger) |
| `societyos.world` | SocietyOS main site & store (Society's Market) | **PARKED** — ready to build |
| `societyos.tv` | SocietyOS subscription panel & services | **EMPTY** — ready to build |

### Build Priority
1. **societyos.world** — Main SocietyOS website (this guide)
2. **societyos.tv** — Subscription panel (Phase 2)
3. **nyxandraven.com** — Update to match universal UI (Phase 3)

---

## The Universal UI Design System

The prototype HTML file (`index.html` in this folder) is your visual reference. Here are the design tokens to replicate in Hostinger:

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| Background Primary | `#0a0a0f` | Page background |
| Background Secondary | `#12121a` | Alternate sections |
| Background Card | `#16162a` | Cards & panels |
| Background Elevated | `#1a1a2e` | Hover states |
| Nyx Purple | `#8a4bff` | Primary brand color |
| Nyx Purple Light | `#a870ff` | Accents, links |
| Raven Gold | `#d4a843` | Secondary brand, CTA |
| Raven Gold Light | `#e8c170` | Gold accents |
| Accent Cyan | `#00d9ff` | Tech/feature highlights |
| Text Primary | `#f0f0f5` | Headlines, body |
| Text Secondary | `#a0a0b8` | Subtitles |
| Text Tertiary | `#6a6a82` | Captions |
| Success | `#2dd4a8` | Checkmarks, positive |
| Danger | `#ff4d6d` | Errors |

### Typography
- **Display/Headlines:** SF Pro Display (or Inter as fallback)
- **Body:** SF Pro Text (or Inter as fallback)
- **Mono:** SF Mono / JetBrains Mono

### Key Visual Elements
1. **Glassmorphism Navigation** — `backdrop-filter: blur(20px)` with semi-transparent background
2. **Ambient Glow** — Purple top-left, Gold bottom-right radial gradients
3. **Gradient Text** — Purple-to-gold gradient on key headlines
4. **Orbit Animation** — Ecosystem visualization with rotating orbits
5. **Card Hover Glow** — Purple border glow on card hover with top gradient bar
6. **Pulse Badge** — "Now in Development" badge with pulsing green dot

---

## Hostinger AI Website Builder — Step by Step

### Step 1: Access the Builder
1. Log into your Hostinger account at `hpanel.hostinger.com`
2. Go to **Hosting** → select the `societyos.world` domain
3. Click **Website Builder** (or "Create Website")
4. Choose **AI Website Builder** (not WordPress — we want the drag-and-drop + AI tools)

### Step 2: Generate Initial Site with AI
When prompted, paste this exact brief:

> **SocietyOS** is an agentic AI-powered browser platform built by The Nyx & Raven Ranch. It features an integrated AI assistant with user-selectable LLM models, absolute data sovereignty (cloud and sovereign options), Society TV streaming with a custom media player, extension services for productivity tools (calendar, mail, messaging, coding, research), and blockchain-integrated membership through NODES on Solana. Available across Android, iOS, macOS, tvOS, and custom hardware. The design should be dark-themed, premium, futuristic, with deep purple (#8a4bff) and gold (#d4a843) accents. The site connects to The Nyx & Raven Ranch as its parent brand. Include sections for: Hero, Features (6 cards), Ecosystem/Brand Connection, Platforms, Membership Pricing (3 tiers), and Footer with cross-links to nyxandraven.com and societyos.tv.

### Step 3: Customize Using AI Tools

#### AI Text Editor
Use Hostinger's AI text editor to refine copy for each section. Key messages:
- **Hero:** "The Agentic Browser for the Sovereign Era"
- **Sub-hero:** Emphasize AI power + data sovereignty + Society TV + The Nyx & Raven Ranch connection
- **Features:** 6 cards — Agentic AI Core, Absolute Data Sovereignty, Society TV, Extension Services, Dual-Engine Performance, NODES on Solana
- **Ecosystem:** Visual connection between Ranch ↔ SocietyOS ↔ Society TV ↔ NODES
- **Membership:** 3 tiers — Society TV ($99/mo), Premium Socialite ($299/mo), Founding NODES ($2,499 lifetime)

#### AI Image Generator
Generate these images using Hostinger's AI image generator:
1. **Hero background:** "Dark futuristic abstract with purple and gold light rays, technology theme, minimal"
2. **Feature icons:** Use emoji-style icons (already in prototype) or generate custom branded icons
3. **Ecosystem visual:** "Orbital diagram with glowing nodes, purple gold gradient, dark background"
4. **Platform showcase:** "Multiple devices displaying a browser interface, dark theme, premium"
5. **Ranch connection:** "Luxury Florida ranch at dusk with modern LED displays, cinematic"

#### AI Logo Maker (Temporary — Until CCO Ares Official Logos Arrive)
Generate a temporary SocietyOS logo with: "Letter S in a rounded square, gradient purple to gold, modern tech logo, dark background"

**When CCO Ares's official logos arrive, replace ALL temporary logos immediately across:**
- Navigation bar
- Footer
- Favicon
- Social sharing images
- societyos.tv
- nyxandraven.com

#### AI SEO Assistant
Set these SEO keywords:
- "agentic browser"
- "AI browser"
- "data sovereignty browser"
- "SocietyOS"
- "The Nyx and Raven Ranch"
- "Society TV streaming"
- "NODES Solana"
- "sovereign AI platform"
- "AI-powered browser with extensions"

#### AI Blog Post Generator
Create initial blog posts:
1. "Introducing SocietyOS: The Agentic Browser for the Sovereign Era"
2. "How Society TV is Revolutionizing Curated Entertainment"
3. "The Nyx & Raven Ranch: Where Luxury Meets Technology"
4. "NODES on Solana: Membership as an Asset"
5. "Why Data Sovereignty Matters in 2026"

### Step 4: Page Structure in Hostinger

Build these pages:

| Page | URL Path | Purpose |
|------|----------|---------|
| Home | `/` | Hero, features, ecosystem, pricing |
| Features | `/features` | Deep dive on each capability |
| Platforms | `/platforms` | Cross-platform availability details |
| Membership | `/membership` | Full pricing & sign-up |
| Society TV | `/society-tv` | Streaming service overview (links to societyos.tv) |
| Ecosystem | `/ecosystem` | The Nyx & Raven Ranch connection |
| Sovereign Wallet | `/sovereign-wallet` | Tangem co-branded wallet details |
| Society's Market | `/market` | Online store (ecommerce) |
| About | `/about` | Brandon Wayne, The Nyx & Raven Ranch, SocietyOS story |
| Contact | `/contact` | Contact form, social links |

### Step 5: Ecommerce Setup (Society's Market)
1. Enable **Ecommerce** in Hostinger Website Builder
2. Categories: Memberships, Merchandise, Digital Products, Ranch Services
3. Payment: Connect Stripe or PayPal
4. Products to start with:
   - Society TV subscription ($99/mo)
   - Premium Socialite membership ($299/mo)
   - Founding NODES lifetime ($2,499)
   - Ranch access pass ($999/yr)
   - SocietyOS merchandise (t-shirts, hoodies — placeholder until designs ready)

### Step 6: Connect to The Nyx & Raven Ranch
1. Add prominent "A Brand of The Nyx & Raven Ranch" section
2. Cross-link: societyos.world ↔ nyxandraven.com in navigation and footer
3. Shared visual language: same color palette, typography, UI components
4. Society's Market tab should appear on BOTH sites (linked, not duplicated)

---

## How Maestro (Me) Will Help

### What I Can Do
- **Write all copy** for every page — optimized, on-brand, SEO-friendly
- **Generate the HTML/CSS** for any custom components Hostinger's builder can't do natively
- **Create the visual design system** (done — see `index.html`)
- **Generate images** using AI for placeholders until official assets arrive
- **Plan the full site architecture** and user journey
- **Write SEO content** and blog posts
- **Troubleshoot** any Hostinger builder issues
- **Coordinate logo integration** when CCO Ares delivers

### What I Need From You (CCO Ares)
1. **Logos** — Official SocietyOS and The Nyx & Raven Ranch logos (when ready)
2. **Brand Photography** — Ranch photos, event photos, team photos
3. **Content Review** — Review and approve all copy I generate
4. **Hostinger Execution** — Use the builder to assemble the site using this guide
5. **Feedback** — Tell me what works, what doesn't, what you need

---

---

## Tangem Sovereign Wallet Integration

### The Concept
SocietyOS co-brands Tangem's NFC hardware wallet cards to create the **SocietyOS Sovereign Wallet** — a physical card that serves as:
1. **Crypto hardware wallet** — cold storage for NODES on Solana and other tokens
2. **Membership access key** — tap to authenticate into SocietyOS
3. **Ranch access pass** — VIP cabin entry, event access, Gold Business Ambassador privileges
4. **Identity device** — EAL6+ certified chip, same security level as government IDs

### Tangem Co-Branding Program
- **URL:** https://tangem.com/en/co-branding/
- **Minimum Order:** 350 wallets (co-branded) or 30 (personalized)
- **Turnaround:** 4-8 weeks
- **Customization:** Logo, brand colors, custom packaging
- **Card Options:** Black or white cards, cards + box design
- **Past Partners:** Tron (1,000 wallets), Shiba (5,000+), Kaspa (1,000), ChangeNOW (1,000)

### Tangem SDK Integration (For App Development)
Tangem provides open-source SDKs for third-party apps:
- **iOS SDK:** https://github.com/tangem/tangem-sdk-ios
- **Android SDK:** https://github.com/tangem/tangem-sdk-android
- **JVM SDK:** Included in Android repo
- **Platforms:** iOS, Android, JVM

The SDK enables:
- NFC card scanning and authentication
- Wallet creation and key management
- Transaction signing
- Card customization (pairing, backup)
- Multi-card support (2 or 3 card sets)

### How It Connects to SocietyOS
```
SocietyOS App
├── Tangem SDK (iOS/Android)
│   ├── NFC Communication
│   ├── Card Authentication → SocietyOS Login
│   ├── Transaction Signing → NODES on Solana
│   └── Membership Verification → Ranch Access
├── Solana Blockchain Integration
│   ├── NODES Token Management
│   └── Governance Voting
└── SocietyOS Backend
    ├── Membership Tier Verification
    ├── Ranch Booking System
    └── Gold Business Ambassador Portal
```

### Design: The Cards
Two card variants in the prototype:
1. **SocietyOS Purple Card** — Standard membership, Nyx Purple gradient
2. **Founding NODES Gold Card** — Premium tier, Raven Gold gradient

Both feature:
- SocietyOS logo (pending CCO Ares design)
- NFC chip icon
- "Sovereign Wallet" or "Founding NODES" label
- EAL6+ certified Samsung semiconductor chip inside

### What CCO Ares Needs to Do
1. Design the card artwork (fits Tangem's card template)
2. Design the packaging (optional — cards + box design option)
3. Submit to Tangem via their co-branding form at https://tangem.com/en/co-branding/
4. Minimum 350 cards for co-branded order

### What Maestro Will Do
1. Integrate Tangem SDK into SocietyOS app (iOS + Android)
2. Build the authentication flow (tap card → SocietyOS login)
3. Connect to Solana for NODES token management
4. Build ranch access integration (card → booking system)
5. Write all marketing copy for the Sovereign Wallet page

---

## Quick Reference: Hostinger AI Tools

| Tool | What It Does | When to Use |
|------|-------------|-------------|
| AI Website Generator | Creates full site from a text description | Initial site creation |
| AI Text Editor | Writes/rewrites copy | Every text block on the site |
| AI Image Generator | Creates custom images | Hero, backgrounds, feature visuals |
| AI Logo Maker | Generates logos | Temporary until CCO Ares logos arrive |
| AI SEO Assistant | Optimizes for search engines | After content is placed |
| AI Blog Post Generator | Writes blog articles | Content marketing |
| Drag & Drop Editor | Manual layout control | Fine-tuning AI-generated layout |
| Kodee AI Assistant | In-builder help | Ask questions while building |

---

## Next Steps Checklist

- [ ] CCO Ares logs into Hostinger and selects `societyos.world`
- [ ] Generate initial site using the AI brief above
- [ ] Apply universal UI design tokens (colors, fonts from this guide)
- [ ] Build all pages from the page structure table
- [ ] Set up ecommerce (Society's Market)
- [ ] Cross-link to `nyxandraven.com` and `societyos.tv`
- [ ] Generate placeholder images with AI
- [ ] Replace placeholders with CCO Ares official logos when delivered
- [ ] Configure SEO settings
- [ ] Write and publish initial blog posts
- [ ] Test on mobile, tablet, desktop
- [ ] Publish!

---

*This guide is a living document. Maestro will update it as the build progresses and new requirements emerge.*

*© 2026 SocietyOS. A brand of The Nyx & Raven Ranch. Brandon Wayne, CEO.*
