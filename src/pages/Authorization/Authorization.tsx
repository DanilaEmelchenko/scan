import FormAuthorization from "../../module/Authorization/FormAuthorization";
import s from "./Authorization.module.scss";

const Authorization = () => {
  return (
    <main className={s.main}>
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
