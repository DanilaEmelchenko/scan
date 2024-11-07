import Button from "../../../ui/Button/Button";
import s from "./Tarifs.module.scss";

const Tarifs = () => {
  return (
    <section className={s.tarifs}>
      <h2 className={s.title}>Наши тарифы</h2>
      <div className={s.cards}>
        <div className={s.card}>
          <div className={s.card__top}>
            <div className={s["card__top-content"]}>
              <h3 className={s["card__top-title"]}>Beginner</h3>
              <p className={s["card__top-text"]}>Для небольшого исследования</p>
            </div>
            <img src="icons/main/tariffs/beginner.svg" alt="icon" />
          </div>
          <div className={s.card__bottom}>
            <div className={s["card__bottom-content"]}>
              <h3 className={s["card__bottom-price"]}>799 ₽</h3>
              <h3 className={s["card__bottom-priceThrough"]}>1 200 ₽</h3>
            </div>
            <p className={s["card__bottom-priceCredit"]}>
              или 150 ₽/мес. при рассрочке на 24 мес.
            </p>
            <div className={s["card__bottom-list"]}>
              <h4 className={s["card__bottom-listTitle"]}>В тариф входит:</h4>
              <div className={s["card__bottom-listItemsWrapper"]}>
                <div className={s["card__bottom-listItems"]}>
                  <img src="icons/main/tariffs/check-mark.svg" alt="check" />
                  <p className={s["card__bottom-listText"]}>
                    Безлимитная история запросов
                  </p>
                </div>
                <div className={s["card__bottom-listItems"]}>
                  <img src="icons/main/tariffs/check-mark.svg" alt="check" />
                  <p className={s["card__bottom-listText"]}>
                    Безопасная сделка
                  </p>
                </div>
                <div className={s["card__bottom-listItems"]}>
                  <img src="icons/main/tariffs/check-mark.svg" alt="check" />
                  <p className={s["card__bottom-listText"]}>Поддержка 24/7</p>
                </div>
              </div>
            </div>
            <div className={s["card__bottom-buttonWrapper"]}>
              <Button className={s["card__bottom-button"]}>Подробнее</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
