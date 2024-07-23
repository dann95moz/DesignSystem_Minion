import { css } from "styled-components";
type FontFamily = "title" | "body";
type FontSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
type LineHeight = "xs" | "sm" | "md" | "lg" | "xl";
type FontWeight = "regular" | "semibold" | "bold";

const Sizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 28,
  "4xl": 32,
};
const Family = {
  title: "Montserrat",
  body: "Open Sans",
};
const LineHeight = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 26,
  xl: 28,
  "2xl": 30,
};

const Weight = {
  regular: 400,
  semibold: 600,
  bold: 700,
};

export const fontStyles = (
  family: FontFamily,
  size: FontSize,
  lineHeight: LineHeight,
  weight: FontWeight
) => css`
  font-family: ${Family[family]};
  font-size: ${Sizes[size]}px;
  line-height: ${LineHeight[lineHeight]}px;
  font-weight: ${Weight[weight]};
`;
