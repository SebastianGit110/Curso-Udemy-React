import { useMemo, useState } from "react";
import { useCounter } from "../hooks";
import { use } from "react";

// Las funciones que estan aqui aunque el componente se redibuje las veces que sea estas no se van a asignar otra vez en memoria o a reprocesar por lo que siempre que se pueda es mejor dejarlas aqui afuera

// Lo del useMemo se puede hacer de diferentes formas diferentes pero ese es un uso del mismo

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos...");
  }
  return `${iterationNumber} iteraciones hechas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);

  //const memorizedValue = useMemo(() => (lo que va a memorizar, debe regresar algo la funcion sino seria undefined), [deps ]) el memorizedValue es lo que se memoriza y se va a quedar asi a menos que las deps cambien, si las deps son [] solo lo memoriza la primera vez
  // Es recomendado hacerlo cuando se quiere memorizar procesos pesados para que no se ejecuten muchas veces

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter <small>{counter}</small>
      </h1>
      <hr />

      {/* Esto solo se deberia redibujar cuando el counter cambie no cuendo el show cambie entonces se puede memorizar el componente para que cuando react redibuje el comp no vuelva a realizar ese proceso pesado
      <h4>{heavyStuff()}</h4> */}
      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        Incrementar
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
