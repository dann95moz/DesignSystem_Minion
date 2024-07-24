import styled from "styled-components";
import { padding } from "../../styles/tokens/padding";
import { radius } from "../../styles/tokens/radius";
import { gap } from "../../styles/tokens/gap";
import { ButtonHTMLAttributes, ReactNode } from "react";
import Styles from "../../styles/fontStyle";
import { IconPosition } from "../../types/IconPosition";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  $variant: "primary" | "secondary";
}

const StyledButton = styled.button.attrs<StyledButtonProps>((props) => ({
  $variant: props.$variant,
}))<StyledButtonProps>`
  ${Styles.body_lg_bold}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  gap: ${gap.sm};

  padding: ${padding.md} ${padding.lg};
  border-radius: ${radius["4xl"]};

  ${({ $variant, theme }) => {
    const primaryStyles = `
      background-color: ${theme.yellow_400_400};
      color: ${theme.gray_900_900};

      &:hover {
        background-color: ${theme.yellow_300_300};
      }

      &:active {
        background-color: ${theme.yellow_500_500};
      }

      &:disabled {
        background-color: ${theme.gray_50_50};
        color: ${theme.gray_100_100};
         cursor: auto;
      }
    `;

    const secondaryStyles = `
      background-color: transparent;
      color: ${theme.black};
      border: 1px solid ${theme.black};

      &:hover {
        background-color: ${theme.gray_50_50};
        color: ${theme.gray_900_900};
        border: 1px solid  ${theme.gray_900_900};
      }

      &:active {
        background-color: ${theme.gray_100_100};
        border: 1px solid  ${theme.gray_100_100};
        color: ${theme.gray_900_900};
      }

      &:disabled {
        background-color: transparent;
        color: ${theme.gray_100_100};
        border: 1px solid ${theme.gray_200_200};
        cursor: auto;
      }
    `;

    return $variant === "primary" ? primaryStyles : secondaryStyles;
  }}
`;
type variant = "primary" | "secondary";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: variant;
  iconPosition?: IconPosition;
  icon?: ReactNode;
  children: string;
}

export const Button = ({
  variant,
  type,
  iconPosition,
  icon,
  children,
  ...rest
}: ButtonProps) => {
  const sanitizedText = children && children.replace(/(<([^>]+)>)/gi, "");
  return (
    <StyledButton $variant={variant} {...rest} type={(type = "button")}>
      {iconPosition === "start" && icon}
      {sanitizedText}
      {iconPosition === "end" && icon}
    </StyledButton>
  );
};
