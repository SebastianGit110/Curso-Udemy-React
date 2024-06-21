export { default as AddCategory } from "./AddCategory";
export { default as GifGrid } from "./GifGrid";
export { default as GifItem } from "./GifItem";
export { comp as default };

const comp = [1, 2, 3];

// Como en los archivos cada componente loo estoy exportando por default, aqui no puedo poner solo * y ya el default toca ponerlo como default as comp no como comp as default porque asi se pone en la exportacion del archivo mas no en el archivo de barril.
// Si se quisiera en este archivo exportar algo como default si seria comp as default

// Esto es un archivo de barril y es usado cuando en una carpeta se tienen varios archivos, entonces en otro componente que necesite estos archivios tiene que escribir la misma ruta pero con diferente componente.
// Ejemplo: import AddCategory from "./components/AddCategory";
// import GifGrid from "./components/GifGrid";
// Cuando es llamado desde otro componente con solo el ./components automaticamente se sabe que se llama al ./components/index.js (no es necesario especificar pero si se quiere se puede)
