import { useCallback, useState } from "react";
import { Hijo } from "./Hijo";

const numeros = [2, 4, 6, 8, 10];

export const Padre = () => {
  const [valor, setValor] = useState(0);

  const incrementar = useCallback((num) => {
    setValor((value) => num + value);
  }, []);

  //   const incrementar = (num) => {
  //     setValor(num + valor);
  //   };

  return (
    <div>
      <h1>Padre</h1>
      <p>Total: {valor}</p>
      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
    </div>
  );
};
