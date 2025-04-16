import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage, AboutPage, LoginPage, NavBar } from "./";

// Trabajando sin context toca pasar las props por cada componente asi algunos no usen la prop (son como un puente para pasar las props a los hijos) con tal de que llegue al componente hijo que la usa, y eso puede ser un poco confuso
// Trabajando con router hay cosas que no se pueden hacer pasando las props asi y sin usar context como tener dos pantallas que no se contengan, es decir, que no este una dentro de otra entonces no se van a poder pasar las props, ahi es donde es util usar context
// Context es un contenedor de info que esta a un nivel superior que permite acceder a sus metodos a los componentes hijos
// Para React en la web es BrowserRouter, para native es otro y para electron es otro
// <Routes> es un hoc y recibe un arreglo o children que son <Route /> y estas se cierran en la misma etiqueta a excepcion de cuando tienen rutas hijas-internas
// El arbol de componentes que se ve en devTools es el context de la app

export const MainApp = () => {
  return (
    <>
      {/* <h1>MainApp</h1> */}
      <NavBar />
      <hr />

      {/* Pongo aqui las rutas porque quiero que lo que este en MainApp se vea siempre en mi app y el contenido que cambie sean las rutas de abajo.
      Para tener un componente que se muestre para cualquier ruta que no este especificada se usa el path ="/*" que es un wildcard */}
      <Routes>
        {/* El orden de las <Route /> si importa.
        no es necesario poner "/" antes del nombre */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="about" element={<AboutPage />} />

        {/* <Route path="/*" element={<LoginPage />} /> // Este deja la url tal como la escribí */}
        {/* <Route path="/*" element={<Navigate to={"about"} />} /> // Este pone la url por la que esta en to */}
      </Routes>
    </>
  );
};
