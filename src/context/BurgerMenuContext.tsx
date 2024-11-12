import { createContext, useState } from "react";

interface IBurgerMenuContext {
  toggleBurgerMenu: boolean;
  toggleBurgerHundler: () => void;
}

interface IBurgerMenuProps {
  children: React.ReactNode;
}

const defaultValue: IBurgerMenuContext = {
  toggleBurgerMenu: false,
  toggleBurgerHundler: () => {},
};

export const BurgerMenuContext =
  createContext<IBurgerMenuContext>(defaultValue);

export const BurgerMenuProvider = ({ children }: IBurgerMenuProps) => {
  const [toggleBurgerMenu, setToggleBurgerMenu] = useState<boolean>(false);

  const toggleBurgerHundler = () => {
    setToggleBurgerMenu((p) => !p);
  };

  return (
    <BurgerMenuContext.Provider
      value={{ toggleBurgerMenu, toggleBurgerHundler }}
    >
      {children}
    </BurgerMenuContext.Provider>
  );
};
