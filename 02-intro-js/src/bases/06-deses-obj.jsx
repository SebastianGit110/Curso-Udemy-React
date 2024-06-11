// Desestructuracion

const persona = {
  nombre: "Sebas",
  edad: 19,
  clave: "Sebrat",
  rango: "Soldado",
};

const { nombre: name, clave, edad } = persona; // Extrae de persona estas props
// prop:prop2 se renombra prop a prop2

// console.log(name, edad, clave);

// Si el obj no tiene una prop se toma el valor por default asignado en la desestructuracion
const retornaPersona = ({ nombre, clave: key, edad, rango = "Capitan" }) => {
  return {
    nombreClave: key,
    anios: edad,
    latlng: {
      lat: 1122.11,
      lng: 2211.22,
    },
  };
};

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = retornaPersona(persona);

// Si tenemos un obj en una prop del obj y queremos desestructurarlo se puede:
// const { lat, lng } = latlng ó
// const { latlng:{ lat, lng } } = retornaPersona(persona)

console.log(nombreClave, anios, lat, lng);

const props = [
  { id: 1, name1: "Fizz" },
  { id: 2, name1: "Buzz" },
  { id: 3, name1: "FizzBuzz" },
];

const [, , { name1 }] = props;

console.log(name1); // "FizzBuzz"

function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
drawChart(); // Gracias a la sintaxis en los parametros de la funcion que dice que si no pasan argumento, toma estos valores {size = ...}={} eso sirve cuando llamo la funcion sin argumentos ya que si solo pongo {size = ...} sin = {} sale error
