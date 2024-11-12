import Button from "../../../ui/Button/Button";
import { chunkArray } from "../../../utils/chunkArray";
import { tarifsData } from "./tarifs.data";
import s from "./Tarifs.module.scss";

const Tarifs = () => {
  return (
    <section className={s.tarifs}>
      <h2 className={s.title}>Наши тарифы</h2>
      <div className={s.cards}>
        {tarifsData.map((tarif) => {
          const listChunks = chunkArray(tarif.list, 3);
          return (
            <div key={tarif.id} className={s.card}>
              <div
                className={s.card__top}
                style={{ backgroundColor: tarif.styles.backgroundColor }}
              >
                <div className={s["card__top-content"]}>
                  <h3
                    className={s["card__top-title"]}
                    style={tarif.id === 3 ? { color: "#fff" } : {}}
                  >
                    {tarif.title}
                  </h3>
                  <p
                    className={s["card__top-text"]}
                    style={tarif.id === 3 ? { color: "#fff" } : {}}
                  >
                    {tarif.text}
                  </p>
                </div>
                <img
                  className={s["card__top-icon"]}
                  src={tarif.icon}
                  alt="icon"
                />
              </div>
              <div className={s.card__bottom}>
                <div className={s["card__bottom-content"]}>
                  <h3 className={s["card__bottom-price"]}>{tarif.price}</h3>
                  <h3 className={s["card__bottom-priceThrough"]}>
                    {tarif.priceThrough}
                  </h3>
                </div>
                <p className={s["card__bottom-priceCredit"]}>
                  {tarif.priceCredit}
                </p>
                <div className={s["card__bottom-list"]}>
                  <h4 className={s["card__bottom-listTitle"]}>
                    В тариф входит:
                  </h4>
                  {listChunks.map((chunk, chunkIndex) => (
                    <div
                      key={chunkIndex}
                      className={s["card__bottom-listItemsWrapper"]}
                    >
                      {chunk.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={s["card__bottom-listItems"]}
                        >
                          <img src={tarif.checkMark} alt="check" />
                          <p className={s["card__bottom-listText"]}>{item}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className={s["card__bottom-buttonWrapper"]}>
                  <Button className={s["card__bottom-button"]}>
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tarifs;
