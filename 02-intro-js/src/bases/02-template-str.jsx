// Template strings

// Se usan para poner variables dentro de strings `backticks ${codigo js}`

const nombre = "Sebas";
const apellido = "Ravelo";

// const nombreCompleto = nombre + " " + apellido; // Bien pero muy largo

const nombreCompleto = `
Hola ${nombre} 
${apellido} ${1 + 1}`;

console.log(nombreCompleto);

function saludar(nombre) {
  return "Hola " + nombre;
}

console.log(`String: ${saludar(nombre)}`);
