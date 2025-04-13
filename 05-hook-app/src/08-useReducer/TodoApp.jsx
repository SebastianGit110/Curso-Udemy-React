import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList, TodoAdd } from "./index";

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

  // Esta forma (2) es la mejor ya que es propia de react y no requiere tanto codigo
  const init = () => JSON.parse(localStorage.getItem("todos")) || [];
  // Si tenemos solo un reducer podemos dejar la funcion de dispatch nombrada asi pero si tenemos mas reducer es mejor ser mas descriptivos con el nombre de ese dispatch
  const [todos, dispatch] = useReducer(todoReducer, initialState, init); // Le mando la ref de la funcion para que el useReducer sea el que la ejecute, no se ejecuta aqui con ()
  // El dispatch es la funcion encargada de ejecutar o despachar acciones hacia el reducer

  // Esta es otra forma (3) de traer el localStorage y establecerlo al state pero necesita mas logica inncesaria
  /* useEffect(() => {
    // initialState = JSON.parse(localStorage.getItem("todos")) || []; // Aqui se esta cambiando el valor de initialState por lo del localStorage pero eso ya no va a ser el estado del useReducer ya que inició con initialState = [] y despues aunque esa variable cambie ya no va a cambiar la asignacion al useReducer porque solo se asigna la primera vez

    const action = {
      type: "[TODO] Set state from localStorage",
      payload: JSON.parse(localStorage.getItem("todos")) || [],
    }; 

    dispatch(action);
  }, []); */

  useEffect(() => {
    console.log("aaa")
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    console.log({ todo });

    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(action);
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
          <TodoList todos={todos} />
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
