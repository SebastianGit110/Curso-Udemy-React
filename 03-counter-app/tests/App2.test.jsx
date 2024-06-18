import { render, screen } from "@testing-library/react";
import App from "../src/App";

describe("Pruebas en <App />", () => {
  const title = "Hola soy el titulo";
  const subTitle = "Hola soy el subtitulo";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<App title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar el mensaje de title", () => {
    render(<App title={title} />); // No hay necesidad de hacer desestructuracion porque react-testing-library ofrece el screen que es el objeto que estamos renderizando
    // screen.debug(); // Imprime el componente renderizado
    expect(screen.getByText(title)).toBeTruthy(); // .not.toBeTruthy(); hace la negacion
  });

  test("Debe mostrar el title en un h1 no h2...", () => {
    render(<App title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    ); // Esta prueba dice que el title debe estar en una etiqueta h1 no h2 ni h3
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    render(<App title={title} subtitulo={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
