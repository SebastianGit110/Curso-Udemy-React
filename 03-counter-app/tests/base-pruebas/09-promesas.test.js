import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe", (done) => {
    // Esto deberia botar un error ya que true no es igual que false, pero bota que paso y es porque como es una tarea asincrona entonces el flujo del codigo sigue normal y cuando lo asincrono tenga la respuesta, la devuelve entonces como esta siguiendo el flujo normal jest no ve ningun expect y dice pues ya termino y lo da como que pasó
    // getHeroeByIdAsync(1).then(() => {
    //   expect(true).toBe(false);
    // });
    // Este callback puede recibir un parametro que es done y si se pasa ese parametro jest se queda esperando un tiempo hasta que ese done se llame y ahi si sigue con el flujo normal del cod como el async await

    getHeroeByIdAsync(1).then((heroe) => {
      expect(heroe).toEqual({
        id: 1,
        name: "Batman",
        owner: "DC",
      });
      done();
    });
  });

  test("getHeroeByIdAsync debe retornar un error", (done) => {
    getHeroeByIdAsync(100).catch((error) => {
      console.log(error);
      done();
    });
  });

  test("tercer prueba", async () => {
    const resp = await getHeroeByIdAsync(1);
    console.log(resp);
  });
});
