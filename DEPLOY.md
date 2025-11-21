# Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites

- GitHub account
- Vercel account (free tier works)
- This repository pushed to GitHub

### Step-by-Step Deployment

1. **Push to GitHub**
   - Ensure your code is committed and pushed to a GitHub repository
   - Example: `git push origin main`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New..." → "Project"

3. **Import Repository**
   - Find and select your repository: `war-thunder-master-academy`
   - Click "Import"

4. **Configure Project** (Vercel auto-detects Next.js, but verify):
   - **Framework Preset**: `Next.js` ✅
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` ✅
   - **Output Directory**: `.next` ✅ (auto-detected)
   - **Install Command**: `npm install` ✅ (leave as default)

5. **Environment Variables**
   - **None required** - This project works without environment variables
   - If you need to add any later, go to Project Settings → Environment Variables

6. **Deploy**
   - Click the big **"Deploy"** button
   - Wait 1-2 minutes for the build to complete

7. **Get Your URL**
   - After deployment succeeds, Vercel provides:
     - **Production URL**: `https://your-project.vercel.app`
     - **Preview URLs**: For each push/PR

## 🔧 Local Development

### Prerequisites

- **Node.js**: 18+ (tested with Node 20+)
- **npm**: 11+ (or yarn/pnpm)

### Setup

```bash
# Install dependencies
npm install

# Run development server (port 3004)
npm run dev

# Build for production
npm run build

# Start production server locally (port 3004)
npm start
```

The dev server runs on **http://localhost:3004** (not the default 3000).

### Type Checking

```bash
npm run type-check
```

### Linting

```bash
npm run lint
```

## 📋 Build Verification

Before deploying, verify locally:

```bash
# Clean build artifacts
rm -rf .next

# Production build
npm run build

# Test production build locally
npm start
```

Visit `http://localhost:3004` to verify everything works.

## 🎯 Vercel Configuration

The project includes `vercel.json` with optimal settings:

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
```

Vercel auto-detects Next.js, but this ensures consistent behavior.

## 🔄 Auto-Deployments

- Every push to `main` branch → **Production deployment**
- Pull requests → **Preview deployments** (unique URLs)
- Each deployment is automatic (no manual steps needed)

## 📦 Production Build Details

- **Framework**: Next.js 14.2+ (App Router)
- **Build Output**: Static Site Generation (SSG) + Server-Side Routes
- **Node Version**: 18+ (Vercel uses Node 18 by default)
- **Dependencies**: All managed via `package.json`

## 🐛 Troubleshooting

### Build Fails on Vercel

1. Check build logs in Vercel dashboard
2. Ensure `npm run build` works locally
3. Verify Node version compatibility (requires Node 18+)
4. Check for missing environment variables (if any added later)

### Routes Return 404

- Verify static routes are generated at build time
- Check `generateStaticParams` functions in dynamic routes
- Ensure content files exist in `/content` directory

### Styling Not Applied

- Verify `globals.css` is imported in `app/layout.tsx`
- Check Tailwind config includes all content paths
- Ensure CSS is not blocked by ad blockers

## 📝 Notes

- **Port**: Dev server uses port 3004 (configured in `package.json`)
- **Content**: All content is in `/content` directory (MDX/Markdown)
- **Static Assets**: Public files in `/public` directory
- **No Database**: This is a static site with file-based content

## 🌐 Custom Domain (Optional)

1. In Vercel dashboard → Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatic (Vercel handles it)

---

**Ready to deploy?** Just push to GitHub and connect to Vercel - it's that simple! 🚀

