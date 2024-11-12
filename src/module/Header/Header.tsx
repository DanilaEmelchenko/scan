import { BurgerMenuContext } from "../../context/BurgerMenuContext";
import Authorization from "./Authorization/Authorization";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import s from "./Header.module.scss";
import Navbar from "./Navbar/Navbar";
import { useContext } from "react";

const Header = () => {
  const { toggleBurgerMenu } = useContext(BurgerMenuContext);
  return (
    <header className={s.header}>
      {toggleBurgerMenu ? (
        <img
          className={s["logo-footer"]}
          src="icons/logo-footer.svg"
          alt="logo"
        />
      ) : (
        <img
          className={s["logo-header"]}
          src="icons/logo-header.svg"
          alt="logo"
        />
      )}
      <Navbar />
      <Authorization />
      <BurgerMenu />
    </header>
  );
};

export default Header;
