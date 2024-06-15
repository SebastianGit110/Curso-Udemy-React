import { saludar } from "../../src/base-pruebas/02-template-str";

describe("Pruebas en el 02-template-str", () => {
  test("getSaludo debe retornar Hola Sebas", () => {
    const name = "Sebas";
    const message = saludar(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
