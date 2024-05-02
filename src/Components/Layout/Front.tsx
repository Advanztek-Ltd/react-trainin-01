/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { ReactNode } from "react";
import FrontHeader from "../Header/Front";
import FrontFooter from "../Footer/Front";

interface FrontLayoutProps {
  children: ReactNode;
  changeTheme: () => void;
  isDarkTheme: boolean;
}

const FrontLayout: React.FC<FrontLayoutProps> = ({
  children,
  changeTheme,
  isDarkTheme,
}) => {
  return (
    <>
      <FrontHeader changeTheme={changeTheme} isDarkTheme={isDarkTheme} />
      {children}
      <FrontFooter />
    </>
  );
};

export default FrontLayout;
