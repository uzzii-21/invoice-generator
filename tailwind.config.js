module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        primary: '#d1d5db',
        secondary: '#f3f4f6',
        darkPrimary: '#374151',
        darkSecondary: '#111827'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
