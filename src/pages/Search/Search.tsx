import { useContext } from "react";
import FormSearch from "../../module/Search/FormSearch/FormSearch";
import s from "./Search.module.scss";
import { BurgerMenuContext } from "../../context/BurgerMenuContext";

const Search = () => {
  const { toggleBurgerMenu } = useContext(BurgerMenuContext);

  return toggleBurgerMenu ? null : (
    <main className={s.search}>
      <div className={s.top}>
        <div className={s.left}>
          <h1 className={s.title}>Найдите необходимые данные в пару кликов.</h1>
          <p className={s.text}>
            Задайте параметры поиска. Чем больше заполните, тем точнее поиск
          </p>
        </div>
        <div className={s.right}>
          <img
            className={s.document}
            src="images/search/document.svg"
            alt="document"
          />
          <img
            className={s.folders}
            src="images/search/folders.svg"
            alt="folders"
          />
        </div>
      </div>
      <div className={s.bottom}>
        <FormSearch />
        <img className={s.image} src="images/search/image.svg" alt="image" />
      </div>
    </main>
  );
};

export default Search;
