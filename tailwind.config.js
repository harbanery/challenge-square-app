/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand"],
        satoshi: ["Satoshi"],
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-purple-50",
    "bg-green-50",
    "bg-blue-50",
    "bg-yellow-50",
    "text-purple-500",
    "text-green-500",
    "text-blue-500",
    "text-yellow-500",
    "hover:text-purple-700",
    "hover:text-green-700",
    "hover:text-blue-700",
    "hover:text-yellow-700",
  ],
};
