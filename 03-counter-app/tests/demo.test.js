describe("Titulo prueba", () => {
  // Ese describe sirve para ponerle el titulo a la prueba
  test("Descripcion prueba", () => {
    // Inicializacion
    const message1 = "Hola mundo";

    // Estimulo
    const message2 = message1.trim();

    // Observar el comportamiento esperado
    expect(message1).toBe(message2); // toBe hace la comparacion === entonces eso es igual a message1 === message2
  });
});
