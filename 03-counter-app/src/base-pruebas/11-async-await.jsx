export const getImagen = async () => {
  // La palabra clave async dice que devuelve una promesa
  try {
    const api_key = "GWa5ZYoNl8lhR0w0rWjK6ZkZatPn3qjW";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    ); // El await dice espera que termine esto asincrono o esperar que la promesa se resuelva y devolver el valor resuelto para continuar y lo hace ver como si fuera sincrono
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    console.log(error);
  }
};
