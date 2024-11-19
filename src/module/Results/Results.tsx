import Button from "../../ui/Button/Button";
import s from "./Results.module.scss";

const Results = () => {
  return (
    <main className={s.results}>
      <div className={s.hero}>
        <div className={s.left}>
          <h1 className={s.title}>Ищем. Скоро будут результаты</h1>
          <p className={s.text}>
            Поиск может занять некоторое время, просим сохранять терпение.
          </p>
        </div>
        <img src="/images/results/image.png" alt="image" />
      </div>
      <div className={s.generaSummary}>
        <h2 className={s.title}>Общая сводка</h2>
        <p className={s.text}>Найдено 4 221 вариантов</p>
      </div>
      <div className={s.documents}>
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
        <div className={s.buttonWrapper}>
          <Button className={s.button}>Показать еще</Button>
        </div>
      </div>
    </main>
  );
};

export default Results;
