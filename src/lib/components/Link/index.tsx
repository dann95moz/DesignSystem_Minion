import { AnchorHTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";
import Styles from "../../styles/fontStyle";
import { gap } from "../../styles/tokens/gap";
type LinkSize = "small" | "medium" | "large";
interface StyledLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  $size: LinkSize;
}
const StyledLink = styled.a.attrs<StyledLinkProps>((props) => ({
  $size: props.$size,
}))<StyledLinkProps>`
  display: flex;
  gap: ${gap.xs};
  text-decoration: underline;
  align-items: center;
  width: min-content;
  cursor: pointer;
  color: ${(props) => props.theme.black};
  ${({ $size }) => {
    switch ($size) {
      case "small":
        return css`
          ${Styles.body_xs_bold};
          > svg {
            ${Styles.body_xs_bold};
          }
        `;
      case "medium":
        return css`
          ${Styles.body_sm_bold}
          > svg {
            ${Styles.body_sm_bold};
          }
        `;
      case "large":
        return css`
          ${Styles.body_md_bold}
          > svg {
            ${Styles.body_md_bold};
          }
        `;
    }
  }};
  &:hover {
    color: ${(props) => props.theme.gray_100_100};
  }
  &:active {
    color: ${(props) => props.theme.gray_300_300};
  }
`;

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size: LinkSize;
  label: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
export const Link = ({
  startIcon,
  endIcon,
  size,
  label,
  ...rest
}: LinkProps) => {
  return (
    <StyledLink $size={size} {...rest}>
      {startIcon} {label} {endIcon}
    </StyledLink>
  );
};
