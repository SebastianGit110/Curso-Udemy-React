import { TodoItem } from "./TodoItem";

// Por si no lo envian se puede poner en proptypes qye sea obligatorio
export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
      </ul>
    </>
  );
};

// onDeleteTodo={() => onDeleteTodo(todo.id)} asi se podria hacer pero la idea es que el id se mande en el componente que tiene el boton o funcionalidad
