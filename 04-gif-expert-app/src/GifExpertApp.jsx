import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["casas"]);
  // No se recomienda tener hooks condicionalmente if(true) useState...

  const onAddCategory = (newValue) => {
    // categories.push() no es correcto por la inmutabilidad de react es decir no modificar directamente el array sino crear una copia

    if (categories.includes(newValue)) return; // No permite valores duplicados

    setCategories([...categories, newValue]); // ( cat => [...cat, newCategory]) con el callback
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory setCategory={(value) => onAddCategory(value)} />

      {categories.map((category, i) => (
        <GifGrid key={category} category={category} /> // Aqui podriamos usar el indice para ponerlo como key pero react no lo recomienda ya que cuando se elimine un elemento react usa el key y puede que despues hayan dos elementos con el mismo indice entonces podrian haber resultados inesperados.

        // Cada vez que React renderiza una lista de elementos (por ejemplo, a través de un map), usa la propiedad key para identificar de manera única cada elemento y asi saber cual componente es cual porque React compara el nuevo árbol del Virtual DOM con el anterior (inmutabilidad). Si no pasamos el key, pueden haber problemas porque React tratará de reutilizar componentes basándose en su posición en la lista en lugar de basarse en una clave única.
      ))}
    </>
  );
};

export default GifExpertApp;
