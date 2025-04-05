import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  // Cada que hay un cambio en el estado del componente padre o de este mismo, se redibuja el componente y aunque en la interfaz no tenga un cambio visual, react vuelve a ejecutar el cuerpo del componente (tambien si no esta memorizado) como peticiones http con fetch, para que esto no pase usamos el useEffect y controlamos lo que queremos ejecutar

  const { data, isLoading } = useFetch("https://pokeapi.co/api/v2/pokemon/1");
  return (
    <>
      <h1>Informacion del Pokemon</h1>
      <hr />
      {isLoading && <p>Cargando ...</p>}
      <h2>{data?.name}</h2>
      {/* Como hay una demora mientras se hace una peticion a la url si uno pone data.name estaria leyendo una prop null y da error, se soluciona poniendo ? antes del punto para decir por si es un obj real */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
      {/* Los objetos no son serializables en react por lo que no se pueden imprimir directamente en el dom */}
    </>
  );
};
