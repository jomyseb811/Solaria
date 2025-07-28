/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
       fontFamily: {
      orbitron: ['var(--font-orbitron)', 'sans-serif'],
    },
     animation: {
    'spin-slow': 'spin 6s linear infinite',
  },
  },
  plugins: [],
}

}