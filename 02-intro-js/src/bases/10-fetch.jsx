// FetchAPI

// Es utilizada para hacer peticiones http a endpoints y es propia de js por lo que no toca importar nada adicional

const api_key = "GWa5ZYoNl8lhR0w0rWjK6ZkZatPn3qjW";

const peticion = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
); // Retorna una promesa

// Poner el cursor encima de la peticion y dice que devuelve y el tipo Promise<Response|any>
// peticion.then((resp) => {
//   // resp es de tipo response, el mismo tipo de lo que retorna el fetch
//   resp.json().then((data) => {
//     console.log(data);
//   }); // En toda la respuesta, lo que necesitamos esta en una ReadableStream, necesitamos el json() Devuelve una promesa
// });

// Esa promesa se puede encadenar ya que resp.json() devuelve una promesa entonces lo devolvemos implicitamente

peticion
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
