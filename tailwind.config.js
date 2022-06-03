module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {
      fontFamily: {
        xbold: ["Nunito-Xbold"],
        reg: ["Nunito-reg"],
        bold: ["Nunito-Bold"],
        xlight: ["Nunito-Xlight"],
        light: ["Nunito-Light"],
        ita: ["Nunito-Italic"],
        sbold: ["Nunito-Sembold"],
      },
      colors: {
        "bg-1": "#1D1D1D",
        "main-1": "#E8C64C",
        "main-2": "#FFF",
        "f-stop": "#0F2027",
        "s-stop": "#203A43",
        "t-stop": "#2C5364",
      },
      backgroundImage: {
        homeBg: "url('./assets/images/bg_main.jpeg')",
        card: "url('./assets/global/cardbg.png')",
        xpanse: "url('./assets/images/xpanse.png')",
        sqp: "url('./assets/images/sqp.png')",
        clubsandwich: "url('./assets/images/clubSandwich.png')",
      },
    },
  },
};
