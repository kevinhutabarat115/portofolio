/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: {
          'space': "url('/src/assets/angkasa-luar.png')",
        },
      },
    },
    plugins: [],
  }
  