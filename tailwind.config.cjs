module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}', './content/**/*.{md}'],
  theme: {
    extend: {
      colors: {
        accent: '#10A37F',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        xl: '4rem',
        lg: '2rem',
      },
      maxWidth: {
        prose: '960px',
      },
    },
  },
  plugins: [],
};
