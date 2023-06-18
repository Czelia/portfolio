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
      aquaJade: "#2CA49C",
      grape: "#6329AD",
      plum: "#19063A",
      gold: "#FDB146",
      crimson: "#900158",
      mulberry: "#500131",
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
      aquaJade: "0px 0px 4px 2px #2CA49C;",
    },
  },
  variants: {
    textColor: ["group-hover", "hover"],
  },
  plugins: [],
};
