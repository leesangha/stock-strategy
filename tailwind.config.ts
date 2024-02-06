import type { Config } from 'tailwindcss'
const colors = require('./colors.json')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        ...colors,
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
          ...colors.primary,
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
          ...colors.secondary,
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
        xxs: '4px',
        xs: '6px',
        sm: '8px',
        md: '10px',
        lg: '16px',
        xl: '20px',
      },

      fontSize: {
        ...Object.fromEntries(
          Array.from({ length: 40 }, (_, i) => [`${i + 10}`, `${i + 10}px`])
        ),

        'title-1': [
          '18px',
          {
            lineHeight: '26px',
            fontWeight: 700,
          },
        ],
        'title-2': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: 700,
          },
        ],
        'title-3': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: 600,
          },
        ],
        'title-4': [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: 600,
          },
        ],
        'body-1': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: 400,
          },
        ],
        'body-2': [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: 500,
          },
        ],
        'body-3': [
          '14px',
          {
            lineHeight: '20px',
            fontWeight: 400,
          },
        ],
        'body-4': [
          '13px',
          {
            lineHeight: '18px',
            fontWeight: 400,
          },
        ],
        'caption-1': [
          '13px',
          {
            lineHeight: '18px',
            fontWeight: 700,
          },
        ],
        'caption-2': [
          '12px',
          {
            lineHeight: '16px',
            fontWeight: 500,
          },
        ],
      },

      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },

      screens: {
        xs: { max: '575px' },
        sm: { min: '576px', max: '767px' },
        md: { min: '768px', max: '991px' },
        lg: { min: '992px', max: '1199px' },
        xl: { min: '1200px' },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
