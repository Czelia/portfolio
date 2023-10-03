module.exports = {
  content: ["./src/**/*.{vue,html,js}"],
  theme: {
    fontFamily: {
      sans: ["Red Hat Display", "sans-serif"],
      serif: ["Zilla Slab", "serif"],
    },
    colors: {
      white: "#FFFFFF",
      current: "currentColor",
      darkBlue: "#1E2756",
      midnight: "#1D2B5E",
      amethyst: "#1F1C3F",
      aquaJade: "#3FDA6E",
      lightBlue: "#7FD2F5",
      grape: "#6329AD",
      plum: "#19063A",
      gold: "#FFA500",
      crimson: "#900158",
      mulberry: "#500131",
      brown: "#6E2310",
      orange: "#FF845A",
    },
    spacing: {
      1: "10px",
      2: "16px",
      3: "20px",
      4: "25px",
      5: "30px",
      6: "50px",
    },
    fontSize: {
      sm: ["0.875rem", "1.5rem"],
      base: "1rem",
      xl: ["1.25rem", "1.625rem"],
      "2xl": ["2.875rem", "3.812rem"],
    },
    boxShadow: {
      aquaJade: "0px 0px 4px 2px #55F1A0;",
      gold: "0px 0px 4px 2px #FFA500;",
      lightBlue: "0px 0px 4px 2px #7FD2F5;",
    },
    rounded: {
      sm: "0.125rem",
      md: "0.25rem",
      lg: "0.5rem",
      xl: "0.625rem",
      xxl: "2rem",
      full: "9999px",
    },
  },
  variants: {
    textColor: ["group-hover", "hover"],
  },
  container: {
    center: true,
  },
  plugins: [],
};
