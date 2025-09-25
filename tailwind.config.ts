import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1440px',
      },
    },
    extend: {
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '40px',
      },
      fontSize: {
        'h1-clamp': 'clamp(48px, 6.6vw, 96px)',
      },
      gridTemplateColumns: {
        'mega': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
      fontFamily: {
        body: ['var(--font-nunito)', 'sans-serif'],
        headline: ['var(--font-abhaya-libre)', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        'bg-deep': 'var(--bg-deep)',
        'accent-green': 'var(--accent-green)',
        'accent-green-2': 'var(--accent-green-2)',
        'card-glass': 'var(--card-glass)',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
        'logon-800': '#073541',
        'logon-700': '#07373c',
        'logon-gold': '#D4AF37',
        'logon-gold-600': '#C99A2B',
        'muted-white': 'rgba(255,255,255,0.75)'
      },
      borderRadius: {
        xl: '20px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: '8px',
        card: '8px'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'border-follow': {
          '0%': { left: '0', top: '0', transform: 'translate(-50%, -50%)' },
          '25%': { left: '100%', top: '0', transform: 'translate(-50%, -50%)' },
          '50%': { left: '100%', top: '100%', transform: 'translate(-50%, -50%)' },
          '75%': { left: '0', top: '100%', transform: 'translate(-50%, -50%)' },
          '100%': { left: '0', top: '0', transform: 'translate(-50%, -50%)' },
        },
        'color-change': {
          '0%, 100%': { color: 'hsl(var(--primary))' },
          '33%': { color: 'hsl(var(--accent))' },
          '66%': { color: '#ef4444' }, // Using a red as a third color
        },
        'border-color-change': {
          '0%, 100%': { 'border-color': 'hsl(var(--primary))' },
          '33%': { 'border-color': 'hsl(var(--accent))' },
          '66%': { 'border-color': '#ef4444' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
        shimmer: 'shimmer 2.5s infinite linear',
        'border-follow': 'border-follow 5s linear infinite',
        'color-change': 'color-change 5s linear infinite',
        'border-color-change': 'border-color-change 5s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
