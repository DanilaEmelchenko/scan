import Input from "../../../ui/Input/Input";
import InputRange from "../../../ui/InputRange/InputRange";
import SelectTonalnost from "../../../ui/SelectTonalnost/SelectTonalnost";
import s from "./FormInput.module.scss";

const FormInput = () => {
  return (
    <div className={s.formInput}>
      <label className={s.label} htmlFor="inn">
        ИНН компании*
        <br />
        <Input className={s.input} placeholder="10 цифр" type="number" />
      </label>
      <label className={s.label} htmlFor="">
        Тональность
        <br />
        <SelectTonalnost />
      </label>
      <label className={s.label} htmlFor="">
        Количество документов в выдаче*
        <br />
        <Input className={s.input} placeholder="от 10 до 1000" type="number" />
      </label>
      <label className={s.label} htmlFor="">
        Диапазон поиска*
        <div className={s.range}>
          <InputRange />
        </div>
      </label>
    </div>
  );
};

export default FormInput;
