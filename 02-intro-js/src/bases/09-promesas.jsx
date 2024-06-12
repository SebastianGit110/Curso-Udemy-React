// Promesas

import { getHeroeById } from "./bases/08-imp-exp";

// Funcionamiento de los callbacks

// const sumar = (num1, num2, callback) => {
//   callback(num1, num2);
// };

// sumar(1, 2, (num1, num2) => console.log(num1 + num2));

// Funcionamiento de las promesas

// const sumaPromesa = (num1, num2) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(num1 + num2), 3000);
//   }); // La suma es la que se envia despues al parametro de la funcion callback del then
// };

// sumaPromesa(1, 2).then((resultado) => console.log(resultado)); // El resultado es el que recibe de resolve o reject de la promesa

// console.log("Mientras termina la promesa"); // Mientras la promesa devuelve el resolve o reject, el flujo del codigo sigue

// Ejemplo

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     resolve(heroe); // Hace que el then se ejecute y lo de los parametros es lo que el then podrá recibir en los parametros de su callback
//   }, 2000);
// });

// promesa.then((heroe) => console.log("El then", heroe));

// Dentro de la promesa se va a hacer algo asincrono

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simula algo asincrono
      const heroe = getHeroeById(id);

      if (heroe) resolve(heroe);
      else reject("No se encontro el heroe");
    }, 2000);
  });
}; // Tiene que devolver una promesa para poder utilizar el .then porque sino devuelve solo void

getHeroeByIdAsync(1)
  .then(console.log) // (heroe) => console.log("El then", heroe)
  .catch(console.log); // (message) => console.log(message)
