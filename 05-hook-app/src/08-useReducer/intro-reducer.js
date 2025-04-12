// Un reducer es una funcion comun y es mas sencilla porque no puede ser asincrona

// Es una funcion pura, es decir, todo lo que la funcion realize debe resolverse de manera interna.
// 1.No debe tener efectos secundarios, es decir, mi funcion reducer debe poder resolver lo que se pide internamente sin llamar a otras funciones,
// 2.No debe ser asincrona ni realizar tareas asincronas,
// 3.Debemos retornar un nuevo estado, no mutar el estado actual (inmutable como React),
// 4.No debe llamar al localStorage o SessionStorage dentro de la funcion, se puede hacer porque son asincronas pero rompe las reglas anteriores porque llamar a una funcion es considerado efectos secundarios, ademas aunque sean sincronas pueden fallar y si es el caso se regresa un error no un nuevo state y la aplicacion falla. No es comun que localStorage o SessionStorage fallen puede que el dispositivo fisico no permita grabar mas datos.
// 5. El reducer no debe requerir mas de una accion para modificar el state y esa accion tiene type y puede tener o no argumentos (payload). Se pueden tener mas de una accion y se hace el switch de cual accion tomar segun el type.

// El reducer es una funcion que recibe dos argumentos, el estado (initialState) y la accion

// La idea del reducer es tener en un solo lugar todas las acciones que puedan modificar el state y asi se puede ver a nivel general las posibles modificaciones que la app puede realizar

// Funcionamiento
// Se inicializa el state con un valor inicial (initialState)
// El state se muestra en la Pagina o vista pero si se quiere crear un nuevo elemento la pagina no puede hacerlo directamente porque estaria mutando el state
// Se crea una accion que va a agregar un nuevo elemento al state (modifica el state) y se manda al reducer que es el que tiene el mapa de las acciones que puede realizar la app. Si se le manda una accion que no existe simplemente regresa el mismo estado sin modificarlo

// Concepto de reducer

const initialState = [{ id: 1, todo: "Comprar pan", done: false }];

// Puedo tener mas de un reducer para manejar diferentes logicas de la app
// El action se envia la mayor parte del tiempo y es el que le dice al reducer como cambiar el state

const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "ADD_TODO") {
    // return state.push(action.payload); // Esto muta el state y no es correcto, aunque funcione en este ejemplo
    return [...state, action.payload]; // Regreso un nuevo array con el nuevo elemento y el resto de los elementos del array, inmutable
  }
  return state; // Es como el default de un switch, si no se encuentra una accion existente
};

let todos = todoReducer();

// todos.push({ id: 2, todo: "Comprar leche", done: false }); // Como todoRefucer regresa un array que es el state }puedo aplicar el metodo .push pero esto seria mutar el state y asi react no redibujaria nada

console.log(todos);

const newTodo = { id: 2, todo: "Comprar leche", done: false };

const action = {
  type: "ADD_TODO",
  payload: newTodo,
};

todos = todoReducer(todos, action);
console.log({ state: todos });
