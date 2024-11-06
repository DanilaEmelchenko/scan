import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/_global.scss";
import App from "./app/App.tsx";

const container = document.querySelector("#root") as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
