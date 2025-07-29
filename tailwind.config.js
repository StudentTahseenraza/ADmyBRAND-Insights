/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Scan app directory
    './components/**/*.{js,ts,jsx,tsx}', // Scan components directory
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#6B7280',
        background: '#F9FAFB',
        foreground: '#1F2937',
        'muted-foreground': '#6B7280',
      },
    },
  },
  plugins: [],
}