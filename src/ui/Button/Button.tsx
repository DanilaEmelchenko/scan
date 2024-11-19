import { FC } from "react";

interface IButton {
  children: React.ReactNode;
  className?: string;
  type?: "submit";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Button: FC<IButton> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
