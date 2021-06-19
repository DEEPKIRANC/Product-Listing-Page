import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { MainProvider } from "./MainProvider";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </StrictMode>,
  rootElement
);
