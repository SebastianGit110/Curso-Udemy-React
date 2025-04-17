import { createContext } from "react";

// El arg de createContext es el que se va a exponer a todos los comp que tomen info del context
// UserContext es un React.context (component) que es como un HOC como <BrowserRoutes /> por eso se pone .jsx
// El UserContext sirve para saber como luce la info que esta ahi por medio de los args, para que react busque ese contexto y para definir el proveedor
export const UserContext = createContext({});
