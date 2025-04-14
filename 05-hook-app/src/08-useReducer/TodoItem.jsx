export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>
        Eliminar
      </button>
    </li>
  );
};

// En react yo puedo tener listeners en cualquier parte menos en fragment
// Las devtools no son hechas en react por lo que no tienen la misma velocidad de reflejar los cambios en el state
// Poner las clases condicionales de esta forma esta bien {`align-self-center ${todo.done && "text-decoration-line-through"}`} pero si todo.done es false, pone la clase false en la etiqueta y puede causar diseños inesperados si esa clase existe por lo que es mejor hacer la condicion con un ternario y si es false poner ''
