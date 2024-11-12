import { navbarData } from "./navbar.data";
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.navbar__list}>
        {navbarData.map((item) => (
          <li key={item.id} className={s.navbar__item}>
            <a className={s.navbar__link} href="#">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
