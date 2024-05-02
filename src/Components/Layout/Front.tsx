import React, { ReactNode } from 'react';

interface FrontLayoutProps {
  children: ReactNode;
}

const FrontLayout: React.FC<FrontLayoutProps> = ({ children }) => {
  return <>{children}</>;
}

export default FrontLayout;
