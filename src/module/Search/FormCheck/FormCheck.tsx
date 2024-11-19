import Button from "../../../ui/Button/Button";
import s from "./FormCheck.module.scss";
import { arr } from "./formCheck.data";
import { Link } from "react-router-dom";

const FormCheck = () => {
  return (
    <div className={s.formCheck}>
      {arr.map((item) => (
        <div key={item.id} className={s.items}>
          {item.checkbox()}
          <label className={s.label} htmlFor="check">
            {item.text}
          </label>
        </div>
      ))}
      <div className={s.buttonWrapper}>
        <Link className={s.button} to="/search/results">
          Поиск
        </Link>
        <span className={s.required}>* Обязательные к заполнению поля</span>
      </div>
    </div>
  );
};

export default FormCheck;
