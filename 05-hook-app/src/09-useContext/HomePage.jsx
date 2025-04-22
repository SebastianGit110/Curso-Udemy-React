import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = ({ prueba }) => {
  console.log(prueba);

  const { userPrueba, user } = useContext(UserContext); // Aqui puedo tener lo que quiera como efectos segun el context

  return (
    <>
      <h1>
        HomePage <small>{user?.name}</small>
      </h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>
      <pre>{JSON.stringify(userPrueba, null, 3)}</pre>
    </>
  );
};
