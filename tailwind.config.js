/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0f172a",
        "accent": "#00f5ff",
        "secondary": "#6366f1",
        "abyss": "#081120",
        "trench": "#050b14",
        "background-dark": "#0f172a",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
        "heading": ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "2xl": "1.5rem",
        "3xl": "2.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
