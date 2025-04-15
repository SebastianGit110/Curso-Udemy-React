import { useTodos } from "../hooks";
import { TodoList, TodoAdd } from "./";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  } = useTodos(); // Esta referencia esta bien solo hacerla aqui porque si la hacemos en otros componentes no van a compartir el mismo state porque la funcion va a estar en otra posicion en memoria, se podria pero con contextAPI

  return (
    <>
      <h1>
        TodoApp: {todosCount()}
        <small> pendientes: {pendingTodosCount}</small>
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
