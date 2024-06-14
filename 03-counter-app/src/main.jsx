import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App title={"hhhh"} />
    {/* mandar una prop asi: title, es igual que asi title={true} */}
  </React.StrictMode>
);
