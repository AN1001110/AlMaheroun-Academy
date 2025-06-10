import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
// ? fonts
import "./assets/fonts/fonts.css";
//  fonts end
// normalize library
import "./style/assets/normalize.css";
//  global  variables
import "./style/assets/variables.css";
//  animations
import "./style/assets/animations.css";
//  global css
import "./index.css";
// responsive  design
import "./style/assets/responsive.css";
// Vercel  Analytics
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <ScrollToTop />
      <App />
      <Analytics />
    </StrictMode>
  </BrowserRouter>
);
