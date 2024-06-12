// Import, export y funciones comunes de arreglos

// Para importar escribir la const que se necesita y dar enter / tab si no aparece cerrar el archivo donde se encuentra la const y volver a abrirlo. imp tab.

import heroesDefa, { owners } from "../data/heroes"; // No es necesario en .js

// import exportDefault(cualquier nombre), { exportIndividuales } from "";

// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

export const getHeroeById = (id) => heroesDefa.find((heroe) => heroe.id === id); // Si la condicion es true retorna lo que hay en esa iteracion
console.log(getHeroeById(3));

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

export const getHeroeByOwner = (owner) =>
  heroesDefa.filter((heroe) => heroe.owner === owner);

console.log(getHeroeByOwner("DC"));
