/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1050px",
        "2xl": "1496px",
      },
    },
    extend: {
      screens: {
        "-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        foreground: "rgb(var(--forground-rgb) / <alpha-value>)",
      },
      keyframes: {
        upDown: {
          "0% , 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-50px)",
          },
        },
      },
      animation: {
        upDown: "upDown 5s infinite linear;",
      },
    },
  },
  plugins: [],
};
