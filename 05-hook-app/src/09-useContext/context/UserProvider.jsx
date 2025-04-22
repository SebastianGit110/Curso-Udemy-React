import { useState } from "react";
import { UserContext } from "./UserContext";

// Este codigo puede ir en UserContext.jsx pero por orden es mejor aqui
// Este tambien es un HOC y usualmente reciben props como lo son el children que son las props que estan dentro del componente <HOC> children </ HOC>
// Con el .Provider se dice que se va a proveer la info mediante value al arbol de comp que esten en children
// Lo que este en value es lo que cualquier hijo de UserProvider va a tener acceso desde el contexto y se pone donde se considere que los hijos van a estar, usualmente en lo mas alto de la app

const userPrueba = {
  id: 123,
  name: "Sebas",
  email: "sebas@gmail.com",
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(); // Tiene acceso al useState porque es un functionalComp
  // Aqui podemos crear las funciones para cambiar el state para no mandar directamente el setUser a los componentes para no darles tanto poder o libertad
  return (
    <UserContext.Provider value={{ hola: "mundo", userPrueba, user, setUser }}>
      {/* El value se puede ver como lo que regresamos en un custom hook */}
      {children}
    </UserContext.Provider>
  );
};

// Consumer
