/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          // primary: "#8C0327",
          // secondary: "#D75050",
          // accent: "#D59B6C",
          // neutral: "#836B5D",
          "base-100": "#FFFFFF",
          // info: "#42AEBD",
          // success: "#489380",
          // warning: "#EB8014",
          error: "#E01A2E",
        },
      },
    ],
    // base: true,
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: "",
    // darkTheme: "dark",
  },
};
