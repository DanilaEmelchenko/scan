import { Link } from "react-router-dom";
import { navbarData } from "./navbar.data";
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <ul className={s.navbar__list}>
        {navbarData.map((item) => (
          <li key={item.id} className={s.navbar__item}>
            <Link className={s.navbar__link} to={item.link}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
