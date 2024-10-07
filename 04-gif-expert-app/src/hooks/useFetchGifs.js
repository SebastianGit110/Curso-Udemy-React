// Los hooks van con .js si no regresan nada de jsx si lo regresara es buena practica poner .jsx

import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (category) => {
  // Este useEffect se hace para tener codigo que se ejecute solo la primera vez que fue montado

  // Elimina una img
  const deleteImage = (id) => {
    const newArray = images.filter((item) => item.id !== id);
    setImages(newArray);
  };

  const [images, setImages] = useState([]); // Va a almacenar mis imagenes
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
    // setTimeout(() => {
    //   console.log("images1", images);
    // }, 3000); // Este console.log no se ven las imagenes ya que cuando se ejecuta el setImages pasa directamente al console.log y no alcanza a ver el images pero si se esta asignando ya que en el devTools se ve. Se debe a que en React, las actualizaciones de estado son asíncronas entonces tocaria esperar a que se haga la actualizacion pero no se puede utilizar el await setImages porque esta no devuelve una promesa, eso de asincrono es interno de react
  };
  useEffect(() => {
    getImages();

    // useEffect(async () => {
    // await getGif(category);
    // Ya que getGif devuelve una promesa por ser async si queremos su resultado tenemos que poner async await... pero la funcion del useEffect no permite retornar nada aparte de una funcion por lo que es incorrecto poner el async ya que retornaria una promesa
    // Una solucion podria ser manejar el .then o crear otra funcion que si sea async y llamarla aqui

    // getGif(category); // No deben haber llamados a funciones en el cuerpo de un componente asi, ya que cada que se re-renderice se va a llamar y eso no seria eficiente, para esto es mejor usar el hook de react useEffect

    // return // Este return es para hacer el clean up del componente en caso de que el useEffect tenga algun observable o alguna funcion que este pendiente de los cambios
  }, []); // Aqui si al componente se le pasa el useState categories del componente GifExpertApp y se le pone como dependencia del useEffect, este se vuelve a ejecutar si cambia el useState

  return {
    images,
    isLoading,
    deleteImage,
  };
};

export default useFetchGifs;
