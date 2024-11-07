import { BrowserRouter } from "react-router-dom";
import Header from "../module/Header/Header";
import Providers from "./providers/providers";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <>
          <Header />
          <AppRouter />
        </>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
