import { useState } from "react";

export const useForm = (initialForm) => {
  const [formState, setFormState] = useState(initialForm);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;

    setFormState({ ...formState, [name]: value });
  };
  // const { username, email, password } = formState;
  //   { formState, handleOnChange, username, email, password }; // En este caso deja retornar las props porque se que devuelvo pero si no supiera no valdria la pena usar el custom hook porque se estan usando las props estaticas
  return { ...formState, formState, handleOnChange }; // Mejor retornar las props esperciendolas con ...spread
};
