import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";

describe("Pruebas en el useCounter", () => {
  test("Debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useCounter()); // renderHook renderiza el hook
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10); // 10 es el valor por defecto de initialState
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("Debe generar el counter con el valor de 100", () => {
    const { result } = renderHook(() => useCounter(100)); // Le pasamos 100 a initialState
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test("Debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter()); // Le pasamos 100 a initialState
    const { increment } = result.current;

    // increment(); // Asi no funcionaria porque lo que cambia el state debe estar dentro del bloque act
    act(() => {
      increment();
      increment(2); // Asi tomaria para increment() tanto para increment(2) el valor del counter anterior, y pasa por como esta el cambio del state en la funcion "setCounter(counter + value);", para que no pase se escribiria asi: setCounter((current) => current + value);
    });

    // expect(counter).toBe(11); // Asi esta comparando el valor anterior osea 10 porque al cambiar el valor con var primitivas crea una nueva variable entonces es mejor acceder directamente desde result.current.counter el nombre lo dice
    expect(result.current.counter).toBe(13);
  });

  test("Debe decrementar el contador", () => {
    const { result } = renderHook(() => useCounter());
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(7);
  });

  test("Debe hacer el reset del contador", () => {
    const { result } = renderHook(() => useCounter());
    const { increment, decrement, reset } = result.current;

    act(() => {
      decrement();
      increment(2);
      reset();
    });

    expect(result.current.counter).toBe(10);
  });
});
