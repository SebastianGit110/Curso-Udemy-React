import { getHeroeById } from "./08-imp-exp";

export const getHeroeByIdAsync = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula algo asincrono
      const heroe = getHeroeById(id);

      if (heroe) resolve(heroe);
      else reject("No se encontro el heroe");
    }, 2000);
  });
};
