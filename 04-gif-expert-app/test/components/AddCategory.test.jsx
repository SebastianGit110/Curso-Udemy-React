import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory setCategory={() => {}} />); // En este caso no importa la funcion que pasemos porque no la vamos a evaluar
    const miInput = screen.getByRole("textbox"); // El input es un textbox
    fireEvent.input(miInput, { target: { value: "MiValor" } }); // Evaluamos el useState setInputValue target.value
    expect(miInput.value).toBe("MiValor");
  });
});
