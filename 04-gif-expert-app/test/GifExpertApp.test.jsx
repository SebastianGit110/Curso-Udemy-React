import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import GifExpertApp from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp />", () => {
  test("No debe aceptar dos categorias iguales", () => {
    render(<GifExpertApp />);

    const miInput = screen.getByRole("textbox");
    const miForm = screen.getByRole("form");

    fireEvent.input(miInput, { target: { value: "Celulares" } });
    fireEvent.submit(miForm);

    fireEvent.input(miInput, { target: { value: "Celulares" } });
    fireEvent.submit(miForm);

    expect(screen.getAllByText("Celulares").length).toBe(1); // Solo debe haber una

    // screen.debug();
  });

  test("Debe aceptar categorias diferentes", () => {
    render(<GifExpertApp />);

    const miInput = screen.getByRole("textbox");
    const miForm = screen.getByRole("form");

    fireEvent.change(miInput, { target: { value: "Celulares" } }); // Tambien se puede con evento .change
    fireEvent.submit(miForm);

    fireEvent.input(miInput, { target: { value: "Juegos" } });
    fireEvent.submit(miForm);

    // Tambien en vez de leer el .length se puede usar el metodo .toHaveLength(size)
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(3); // Acepta 3 porque en el useState de categories esta Libros como valor inicial, entonces son los 2 que se envian aca mas Libros
  });
});
