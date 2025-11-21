# Cursor Prompting Guide for War Thunder Academy

This guide provides step-by-step prompts you can use in Cursor to develop and extend the War Thunder Master Academy website.

---

## 🎯 How to Use This Guide

1. **Copy the prompt** from each section
2. **Paste it into Cursor** (Cmd+L or Ctrl+L)
3. **Let Cursor execute** the changes
4. **Review and test** the results
5. **Move to the next step** when satisfied

---

## 📋 Phase 1: Quick Wins & Improvements (Start Here)

### Prompt 1.1: Check Current Status
```
Review the current codebase structure and create a status report showing:
- What content files exist
- What routes are working
- What features are implemented
- What's missing from the PRD requirements
```

### Prompt 1.2: Fix Any Build Errors
```
Check for any TypeScript, linting, or build errors and fix them. Make sure the dev server runs without issues.
```

### Prompt 1.3: Test All Routes
```
Verify all routes are working:
- Test homepage navigation
- Test academy modules
- Test nation guides
- Test all category pages (weapons, maps, meta, economy)
- Check mobile navigation
- Verify search functionality
```

---

## 📝 Phase 2: Content Enhancement

### Prompt 2.1: Enhance Existing Content
```
Review the content in [specific file] and enhance it by:
- Adding more detail where needed
- Ensuring it follows the PRD style guidelines
- Adding proper callouts (Pro Tip, Warning, Drill, Meta Insight)
- Improving structure with clear headings
- Adding examples and drills where appropriate
```

**Example:**
```
Review content/academy/ground.md and enhance it with:
- More detailed tank warfare doctrine
- Better structure with clear sections
- More Pro Tips and Drills
- Better explanations of armor mechanics
```

### Prompt 2.2: Add Missing Content Sections
```
Add a new section to [file] covering [topic]. Follow the existing style and structure. Include:
- Clear headings (##, ###)
- Bullet points for key concepts
- Pro Tips where appropriate
- Examples relevant to War Thunder gameplay
```

**Example:**
```
Add a section about "Hull-Down Positions" to content/academy/ground.md. Include:
- What hull-down means
- Why it's effective
- How to find hull-down spots
- Pro Tips for using hull-down positions
- Common mistakes to avoid
```

### Prompt 2.3: Improve Callouts and Formatting
```
Review [file] and improve all callouts to ensure they:
- Use the correct syntax (> **Pro Tip:**, > **Warning:**, etc.)
- Have clear, actionable content
- Are properly formatted
- Follow the content style guide
```

---

## 🎨 Phase 3: UI/UX Improvements

### Prompt 3.1: Add New Component
```
Create a new component [ComponentName] that [does X]. Use:
- TypeScript with proper types
- Tailwind CSS for styling
- Follow existing component patterns
- Make it responsive
- Add proper accessibility attributes
```

**Example:**
```
Create a TableOfContents component that:
- Extracts headings from content
- Creates a sticky sidebar with links
- Highlights current section on scroll
- Works on mobile with a dropdown
- Follows the dark theme design system
```

### Prompt 3.2: Improve Existing Component
```
Enhance [ComponentName] to [improvement]. Keep existing functionality but add:
- [Feature 1]
- [Feature 2]
- Better mobile support
- Improved accessibility
```

**Example:**
```
Enhance the ModuleCard component to:
- Show a preview snippet of the content
- Display last updated date
- Show estimated reading time
- Add hover effects with more information
- Make it more visually appealing
```

### Prompt 3.3: Add Feature to Page
```
Add [feature] to [page path]. Ensure it:
- Works with existing code
- Is responsive
- Follows the design system
- Is accessible
```

**Example:**
```
Add a "Back to Top" floating button to all content pages. It should:
- Appear after scrolling 300px
- Be fixed at bottom-right
- Smoothly scroll to top when clicked
- Match the dark theme
- Be visible on mobile
```

---

## 🔧 Phase 4: Feature Development

### Prompt 4.1: Implement Search Enhancement
```
Enhance the search functionality to include:
- Search filters by category (academy, nations, vehicles, etc.)
- Search suggestions/autocomplete
- Highlight search terms in results
- Category grouping in results
- Better empty state message
```

