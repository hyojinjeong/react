module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#F5A1A9',
        backgrouond: '#f7f7f7'
      },
      width: {
        '58': '58rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
}