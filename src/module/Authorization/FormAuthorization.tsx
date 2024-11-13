import Button from "../../ui/Button/Button";
import Form from "./Form/Form";
import s from "./FormAuthorization.module.scss";

const FormAuthorization = () => {
  return (
    <div className={s.authorization}>
      <img
        className={s.castle}
        src="icons/authorization/castle.svg"
        alt="castle"
      />
      <div className={s.tabs}>
        <div className={s.enter}>Войти</div>
        <div className={s.register}>Зарегистрироваться</div>
      </div>
      <Form />
      <div className={s.forgot}>Восстановить пароль</div>

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
  );
};

export default FormAuthorization;
