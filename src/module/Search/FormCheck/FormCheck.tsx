import Button from "../../../ui/Button/Button";
import s from "./FormCheck.module.scss";
import { arr } from "./formCheck.data";

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
        <Button className={s.button}>Поиск</Button>
        <span className={s.required}>* Обязательные к заполнению поля</span>
      </div>
    </div>
  );
};

export default FormCheck;
