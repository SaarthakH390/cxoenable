/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1736',
          deep: '#101D42',
        },
        accent: {
          DEFAULT: '#3E63DD',
        },
      },
      fontFamily: {
        sans: ['var(--font-ibm-plex)', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        serif: ['var(--font-source-serif)', 'Source Serif 4', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'widest-custom': '0.2em',
      },
    },
  },
  plugins: [],
};
