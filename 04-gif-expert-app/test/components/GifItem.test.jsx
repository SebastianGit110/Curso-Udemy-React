import GifItem from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe("Pruebas en <GifItem />", () => {
  const title = "Soy el titulo";
  const url = "https://one-punch.com/saitama.jpg";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe mostrar la img y el alt  indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug(); Sirve para mostrar el html del componente
    // console.log(screen.getByRole("img")); Imprime el HTMLImageElement object
    // console.log(screen.getByRole("img").src); Imprime el src de la imagen
    // Si hay varias etiquetas <img> mostrará un error porque getByRole espera una sola etiqueta
    // expect(screen.getByRole("img").src).toBe(url);
    // expect(screen.getByRole("img").alt).toBe(title);

    const { alt, src } = screen.getByRole("img");
    expect(alt).toBe(title);
    expect(src).toBe(url); // Toca que la const url sea valida ya que a la hora de hacer la comparacion el obj screen.getByRole("img");
    // le agrega el http://localhost... y la adecua como una url valida y si yo pongo como url Soy la url, el obj me lo va a adecuar como http://localhost/Soy%20la%20url y no es lo mismo.
    // El error se debe a que al usar la propiedad src en una imagen dentro de un test, el navegador o el entorno de pruebas en Jest (a través de jsdom) convierte automáticamente el valor
    // de src en una URL completa. Por eso, cuando define se url como "Soy la url", en la prueba se convierte en algo como http://localhost/Soy%20la%20url.
    // Para hacerlo con url = "Soy la url" podria usar el toContain.
  });

  test("Debe mostrar el titulo del componente como texto no como props", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.getByRole("paragraph").innerHTML).toContain(title); // Otra forma
  });
});
