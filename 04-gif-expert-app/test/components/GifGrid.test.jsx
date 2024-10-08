import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs"); // Cuando hacemos esto tenemos que decir que va a retornar la funcion en cada prueba

describe("Pruebas en <GifGrid />", () => {
  test("Debe mostrar el loading inicialmente", () => {
    // Aca le epecificamos que tiene que retornar
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    const category = "Categoria";

    render(<GifGrid category={category} />);

    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));

    // screen.debug();
  });

  test("Debe mostrar los items cuando se cargan las imagenes useFetchGifs", () => {
    const category = "Categoria 1";

    const gifs = [
      { id: "ABC", title: "Title 1", url: "Url1" },
      { id: "CBA", title: "Title 2", url: "Url2" },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2); // Espera dos imagenes de la categoria "Categoria 1" que son las que crea el <GifItem />
    // screen.debug();
  });
});
