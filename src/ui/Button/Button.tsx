import { FC } from "react";

interface IButton {
  children: string;
  className?: string;
}

const Button: FC<IButton> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
