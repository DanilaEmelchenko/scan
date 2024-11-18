import { useContext } from "react";
import FormAuthorization from "../../module/Authorization/FormAuthorization";
import s from "./Authorization.module.scss";
import { BurgerMenuContext } from "../../context/BurgerMenuContext";

const Authorization = () => {
  const { toggleBurgerMenu } = useContext(BurgerMenuContext);
  return toggleBurgerMenu ? null : (
    <main className={s.auth}>
      <div className={s.left}>
        <h1 className={s.title}>
          Для оформления подписки на тариф, необходимо авторизоваться.
        </h1>
        <img
          className={s.image}
          src="images/authorization/image.svg"
          alt="image"
        />
      </div>
      <FormAuthorization />
    </main>
  );
};

export default Authorization;
