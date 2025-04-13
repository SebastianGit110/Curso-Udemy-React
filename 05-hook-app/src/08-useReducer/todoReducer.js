export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "add_new_todo":
      return [...initialState, action?.payload]; // El operador spread (...) lo que hace es copiar lo de adentro del array no el array en si
    case "ABC":
      throw new Error("Action.type = ABC no esta implementada"); // Si aun no hemos implementado alguna action es buena practica lanzar un error informativo porque puede que este utilizando esta action en alguna parte y si retorno algo da la impresion de que funciona bien
    default:
      return initialState;
  }
};
