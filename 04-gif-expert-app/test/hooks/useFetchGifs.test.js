import useFetchGifs from "../../src/hooks/useFetchGifs";
import { renderHook, waitFor } from "@testing-library/react";

describe("Pruebas en useFetchGifs", () => {
  test("Debe regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Categoria")); // No se puede llamar solo el customHook toca con renderHook
    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe retornar un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Celulares")); // Mandar una categoria valida

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0), // Dice que espere hasta que hayan imagenes osea hasta que entre en el useEffect
      { timeout: 1000 } // 1000 es por default, si uno quiere modificarlo puede hacerlo
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
