import { useRef, useState } from "react";

// useRef sirve para tener una variable o referencia a algo como useState pero cuando cambia de valor no dispara la rerenderizacion.

// useRef es un objeto con la propiedad current que es donde guarda los valores
/* const ref = useRef(); 
console.log(ref["current"]); */

export const FocusScreen = () => {
  const inputRef = useRef(); // Se puede establecer obj, bool, lo que necesite mantener en el componente. El inputRef siempre va a apuntar al elemento que se le asigne sin importar que hayan muchas componentes iguales, react no se confunde. Con useRef se hace una referencia controlable ya que la maneja react

  let inputRef2 = ""; // Si lo hacemos de este modo funciona pero hay desventajas porque es una variable local su valor puede ser complejo de controlar ya que react no lo maneja. Cada que haya un rerender vualve a ""

  const onClick = () => {
    //   document.querySelector("input").select(); // .focus() Hay una desventaja de hacerlo asi con document... porque si existen mas inputs solo se va a seleccionar el primero que se encuentre en el documento. Con id y clases puede que no me seleccione el que yo quiera porque otros podrian tener el mismo id
    console.log(inputRef);
    inputRef.current.select();
  };

  const onClick2 = () => {
    console.log(inputRef2);
    inputRef2.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef} // La prop ref es propia de react. Se le asigna el elemento html a inputRef. Si hay dos input con el mismo ref se va a asignar solo al ultimo
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <input
        ref={(element) => (inputRef2 = element)}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
      </button>

      <button className="btn btn-primary mt-2" onClick={onClick2}>
        Set Focus 2
      </button>
    </>
  );
};

// Tener un grupo de elementos en un solo useRef

export const FocusScreen2 = () => {
  const inputRef = useRef({});

  //   console.log(inputRef);

  const onClick = (inputId) => {
    inputRef.current[inputId].select(); // Como useRef es un obj con la prop current toca interactuar con las otras props asi
  };

  return (
    <>
      <h1>Focus Screen 2</h1>
      <hr />

      <input
        type="text"
        ref={(element) => (inputRef.current["nombre"] = element)}
        className="form-control"
        placeholder="Ingrese su nombre"
      />

      <input
        type="text"
        ref={(element) => (inputRef.current["apellido"] = element)}
        className="form-control"
        placeholder="Ingrese su apellido"
      />

      <button
        className="btn btn-primary mt-2"
        onClick={() => onClick("nombre")}
      >
        Set Focus 1 Input
      </button>
      <button
        className="btn btn-primary mt-2"
        onClick={() => onClick("apellido")}
      >
        Set Focus 2 Input
      </button>
    </>
  );
};
