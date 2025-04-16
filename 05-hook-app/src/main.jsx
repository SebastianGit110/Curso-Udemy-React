import ReactDOM from "react-dom/client";
import "./index.css";
// import { HooksApp } from "./HooksApp.jsx";
// import { CounterApp1, CounterApp2 } from "./01-useState/CounterApp.jsx";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook.jsx";
// import { SimpleForm } from "./02-useEffect/SimpleForm.jsx";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook.jsx";
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks.jsx";
// import { FocusScreen, FocusScreen2 } from "./04-useRef/FocusScreen.jsx";
// import { Layout } from "./05-useLayouEffect/Layout.jsx";
// import { Memorize } from "./06-memos/Memorize.jsx";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";
// import { Asincronismo } from "./01-useState/Asincronismo.jsx";
// import "./08-useReducer/intro-reducer.js"; // Importacion archivo javascript
// import { TodoApp } from "./08-useReducer/TodoApp.jsx";
import { MainApp } from "./09-useContext/MainApp.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <HooksApp />
    <CounterApp1 />
    <CounterApp2 />
    <CounterWithCustomHook />
    <SimpleForm />
    <FormWithCustomHook />
    <MultipleCustomHooks />
    <FocusScreen />
    <FocusScreen2 />
    <Layout />
    <Memorize />
    <MemoHook />
    <CallbackHook />
    <Padre />
    <Asincronismo />
    <TodoApp /> */}
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </>
);

// BrowserRouter es un HOC Higher Order Component, es decir, es un componente normal solo que recibe componentes dentro de el como un div. Permite que todos los hijos que estan dentro de el tengan acceso a la info que provee el padre
{
  /* <div>
    <h1></h1>
  </div> */
}
// Es mejor configurar las rutas (hijas, protejidas, privadas) en el punto mas alto de la app
