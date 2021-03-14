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
  },
  plugins: [],
};
