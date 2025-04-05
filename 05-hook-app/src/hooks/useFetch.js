import { useEffect, useState } from "react";

// setState es una funcion dispatcher que indica a react que el estado cambio y ya react decide que redibujar

const initialState = {
  data: null,
  isLoading: true,
  hasError: false,
  error: null,
};

export const useFetch = (url) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState(initialState);
  };

  const getFetch = async () => {
    // setTimeout(async () => {}, 2000); // Se puede asi y poner todo el codigo dentro de setTimeout ya que este no pausa lo siguiente sino solo prepara algo para ejecutar en el futuro

    setLoadingState();

    const resp = await fetch(url);

    // Este sleep pausa todo lo de abajo
    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
      return;
    }

    const data = await resp.json();

    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    console.log(data);
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

// Question: manejar error en .then de fetch
