import { useEffect, useState } from "react";

export function Message() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  // En la funcion onMouseMove yo estoy modificando el estado del componente Message por medio del evento que se crea cuando monto el componente pero si yo no elimino el evento por medio del return del useEffect el evento estaria activo y trataria de modificar el useState aun cuando yo desmonté el componente y esto seria un error (despues de react 18 ya no lo muestra pero es error) porque estaria modificando el state de un componente inexistente

  useEffect(() => {
    // console.log("Componente Mounted"); // Se ejecuta cuando el componente se muestra

    // Se crea la funcion para pasarla por referencia a los eventos
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
      console.log({ x, y }); // Si el componente se desmonta pero el evt no se elimina esto se sigue ejecutando
    };

    window.addEventListener("mousemove", onMouseMove); // Se envia event como primer argumento

    /* window.addEventListener("mousemove", (event) => {
      console.log(event.x, event.y);
    }); // Este apunta a una referencia en memoria aparte */
    // Si no elimino el listener cada que se cree el componente se va a crear uno nuevo y eso va a saturar la memoria
    return () => {
      //   console.log("Componente Unmounted"); // Se ejecuta cuando el componente se elimina

        window.removeEventListener("mousemove", onMouseMove); // Aca si se elimina el listener porque esta en la misma direccion de memoria
      /*window.removeEventListener("mousemove", (event) => {
        console.log(event.x, event.y);
      }); // Asi no va a eliminar el listener de arriba porque esta apuntando a una referencia en memoria distinta a la del listener creado, para eliminar un listener tiene que estar en la misma posicion de memoria por lo que es mejor crear la funcion como una const y asignarla */
    };
  }, []); // Si hay una dependencia y esta cambia react desmonta el componente anterior y vuelve a montar el nuevo

  return (
    <>
      <h1>Usuario ya existe</h1>
      <h3>{JSON.stringify(coords)}</h3>
    </>
  );
}
