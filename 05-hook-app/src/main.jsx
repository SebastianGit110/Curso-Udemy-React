import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp.jsx";
import "./index.css";
import { CounterApp1, CounterApp2 } from "./01-useState/CounterApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HooksApp />
    <CounterApp1 />
    <CounterApp2 />
  </React.StrictMode>
);
