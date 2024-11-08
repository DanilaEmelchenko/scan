import { BrowserRouter } from "react-router-dom";
import Header from "../module/Header/Header";
import Providers from "./providers/providers";
import AppRouter from "./routers/AppRouter";
import Footer from "../module/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <>
          <Header />
          <AppRouter />
          <Footer />
        </>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