### Prompt 4.2: Add Related Content
```
Add a "Related Content" section to content pages that:
- Shows related articles based on tags/category
- Displays 3-5 related items
- Links to similar content
- Appears at the bottom of content pages
- Uses the existing Card component
```

### Prompt 4.3: Add Reading Statistics
```
Add reading statistics to content pages:
- Estimated reading time (based on word count)
- Word count display
- Last updated prominently shown
- Version information
- Display in ContentHeader component
```

---

## 📚 Phase 5: Content Creation

### Prompt 5.1: Create New Content File
```
Create a new content file at [path] with comprehensive content about [topic]. Follow the PRD requirements:
- Use clear, instructive tone
- Include proper frontmatter (title, description, tags, etc.)
- Structure with headings, lists, tables where appropriate
- Include Pro Tips, Warnings, Drills, Meta Insights
- Make it long-form and detailed (1000+ words)
- Keep it ToS-safe and patch-agnostic
- Use qualitative descriptions (no exact stats)
```

**Example:**
```
Create content/vehicles/light-tanks.md with comprehensive content about light tanks. Include:
- Overview of light tank role
- Playstyle characteristics
- Key strategies
- Common mistakes
- Pro Tips for light tank players
- How to counter light tanks
- Example vehicles (qualitatively described)
- At least 1500 words
```

### Prompt 5.2: Expand Existing Content
```
Expand [file] by adding [new section/topic]. Ensure:
- Content is detailed and informative
- Follows existing style and structure
- Adds value for players
- Includes examples and practical advice
- Maintains the same tone
```

**Example:**
```
Expand content/nations/usa.md by adding a detailed section about:
- BR 3.7-5.7 playstyle and lineups
- Key vehicles in this range (described qualitatively)
- How to play US tanks at this BR
- Strengths and weaknesses
- Common enemy threats and how to counter
- At least 800 words for this section
```

### Prompt 5.3: Add Map-Specific Guide
```
Create content/maps/[map-name].md with a tactical guide for [map name]. Include:
- Map overview and layout description
- Spawn analysis
- Key positions for each role (MBT, light, TD, etc.)
- Recommended routes
- Common strategies
- Nation-specific considerations
- Anti-camping tactics
- Qualitative descriptions only (no exact coordinates)
```

---

## 🚀 Phase 6: Advanced Features

### Prompt 6.1: Add Interactive Features
```
Add [feature] using React hooks and client-side interactivity:
- Use 'use client' directive where needed
- Implement proper state management
- Add smooth animations/transitions
- Ensure accessibility
- Test on mobile
```

**Example:**
```
Add a BR filter component that:
- Filters vehicle/nation lists by BR range
- Uses a slider or dropdown interface
- Updates results in real-time
- Persists selection in URL params
- Works with existing search
```

### Prompt 6.2: Improve Navigation
```
Enhance navigation by adding:
- Breadcrumb component (if not fully implemented)
- Sidebar navigation for long pages
- Quick links section
- "Recently viewed" feature
- Better mobile menu
```

### Prompt 6.3: Add Analytics/Tracking (Future)
```
Set up analytics tracking (optional, privacy-conscious):
- Page view tracking
- Search query tracking
- Popular content tracking
- User flow analysis
- Make it opt-in or privacy-focused
```

---

## 🐛 Phase 7: Bug Fixes & Polish

### Prompt 7.1: Fix Specific Bug
```
Fix the bug where [describe issue]. The problem is:
- [What's wrong]
- [Where it occurs]
- [Expected behavior]

Ensure the fix:
- Doesn't break existing functionality
- Is tested
- Follows code style
```

### Prompt 7.2: Improve Performance
```
Optimize [component/page] for better performance:
- Reduce bundle size
- Improve loading time
- Optimize images (if any)
- Add lazy loading where appropriate
- Minimize re-renders
```

### Prompt 7.3: Improve Accessibility
```
Improve accessibility of [component/page] by:
- Adding proper ARIA labels
- Ensuring keyboard navigation works
- Improving color contrast
- Adding focus indicators
- Testing with screen readers (conceptually)
```

---

## 📱 Phase 8: Mobile Optimization

