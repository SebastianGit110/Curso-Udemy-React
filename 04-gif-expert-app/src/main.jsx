import React from "react";
import ReactDOM from "react-dom/client";
import GifExpertApp from "./GifExpertApp.jsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* El modo estricto es solo en desarrollo y ayuda a detectar errores */}
    <GifExpertApp />
  </React.StrictMode>
);
