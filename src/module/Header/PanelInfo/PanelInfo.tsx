import s from "./PanelInfo.module.scss";

const PanelInfo = () => {
  return (
    <div className={s.panelInfo}>
      <div className={s.top}>
        <p className={s.title}>Использовано компаний</p>
        <p className={s.count}>34</p>
      </div>
      <div className={s.bottom}>
        <p className={s.title}>Лимит по компаниям</p>
        <p className={s.count}>100</p>
      </div>
    </div>
  );
};

export default PanelInfo;
