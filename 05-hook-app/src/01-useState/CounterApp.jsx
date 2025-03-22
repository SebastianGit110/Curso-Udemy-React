import { useState } from "react";

export const CounterApp1 = () => {
  const [counter, setCounter] = useState(10);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <hr />

      <button className="btn" onClick={() => setCounter((count) => count + 1)}>
        {/* Con el callback en setCounter */}
        +1
      </button>
    </>
  );
};

export const CounterApp2 = () => {
  // Se puede desestructurar directamente aqui
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = counter; // Como abajo necesitamos la referencia "counter" para esparcir las props entonces aca desestructuramos el obj y no directamente arriba

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr />

      {/* <button className="btn" onClick={() => setCounter(counter.counter1 + 1)}> // Se esta estableciendo el nuevo estado de counter como 11 y arriba en el h1 estamos poniendo counter.counter1 y el objeto ya no existe por lo que no muestra nada
        +1
      </button> */}

      <button
        className="btn"
        onClick={
          () =>
            //   setCounter({ counter1: counter1 + 1, counter2, counter3 }) // Aca esta manteniendo la estrucutura del objeto por lo que ahora el nuevo estado va a ser el mismo obj pero incrementando solo counter1
            setCounter({ ...counter, counter1: counter1 + 1 }) // Es lo mismo pero mas resumido usando el operador spread para esparcir las propiedades
        }
      >
        +1
      </button>
    </>
  );
};
