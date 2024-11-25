import { Link } from "react-router-dom";
import s from "./Authorization.module.scss";

const Authorization = () => {
  return (
    <div className={s.authorization}>
      <a className={s.authorization__register} href="#">
        Зарегистрироваться
      </a>
      <div className={s.authorization__border}></div>
      <Link className={s.authorization__enter} to="/authorization">
        Войти
      </Link>
    </div>
  );
};

export default Authorization;
