import { BurgerMenuContext } from "../../context/BurgerMenuContext";
import Authorization from "./Authorization/Authorization";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import s from "./Header.module.scss";
import Navbar from "./Navbar/Navbar";
import { useContext } from "react";
import User from "./User/User";
import { useAppSelector } from "../../hooks/redux";
import PanelInfo from "./PanelInfo/PanelInfo";

const Header = () => {
  const { toggleBurgerMenu } = useContext(BurgerMenuContext);
  const isAuth = useAppSelector((state) => state.auth.isAuth);
  return (
    <header className={s.header}>
      {toggleBurgerMenu ? (
        <img
          className={s["logo-footer"]}
          src="/icons/logo-footer.svg"
          alt="logo"
        />
      ) : (
        <img
          className={s["logo-header"]}
          src="/icons/logo-header.svg"
          alt="logo"
        />
      )}
      <div className={s.right}>
        <Navbar />
        {isAuth ? (
          <>
            <PanelInfo />
            <User />
          </>
        ) : (
          <Authorization />
        )}
      </div>
      <BurgerMenu />
    </header>
  );
};

export default Header;
