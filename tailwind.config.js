module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  // ...
  theme: {
    extend: {
      screens: {
        sm: "375px",
        // => @media (min-width: 375px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "1xl": "1440px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
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
        "bg-1": "#293241",
        "bg-2": "#88b7d3",
        "main-1": "#ee6c4d",
        "main-2": "#f5f5f5",
        "main-3": "#616161",
        "main-4": "#f5f5f5",
        "nav-1": "#191a1d",
        "f-stop": "#0F2027",
        "s-stop": "#203A43",
        "t-stop": "#2C5364",
        "contact-form": "#1e242c",
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
