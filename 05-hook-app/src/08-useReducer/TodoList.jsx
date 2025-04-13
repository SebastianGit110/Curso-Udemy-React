import { TodoItem } from "./TodoItem";

// Por si no lo envian se puede poner en proptypes qye sea obligatorio
export const TodoList = ({ todos = [] }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};
