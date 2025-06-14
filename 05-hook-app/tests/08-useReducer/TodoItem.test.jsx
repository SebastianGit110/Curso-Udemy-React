import {
  fireEvent,
  render,
  screen,
  renderHook,
  getByTestId,
} from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

// Tambien se puede evaluar con el snapshot

describe("Pruebas en <TodoItem />", () => {
  // Para no crear tantas const de todo que es algo que ya hemos usado en otras pruebas, existe un concepto "fixture" que es en testing crear data ficticia para no repetirlo en cada prueba

  const todo = { id: 1, description: "description 1", done: false };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  // Si vamos a llamar en varias pruebas las jest.fn() es mejor hacer un beforeEach que limpie los mocks antes de cada prueba, para que no se guarde con datos de otras pruebas
  beforeEach(() => jest.clearAllMocks()); // Si lo comento y en el test de eliminar todo hago el expect de verificar si el toggletodo se llama, la prueba pasa porque la jest.fn se queda como si se hubiera llamado porque en la prueba anterior a la del delete se llamó, entonces para tener las pruebas separadas es mejor usar beforeEach clearAllMocks

  // PROBAR SIN EL BEFOREEACH
  test("debe mostrar el todo pendiente de completar", () => {
    // onDeleteTodo, onToggleTodo se necesitan hasta que se llamen

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const liElement = screen.getByRole("listitem");
    console.log(liElement.innerHTML); // Me imprime lo que esta dentro del li mas no el mismo li

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    // const spanElement = screen.getByRole("span"); // No encuentra las etiquetas span, toca ponerle un aria-label o test-id

    const spanElement = screen.getByLabelText("span");
    // console.log(spanElement.innerHTML);

    expect(spanElement.className).toBe("align-self-center "); // Con el espacio que se le esta agregando antes de la condicion
    expect(spanElement.className).toContain("align-self-center"); // Para evaluarlo sin el espacio
    expect(spanElement.className).not.toContain("text-decoration-line-through"); // Se supone que el done es false po lo que no debe tener la raya encima

    // screen.debug();
  });

  test("debe mostrar el todo completado", () => {
    todo.done = true; // Lo hecemos por aputación al obj. Tambien se puede hacer creando otro todo (o const) con el done en true pero lo ideal seria tener eso en el fixture, uno con false, otro con true y asi con lo que se necesite

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("text-decoration-line-through"); // Como esta completado debe estar tachado
  });

  test("span debe llamar el ToggleTodo cuando se hace click", () => {
    console.log(todo); // Aqui el todo.done sigue en true porque arribe se cambió

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id); // Aqui solo vamos a evaluar que se llame el onToggleTodoMock porque es la funcion que se le pasa a onToggleTodo, no vamos a evaluar que se cambie la prop done de este componente porque eso no es responsabilidad de este componente sino del que está mas arriba que seria el todoReducer, ademas las pruebas tienen que ser atomicas y si algo no funciona, eso debe estar capturado en otra prueba
  });

  test("debe llamar el DeleteTodo cuando se hace click en eliminar", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    );

    // const buttonElement = screen.getByRole("button"); // Si tenemos varios botones la prueba fallaria porque no sabe que boton es, asi que es mejor usar el data-testid o aria-label
    const buttonElement = screen.getByTestId("eliminar"); // Con data-testid
    fireEvent.click(buttonElement);

    // expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    // Prueba para verificar comportamiento de clearAllMocks comentado y descomentado
    // expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
