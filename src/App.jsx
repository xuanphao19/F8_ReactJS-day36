import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/reset.css";
import "./style/style.css";
import AppRoutes from "./Routes/AppRoutes/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);
