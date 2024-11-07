import Authorization from "./Authorization/Authorization";
import s from "./Header.module.scss";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  return (
    <header className={s.header}>
      <img src="icons/logo-header.svg" alt="logo" />
      <Navbar />
      <Authorization />
    </header>
  );
};

export default Header;
