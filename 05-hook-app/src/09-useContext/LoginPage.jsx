import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  // En caso de que hallan mas de un UserContext con el mismo nombre, se va a regresar el contexto mas cercano desde el componente hasta el contexto mas cercano hacia arriba con el mismo nombre
  // const algo = useContext(UserContext); // Aqui desestructuramos las propiedades que queremos del contexto que estan en value

  const { hola, userPrueba, user, setUser } = useContext(UserContext);
  console.log(hola, userPrueba);

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
      <pre>{JSON.stringify(userPrueba, null, 3)}</pre>

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 321, name: "Sebrat", email: "sebrat@google.com" })
        }
      >
        Establecer usuario
      </button>
    </>
  );
};
