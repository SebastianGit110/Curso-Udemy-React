// {type: '[TODO] Remove Todo', payload: id} Si mando id tratar de tener convencion de cuando haga otra accion parecida mandar tambien id o si mando el todo mandar en todos los case el todo

export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload]; // El operador spread (...) lo que hace es copiar lo de adentro del array no el array en si. [] indica que voy a regresar un nuevo array porque el state es un array
    case "[TODO] Set state from localStorage":
      console.log([...initialState, ...action.payload]);
      return [...action.payload]; // Con esta forma (3) funciona pero la forma de retornar el nuevo state no es la mejor ya que lo estaria cambiando al no copiar el state anterior, no se copia el anterior porque se presentan comportamientos inesperados
    case "[TODO] Remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload); // El filter regresa un nuevo arreglo por lo que no muta el initialState
    case "[TODO] Toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done }; // Si cumple la condicion retorna el todo modificando la prop done
        }
        return todo; // Si no cumple la condicion retorna el todo
      }); // Regrese un nuevo array, nuevo state
    case "ABC":
      throw new Error("Action.type = ABC no esta implementada"); // Si aun no hemos implementado alguna action es buena practica lanzar un error informativo porque puede que este utilizando esta action en alguna parte y si retorno algo da la impresion de que funciona bien
    default:
      return initialState;
  }
};
