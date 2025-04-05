import { useState } from "react";

export const useForm = (initialForm) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  const onDefaultEmail = (computedProp) => {
    setFormState({ ...formState, [computedProp]: "default@email.com" });
  };
  // const { username, email, password } = formState;
  //   { formState, onInputChange, username, email, password }; // En este caso deja retornar las props porque se que devuelvo pero si no supiera no valdria la pena usar el custom hook porque se estan usando las props estaticas
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    onDefaultEmail,
  }; // Mejor retornar las props esperciendolas con ...spread
};
