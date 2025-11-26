import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// il faut quand même importer le globals ici si jamais une page n'utilise pas le header par exemple
import "./styles/globals.scss";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
