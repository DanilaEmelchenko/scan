import { useContext } from "react";
import s from "./BurgerMenu.module.scss";
import { BurgerMenuContext } from "../../../context/BurgerMenuContext";

const BurgerMenu = () => {
  const { toggleBurgerHundler } = useContext(BurgerMenuContext);
  return (
    <div className={s.container}>
      <input id="toggle" type="checkbox" className={s.toggle} />

      <label
        onClick={toggleBurgerHundler}
        htmlFor="toggle"
        className={s.hamburger}
      >
        <div className={s["top-bun"]}></div>
        <div className={s.meat}></div>
        <div className={s["bottom-bun"]}></div>
      </label>

      <div className={s["menu-container"]}>
        <div className={s["menu-wrapper"]}>
          <nav className={s.nav}>
            <a href="#">Главная</a>
            <a href="#">Тарифы</a>
            <a href="#">Контакты</a>
          </nav>
          <div className={s.authorization}>
            <a className={s.authorization__register} href="#">
              Зарегистрироваться
            </a>
            <a className={s.authorization__enter} href="#">
              Войти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
