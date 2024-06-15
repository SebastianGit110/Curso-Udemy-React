// Desestructuracion de arreglos

// fn + f2 para renombrar variable

const nombres = ["name1", "name2", "name3"];
const [, , n1] = nombres; // La coma con el espacio vacio dice que ignore esa posicion

console.log(n1);

let a, b, rest;

[a, b, ...rest] = [10, 20, 30, 40, 50]; // Asigna
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 }); // Desestructura
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

const useState = (valor) => {
  return [valor, () => console.log("hola mundo")];
};

const arr = useState("Sebas");

// arr[1]()

const [nombre, setNombre] = useState("Sebas");

console.log(nombre);
setNombre();
