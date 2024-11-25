import Input from "../../../ui/Input/Input";
import s from "./Form.module.scss";
import Button from "../../../ui/Button/Button";
import cn from "classnames";
import { useAuthForm } from "../../../hooks/useAuthForm";

const Form = () => {
  const { formik } = useAuthForm();

  return (
    <form onSubmit={formik.handleSubmit} className={s.form}>
      <label className={s.label} htmlFor="login">
        Логин или номер телефона:
        <Input
          id="login"
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={cn(s.input, {
            [s.errorInput]: formik.touched.login && formik.errors.login,
          })}
          type="text"
          required
        />
        {formik.touched.login && formik.errors.login && (
          <div className={s.error}>{formik.errors.login}</div>
        )}
      </label>
      <label className={s.label} htmlFor="password">
        Пароль:
        <Input
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="password"
          className={cn(s.input, {
            [s.errorInput]: formik.touched.password && formik.errors.password,
          })}
          type="password"
          required
        />
        {formik.touched.password && formik.errors.password && (
          <div className={s.error}>{formik.errors.password}</div>
        )}
      </label>

      <Button
        type="submit"
        className={cn(s.button, {
          [s.disabled]: !(formik.isValid && formik.dirty),
        })}
        disabled={!(formik.isValid && formik.dirty)}
      >
        Войти
      </Button>
    </form>
  );
};

export default Form;
