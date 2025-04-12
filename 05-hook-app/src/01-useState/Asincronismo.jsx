import { useState } from "react";

// useState actualiza el state de manera asincrona
// React programa la actualización del estado para después del ciclo de ejecución actual y antes del próximo render.

export const Asincronismo = () => {
  const [value, setValue] = useState(0);

  const incrementWithValue = () => {
    // De esta forma no se tendria el resultado esperado (aumentar 2) porque despues del ciclo de ejecucion cuando react vaya a actualizar el estado "value" va a ser el valor anterior y ese va a ser el mismo para las dos lineas de setValue

    setValue(value + 1); // Aqui es value que seria 0 entonces 0 + 1 y actualiza el state en este ciclo de ejecucion a 1
    setValue(value + 1); // Aqui esperariamos que value sea 1 y haga 1 + 1 pero no porque value va a tener el valor de la ejecucion anterior y value era 0 entonces es 0 + 1 y vuelve a 1 y no a 2
  };

  const incrementWithCallback = () => {
    // Esta es la forma correcta ya que aunque si bien se utiliza el valor del state anterior aqui no hacemos referencia directa a ese valor sino le decimos como hacerlo gracias a la opcion del callback del useState

    setValue((before) => before + 1); // Aqui el value es 0 entonces dice del valor que tenga value sumale 1
    setValue((before) => before + 1); // Y aqui dice que le vuelva a sumar 1 y funciona porque le esta diciendo como hacerlo y no se esta usando "value" directamente que resumido es como si value fuera una const con el valor de la ejecucion anterior
  };

  return (
    <>
      <h1>Valor: {value}</h1>
      <hr />

      <button className="btn btn-outline-primary" onClick={incrementWithValue}>
        +1 con Value
      </button>
      <button className="btn btn-primary" onClick={incrementWithCallback}>
        +1 con Callback
      </button>
    </>
  );
};
