import { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("Holaa");

  const onInputChange = (event) => {
    // console.log(event.target.value);
    setInputValue(event.target.value); // Si esta linea no existe, la prueba (en test) no pasa
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return; // Si no cumple esta condicion sale de la funcion

    // setCategories((category) => [...category, inputValue]); // Aqui como le estamos mandando directamente la funcion setCategory del useState del comp GifExpertApp entonces en este componente el no sabria que array copiar (...category) por lo que en este caso es que es util que esa funcion pueda recibir un callback

    setCategory(inputValue); // Otra forma de hacer lo mismo de arriba
    setInputValue(""); // Aqui como se esta cambiando el estado primero con setCategory y despues con setInputValue react no re-renderiza el componente 2 veces por cada llamado a esas funciones sino que espera que termina la funcion principal onSubmit para hacer solo una re-renderizacion
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange} // es lo mismo que (event)=>onInputChange(event) pero cuando el primer parametro de la funcion flecha es el que se manda como argumento a la funcion se puede escribir solo la referencia a la funcion
      />
      {/* Si ponemos la etiqueta value sin onChange el valor no se puede cambiar por el user asi seria una etiqueta readOnly */}
    </form>
  );
};

// export const array = [1, 2, 3];

export default AddCategory;

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired, // Debe pasar la funcion setCategory
};
