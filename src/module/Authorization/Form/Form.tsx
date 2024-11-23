import Input from "../../../ui/Input/Input";
import s from "./Form.module.scss";
import Button from "../../../ui/Button/Button";
import { usePostAuthorizationMutation } from "../../../api/authApi";
import { useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { authLogin } from "../../../state/AuthSlice";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [postAuthorization] = usePostAuthorizationMutation();
  const dispatch = useAppDispatch();

  const isDisabled = !(login.trim() && password.trim());

  const auth = async (e: React.FormEvent) => {
    e.preventDefault();
    if (login.trim() && password.trim()) {
      try {
        const response = await postAuthorization({
          login,
          password,
        }).unwrap();
        dispatch(authLogin());
        navigate("/main");
        console.log(response);
      } catch (error) {
        setLoginError("Введите корректные данные");
        setPasswordError("Неправильный пароль");
        console.log(error);
      }
    }
  };

  return (
    <form onSubmit={auth} className={s.form}>
      <label className={s.label} htmlFor="login">
        Логин или номер телефона:
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setLogin(e.target.value)
          }
          id="login"
          value={login}
          className={cn(s.input, { [s.errorInput]: loginError })}
          type="text"
          required
        />
        <div className={s.error}>{loginError}</div>
      </label>
      <label className={s.label} htmlFor="password">
        Пароль:
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          id="password"
          value={password}
          className={cn(s.input, { [s.errorInput]: loginError })}
          type="password"
          required
        />
        <div className={s.error}>{passwordError}</div>
      </label>

      <Button
        type="submit"
        className={cn(s.button, { [s.disabled]: isDisabled })}
        disabled={isDisabled}
      >
        Войти
      </Button>
    </form>
  );
};

export default Form;
