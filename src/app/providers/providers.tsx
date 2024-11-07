import { Provider } from "react-redux";
import { store } from "../store/store";
import { FC } from "react";

interface IProviders {
  /** Content that will be wrapped by providers. */
  readonly children: JSX.Element;
}

const Providers: FC<IProviders> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Providers;
