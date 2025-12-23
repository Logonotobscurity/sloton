
import type {Config} from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: { 
        DEFAULT: 'clamp(1rem, 5vw, 3rem)',
        sm: 'clamp(1.5rem, 7vw, 4rem)',
        lg: 'clamp(2rem, 10vw, 6rem)',
        xl: 'clamp(2.5rem, 12vw, 7rem)',
      },
    },
    extend: {
       gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))',
       },
       flex: {
         'fluid-item': '1 1 min(350px, 100%)',
       },
       spacing: {
        'fluid-xs': 'clamp(0.5rem, 1vw, 1rem)',
        'fluid-sm': 'clamp(1rem, 2.5vw, 2.5rem)',
        'fluid-md': 'clamp(2rem, 5vw, 5rem)',
        'fluid-lg': 'clamp(4rem, 10vw, 10rem)',
        'fluid-xl': 'clamp(8rem, 20vw, 20rem)',
       },
       fontSize: {
        'fluid-sm': 'clamp(0.875rem, 0.5vw + 0.75rem, 1.125rem)',
        'fluid-base': 'clamp(1rem, 1vw + 0.75rem, 1.5rem)',
        'fluid-md': 'clamp(1.25rem, 2vw + 1rem, 2.25rem)',
        'fluid-lg': 'clamp(1.875rem, 4vw + 1rem, 4rem)',
        'fluid-xl': 'clamp(2.25rem, 6vw + 1rem, 6rem)',
       },
       backgroundImage: {
        "grid-light": "linear-gradient(-90deg, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
        "grid-dark": "linear-gradient(-90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      fontFamily: {
        headline: ['var(--font-serif)', 'Playfair Display', 'serif'],
        body: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
        'infinite-scroll': {
          from: {transform: 'translateX(0)'},
          to: {transform: 'translateX(-100%)'},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
