import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  // Cada que hay un cambio en el estado del componente padre o de este mismo, se redibuja el componente y aunque en la interfaz no tenga un cambio visual, react vuelve a ejecutar el cuerpo del componente (tambien si no esta memorizado) como peticiones http con fetch, para que esto no pase usamos el useEffect y controlamos lo que queremos ejecutar

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

      {/* <h2>{data?.name}</h2> */}
      {/* Como hay una demora mientras se hace una peticion a la url si uno pone data.name estaria leyendo una prop null y da error, se soluciona poniendo ? antes del punto para decir por si es un obj real */}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {/* Los objetos no son serializables en react por lo que no se pueden imprimir directamente en el dom, ni los booleanos se pueden mostrar toca con stringify */}
      <button
        className="btn btn-primary mt-2"
        onClick={
          () => decrement()
          /* (counter > 1 ? decrement() : null) Que no sea menor o igual a cero se puede controlar aqui o en el hook useCounter */
        }
      >
        Anterior
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};
