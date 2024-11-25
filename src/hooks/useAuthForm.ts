import { useNavigate } from "react-router-dom";
import { usePostAuthorizationMutation } from "../api/authApi";
import { useAppDispatch } from "./redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { authLogin } from "../state/AuthSlice";

export const useAuthForm = () => {
  const navigate = useNavigate();
  const [postAuthorization] = usePostAuthorizationMutation();
  const dispatch = useAppDispatch();

  const validationSchema = Yup.object({
    login: Yup.string()
      .required("Логин или номер телефона обязателен")
      .min(3, "Минимальная длина логина - 3 символа"),
    password: Yup.string()
      .required("Пароль обязателен")
      .min(6, "Минимальная длина пароля - 6 символов"),
  });

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setFieldError }) => {
      try {
        const response = await postAuthorization(values).unwrap();
        dispatch(authLogin());
        navigate("/main");
        console.log(response);
      } catch (error) {
        setFieldError("login", "Введите корректные данные");
        setFieldError("password", "Неправильный пароль");
        console.error(error);
      }
    },
  });

  return { formik };
};
