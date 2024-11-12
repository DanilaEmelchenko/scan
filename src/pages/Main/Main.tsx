import { useContext } from "react";
import Hero from "../../module/Main/Hero/Hero";
import SliderMain from "../../module/Main/SliderMain/SliderMain";
import Tarifs from "../../module/Main/Tarifs/Tarifs";
import s from "./Main.module.scss";
import { BurgerMenuContext } from "../../context/BurgerMenuContext";

const Main = () => {
  const { toggleBurgerMenu } = useContext(BurgerMenuContext);
  return (
    <>
      {toggleBurgerMenu ? null : (
        <main className={s.main}>
          <Hero />
          <SliderMain />
          <Tarifs />
        </main>
      )}
    </>
  );
};

export default Main;
