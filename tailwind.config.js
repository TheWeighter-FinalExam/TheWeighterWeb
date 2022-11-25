/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts, tsx}"],
  theme: {
    extend: {
      colors: {
        menuitem: "#23E0E2",
        button: "#01919e",
      },
      backgroundImage: {
        banner: "url(./public/banner.png)",
        icon: "url(./public/title.png)",
        login: "url(./public/login.png)",
      },
      boxShadow: {
        shadow: "0px 0px 12px -2px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
