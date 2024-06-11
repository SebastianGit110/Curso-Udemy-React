// Funciones

function saludar(nombre) {
  return `Hola, ${nombre}`;
}

saludar = 30; // No se recomienda asignar funciones con function porque se puede cambiar su valor
console.log(saludar);
// console.log(saludar("sebas"));
// console.log(saludar); // Referencia a la funcion

const saludar2 = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => {
  return `Hola, ${nombre}`;
};

// Si la funcion lamba tiene un solo return, se puede omitir la palabra return y los () ó {}
const saludar4 = (nombre) => `Hola, ${nombre}`;

console.log(saludar4("sebas"));

// const saludar5 = (nombre) => (
//     return `Hola, ${nombre}`
// ); // Incorrecto ya que cuando el cuerpo de la funcion esta entre parentesis no se pone return

// const getUser = () => {
//   return {
//     uid: 123,
//     nombre: "Sebas",
//   };
// };

const getUser = () => ({
  uid: 123,
  nombre: "Sebas",
}); // Aqui si es necesario los parentesis ya que si no los ponemos es como si indicaramos el cuerpo de la funcion pero queremos retornar un obj

console.log(getUser());

// function getUsuarioActivo(nombre) {
//   return {
//     uid: "Abc123",
//     username: nombre,
//   };
// }

const getUsuarioActivo = (nombre) => ({
  uid: "Abc123",
  username: nombre,
});

console.log(getUsuarioActivo("sebas"));
