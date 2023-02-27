/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        likeVideo: {
          '0%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1.1)' }
        }
      },
      animation: {
        likeVideo: 'likeVideo 300ms linear'
      },
      spacing: {
        video: 'calc(100vh - 56px)' // 56px is the nav's heigth
      }
    }
  },
  plugins: []
}
