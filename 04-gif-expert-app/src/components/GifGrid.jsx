import { useEffect, useState } from "react";
import getGif from "../helpers/getGifs.js";
import GifItem from "./GifItem.jsx";

const GifGrid = ({ category }) => {
  // Este useEffect se hace para tener codigo que se ejecute solo la primera vez que fue montado

  const [images, setImages] = useState([]); // Va a almacenar mis imagenes

  const getImages = async () => {
    const newImages = await getGif(category);
    setImages(newImages);
    setTimeout(() => {
      console.log("images1", images);
    }, 3000); // Este console.log no se ven las imagenes ya que cuando se ejecuta el setImages pasa directamente al console.log yy no alcanza a ver el images pero si se esta asignando ya que el el devTools se ve. Se debe a que en React, las actualizaciones de estado son asíncronas entonces tocaria esperar a que se haga la actualizacion pero no se puede utilizar el await setImages porque esta no devuelve una promesa, eso de asincrono es interno de react
  };
  useEffect(() => {
    getImages();

    // useEffect(async () => {
    // await getGif(category);
    // Ya que getGif devuelve una promesa por ser async si queremos su resultado tenemos que poner async await... pero la funcion del useEffect no permite retornar nada aparte de una funcion por lo que es in correcto poner el async ya que retornaria una promesa
    // Una solucion podria ser manejar el .then o crear otra funcion que si sea async y llamarla aqui

    // getGif(category); // No deben haber llamados a funciones en el cuerpo de un componente asi ya que cada que se re-renderice se va a llamar y eso no seria eficiente, para esto es mejor usar el hook de react useEffect

    // return // Este return es para hacer el clean up del componente en caso de que el useEffect tenga algun observable o alguna funcion que este pendiente de los cambios
  }, []); // Aqui si al componente se le pasa el useState categories del componente GifExpertApp y se le pone como dependencia del useEffect, este se vuelve a ejecutar si cambia el useState

  // const [counter, setCounter] = useState(10);
  // setCounter(counter + 1); // Poner este setCounter aqui es un error ya que cuando se monta el componente react llama al setCounter y este cambia el estado y vuelve a renderizarlo y asi sucesivamente por lo que crea un ciclo infinito

  return (
    <>
      <h3>{category}</h3>
      {/* <button onClick={() => setCounter(counter + 1)}>{counter}</button> * Cada que se se oprima el btn se cambia el estado * */}
      {images.map((image) => (
        // Desestructurar el image o mandar las props esparciendolas que es muy util cuando es un obj y tiene muchas props
        <GifItem key={image.id} {...image} />
      ))}
    </>
  );
};

export default GifGrid;
