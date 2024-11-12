import { Provider } from "react-redux";
import { store } from "../store/store";
import { FC } from "react";
import { BurgerMenuProvider } from "../../context/BurgerMenuContext";

interface IProviders {
  readonly children: JSX.Element;
}

const Providers: FC<IProviders> = ({ children }) => {
  return (
    <Provider store={store}>
      <BurgerMenuProvider>{children}</BurgerMenuProvider>
    </Provider>
  );
};

export default Providers;
