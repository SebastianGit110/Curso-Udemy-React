import { Link, NavLink } from "react-router-dom";

/* <a href="/">Home</a>
   <a href="/about">About</a>
   <a href="/login">Login</a> 
Estas etiquetas funcionan pero hacen refresh cada que se hace click sobre ellas y vuelve a cargar los componentes cuando solo debe cambiar una ruta. Se usan cuando hay que navegar a sitios externos. Con Link solo cambia cada componente del router, no hay refresh. Para poner los estilos en index.css se hace con "a" aunque sean Link porque eso en html se transforma a "a" y react lo maneja */
// La etiqueta NavLink es HOC y hace lo mismo que Link pero con la diferencia de que me permite saber en className si yo estoy en esa ruta para ponerle algun estilo condicional, eso lo muestra por medio de la funcion flecha y se ejecuta cada vez que algo cambia porque esta en className osea cuando los estilos se actualizan y se vuelve a mostrar

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          useContext
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavLink
              className={({ isActive }) => {
                return `nav-link ${isActive ? "active" : ""}`;
              }}
              to="about"
            >
              About
            </NavLink>
            <NavLink
              className={(args) => {
                return `nav-link ${args.isActive ? "active" : ""}`;
              }}
              to="login"
            >
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
