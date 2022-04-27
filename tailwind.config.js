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
        "bg-1": "#272727",
        "main-1": "#E8C64C",
        "main-2": "#FFF",
      },
    },
  },
};
