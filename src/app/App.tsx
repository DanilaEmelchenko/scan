import { BrowserRouter } from "react-router-dom";
import Header from "../module/Header/Header";
import Providers from "./providers/providers";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <Header />
      </Providers>
    </BrowserRouter>
  );
}

export default App;
