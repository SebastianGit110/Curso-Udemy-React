import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("Pruebas en <HomePage />", () => {
  test("debe mostrar el componente sin el usuario", () => {
    // Como el componente que voy a usar necesita una prop que viene del context, la forma de que el componente tenga acceso al context en el ambito de pruebas es envolviendolo en el provider de ese context

    // Aqui en consola los valores con null si aparecen como null pero en el navegador no porque eso lo maneja react
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage prueba={"Hola Prueba"} />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    // console.log(preTag.innerHTML);
    expect(preTag.innerHTML).toBe("null");

    // screen.debug();
  });

  test("debe mostrar el componente con el usuario", () => {
    const user = { id: 123, name: "Sebas" };
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage prueba={"Hola Prueba"} />
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");

    console.log(typeof preTag.innerHTML); // Como es string lo convertimos a JSON
    console.log(JSON.parse(preTag.innerHTML));

    expect(JSON.parse(preTag.innerHTML)).toEqual(user); // Lo evaluamos con toEqual porque no estan en la misma posicion en memoria
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString()); // el preTag.innerHTML esta en string entonces toca comparar el id como string
    expect(preTag.innerHTML).toContain(`${user.id}`);
  });
});
