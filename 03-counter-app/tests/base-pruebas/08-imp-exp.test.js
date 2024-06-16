import {
  getHeroeById,
  getHeroeByOwner,
} from "../../src/base-pruebas/08-imp-exp";

import heroes from "../../src/data/heroes";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por id", () => {
    const hero = getHeroeById(1);

    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar undefined si no exist", () => {
    const hero = getHeroeById(100);

    expect(hero).toBeFalsy(); // Compara si es false, undefined o null
  });

  test("getHeroeByOwner debe retornar 3 heroes de DC", () => {
    const heroesDC = getHeroeByOwner("DC");

    expect(heroesDC.length).toBe(3);
    expect(heroesDC).toEqual(heroes.filter((heroe) => heroe.owner === "DC"));
  });
});