### Prompt 8.1: Mobile-First Improvements
```
Review and improve mobile experience:
- Test all pages on mobile viewport
- Fix any layout issues
- Improve touch targets (min 44x44px)
- Optimize mobile navigation
- Improve mobile search experience
- Test on different screen sizes
```

### Prompt 8.2: Responsive Components
```
Make [component] fully responsive:
- Mobile-first approach
- Breakpoints at 640px, 768px, 1024px
- Touch-friendly interactions
- Readable on small screens
- Proper spacing for mobile
```

---

## 🎯 Specific Use Cases

### Adding a New Nation Guide
```
Create content/nations/[nation].md following the same structure as other nation guides. Include:
- Nation identity and philosophy
- Ground forces by BR bands
- Air forces overview
- Strengths and weaknesses
- Progression path
- Playstyle archetypes
- Common mistakes
- At least 2000+ words total
```

### Adding a New Academy Module
```
Create content/academy/[module-name]/overview.md and add chapters. Structure:
- Create directory content/academy/[module-name]/
- Add overview.md with frontmatter
- Add chapter-1-[topic].md, chapter-2-[topic].md, etc.
- Update app/academy/[[...slug]]/page.tsx if needed
- Add navigation links
- Each chapter should be 1000+ words with drills and examples
```

### Adding a Vehicle Guide
```
Create content/vehicles/[vehicle-name].md with:
- Vehicle overview (qualitative)
- Role and playstyle
- Strengths and weaknesses (qualitative)
- How to play it
- How to counter it
- Lineup suggestions
- Pro Tips
- Common mistakes
- At least 800+ words
```

---

## 💡 Tips for Effective Prompting

### Do's ✅
1. **Be Specific**: Include file paths, component names, exact requirements
2. **Provide Context**: Reference existing code patterns and structure
3. **Break Down Tasks**: Large changes into smaller, focused prompts
4. **Request Testing**: Ask Cursor to verify changes work
5. **Iterate**: Review output and refine with follow-up prompts

### Don'ts ❌
1. **Don't Overload**: One feature per prompt usually works best
2. **Don't Assume**: Specify file paths and exact locations
3. **Don't Skip Review**: Always review generated code before accepting
4. **Don't Ignore Patterns**: Follow existing code patterns and structure

### Example Workflow

1. **Start Small**: "Add reading time estimate to ContentHeader component"
2. **Review**: Check if it works and looks good
3. **Refine**: "Make the reading time display more prominent with an icon"
4. **Expand**: "Add reading time to all content pages"
5. **Test**: "Verify reading time calculates correctly for all content files"

---

## 🔄 Iterative Development Strategy

### Week 1: Foundation
- ✅ Test existing functionality
- ✅ Fix any bugs
- ✅ Improve documentation

### Week 2: Content Enhancement
- ✅ Enhance existing content files
- ✅ Add missing sections
- ✅ Improve formatting

### Week 3: UI Improvements
- ✅ Add new components (TOC, Back to Top, etc.)
- ✅ Improve existing components
- ✅ Enhance mobile experience

### Week 4: Features
- ✅ Add search enhancements
- ✅ Add related content
- ✅ Add interactive features

### Week 5+: Expansion
- ✅ Add new content files
- ✅ Create new modules
- ✅ Add advanced features

---

## 📖 Quick Reference Commands

### Check Status
```
Show me a summary of the current project status including:
- All content files and their word counts
- All routes and if they work
- Any missing features from the PRD
```

### Find Issues
```
Check for any issues in the codebase:
- TypeScript errors
- Linting errors
- Broken links
- Missing imports
- Console errors
```

### Review Content
```
Review [file path] and suggest improvements:
- Structure and organization
- Content quality
- Style consistency
- Missing sections
- Areas for expansion
```

### Test Feature
```
Test [feature/component] and verify:
- It works as expected
- No console errors
- Responsive on mobile
- Accessible
- Follows design system
```

---

## 🎓 Learning from Cursor

When Cursor generates code, review it to learn:
- How it structures components
- How it uses TypeScript types
- How it implements features
- Patterns it follows

Use this to inform future prompts and become more specific over time.

---

**Remember**: Start with small, focused prompts and build up. Review each change before moving to the next. This iterative approach yields the best results!

