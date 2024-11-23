import { useContext } from "react";
import Button from "../../ui/Button/Button";
import ListDocuments from "./ListDocuments/ListDocuments";
import s from "./Results.module.scss";
import { BurgerMenuContext } from "../../context/BurgerMenuContext";
import SliderResults from './SliderResults/SliderResults';

const Results = () => {
  const { toggleBurgerMenu } = useContext(BurgerMenuContext);

  if (toggleBurgerMenu) return null;
    return (
      <main className={s.results}>
        <section className={s.hero}>
          <div className={s.left}>
            <h1 className={s.title}>Ищем. Скоро будут результаты</h1>
            <p className={s.text}>
              Поиск может занять некоторое время, просим сохранять терпение.
            </p>
          </div>
          <img src="/images/results/image.png" alt="image" />
        </section>
        <section className={s.generaSummary}>
          <h2 className={s.title}>Общая сводка</h2>
          <p className={s.text}>Найдено 4 221 вариантов</p>
          <SliderResults />
        </section>
        <ListDocuments />
        <div className={s.buttonWrapper}>
          <Button className={s.button}>Показать еще</Button>
        </div>
      </main>
    );
};

export default Results;
