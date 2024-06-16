import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses", () => {
  test("Debe retornar un string y un numero", () => {
    const [letters, numbers] = retornaArreglo();

    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String)); // Evalua que puede ser cualquier String
  });
});
