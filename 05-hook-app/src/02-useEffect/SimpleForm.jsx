import { useEffect, useState } from "react";
import { Message } from "./Message";

export function SimpleForm() {
  // React trabaja todo en una sola via, tiene getters pero no setters lo que lo hace mas rapido
  // Cuando se hace un cambio en el state se redibuja el componente
  // El useEffect es usado para disparar efectos secundarios, si no tiene dependencias como segundo argumento el useEffect se va a ejecutar cada que se redibuje el componente osea cada que cambie el estado y eso no se quiere.   Cuando se tiene como dependencias un array vacio [] solo se ejecuta al montar el componente, es decir, primero renderiza lo que esta en el return del componente y despues se ejecuta lo que esta en el useEffect, eso se puede ver mejor usando setTimeout
  // Las dependencias son las razones por las cuales yo quiero que el useEffect se vuelva a disparar
  // Es mejor tener un useEffect por cada efecto secundario que quiera llamar en vez de uno grande
  // La parte del return del useEffect es el cleanUp o unMount y se usa cuando se quiere limpiar, cancelar observables, cancelar suscripcion o listener por si en el cuerpo se crea un listener despues se quita para que no siga consumiendo memoria

  const [formState, setFormState] = useState({
    username: "Sebas",
    email: "sebas@email.com",
  });

  const { username, email } = formState;

  const handleOnChange = ({ target }) => {
    const { name, value } = target;

    setFormState({ ...formState, [name]: value });
    // Uso de las propiedades computadas de los objetos en javascript que dependiendo del name que es como el id del input es la propiedad en el objeto que va a cambiar asi no se tiene que escribir un onChange por cada input
  };

  useEffect(() => {
    setTimeout(() => {
      // console.log("useEffect called");
    }, 3000);
  }, []);
  // No se recomienda tener un useEffect sin dependencias

  useEffect(() => {
    // console.log("formState changed");
  }, [formState]); // Se ejecuta al menos una vez, cuando el componente se monta y cuando el formState cambia

  useEffect(() => {
    // console.log("email changed");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleOnChange}
        // Se envia el evento como primer argumento como si fuera (event) => handleOnChange(event)
      ></input>

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@email.com"
        name="email"
        value={email}
        onChange={handleOnChange}
      ></input>

      {username === "Sebas2" && <Message />}
      {/* Es diferente a <Message className="hidden" /> porque ahi solo se estaria ocultando pero el componente aun existe */}
    </>
  );
}
