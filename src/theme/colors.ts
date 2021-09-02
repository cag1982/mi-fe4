import { Colors } from "./types";

export const baseColors = {
  failure: "#EF9A9A",
  // failure: "#CF6679",
  primary: "#84D4CE",
  primaryBright: "#84D4CE",
  primaryDark: "#84D4CE",
  secondary: "#C5D483",
  success: "#80CBC4",
  warning: "#FFB74D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFF",
  backgroundDisabled: "rgba(33, 33, 33, .38)",
  contrast: "rgba(33, 33, 33, .12)",
  invertedContrast: "#FFFFFF",
  input: "rgba(33, 33, 33, .12)",
  tertiary: "rgba(33, 33, 33, .08)",
  text: "rgba(0, 0, 0, .87)",
  textDisabled: "rgba(0, 0, 0, .38)",
  textSubtle: "rgba(0, 0, 0, .60)",
  borderColor: "rgba(33, 33, 33, .12)",
  card: "rgba(33, 33, 33, .03)",
  modal: "#323232",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #272727 0%, #353535 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#121212",
  backgroundDisabled: "rgba(255, 255, 255, .38)",
  contrast: "rgba(33, 33, 33, .12)",
  invertedContrast: "#FFFFFF",
  input: "rgba(33, 33, 33, .12)",
  tertiary: "rgba(33, 33, 33, .08)",
  text: "rgba(255, 255, 255, .87)",
  textDisabled: "rgba(255, 255, 255, .38)",
  textSubtle: "rgba(255, 255, 255, .60)",
  borderColor: "rgba(33, 33, 33, .12)",
  card: "rgba(33, 33, 33, .09)",
  modal: "#323232",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #272727 0%, #353535 100%)",
  },
};
