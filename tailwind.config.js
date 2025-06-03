/**
 * @fileoverview Tailwind CSS configuration file
 * 
 * NOTE: This project uses CommonJS modules.
 * Always use require() and module.exports syntax.
 * Do not use import/export syntax.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#10A37F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      spacing: {
        xl: '4rem',
        lg: '2rem',
      },
      maxWidth: {
        prose: '65ch',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
          },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
