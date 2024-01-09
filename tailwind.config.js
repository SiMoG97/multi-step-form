/** @type {import('tailwindcss').Config} */
import tailwindClipPath from "tailwind-clip-path";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        "myOrange-100": "#f3f3e3",
        "myOrange-500": "hsla(11, 97%, 65%, 1)",
        "myOrange-600": "hsla(11, 97%, 60%, 1)",
        "myOrange-700": "hsla(11, 97%, 55%, 1)",
        "myBlack-800": "#111827",
        "myGray-100": "#e5e7eb80",
        "myGray-200": "#E5E7EB",
        "myGray-300": "#D1D5DB",
        "myGray-400": "#9CA3AF",
        "myGray-500": "#6B7280",
        "myGray-600": "#4B5563",
      },
      boxShadow: {
        custom: "10px 10px 0px 0px rgba(250, 181, 100, 0.10);",
      },
      fontFamily: {
        merriweather: ["Merriweather"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [tailwindClipPath],
};
