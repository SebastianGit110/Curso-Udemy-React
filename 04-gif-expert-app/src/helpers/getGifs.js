import { useState } from "react";

export default async (category) => {
  // export default async function getGifs(category) { ... }

  const url = `https://api.giphy.com/v1/gifs/search?api_key=m6H4TQCW1Uhd0pdO4VdHf9T4Lq3lhukz&q=${category}&limit=2`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json(); // El data = [] es para hacer por default si el await resp.json() no devuelve data pues tener el data = [] como valor poor defecto y que no saque errores, es desestructurar el valor por defecto

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  // console.log(gifs);
  return gifs; // Array de objetos
};
