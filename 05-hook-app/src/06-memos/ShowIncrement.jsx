import React from "react";

// Aqui el memo de react no sirve porque cada que se cambia el state de counter la funcion que se le pasa es diferente porque se vuelve a ejecutar el codigo de CallbackHook y esa funcion se asigna a una posicion diferente en memoria, por lo que cada vez es diferente y no se memoriza una sola referencia

// Usando useCallback ahora el memo si tiene efecto porque se le esta pasando una misma funcion en un mismo espacio en memoria

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a ejecutar");
  return (
    <>
      <button className="btn btn-primary" onClick={() => increment()}>
        Incrementar
      </button>
    </>
  );
});
