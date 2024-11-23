import Button from "../../../ui/Button/Button";
import s from "./ListDocuments.module.scss";

const ListDocuments = () => {
  return (
    <section className={s.listDocuments}>
      <h2 className={s.title}>Список документов</h2>
      <div className={s.cards}>
        <div className={s.card}>
          <div className={s.top}>
            <p className={s.date}>13.09.2021</p>
            <p className={s.source}>Комсомольская правда KP.RU</p>
          </div>
          <h3 className={s.title}>
            Скиллфэктори - лучшая онлайн-школа для будущих айтишников
          </h3>
          <p className={s.subtitle}>Технические новости</p>
          <img src="/images/results/image document.svg" alt="image" />
          <p className={s.text}>
            SkillFactory — школа для всех, кто хочет изменить свою карьеру и
            жизнь.
          </p>
          <div className={s.bottom}>
            <Button className={s.button}>Читать в источнике</Button>
            <p className={s.words}>2 543 слова</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListDocuments;
