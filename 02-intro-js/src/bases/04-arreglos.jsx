// Arreglos

// const array = new Array(10); // Esta sintaxis no es recomendada. Solo si se quiere tener un array con tamaño predefinido aunque este puede cambiar

const array = [1, 2, 3, [4, 3, 2]];
const array1 = [1, 2, 3];

// array[0] = 0;
// array.push(1); // No utilizar metodo push porque este modifica la estructura original del array, usar operador spread

// const array2 = array; // No asignar asi porque se copia la posicion en memoria mas no solo los datos
// array2.push(5)

// let array2 = [...array, 5]; // Aqui si copia solo los elementos, pero si tiene un array anidado se va a copiar la referencia en memoria de ese array anidado
// array2[3][0] = 1;

let array2 = structuredClone(array); // Se asignan todos los datos a fondo incluyendo los arrays anidados
array2[3][0] = 1;

console.log(array);
console.log(array2);

// La funcion map crea un nuevo array, recibe como parametro una funcion callback que a su vez puede recibir 3 parametros (currentValue, index, array) y thisArg que es valor a usar como this al ejecutar callback

const array3 = array1.map(function callback(valor) {
  return valor * 2;
}); // El map se ejecuta por cada elemento del array1 y toma como valor del parametro de la funcion callback como cada uno de esos valores

console.log(array3);
