import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [{ id: 1, description: "Demo todo", done: false }];
  test("debe regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState); // Esperamos que sea exactamente el mismo objeto con toBe porque como los obj se pasan por referencia y el todoReducer me retorna el mismo obj entonces se esperaria que sea el mismo, ademas porque no estamos pasando ninguna action entonces entra en el default. Seria diferente a que si en el default del todoReducer retornara [...initialState] porque eso seria otra posicion en memoria
  });

  test("debe agregar un nuevo todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: {
        id: 2,
        description: "Demo todo 2",
        done: false,
      },
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(2); // Deben haber 2 todos, el del initialState y el nuevo del action
    expect(newState).toContain(action.payload); // Debe contener el nuevo todo y el toContain es parecido al toEqual porque evalua que el contenido sea el que se espera pero no compara que comparta el mismo espacio en memoria
  });

  test("debe eliminar un todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test("should realizar el toggle del todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1,
    };

    const newState = todoReducer(initialState, action);

    // Aqui buscon el todo y hago la asersion con el todo
    // const todo = newState.map((todo) => {
    //   if (todo.id === action.payload) {
    //     return todo;
    //   }
    // });

    // expect(todo[0].done).toBe(true); // Es mejor toBe(true) que toBeTruthy porque toBeTruthy evalua que exista, no que sea el valor booleano en true

    // Aca se que tengo solo 1 todo entonces se que esta en la posicion 0 y lo comparo
    expect(newState[0].done).toBe(true);

    // Ahora evaluo que vuelva a cambiar la prop done
    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBe(false);
  });
});
