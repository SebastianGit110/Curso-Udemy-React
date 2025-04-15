import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

// El objetivo del custom Hook useTodos es hacer el TodoApp mas facil de leer y y tambien puede servir para otras partes de la app

export const useTodos = () => {
  // Las cookies se envían automáticamente al servidor con cada request HTTP (siempre que el dominio coincida).
  // Están limitadas en tamaño y suelen usarse para sesiones o autenticación.

  // El localStorage almacena datos en el navegador y no se envía automáticamente al servidor.
  // Para enviar datos de localStorage, se debe hacer manualmente mediante una petición HTTP (como con fetch).
  // Solo pueden haber strings en el localStorage, en la vista abajo aparecen como obj porque chrome los serializa pero en realidad guarda obj

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

  const todosCount = () => todos.length;

  return {
    todos,
    todosCount,
    pendingTodosCount: todos.filter((todo) => !todo.done).length, // El filter regresa los que cumplen la condicion osea los que devuelvan true y como queremos las tareas que esten en done: false entonces hacemos la negacion !todo.done o tambien podria ser todo.done === false
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  };
};
