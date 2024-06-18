import CounterApp from "../src/CounterApp";

import { fireEvent, render, screen } from "@testing-library/react";

describe("Pruebas en el componente CounterApp", () => {
  const initialValue = 20;
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe decir donde esta el valor de 20", () => {
    render(<CounterApp value={initialValue} />);
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain("20");

    expect(screen.getByText(initialValue)).toBeTruthy();
  });

  test("Debe incrementar con el boton +1", () => {
    // Nosotros no vamos a probar el useState ya que los creadores ya lo probaron, nosotros solo vamos a probar los efectos que hace en el dom

    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("+1")); // Simula el click en el boton que tiene el '+1' gracias al obj fireEvent de react-testing-library

    expect(screen.getByText("21")).toBeTruthy(); // Como ya se hizo el click entonces ahora busca el elemento con valor de 21
  });

  test("Debe decrementar con el boton -1", () => {
    render(<CounterApp value={initialValue} />);
    fireEvent.click(screen.getByText("-1"));

    expect(screen.getByText("19")).toBeTruthy();
  });

  test("Debe funcionar el boton reset", () => {
    render(<CounterApp value={initialValue} />);
    // expect(screen.getByRole("button", { name: "hola" })); // Esta linea esta mal ya que no hay elementos en con name = "hola". La propiedad name de los elementos html name no les asigna el name la que lo asigna es el aria-label
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1")); // Aqui el valor de counter en el componente seria 23

    fireEvent.click(screen.getByRole("button", { name: "btn-reset" })); // Aqui el valor de counter ahora es 20 porque se simula el click en el btn reset

    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
