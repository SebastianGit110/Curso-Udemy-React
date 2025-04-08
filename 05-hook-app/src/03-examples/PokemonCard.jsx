import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = h2Ref.current.getBoundingClientRect();
    // console.log({ width, height });
    setBoxSize({ width, height });
  }, [name]);

  return (
    <section
      style={{ height: 200, display: "flex", flexDirection: "row" }}
      /* Los estilos de flex es para que el contenido de las imagenes se pongan al lado del h2 porque sino es asi el tamaño del h2 va a seguir siendo el mismo y no se podria ver el uso de useLayoutEffect */
    >
      <h2 ref={h2Ref} className="text-capitalize">
        #{id} - {name}
      </h2>

      <div>
        {sprites.map((sprite) => {
          // console.log(sprite);
          return <img key={sprite} src={sprite} alt={name} />;
        })}
      </div>

      <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  );
};
