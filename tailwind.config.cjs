/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Grayishblue: "hsl(237, 18%, 59%)",
        Softred: "hsl(345, 95%, 68%)",
        White: "hsl(0, 0%, 100%)",
        Darkdesaturatedblue: "hsl(236, 21%, 26%)",
        darkblue: "hsl(235, 16%, 14%)",
        Verydarkblue: "hsl(234, 17%, 12%)",
      },
    },
  },
  plugins: [],
};
