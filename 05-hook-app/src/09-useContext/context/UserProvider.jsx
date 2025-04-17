import { UserContext } from "./UserContext";

// Este codigo puede ir en UserContext.jsx pero por orden es mejor aqui
// Este tambien es un HOC y usualmente reciben props como lo son el children que son las props que estan dentro del componente <HOC> children </ HOC>
// Con el .Provider se dice que se va a proveer la info mediante value al arbol de comp que esten en children
// Lo que este en value es lo que cualquier hijo de UserProvider va a tener acceso desde el contexto y se pone donde se considere que los hijos van a estar, usualmente en lo mas alto de la app

const user = {
  id: 123,
  name: "Sebas",
  email: "sebas@gmail.com",
};

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola: "mundo", user }}>
      {children}
    </UserContext.Provider>
  );
};

// Consumer
