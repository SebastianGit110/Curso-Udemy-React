export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload]; // El operador spread (...) lo que hace es copiar lo de adentro del array no el array en si. [] indica que voy a regresar un nuevo array porque el state es un array
    case "[TODO] Set state from localStorage":
      console.log([...initialState, ...action.payload]);
      return [...action.payload]; // Con esta forma (3) funciona pero la forma de retornar el nuevo state no es la mejor ya que lo estaria cambiando al no copiar el state anterios, no se copia porque se presentan comportamientos inesperados
    case "ABC":
      throw new Error("Action.type = ABC no esta implementada"); // Si aun no hemos implementado alguna action es buena practica lanzar un error informativo porque puede que este utilizando esta action en alguna parte y si retorno algo da la impresion de que funciona bien
    default:
      return initialState;
  }
};
