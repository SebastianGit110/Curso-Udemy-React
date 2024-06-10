// Variables y constantes

// const -> constantes que no cambian
// let -> variables que pueden cambiar

const nombre = "Sebas";
const apellido = "Ravelo";

let valor = 5;
valor = 4; // Cambió el valor

console.log(nombre, apellido, valor);

if (true) {
  let valor = 33;
  valor = 6; // Esta variable ahora es diferente a la superior y como esta en otro scope se puede llamar igual, sin embargo si queremos acceder a la variable superior no podemos crear una con el mismo nombre en este scope
  console.log(valor)
}

console.log(nombre, apellido, valor);