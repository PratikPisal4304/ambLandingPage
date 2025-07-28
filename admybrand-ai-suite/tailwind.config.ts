import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          start: '#3B82F6',
          end: '#1E40AF',
        },
        secondary: '#8B5CF6',
        success: '#10B981',
        background: {
          dark: '#0F172A',
          light: '#FFFFFF',
        },
        text: {
          primary: '#E2E8F0',
          secondary: '#94A3B8',
          dark: '#1E293B',
          light: '#64748B',
        },
        border: 'rgba(255, 255, 255, 0.2)',
        glass: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-poppins)'],
      },
      fontSize: {
        'h1-d': '3.5rem',
        'h1-m': '2.5rem',
        'h2-d': '2.5rem',
        'h2-m': '2rem',
        'h3-d': '1.875rem',
        'h3-m': '1.5rem',
      },
      backdropBlur: {
        xl: '20px',
      },
    },
  },
  plugins: [],
}
export default config