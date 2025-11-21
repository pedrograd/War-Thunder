/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Tactical HUD theme - Dark navy/charcoal base
        background: {
          DEFAULT: '#020617', // Very dark navy
          surface: '#0f172a', // Slightly lighter navy
          elevated: '#1e293b', // Even lighter for cards
          sunken: '#0a0f1a', // Deeper than surface
          sidebar: '#030712', // Sidebar specific
          void: '#050505',    // Deepest black (v10.0)
          grid: '#0a0a0a',    // Grid background (v10.0)
          panel: 'rgba(20, 25, 35, 0.95)', // Panel background (v10.0)
          canvas: '#020617', // Main canvas background
        },
        // Accent colors for tactical HUD - Neon palette with semantic roles
        accent: {
          meta: '#C76BFF', // Meta / Special / Purple
          economy: '#6AF279', // Economy / Success / Green
          academy: '#3BF2FF', // Academy / Training / Cyan
          warning: '#FF9C4A', // Warning / Alert / Orange
          primary: '#FF9C4A', // Primary actions
          secondary: '#3BF2FF', // Secondary actions
        },
        // Tactical colors (keeping for backward compatibility)
        tactical: {
          orange: '#FF9C4A', // Primary accent / Actions
          cyan: '#3BF2FF', // Links / Info
          purple: '#C76BFF', // Meta / Special
          green: '#6AF279', // Economy / Success
          amber: '#f59e0b', // Alerts / Training
          magenta: '#ec4899', // Meta hub / Analysis
        },
        // Module-specific colors (v10.0)
        module: {
          ground: '#d4b483', // Desert Sand
          air: '#60a5fa',    // Sky Blue
          heli: '#4ade80',   // Forest Green
          naval: '#94a3b8',  // Steel
          meta: '#a855f7',   // Neon Purple
          econ: '#10b981',   // Mint Green
          warn: '#ef4444',   // Critical Red
          gold: '#f59e0b',   // Amber Highlight
        },
        // Text colors with semantic roles
        text: {
          primary: '#e2e8f0', // slate-200 - Main text
          secondary: '#94a3b8', // slate-400 - Secondary text
          muted: '#64748b', // slate-500 - Muted/disabled text
          inverse: '#020617', // For text on light backgrounds
        },
        // Border colors
        border: {
          DEFAULT: '#334155', // slate-700 - Default borders
          hover: '#475569', // slate-600 - Hover state
          active: '#64748b', // slate-500 - Active state
          accent: '#3BF2FF', // Accent borders
        },
        // Slate scale (keeping for utility)
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Legacy support (keeping for backward compatibility)
        primary: {
          DEFAULT: '#06b6d4', // Cyan
          hover: '#0891b2',
          light: '#22d3ee',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#06b6d4',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: ['"Courier New"', 'Courier', 'monospace'],
        stencil: ['"Black Ops One"', 'cursive'],
        hud: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        // Typography scale
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '900', letterSpacing: '-0.02em' }],
        'title': ['2.5rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'subtitle': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'micro': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      spacing: {
        // Semantic spacing scale
        'section': '4rem', // 64px - Section spacing
        'card': '1.5rem', // 24px - Card padding
        'content': '2rem', // 32px - Content padding
      },
      borderRadius: {
        'card': '1rem', // 16px - Standard card radius
        'panel': '1.5rem', // 24px - Large panel radius
        'button': '0.5rem', // 8px - Button radius
      },
      boxShadow: {
        // Shadow scale
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-lg': '0 16px 48px 0 rgba(0, 0, 0, 0.5)',
        'neon-orange': '0 0 20px rgba(255, 156, 74, 0.3), 0 0 40px rgba(255, 156, 74, 0.1)',
        'neon-cyan': '0 0 20px rgba(59, 242, 255, 0.3), 0 0 40px rgba(59, 242, 255, 0.1)',
        'neon-purple': '0 0 20px rgba(199, 107, 255, 0.3), 0 0 40px rgba(199, 107, 255, 0.1)',
        'inner-glow': 'inset 0 0 20px rgba(59, 242, 255, 0.1)',
      },
      maxWidth: {
        content: '65ch', // Optimal reading width
        container: '1200px', // Main container
        prose: '75ch', // Prose content width
      },
      lineHeight: {
        reading: '1.75', // Comfortable reading line height
        tight: '1.2',
        relaxed: '1.6',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'stagger-fade': 'fadeIn 0.4s ease-out backwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(59, 242, 255, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 30px rgba(59, 242, 255, 0.5)' },
        },
      },
      transitionDuration: {
        'micro': '150ms',
        'smooth': '200ms',
        'gentle': '300ms',
      },
      backdropBlur: {
        'glass': '12px',
        'glass-lg': '16px',
      },
    },
  },
  plugins: [],
}

