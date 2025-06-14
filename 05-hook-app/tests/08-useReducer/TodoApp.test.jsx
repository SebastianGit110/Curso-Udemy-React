import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock("../../src/hooks/useTodos");

describe("Pruebas en <TodoApp />", () => {
  // useTodos.mockReturnValue(); // Si lo dejamos asi sin retornar nada va a salir error porque diria que estamos desestructurando algo de undefined y es porque el useTodos.mockReturnValue() con lo que yo le ponga adentro es con lo que es useTodos va a retornar y si no esta retornando nada, al yo desestructurar {todos, todosCountm, ...} sale error porque no estoy retornando eso
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: "Todo #1", done: false },
      { id: 2, description: "Todo #2", done: true },
    ],
    todosCount: jest.fn().mockReturnValue(2),
    pendingTodosCount: 1,
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  }); // No es obligatorio poner todo, a menos de que el componente lo requiera
  // Se puede agregar un snapshot para compararlo despues

  test("debe mostrar el componente correctamente", () => {
    render(<TodoApp />);
    screen.debug();

    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();

    console.log(screen.getByRole("textbox").name);
    console.log(screen.getByRole("textbox").className);
  });
});
