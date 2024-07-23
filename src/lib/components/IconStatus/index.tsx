import styled, { css } from "styled-components";
import Styles from "../../styles/fontStyle";
import Success from "../icons/Success";
import Warning from "../icons/Warning";
import Error from "../icons/Error";
import Info from "../icons/Info";
import { iconSizes } from "../../styles/tokens/size";

type SVGSize = "xs" | "sm" | "md" | "lg";

interface StyledSVGWrapperProps {
  $size: SVGSize;
}

const StyledSVGWrapper = styled.div<StyledSVGWrapperProps>`
  ${({ $size }) => {
    switch ($size) {
      case "xs":
        return css`
          ${Styles.body_xs_bold};
          svg {
            width: ${iconSizes.xs};
            height: ${iconSizes.xs};
          }
        `;
      case "sm":
        return css`
          ${Styles.body_sm_bold};
          svg {
            width: ${iconSizes.sm};
            height: ${iconSizes.sm};
          }
        `;
      case "md":
        return css`
          ${Styles.body_md_bold};
          svg {
            width: ${iconSizes.md};
            height: ${iconSizes.md};
          }
        `;
      case "lg":
        return css`
          ${Styles.body_md_bold};
          svg {
            width: ${iconSizes.lg};
            height: ${iconSizes.lg};
          }
        `;
    }
  }};
`;

interface IconStatusProps {
  size: SVGSize;
  status: "success" | "warning" | "error" | "info";
}

const IconStatus = ({ size, status }: IconStatusProps) => {
  const IconComponent = (() => {
    switch (status) {
      case "success":
        return Success;
      case "warning":
        return Warning;
      case "error":
        return Error;
      case "info":
        return Info;
      default:
        return null;
    }
  })();

  if (!IconComponent) {
    return null;
  }

  return (
    <StyledSVGWrapper $size={size}>
      <IconComponent />
    </StyledSVGWrapper>
  );
};

export default IconStatus;
