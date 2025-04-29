import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialState = { name: "Sebas", email: "sebas@sebas.com" };

  test("Debe retornar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialState));

    expect(result.current).toEqual({
      name: initialState.name,
      email: initialState.email,
      formState: initialState, // El initialState es el de la misma posicion en memoria al que se le mando useForm(initialState)
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
      onDefaultEmail: expect.any(Function),
    });
  });

  test("Debe cambiar el nombre del formulario", () => {
    const { result } = renderHook(() => useForm(initialState));
    const { onInputChange } = result.current;

    const newValue = "Sebrat";

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("Debe realizar el reset del formulario", () => {
    const { result } = renderHook(() => useForm(initialState));
    const { onInputChange, onResetForm } = result.current;

    const newValue = "Sebrat";

    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialState.name);
    expect(result.current.formState.name).toBe(initialState.name);
  });
});
