import { useEffect, useState } from "react";

// setState es una funcion dispatcher que indica a react que el estado cambio y ya react decide que redibujar
// tanstack o tanstack query react hace algo parecido a lo que hacemos en este hook junto con el cache

const localCache = {};
// Esto va a tener una llave (url) y valor (data) donde se va a verificar que si existe entonces se tome la data directamente de este objeto para que no haga la peticion url ya que se demora

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

    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });
      return; // No se sigue ejecutando lo de abajo porque sinoo todavia se haria la peticion http y ademas esto pone el isLoading en false por lo que da la ilusion de que no se ejecuta la peticion pero si se ejecuta
    }

    const resp = await fetch(url);

    // Este sleep pausa todo lo de abajo
    await new Promise((resolve) => setTimeout(resolve, 2000));

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

    // Manejo del cache

    localCache[url] = data;
    console.log(data);
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

// Question: manejar error en .then de fetch
