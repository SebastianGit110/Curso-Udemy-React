import useFetchGifs from "../hooks/useFetchGifs.js";

import GifItem from "./GifItem.jsx";

const GifGrid = ({ category }) => {
  const { images, isLoading, deleteImage } = useFetchGifs(category); // Este custom hook es lo mismo que si tuvieramos el codigo que esta en el hook pero aqui. Es mejor volverlo custom hook por si necesitamos su funcionalidad en otro componente

  // const [counter, setCounter] = useState(10);
  // setCounter(counter + 1); // Poner este setCounter aqui es un error ya que cuando se monta el componente react llama al setCounter y este cambia el estado y vuelve a renderizarlo y asi sucesivamente por lo que crea un ciclo infinito

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h1>Cargando...</h1>}
      <div className="card-grid">
        {/* <button onClick={() => setCounter(counter + 1)}>{counter}</button> * Cada que se se oprima el btn se cambia el estado * */}
        {images.map((image) => (
          // Desestructurar el image o mandar las props esparciendolas que es muy util cuando es un obj y tiene muchas props
          <GifItem key={image.id} {...image} deleteImage={deleteImage} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
