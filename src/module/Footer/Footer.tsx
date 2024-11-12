import { useContext } from "react";
import s from "./Footer.module.scss";
import { BurgerMenuContext } from "../../context/BurgerMenuContext";

const Footer = () => {
  const { toggleBurgerMenu } = useContext(BurgerMenuContext);
  return toggleBurgerMenu ? null : (
    <footer className={s.footer}>
      <div className={s.container}>
        <img src="icons/logo-footer.svg" alt="logo" />
        <div className={s.content}>
          <p className={s.text}>
            г. Москва, Цветной б-р, 40 <br />
            <a className={s.link} href="tel:+74957711211">
              +7 495 771 21 11
            </a>
            <br />
            <a className={s.link} href="mailto:info@skan.ru">
              info@skan.ru
            </a>
          </p>
          <p className={s.copyright}>Copyright. 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
