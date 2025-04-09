import React from "react";
// import { memo } from "react"; // Metodo propio de React

// El componente se vuelve a redibujar cada que hay un cambio del state en el componente padre, pero si el cambio no afecta al state que tiene relacion con este componente (counter) no deberia redibujarse este comp
// Y si aqui tenemos peticiones http (que no se deberia hacer, tienen que estar controladas por useEffect o algo) y sucede cambios en el state que no tengan que ver con este componente pues se va a volver a redibujar y a ejecutar el codigo de aqui arriba (del return) lo que no seria eficiente
// Para solucionar lo anterior se puede memorizar el componente lo cual es recomendado cuando los componentes son muy grandes o si hay un proceso pesado y solo se quiere hacer cuando las props cambien, no es muy frecuente su uso, se recomienda solo cuando sea necesario
// Memo es una funcion que le dice a react que memorice tal componente

// Con React.memo no se tiene que importar memo porque ya se lama con "React." y asi es comun verlo en CRA "create react app" porque ahi tienen la referencia global a React en los scripts
export const Small = React.memo(({ value }) => {
  console.log("Me volvi a dibujar");
  return <small>{value}</small>;
});
