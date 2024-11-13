import Input from "../../../ui/Input/Input";
import s from "./Form.module.scss";
import Button from "../../../ui/Button/Button";

const Form = () => {
  return (
    <form className={s.form}>
      <label className={s.label} htmlFor="login">
        Логин или номер телефона:
        <Input id="login" className={s.input} type="text" />
      </label>
      <label className={s.label} htmlFor="password">
        Пароль:
        <Input id="password" className={s.input} type="password" />
      </label>

      <Button type="submit" className={s.button}>
        Войти
      </Button>
    </form>
  );
};

export default Form;
