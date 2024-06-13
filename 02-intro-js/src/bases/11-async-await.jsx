// Async - Await

// async es independiente del await pero el await es dependiente del async
// Para manejar errores en async y await toca usar trycatch

import heroes from "./data/heroes";
import { getHeroeById } from "./bases/08-imp-exp";

// setTimeout simula la asincronia por lo que si hay algo asincrono, primero se hace lo sincrono y despues lo asincrono entonces aqui la funcion getData es sincrona por lo que primero se devuelve su valor que es undefined y despues se hace lo asincrono que es setTimeout

// const getData = () => {
//   setTimeout(() => {
//     return heroes; // Este return es dentro de la función anónima del setTimeout no para la funcion getData()
//   }, 2000);
// };

// console.log(getData()); // undefined

// Lo anterior se puede hacer con un callback

const getData = (callback) => {
  setTimeout(() => {
    callback(heroes);
  }, 2000);
};

getData((data) => {
  console.log(data);
});

const getHeroeByIdAsync = async (id) => {
  // Se puede poner el async o se puede ignorar ya que como retornaa una promesa no seria necesario
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);

      if (heroe) resolve(heroe);
      else reject("No se encontro el heroe");
    }, 2000);
  });
};

// console.log(await getHeroeByIdAsync(3)); // Uso con await para tratarlo como sincrono

// Hacer lo mismo que se hizo con el fetch pero con async-await

const getImagen = async () => {
  // La palabra clave async dice que devuelve una promesa
  try {
    const api_key = "GWa5ZYoNl8lhR0w0rWjK6ZkZatPn3qjW";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    ); // El await dice espera que termine esto asincrono para continuar y lo hace ver como si fuera sincrono
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getImagen1 = async () => {
  // La palabra clave async dice que devuelve una promesa

  const api_key = "GWa5ZYoNl8lhR0w0rWjK6ZkZatPn3qjW";

  const resp = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
  ); // El await dice espera que termine esto asincrono para continuar y lo hace ver como si fuera sincrono
  const { data } = await resp.json();

  const { url } = data.images.original;
  const img = document.createElement("img");
  img.src = url;

  document.body.append(img);
};

getImagen().then(({ data }) => {
  const { url } = data.images.original;
  const img = document.createElement("img");
  img.src = url;

  document.body.append(img);
}); // Con el return

getImagen1(); // Sin el return
