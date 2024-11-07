import s from "./Authorization.module.scss";

const Authorization = () => {
  return (
    <div className={s.authorization}>
      <a className={s.authorization__register} href="#">Зарегистрироваться</a>
      <div className={s.authorization__border}></div>
      <a className={s.authorization__enter} href="#">Войти</a>
    </div>
  );
};

export default Authorization;
