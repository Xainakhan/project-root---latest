/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f1fe',
          100: '#e9e4fd',
          200: '#d4c9fb',
          300: '#b69df7',
          400: '#9871f4',
          500: '#7b45f0',
          600: '#5e17eb',
          700: '#4c12bc',
          800: '#3d0e96',
          900: '#2f0b74',
        },
        primaryLight: "#8033ff",
        secondary: "#3a3a3a",
        hoverPrimary: "#292929",
        hoverSecondary: "#505050",
        background: "#f7f7f7",
        textPrimary: "#1e1e1e",
        textSecondary: "#525252",
        shadow: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

