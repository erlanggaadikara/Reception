module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        home: "url('assets/image/wpp.png')",
        price: "url('assets/image/wpp-2.png')",
      }),
    },
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    colors: {
      blue: "#5CBAEE",
      white: "#FFFFFF",
      gray: "#6F6868",
      black: "#000000",
      transparentBlack: "rgba(3, 3, 3, 0.5)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
