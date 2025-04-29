import { fireEvent, render, screen, renderHook } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch"; // Para usar mock es mejor importar solo el archivo necesario en vez del archivo de barril porque sino tambien tocaria hacer mock del counter que se usa en <MultipleCustomHooks />
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch"); // Mock es parecido al waitOn ya que espera hasta que se devuelva lo que se especifica. Toca poner el useFetch.mockReturnedValue( ... ) en las pruebas que tengan componentes que usen useFetch
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en MultipleCustomHooks", () => {
  // Se pone aqui arriba porque todas las pruebas usan el useCounter
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  // Limpia los mocks antes de cada prueba
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe mostrar el componente por defecto", () => {
    // Esta prueba tambien se puede hacer con snapshot

    // Si no ponemos esta linea da error de que no se puede desestructurar data de undefined o "0" entonces toca decirle que es lo que esperamos y se espera hasta que tengamos esto
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });

    render(<MultipleCustomHooks />);
    screen.debug();

    expect(screen.getByText("Cargando"));

    const nextButton = screen.getByRole("button", { name: "Siguiente" }); // En name se puede poner cualquier cosa y sale error pero esa es la idea ya que ahi muestra las prop de name que tienen los elementos
    expect(nextButton.disabled).toBeTruthy();

    console.log(nextButton.disabled);
  });

  test("debe mostrar un pokemon", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Sebas",
        sprites: {
          front_default: "http://img1.com",
          front_shiny: "http://img2.com",
          back_default: "http://img3.com",
          back_shiny: "http://img4.com",
        },
      },
      isLoading: false,
      hasError: false,
      error: null,
    });

    render(<MultipleCustomHooks />);
    // screen.debug();

    expect(screen.getByText("#1 - Sebas")).toBeTruthy();

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    expect(nextButton.disabled).toBeFalsy();
    // console.log(nextButton.disabled);
  });

  test("debe llamar la funcion de incrementar", () => {
    useFetch.mockReturnValue({
      data: {
        name: "Sebas",
        sprites: {
          front_default: "http://img1.com",
          front_shiny: "http://img2.com",
          back_default: "http://img3.com",
          back_shiny: "http://img4.com",
        },
      },
      isLoading: false,
      hasError: false,
      error: null,
    });

    render(<MultipleCustomHooks />);

    const nextButton = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled(); // Como en nextButton hay un increment se verifica que se llame, ya que esta el mock para cada prueba ahi se estable la referencia a increment
  });
});
