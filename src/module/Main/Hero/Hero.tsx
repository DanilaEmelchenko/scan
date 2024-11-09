import Button from "../../../ui/Button/Button";
import s from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.content}>
        <h1 className={s.title}>
          сервис по поиску <br /> публикаций <br />о компании <br />
          по его ИНН
        </h1>
        <p className={s.text}>
          Комплексный анализ публикаций, получение данных в формате PDF на
          электронную почту.
        </p>
        <Button className={s.button}>Запросить данные</Button>
      </div>
      <img className={s.image} src="images/main/hero-image.svg" alt="image" />
    </section>
  );
};

export default Hero;
