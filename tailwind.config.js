/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D1117",
        foreground: "#E5E7EB",
        accent: "#6C63FF",
      },
    },
  },
  plugins: [],
};
