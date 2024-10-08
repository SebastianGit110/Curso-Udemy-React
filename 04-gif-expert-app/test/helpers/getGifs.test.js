import getGifs from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("", async () => {
    const gifs = await getGifs("Celulares");
    // console.log(gifs); No seria practico hacer la comparacion .toBe con la info que nos de gifs porque despues puede cambiar

    expect(gifs.length).toBeGreaterThan(0); // Con esto sabemos que al menos nos va a mandar informacion, pero no sabemos que tipo de info es
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      url: expect.stringContaining("http"), // expect.stringMatching(/^http/) tambien funciona aqui pero .toMatch(/^http/) no porque stringMatching y los otros (expect.any ... ) estan diseñados para trabajar dentro de objs con toEqual
      title: expect.any(String),
    }); // Esta prueba se ejecuta si la de arriba pasa. toEqual porque va a compararlo con un obj
    // Con esto se compara que en la posicion 0 (es una referencia porque se supone que todos son iguales) tiene los atributos que se esperan que pueden ser cualquier String y la url contiene 'http'
    expect(gifs[0].url).toMatch(/^http/);
    expect(gifs[0].url).toEqual(expect.stringMatching(/^http/));
  });
});
