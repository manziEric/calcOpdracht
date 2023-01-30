import { ReactNode } from "react";
import "src/components/buttonContainer/ButtonContainer.scss";

interface ComponentProps {
  children: ReactNode;
}

const ButtonContainer = ({ children }: ComponentProps): JSX.Element => {
  return <div className="buttonContainer">{children}</div>;
};

export default ButtonContainer;
