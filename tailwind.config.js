/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
    colors: {
      'very-dark-blue': 'hsl(233, 47%, 7%)',
      'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
      'soft-violet': 'hsl(277, 64%, 61%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-grayish-blue': 'hsl(240, 78%, 98%)',
      'light-grayish-blue-2': 'hsl(240, 73%, 98%)',
      'grayish-blue': 'hsl(240, 5%, 91%)',
    }
  },
  plugins: [],
}

