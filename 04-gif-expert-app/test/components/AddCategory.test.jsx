import { fireEvent, render, screen } from "@testing-library/react";
import AddCategory from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory />", () => {
  test("Debe cambiar el valor de la caja de texto", () => {
    render(<AddCategory setCategory={() => {}} />); // En este caso no importa la funcion que pasemos porque no la vamos a evaluar

    const miInput = screen.getByRole("textbox"); // El input es un textbox

    fireEvent.input(miInput, { target: { value: "MiValor" } }); // Hacemos la simulacion de entrar (el evento) setInputValue target.value
    expect(miInput.value).toBe("MiValor");
  });

  test("Debe llamar a setCategory si el inputValue es mayor que 1", () => {
    const inputValue = "MiValor";
    const setCategory = jest.fn(); // Esto esta marcado como mock que no es la funcion real sino una simulacion

    render(<AddCategory setCategory={setCategory} />); // Llamamos a la funcion ficticia

    const miInput = screen.getByRole("textbox");
    const miForm = screen.getByRole("form"); // Para acceder al form tenemos que ponerle un aria-label o test-id

    fireEvent.input(miInput, { target: { value: inputValue } });
    fireEvent.submit(miForm); // No es necesario enviarle el evento porque el evento submit ya sabe que eso tiene un event.preventDefault() etc

    // Despues de hacer el submit y que inputValue > 1 se ejecuta setInputValue(""); por lo que vamos a probar que inputValue este vacio
    expect(miInput.value).toBe(""); // Como miInput es por referencia entonces va a tener el ultimo valor despues del evento, osea cuando se modifique va a tener ese valor
    expect(setCategory).toHaveBeenCalled();
    expect(setCategory).toHaveBeenCalledTimes(1);
    expect(setCategory).toHaveBeenCalledWith(inputValue);
    // screen.debug();
  });

  test("No debe llamar el setCategory si el input esta vacio", () => {
    const setCategory = jest.fn();
    render(<AddCategory setCategory={setCategory} />);

    const miForm = screen.getByRole("form");

    fireEvent.submit(miForm); // No es necesario establecer el input como "" porque en el componente ya lo tenemos asi, pero si lo tuvieramos con un valor distinto si tocaria

    expect(setCategory).toHaveBeenCalledTimes(0);
  });
});
