import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../../src/lib/Themes/dark";
import { lightTheme } from "../../src/lib/Themes/light";
import "../../src/lib/styles/global.css";
export const ThemeDecorator = (Story, context) => {
  const currentBackground = context.globals.backgrounds?.value;

  // Determina el tema basado en el fondo
  const theme =
    currentBackground === darkTheme.gray_50_900 ? darkTheme : lightTheme;

  // Aplica el fondo al contenedor del Story

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};
