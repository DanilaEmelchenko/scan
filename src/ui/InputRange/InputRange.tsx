import s from "./InputRange.module.scss";

const InputRange = () => {
  return (
    <>
      <div className={s.wrapper}>
        <input type="date" className={s["input-range"]} />
      </div>

      <div className={s.wrapper}>
        <input type="date" className={s["input-range"]} />
      </div>
    </>
  );
};

export default InputRange;
