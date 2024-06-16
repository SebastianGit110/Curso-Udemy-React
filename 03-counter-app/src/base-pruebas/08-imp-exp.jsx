import heroesDefa, { owners } from "../data/heroes"; // No es necesario en .js

export const getHeroeById = (id) => heroesDefa.find((heroe) => heroe.id === id); // Si la condicion es true retorna lo

export const getHeroeByOwner = (owner) =>
  heroesDefa.filter((heroe) => heroe.owner === owner);
