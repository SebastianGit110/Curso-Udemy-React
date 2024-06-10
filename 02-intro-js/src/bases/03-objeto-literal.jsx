// Objetos literales

// Cuando se crea cualquier obj en js o cualquier cosa, tiene un prototype (como el ADN) que es donde contiene algunos metodos necesarios

const persona = {
  nombre: "Sebas",
  apellido: "Ravelo",
  edad: 19,
  direccion: {
    ciudad: "Bogotá",
    lat: 1212.1212,
    lng: 1212.1212,
  },
};

// console.table(persona); // Lo muestra como tabla

// console.table({ persona: persona }); // Se asigna el obj persona a una clave persona
// persona: persona es lo mismo que solo persona, ya que en js desde ecma script 6 si la prop se llama igual que su valor, se puede obviar escribirlo 2 veces

const persona2 = persona; // Nose copia el valor de persona sino la referencia al espacio en memoria (ubicacion) de esa variable, por lo que si yo altero alguna prop de persona2, esta tambien se vera afectada en persona. React no acepta estas mutaciones

persona2.nombre = " Sebrat";

// console.log(persona);
// console.log(persona2);

const persona3 = { ...persona }; // Esto es una copia superficial, lo que significa que si persona tiene propiedades que son objetos (como direccion en este caso), ambos objetos (persona y persona3) compartirán referencias a esos objetos internos. Cambiar una propiedad del objeto direccion dentro de persona3 afectará también a persona

// console.log(persona3);

// Si se necesita una copia profunda (donde los objetos anidados también se copian en lugar de compartir referencias), se puede usar una función de clonado profundo como structuredClone (si está disponible en el entorno) o una librería como lodash

// Usando structuredClone (si está disponible)
const persona4 = structuredClone(persona);

persona4.direccion.ciudad = "Medellín";
console.log(persona.direccion.ciudad);
console.log(persona4);

// Usando lodash para una copia profunda
// const dd = require("lodash");
// const persona5 = dd.cloneDeep(persona);
