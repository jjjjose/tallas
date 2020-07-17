module.exports = {
  purge: {
    // poner en true solo cuando se encuentre en produccion
    enabled: true,
    content: ["./*.html"],
  },
  theme: {
    // colors: {
    //   azul: {
    //     100: "#E8EDEE",
    //     200: "#C6D1D5",
    //     300: "#A3B5BC",
    //     400: "#5F7E89",
    //     500: "#1A4757",
    //     600: "#17404E",
    //     700: "#102B34",
    //     800: "#0C2027",
    //     900: "#08151A",
    //   },
    //   naranja: {
    //     100: "#FFF5ED",
    //     200: "#FFE7D3",
    //     300: "#FFD8B8",
    //     400: "#FFBA82",
    //     500: "#FF9D4D",
    //     600: "#E68D45",
    //     700: "#995E2E",
    //     800: "#734723",
    //     900: "#4D2F17",
    //   },
    // },

    // extend: {
    //   colors: {},
    //   screen: {
    //     xs: "350px",
    //     // => @media (min-width: 640px) { ... }
    //   },
    // },
    screens: {
      // alto: { raw: "(min-height: 700px)" },
      // => @media (mim-height: 700px) { ... }

      xs: "350px",
      // => @media (min-width: 350px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
};
