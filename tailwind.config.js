/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      darkPurple: "#38213C",
      beige: "#D9D9D9",
      lightPurple: "#5F15D9",
      circleBg: "#777777",
    },
    fontFamily: {
      krona: ["Krona One", "sans-serif"],
      nats: ["Nats", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
