import s from "./SelectTonalnost.module.scss";

const SelectTonalnost = () => {
  return (
    <select className={s.select}>
      <option value="any">Позитивная</option>
      <option value="any">Негативная</option>
      <option value="any">Любая</option>
    </select>
  );
};

export default SelectTonalnost;
