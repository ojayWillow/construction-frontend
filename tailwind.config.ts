import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Construction theme colors
        primary: {
          DEFAULT: '#FF6B35',
          50: '#FFE8E0',
          100: '#FFD4C7',
          200: '#FFAD95',
          300: '#FF8663',
          400: '#FF6B35',
          500: '#FF4500',
          600: '#CC3700',
          700: '#992900',
          800: '#661B00',
          900: '#330E00',
        },
        secondary: {
          DEFAULT: '#004E89',
          50: '#E6F0F7',
          100: '#CCE1EF',
          200: '#99C3DF',
          300: '#66A5CF',
          400: '#3387BF',
          500: '#004E89',
          600: '#003E6E',
          700: '#002F52',
          800: '#001F37',
          900: '#00101B',
        },
        accent: {
          DEFAULT: '#F7B801',
          50: '#FEF8E6',
          100: '#FEF1CC',
          200: '#FCE399',
          300: '#FBD566',
          400: '#F9C733',
          500: '#F7B801',
          600: '#C69301',
          700: '#946E01',
          800: '#634A00',
          900: '#312500',
        },
        dark: '#1A1A1A',
        gray: {
          DEFAULT: '#6B7280',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
