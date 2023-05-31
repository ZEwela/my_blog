/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md}",
    "./components/**/*.{js,ts,jsx,tsx,md}",
    "./app/**/*.{js,ts,jsx,tsx,md}",
    "./posts/**/*.{js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: ["postcss", "tailwindcss", "autoprefixer"],
};
