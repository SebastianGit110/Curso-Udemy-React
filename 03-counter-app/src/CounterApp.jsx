import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  // Cuando cambia el estado, el componente se vuelve a ejecutar por lo que si hay algo asincrono en nuestro componente tocac saber bien donde debe ir eso porque se puede ejecutar varias veces sin querer

  const [counter, setCounter] = useState(value); // const counter = 0. Se usa const... para que no le podamos asignar un valor variable

  const handleAdd = (event) => {
    // console.log(event);
    // setCounter(counter + 1); // counter++ daria error. Cuando se llama setCounter (las veces que se llame, no renderiza por cada setCounter) el estado cambia y react vuelve a renderizar el comp una vez haya salido del codigo de handleClick
    setCounter((c) => c + 1); // Otra forma de cambiar el estado es con el callback en caso de que no tengamos el valor de counter o no se quiera usar
  };

  const handleSubtract = () => {
    setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter(() => value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>
        {/* onClick={handleClick} es lo mismo que onClick={(e)=>{handleClick(e)}} ya que si se imite escribir la funcion flecha y los parametros, la sintaxis dice que el primer parametro de la funcion flecha de afuera le sea pasado a la funcion del cuerpo de la funcion flecha */}
        +1
      </button>
      <button onClick={handleSubtract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default CounterApp;

CounterApp.propTypes = {
  value: PropTypes.number,
};
