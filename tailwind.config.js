/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/global.css","./index.html","./src/**/*.{html,svelte}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [ {
      pickup: {
        "primary": "#FF9E00",
        "secondary": "#00CBFF",
        "accent": "#FF3800",
        "neutral": "#222222",
        "base-100": "#FFF9F0", //"#FFFFFF"
      },
      pickupDark: {
        "primary": "#FF9E00",
        "secondary": "#00CBFF",
        "accent": "#FF3800",
        "neutral": "#FFF9F0",
        "base-100": "#222222", //"#FFFFFF"
      },
    },
    "bumblebee", "retro"],
    darkTheme: "pickupDark",
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
