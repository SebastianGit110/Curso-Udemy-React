// Operador condicional ternario, otra forma de hacer condicionales

const activo = true;
// let mensaje = "";

// if (!activo) mensaje = "Activo";
// else mensaje = "Inactivo";

// const mensaje = !activo ? "Activo" : "Inactivo"; // condicion ? si condicion es true : si condicion es false

// Si solo se necesita mostrar algo cuando es true y no cuando es false se usa el operador && (and)

const mensaje = !activo && "Activo"; // Si es false retorna false

console.log(mensaje);
