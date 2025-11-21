# Quick Start Checklist - War Thunder Academy

Use this checklist to guide your development with Cursor. Copy each prompt into Cursor when ready.

---

## ✅ Phase 1: Foundation (Do These First)

### Step 1: Check What You Have
**Copy this prompt into Cursor:**
```
Review the current codebase structure and create a status report showing:
- What content files exist and their completeness
- What routes are working
- What features are implemented
- What's missing from the PRD requirements
- List any files that need enhancement
```

**Expected Result:** A clear report of what exists and what needs work.

---

### Step 2: Test Everything Works
**Copy this prompt into Cursor:**
```
Verify all routes work correctly. Test and report on:
- Homepage navigation
- Academy modules (ground-forces, air-forces, helicopters, naval-forces)
- Nation guides (all 10 nations)
- Category pages (weapons, maps, meta, economy, vehicles)
- Mobile navigation (resize browser test)
- Search functionality
- Check for any broken links or 404s
```

**Expected Result:** Confirmation that all routes work or a list of issues to fix.

---

### Step 3: Fix Any Build Errors
**Copy this prompt into Cursor:**
```
Check for any TypeScript, linting, or build errors and fix them. 
Make sure the dev server runs without issues and the build completes successfully.
```

**Expected Result:** Clean build with no errors.

---

## 📝 Phase 2: Content Enhancement (Pick One at a Time)

### Step 4: Enhance Academy Content
**Start with Ground Forces:**
```
Review content/academy/ground-forces/overview.md and enhance it by:
- Adding more detail where sections are thin
- Ensuring it follows PRD style guidelines
- Adding proper callouts (Pro Tip, Warning, Drill, Meta Insight) where appropriate
- Improving structure with clear headings
- Adding examples and drills
- Making it comprehensive and detailed (2000+ words total)
- Keep it ToS-safe and patch-agnostic
```

**Then do the same for:**
- `content/academy/air-forces/overview.md`
- `content/academy/helicopters/overview.md`
- `content/academy/naval-forces/overview.md`

---

### Step 5: Enhance Nation Guides
**Start with one nation:**
```
Review content/nations/usa.md and enhance it by:
- Adding more detail to each BR band section
- Expanding playstyle descriptions
- Adding more Pro Tips and Warnings
- Including more lineup examples
- Adding common mistakes and how to fix them
- Ensuring it's at least 2000+ words total
- Following the same structure as other nation guides
```

**Repeat for:** germany.md, russia.md, britain.md, japan.md, china.md, italy.md, france.md, sweden.md, israel.md

---

### Step 6: Enhance Other Content Files
**Weapons Overview:**
```
Review content/weapons/overview.md and enhance it with:
- More detailed explanations of each shell type
- Better examples and use cases
- Pro Tips for ammo selection
- Warnings about common mistakes
- At least 2000+ words total
```

**Maps Overview:**
```
Review content/maps/overview.md and enhance it with:
- More detailed map archetype explanations
- Better tactical examples
- More Pro Tips for different map types
- Drills for map study
- At least 2000+ words total
```

**Meta Overview:**
```
Review content/meta/overview.md and enhance it with:
- More detailed BR band analysis
- Better counter relationship explanations
- More lineup meta examples
- At least 1500+ words total
```

**Economy Overview:**
```
Review content/economy/overview.md and enhance it with:
- More detailed RP vs SL strategies
- Better grind optimization tips
- More Pro Tips for economy management
- At least 1500+ words total
```

---

## 🎨 Phase 3: UI Improvements (Quick Wins)

### Step 7: Add Table of Contents
```
Create a TableOfContents component that:
- Extracts h2 and h3 headings from content pages
- Creates a sticky sidebar on desktop with jump links
- Shows a dropdown menu on mobile
- Highlights current section on scroll
- Follows the dark theme design system
- Uses TypeScript with proper types
- Is accessible with keyboard navigation

Then integrate it into content pages that have multiple headings.
```

---

### Step 8: Add Back to Top Button
```
Add a "Back to Top" floating button to all content pages. It should:
- Appear after scrolling 300px down the page
- Be fixed at bottom-right corner (or bottom-center on mobile)
- Smoothly scroll to top when clicked
- Match the dark theme design system
- Have proper accessibility labels
- Use React hooks ('use client' directive)
- Be responsive and touch-friendly
```

---

### Step 9: Add Reading Statistics
```
Add reading statistics to the ContentHeader component:
- Estimated reading time (calculate from word count, assume ~200 words/minute)
- Word count display
- Show these prominently but unobtrusively
- Use icons to make it visual
- Only show on content pages (not hub pages)
- Make it responsive for mobile
```

---

