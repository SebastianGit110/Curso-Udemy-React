import { Fragment } from "react";
import PropTypes from "prop-types";

// La importacion del componente fragment <Fragment><Fragment /> hace lo mismo que <></> que es envolver codigo jsx para no tener que crear un div ya que en react los componentes deben devolver un único elemento padre.

// <h1> { expr de js menos objs ni funciones async } </h1> react no permite tener hijos obj no funciones async que son obj.
// Para poder imprimir un obj lo tenemos que pasar a JSON con JSON.stringify()

// Se recomienda evitar declarar variables dentro del cuerpo de un componente si su valor no va a cambiar o no está relacionado con un hook. Esto se debe a que React solo re-renderiza la parte del componente que está relacionada con el estado (state) y los props. Ya que cuando el comp se re-renderice va a volver a especificar en memoria el espacio de lo que esta en el cuerpo de la funcion.

// Las props se reciben como si fuera un obj
// En create-react-app ya vienen instaladas las dependencias de propTypes mientras que en vite no
// PropTypes es para definir el tipo a las props o si es obligatorio mandarlas

const nombre = {
  name: "Sebas",
  code: "Sebrat",
};

const funcion = () => "hola";

function App({ title, subtitulo }) {
  // Se pueden poner las prop por defecto en los parametros de la funcion por si no se pasa esa prop se toma ese valor, pero con las defaultProp se puede hacer tambien

  // Se puede hacer asi pero se extiende el cod del comp innecesariamente, para eso estan los PropTypes
  //   if (!title) {
  //     throw new Error("No se envio el title");
  //   }

  return (
    <Fragment>
      {/* <code>{JSON.stringify(nombre)}</code> */}
      {/* <h1>{funcion()}</h1> */}

      <h1 data-testid="test-title"> {title} </h1>
      <p>{subtitulo}</p>
      <p>{subtitulo}</p>
    </Fragment>
  );
}

export default App;

App.propTypes = {
  title: PropTypes.string.isRequired, // PropTypes.string solo marcaria error que dice que se esperaba string, con .isRequired dice que tocaba mandar la prop
  subtitulo: PropTypes.string.isRequired,
};

// Las default props entran antes de las propTypes entonces si en propTypes hay algo requerido, pues utiliza el defaultProp. Para usar las defaultProps en el componente, tenemos que desestructuralas en los parametros
App.defaultProps = {
  title: "No hay titulo",
  subtitulo: "No hay subtitulo",
};
