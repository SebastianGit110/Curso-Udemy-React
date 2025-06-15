import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext";
import { MemoryRouter } from "react-router-dom";

// Podemos evaluar el <NavBar /> con un snapshot

describe("Pruebas en <MainApp />", () => {
  test("debe mostrar el HomePage", () => {
    // render(<MainApp />); // Si se deja asi va a salir error porque el MainApp usa routes de react-router-dom y estas necesitan unos hooks o funciones como useRoutes o useHref etc y esos los provee el HOC <BrowserRouter /> pero aqui no se esta poniendo y aqui en este entorno no sirve porque no estamos en un navegador sino en una consola, ademas el Browser router no permite simular una ruta

    // La alternativa al <BrowserRouter /> es <MemoryRouter /> que provee los hooks y funciones necesarias para que las rutas funcionen

    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("debe mostrar el LoginPage", () => {
    // Con initialEntries le puedo decur en que ruta esta
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPage")).toBeTruthy();

    // Como estamos en login podemos probar que el anchorTag <a> tenga la clase active gracias al <NavLink />
    const anchorTag = screen.getByLabelText("loginLabel");
    // console.log(anchorTag.className);

    expect(anchorTag.className).toContain("active");

    screen.debug();
  });
});
