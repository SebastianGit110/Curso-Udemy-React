import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp.jsx";
import "./index.css";
import { CounterApp1, CounterApp2 } from "./01-useState/CounterApp.jsx";
import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook.jsx";
import { SimpleForm } from "./02-useEffect/SimpleForm.jsx";
import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook.jsx";
import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <HooksApp />
    <CounterApp1 />
    <CounterApp2 />
    <CounterWithCustomHook />
    <SimpleForm />
    <FormWithCustomHook />
    <MultipleCustomHooks />
  </>
);
