/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        dark: "var(--color-dark)",
        "dark-alternate": "var(--color-dark-alternate)",
        "primary-light": "var(--color-primary-light)",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};