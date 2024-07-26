// Ajusta la ruta según tu estructura

import { darkTheme } from "../src/lib/Themes/dark";
import { lightTheme } from "../src/lib/Themes/light";
import { ThemeDecorator } from "./decorators/ThemeDecorator";

export const decorators = [ThemeDecorator];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      {
        name: "light",
        value: lightTheme.gray_50_900,
      },
      {
        name: "dark",
        value: darkTheme.gray_50_900,
      },
    ],
  },
};
