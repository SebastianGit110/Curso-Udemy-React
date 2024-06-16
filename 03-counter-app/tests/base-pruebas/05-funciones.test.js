import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

const testUser = {
  uid: 123,
  nombre: "Sebas",
};

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const user = getUser();

    // expect(testUser).toBe(user); // No usar toBe para comparar obj porque no comparar sus props sino la ubicacion en memoria
    expect(testUser).toStrictEqual(user);
  });

  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Sebas";

    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: "Abc123",
      username: name,
    });
  });
});
