# War Thunder Master Academy

Comprehensive military-style educational platform, encyclopedia, meta-analysis hub, and tactical school for the game War Thunder.

## 🎯 Overview

War Thunder Master Academy is a production-grade educational platform designed to serve as the definitive resource for War Thunder players. It combines:

- **Military-style Academy Training**: Long-form, multi-chapter training modules
- **Complete Meta Encyclopedia**: Accurate, evidence-based mechanics and meta analysis
- **Comprehensive Knowledge Base**: Nations, BR tiers, maps, vehicles, weapons, weak spots
- **Professional UI/UX**: Dark, tactical, military-themed interface optimized for long reading

## 🏗️ Architecture

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Dark Military Theme)
- **Content**: Markdown/MDX files in `/content` directory
- **Deployment**: Static Site Generation (SSG)

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard/Home page
│   └── search/            # Search page
├── components/            # React components
│   ├── navigation/        # Header, Footer, Sidebar
│   ├── ui/                # Reusable UI components
│   └── search/            # Search components
├── content/               # All content (Markdown/MDX)
│   ├── academy/           # Training modules
│   ├── nations/           # Nation guides
│   ├── maps/              # Map tactics
│   ├── meta/              # Meta analysis
│   ├── vehicles/          # Vehicle guides
│   └── ...                # Other content categories
├── lib/                   # Utility functions
├── styles/                # Global styles
└── public/                # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ 
- npm 11+

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application will be available at `http://localhost:3004` (port 3004)

**Note**: The dev server runs on port 3004, not the default 3000.

## 📖 Available Pages

### Dashboard
- `/` - Main dashboard with module cards

### New Player Path
- `/new-player-path/overview` - New Player Path overview
- `/new-player-path/chapter-1-first-steps` - First Steps
- `/new-player-path/chapter-2-choosing-nation` - Choosing Your Nation

### Academy
- `/academy` - Academy hub
- `/academy/ground-forces` - Ground Academy overview
- `/academy/ground-forces/chapter-1-fundamentals` - Tank Fundamentals
- `/academy/ground-forces/chapter-2-armor-mechanics` - Armor Mechanics

### Nations
- `/nations` - Nations hub
- `/nations/usa` - USA Nation Guide

### Vehicles
- `/vehicles` - Vehicle Encyclopedia hub
- `/vehicles/usa/m4-sherman` - M4 Sherman Guide

### Maps
- `/maps` - Map Tactics hub
- `/maps/fulda-gap` - Fulda Gap Tactical Guide

### Search
- `/search` - Search functionality with API integration

## 📋 Current Status

### ✅ Phase 1: MVP - Structure & Foundation (COMPLETED)

- ✅ Next.js project initialized with TypeScript and App Router
- ✅ Tailwind CSS configured with dark military theme
- ✅ Complete folder structure created
- ✅ Basic navigation (Header, Footer)
- ✅ Dashboard/Briefing page with module cards
- ✅ Search bar component (placeholder)
- ✅ Content directory structure
- ✅ Basic UI components (Button, Card, Table, Callout)

### ✅ Phase 2: Alpha - Core Content System (IN PROGRESS)

**Completed:**
- ✅ MDX/Markdown content loading system
- ✅ Content renderer components (ContentHeader, ContentRenderer, ContentFooter)
- ✅ Content loader utilities (loader.ts, parser.ts)
- ✅ Search functionality (API route + client-side search)
- ✅ Cross-linking system with automatic related content
- ✅ New Player Path module structure (Overview + 2 chapters)
- ✅ Ground Academy module structure (Overview + 2 chapters)
- ✅ Nation Guides structure (USA guide complete)
- ✅ Vehicle Encyclopedia structure (M4 Sherman guide complete)
- ✅ Map Tactics structure (Fulda Gap guide complete)
- ✅ Chapter navigation component for academy modules
- ✅ Dynamic routing for all content categories

**Content Created:**
- ✅ New Player Path: Overview, Chapter 1 (First Steps), Chapter 2 (Choosing Nation)
- ✅ Ground Academy: Overview, Chapter 1 (Fundamentals), Chapter 2 (Armor Mechanics)
- ✅ Nations: USA complete guide
- ✅ Vehicles: M4 Sherman complete guide
- ✅ Maps: Fulda Gap complete guide

**Pages Generated:** 17+ static pages

### 🔄 Next Steps (Continue Phase 2)

- [ ] Add remaining New Player Path chapters (3-8)
- [ ] Add remaining Ground Academy chapters (3-19)
- [ ] Create Air Academy module
- [ ] Add more nation guides (Germany, Russia, etc.)
- [ ] Add more vehicle guides (top 20 vehicles)
- [ ] Add more map guides (major maps)
- [ ] Enhance search with filters
- [ ] Add breadcrumb navigation
- [ ] Improve mobile navigation

## 📚 Documentation

See `prd.md` for complete Product Requirements Document with detailed specifications.

## 🎨 Design System

- **Color Palette**: Dark military theme (#0a0a0a background, #2563eb primary)
- **Typography**: System fonts, optimized for long-form reading (1.75 line height)
- **Layout**: Max 1200px container, 65ch content width
- **Responsive**: Mobile-first, breakpoints at 640px, 768px, 1024px

## 🚀 Deployment

### Quick Deploy to Vercel

See **[DEPLOY.md](./DEPLOY.md)** for detailed deployment instructions.

**Quick Steps:**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New..." → "Project" → Import your repository
4. Click "Deploy" (Vercel auto-detects Next.js settings)
5. Get your public URL: `https://your-project.vercel.app`

**Prerequisites:**
- Node.js 18+ (Vercel uses Node 18 by default)
- No environment variables required
- Build command: `npm run build`

For detailed troubleshooting and advanced configuration, see [DEPLOY.md](./DEPLOY.md).

### Local Production Build Test

Before deploying, test the production build locally:

```bash
npm run build
npm start
```

Visit `http://localhost:3004` to verify everything works.

## 📝 License

See LICENSE file for details.
