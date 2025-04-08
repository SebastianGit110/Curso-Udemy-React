import { useCounter, useFetch } from "../hooks";
import { LoadingMessage, PokemonCard } from "../03-examples";

// Es preferible usar siempre que se pueda useEffect en vez de useLayoutEffect porque puede afectar el desempeño.
// useLayoutEffect se ejecuta despues del render y antes de que se redibuje el componente. useLayoutEffect es una versión de useEffect que se acciona antes que el navegador vuelva a pintar la pantalla.
// Su uso comun puede ser medir el layout antes que el navegador vuelva a pintar la pantalla

export const Layout = () => {
  // El uso esta en el componente PokemonCard ya que ese tiene elementos html donde podemos medir tamaños dinamicos

  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Informacion del Pokemon</h1>
      <hr />

      {!isLoading && !hasError ? (
        <PokemonCard
          id={counter}
          name={data?.name}
          sprites={[
            data?.sprites.front_default,
            data?.sprites.front_shiny,
            data?.sprites.back_default,
            data?.sprites.back_shiny,
          ]}
        />
      ) : (
        <LoadingMessage />
      )}

      <button className="btn btn-primary mt-2" onClick={() => decrement()}>
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
