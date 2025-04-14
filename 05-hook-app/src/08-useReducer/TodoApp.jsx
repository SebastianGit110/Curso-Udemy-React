import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList, TodoAdd } from "./index";

// Las cookies se envían automáticamente al servidor con cada request HTTP (siempre que el dominio coincida).
// Están limitadas en tamaño y suelen usarse para sesiones o autenticación.

// El localStorage almacena datos en el navegador y no se envía automáticamente al servidor.
// Para enviar datos de localStorage, se debe hacer manualmente mediante una petición HTTP (como con fetch).
// Solo pueden haber strings en el localStorage, en la vista abajo aparecen como obj porque chrome los serializa pero en realidad guarda obj

export const TodoApp = () => {
  // La funcion de inicializacion (init) que es el tercer arg se usa cuando se tiene un estadoo relativamente pesado y su resultado va a ser el initialState

  // Esta forma (2) tambien funciona y es parecida haciendolo con init
  // const initialState2 = JSON.parse(localStorage.getItem("todos")) || [];
  const initialState = [
    //   {
    //     id: new Date().getTime(),
    //     description: "Comprar huevos",
    //     done: false,
    //   },
    // {
    //   id: new Date().getTime() * 3, // El * 3 es para que sea un numero diferente ya que lo puede crear rapido y poner el mismo
    //   description: "Comprar Leche",
    //   done: false,
    // },
  ];

  // Esta forma (1) es la mejor ya que es propia de react y no requiere tanto codigo
  const init = () => JSON.parse(localStorage.getItem("todos")) || [];
  // JSON.parse es para deserializar, es decir, de string a ovj y si eso es null regresa []

  // Si tenemos solo un reducer podemos dejar la funcion de dispatch nombrada asi pero si tenemos mas reducer es mejor ser mas descriptivos con el nombre de ese dispatch
  const [todos, dispatch] = useReducer(todoReducer, initialState, init); // Le mando la ref de la funcion para que el useReducer sea el que la ejecute, no se ejecuta aqui con ()
  // El dispatch es la funcion encargada de ejecutar o despachar acciones hacia el reducer y es asincrona que maneja react

  // Esta es otra forma (3) de traer el localStorage y establecerlo al state pero necesita mas logica inncesaria
  /* useEffect(() => {
    // initialState = JSON.parse(localStorage.getItem("todos")) || []; // Aqui se esta cambiando el valor de initialState por lo del localStorage pero eso ya no va a ser el estado del useReducer ya que inició con initialState = [] y despues aunque esa variable cambie ya no va a cambiar la asignacion al useReducer porque solo se asigna la primera vez

    const action = {
      type: "[TODO] Set state from localStorage",
      payload: JSON.parse(localStorage.getItem("todos")) || [],
    };
    dispatch(action);
  }, []); */

  // Cuando los todos (state) cambian vamos a realizar un efecto secundario y ayuda cuando se agreguen o se eliminen todos (en el global state) para actualizar el localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []); // Toca serializar (de obj a string) el obj para enviarlo al localStorage si JSON.stringify es null regresa []
  }, [todos]);

  const handleNewTodo = (todo) => {
    console.log({ todo });

    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "[TODO] Remove Todo", payload: id });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "[TODO] Toggle Todo", payload: id });
  };

  return (
    <>
      <h1>
        TodoApp: 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      {/* En bootstrap las columnas son de 12 posiciones por lo que abajo uso 7 y 5 para usar todo el ancho */}
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={(id) =>
              handleRemoveTodo(id)
            } /* Lo mismo que por referencia onDeleteTodo={handleRemoveTodo} */
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h1>Agregar TODO</h1>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
          {/* handleNewTodo es lo mismo que (todo) => handleNewTodo(todo) por referencia se envian los parametros por defecto sin importar la cantidad (todo, value) => handleNewTodo(todo, value) aqui es como si me enviaran 2 parametros si lo pongo asi handleNewTodo los recibo a los dos*/}
        </div>
      </div>
    </>
  );
};

// El patron que usamos aqui de mandar las funciones de lo que cada comp debe hacer porque asi cada componente es mas independiente y reutilizable que mandarle solo el dispatch y que se resuelva en cada componente
