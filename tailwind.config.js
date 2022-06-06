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
        "bg-1": "#252934",
        "bg-2": "#04C2C9",
        "main-1": "#D41C62",
        "main-2": "#ffffff",
        "main-3": "#616161",
        "main-4": "#f5f5f5",
        "nav-1": "#191a1d",
        "f-stop": "#0F2027",
        "s-stop": "#203A43",
        "t-stop": "#2C5364",
        contact: "#1e242c",
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
