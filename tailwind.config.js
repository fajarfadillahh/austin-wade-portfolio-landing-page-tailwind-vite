module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "767px",
      lg: "968px",
      xl: "1120px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      green: "#51da7f",
      purple: "#de55f4",
      pink: "#ff7ee0",
      yellow: "#fecc4d",
    },
    fontFamily: {
      body: ["Space Grotesk", "sans-serif"],
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      text: "170%",
    },
    transitionDuration: {
      400: "300ms",
    },
    extend: {},
  },
  plugins: [],
};
