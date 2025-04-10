import { useCallback, useEffect, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

// useCallback esta dentro de la categoria de los hooks que memorizan valores
// useCallback memoriza funciones

// useMemo devuelve y almacena el valor calculado de una función en una variable, mientras que useCallBack devuelve y almacena la función real en una variable

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   useCallback(() => {
  //     Esto es lo que se va a memorizar y va a tener la misma direccion en memoria
  //   }, [deps]);

  // Funcion en un mismo espacio de memoria
  const incrementFatherCallback = useCallback((value) => {
    // Aqui yo puedo recibir los parametros porque esta seria la funcion que memorizo
    // setCounter(counter + 1); // Si lo hago de este modo como esto es lo que se memoriza siempre va a tener el mismo valor porque esta memorizando la funcion con el valor del counter que tenga en el momento, aqui es donde el uso del callback en setCounter es util porque ahi no se hace referencia al counter directamente
    setCounter((count) => count + value);
  }, []); // Si pongo como deps "counter" seguiria ejecutandose siempre el <ShowIncremet /> porque cada que cambia el counter vuelve a memorizar la funcion en un espacio de memoria diferente

  // Usamos esta funcion en lugar de la del useCounter porque vamos a hacer uso del setCounter con el callback adentro en el hook useCallback arriba
  const incrementFather = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    // incrementFatherCallback();
  }, [incrementFatherCallback]); // Si no estuvieramos usando el useCallback seguiria un ciclo infinito ya que se monta el componente, se ejecuta incrementFatherCallback, aumenta 1 que eso cambia el state por lo que este componente se vuelve a redibuja y crea la funcion en otro espacio de memoria por lo que como cambia la funcion y esta en las deps, se vuelve a ejecutar y asi infinito

  return (
    <>
      <h1>UseCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFatherCallback} />
    </>
  );
};
