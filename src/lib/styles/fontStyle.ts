import { css, CSSProp } from "styled-components";
import { fontStyles } from "./tokens/typography";

type FontFamily = "title" | "body";
type FontSize = "xs" | "sm" | "md" | "lg" | "xl";
type FontWeight = "regular" | "semibold" | "bold";

const sizes: FontSize[] = ["xs", "sm", "md", "lg", "xl"];
const weights: FontWeight[] = ["regular", "semibold", "bold"];
const families: FontFamily[] = ["body", "title"];

type StyleName = `${FontFamily}_${FontSize}_${FontWeight}`;

let Styles: Record<StyleName, CSSProp> = {} as Record<StyleName, CSSProp>;

families.forEach((family) => {
  sizes.forEach((size) => {
    weights.forEach((weight) => {
      const styleName = `${family}_${size}_${weight}` as StyleName;
      Styles[styleName] = css`
        ${fontStyles(family, size, size, weight)}
      `;
    });
  });
});

export default Styles;
