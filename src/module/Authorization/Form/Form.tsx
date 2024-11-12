import Input from "../../../ui/Input/Input";
import s from "./Form.module.scss";

const Form = () => {
  return (
    <form className={s.form} action="">
      <label className={s.label} htmlFor="login">
        Логин или номер телефона:
        <Input id="login" className={s.input} name="login" type="text" />
      </label>
      <label className={s.label} htmlFor="password">
        Пароль:
        <Input
          id="password"
          className={s.input}
          name="password"
          type="password"
        />
      </label>
    </form>
  );
};

export default Form;
