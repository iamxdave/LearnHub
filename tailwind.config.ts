import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          "50": "#f4f6f7",
          "100": "#e3e6ea",
          "200": "#cad1d7",
          "300": "#a5b1bb",
          "400": "#788798",
          "500": "#5d6c7d",
          "600": "#505b6a",
          "700": "#454d59",
          "800": "#3e444c",
          "900": "#373b42",
          "950": "#0b0c0e",
        },
        secondary: {
          "50": "#f9f6f9",
          "100": "#f2ecf2",
          "200": "#e1d5e2",
          "300": "#c7b0c9",
          "400": "#a885ab",
          "500": "#8e6592",
          "600": "#755178",
          "700": "#604262",
          "800": "#523953",
          "900": "#463347",
          "950": "#120d12",
        },
        accent: {
          "50": "#edf2ff",
          "100": "#dee8ff",
          "200": "#c3d3ff",
          "300": "#9fb5ff",
          "400": "#798eff",
          "500": "#5a66fa",
          "600": "#3535ef",
          "700": "#322ed4",
          "800": "#2928ab",
          "900": "#292b86",
          "950": "#18184e",
        },
      },
      animation: {
        "avatar-animation": "avatar-animation 8s ease-in-out infinite 1s",
      },
      screens: {
        "3xl": "2000px",
      },
      keyframes: {
        "avatar-animation": {
          "0%": {
            "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            "border-radius": "30% 60% 70% 40% / 50% 60% 40% 70%",
          },
          "100%": {
            "border-radius": "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
      },
      boxShadow: {
        primary: "15px 15px 0px -5px",
      },
    },
  },
  plugins: [],
};
export default config;
