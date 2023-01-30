import { ReactNode } from "react";
import "src/components/layout/Layout.scss";

interface ComponentProps {
  children: ReactNode;
}

const Layout = ({ children }: ComponentProps): JSX.Element => {
  return <div className="layout">{children}</div>;
};

export default Layout;
