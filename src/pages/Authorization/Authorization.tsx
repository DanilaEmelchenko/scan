import Form from "../../module/Authorization/Form/Form";
import Button from "../../ui/Button/Button";
import s from "./Authorization.module.scss";

const Authorization = () => {
  return (
    <main className={s.main}>
      <div className={s.content}>
        <h1 className={s.title}>
          Для оформления подписки на тариф, необходимо авторизоваться.
        </h1>
        <img
          className={s.image}
          src="images/authorization/image.svg"
          alt="image"
        />
      </div>
      <div className={s.authorization}>
        {/* <img
          className={s.castle}
          src="icons/authorization/castle.svg"
          alt="castle"
        /> */}
        <div className={s.tabs}>
          <div className={s.enter}>Войти</div>
          <div className={s.register}>Зарегистрироваться</div>
        </div>
        <Form />
        <Button className={s.button}>Войти</Button>
        <div className={s.forgot}>Восстановить пароль</div>
        <br />
        <span className={s.or}>Войти через:</span>
        <div className={s.socials}>
          <Button className={s.google}>
            <img src="icons/authorization/google.svg" alt="google" />
          </Button>
          <Button className={s.facebook}>
            <img src="icons/authorization/facebook.svg" alt="facebook" />
          </Button>
          <Button className={s.yandex}>
            <img src="icons/authorization/yandex.svg" alt="yandex" />
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Authorization;
