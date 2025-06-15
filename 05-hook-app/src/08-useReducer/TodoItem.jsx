// onDeleteTodo, onToggleTodo se necesitan hasta que se llamen

export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          todo.done ? "text-decoration-line-through" : ""
        }`}
        onClick={() => onToggleTodo(todo.id)}
        aria-label="span"
      >
        {todo.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => onDeleteTodo(todo.id)}
        data-testid="eliminar"
      >
        Eliminar
      </button>
    </li>
  );
};

// En react yo puedo tener listeners en cualquier parte menos en fragment
// Las devtools no son hechas en react por lo que no tienen la misma velocidad de reflejar los cambios en el state
// Poner las clases condicionales de esta forma esta bien {`align-self-center ${todo.done && "text-decoration-line-through"}`} pero si todo.done es false, pone la clase false en la etiqueta y puede causar diseños inesperados si esa clase existe por lo que es mejor hacer la condicion con un ternario y si es false poner ''

// Recibo { todo, onDeleteTodo, onToggleTodo } y deberian ser obligatorias usando proptypes porque yo las estoy usando en mi componente y si no las recibo pueden haber errores, la otra opcion es hacer condiciones en los onclick para decir si recibo la funcion, que se ejecute, sino, que se ejecute otra cosa
// (onClick={() => onToggleTodo && onToggleTodo(todo.id)}); la otra opcion es igualarlas en la firma de la funcion y es por si no se manda nada
