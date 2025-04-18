import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
// ? fonts
import "./assets/fonts/fonts.css";
import "./style/assets/normalize.css";
import "./style/assets/variables.css";
import "./style/assets/animations.css";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