### Step 10: Enhance Search
```
Enhance the search functionality to include:
- Search filters by category (dropdown: Academy, Nations, Vehicles, Weapons, Maps, Meta, Economy)
- Better search result display with categories grouped
- Highlight search terms in results
- Show search result count
- Better empty state message
- Improve mobile search experience
```

---

## 🔧 Phase 4: Advanced Features

### Step 11: Add Related Content
```
Add a "Related Content" section that appears at the bottom of content pages. It should:
- Show 3-5 related articles based on tags and category
- Use the existing Card component for display
- Only show related items (not the current page)
- Have a clear heading "Related Content"
- Link to similar content
- Be responsive for mobile
- Use the content loader to find related items
```

---

### Step 12: Enhance Module Cards
```
Enhance the ModuleCard component on the homepage to:
- Show a preview snippet (first 100 words) of the content
- Display last updated date if available
- Show estimated reading time
- Add hover effects with more information
- Make it more visually appealing with better spacing
- Show icon more prominently
```

---

## 📚 Phase 5: New Content Creation

### Step 13: Add Map-Specific Guides
**Start with one popular map:**
```
Create content/maps/fulda-gap.md with a comprehensive tactical guide. Include:
- Map overview and layout description (qualitative)
- Spawn analysis for each side
- Key positions for each role (MBT, light, TD, SPAA, etc.)
- Recommended routes and flanking paths
- Common strategies and counter-strategies
- Nation-specific considerations
- Anti-camping and anti-sniper tactics
- Pro Tips for this map
- At least 2000+ words
- No exact coordinates, use qualitative descriptions
- Follow existing maps/overview.md style
```

**Add more maps as needed:** abbadon, ash river, aral sea, etc.

---

### Step 14: Add Vehicle-Specific Guides
**Start with popular vehicles:**
```
Create content/vehicles/m4-sherman.md with comprehensive guide. Include:
- Vehicle overview (qualitative, no exact stats)
- Role and playstyle description
- Strengths and weaknesses (qualitative)
- How to play it effectively
- How to counter it
- Lineup suggestions (other vehicles that work well with it)
- Pro Tips for Sherman players
- Common mistakes to avoid
- At least 800+ words
- Follow ToS-safe and patch-agnostic guidelines
```

**Add more vehicles as needed.**

---

## ✅ Completion Checklist

Use this to track your progress:

### Foundation
- [ ] Status report created
- [ ] All routes tested and working
- [ ] Build errors fixed
- [ ] Dev server runs smoothly

### Content Enhancement
- [ ] Ground Forces enhanced
- [ ] Air Forces enhanced
- [ ] Helicopters enhanced
- [ ] Naval Forces enhanced
- [ ] All 10 nation guides enhanced
- [ ] Weapons overview enhanced
- [ ] Maps overview enhanced
- [ ] Meta overview enhanced
- [ ] Economy overview enhanced

### UI Improvements
- [ ] Table of Contents added
- [ ] Back to Top button added
- [ ] Reading statistics added
- [ ] Search enhanced with filters
- [ ] Module cards enhanced

### Advanced Features
- [ ] Related content section added
- [ ] Mobile navigation improved
- [ ] Accessibility improved

### New Content
- [ ] At least 3 map-specific guides
- [ ] At least 5 vehicle-specific guides
- [ ] Additional academy chapters (optional)

---

## 🎯 Recommended Order

**Week 1:**
1. Steps 1-3 (Foundation)
2. Step 4 (Enhance one academy module)
3. Step 7 (Add TOC)

**Week 2:**
1. Steps 4-6 (Enhance all content)
2. Steps 8-9 (UI improvements)

**Week 3:**
1. Step 10 (Enhance search)
2. Steps 11-12 (Advanced features)
3. Polish and test

**Week 4+:**
1. Step 13-14 (New content)
2. Additional enhancements
3. Continuous improvement

---

## 💡 Tips

1. **One step at a time**: Complete each step before moving to the next
2. **Test after each change**: Verify it works before continuing
3. **Review generated code**: Make sure it follows your style
4. **Iterate**: Refine with follow-up prompts if needed
5. **Take breaks**: Don't try to do everything at once

---

## 🆘 If Something Goes Wrong

**If a prompt doesn't work:**
1. Be more specific about what you want
2. Include the file path explicitly
3. Reference existing similar code
4. Break it into smaller steps

**If code has errors:**
```
Fix the errors in [file/path]. The issues are:
- [describe error 1]
- [describe error 2]
Make sure it follows the existing code patterns.
```

**If content needs refinement:**
```
Improve the content in [file/path] by:
- [specific improvement 1]
- [specific improvement 2]
Keep the existing structure and style.
```

---

**Good luck! Start with Step 1 and work your way through the list. 🚀**

