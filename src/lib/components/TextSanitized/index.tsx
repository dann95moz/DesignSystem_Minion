import React, { ReactNode } from "react";

interface SanitizedComponentProps {
  children: ReactNode;
}

const SanitizedComponent: React.FC<SanitizedComponentProps> = ({
  children,
}) => {
  //todo: Sanitize elements
  return <>{children}</>;
};

export default SanitizedComponent;
