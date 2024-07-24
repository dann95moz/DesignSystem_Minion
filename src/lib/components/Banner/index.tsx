import styled from "styled-components";
import { padding } from "../../styles/tokens/padding";
import { gap } from "../../styles/tokens/gap";
import { Close } from "@mui/icons-material";
import Styles from "../../styles/fontStyle";
import { radius } from "../../styles/tokens/radius";
import { Link } from "../Link";
import IconStatus from "../IconStatus";
import { ReactNode } from "react";
import SanitizedText from "../TextSanitized";
export interface BannerProps {
  title: string;
  iconStatus?: React.ReactElement<typeof IconStatus>;
  primaryLink?: React.ReactElement<typeof Link>;
  secondaryLink?: React.ReactElement<typeof Link>;
  dismissable?: boolean;
  children: ReactNode;
}

const StyledBanner = styled.div`
  width: fit-content;
  border-radius: ${radius.sm};
  box-shadow: 0px 1px 2px 0px #ffffff14;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  padding: ${padding.md};
  display: flex;
  gap: ${gap.md};
  h4 {
    margin: 0;
    font-size: ${Styles.title_md_semibold};
  }
  p {
    margin: 0;
    font-size: ${Styles.title_sm_regular};
  }
  .text-container {
    .links-container {
      display: flex;
      gap: ${gap.md};
    }
  }
`;
export const Banner = ({
  title,
  iconStatus,
  primaryLink,
  secondaryLink,
  dismissable,
  children,
}: BannerProps) => {
  return (
    <StyledBanner>
      {iconStatus}
      <div className="text-container">
        <h4>{title}</h4>
        <SanitizedText>{children}</SanitizedText>
        {(primaryLink || secondaryLink) && (
          <div className="links-container">
            {primaryLink}
            {secondaryLink}
          </div>
        )}
      </div>
      {dismissable && <Close />}
    </StyledBanner>
  );
};
