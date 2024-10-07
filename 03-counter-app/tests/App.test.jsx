import { render } from "@testing-library/react";
import App from "../src/App";

describe("Pruebas en <App />", () => {
  // test("Debe hacer match con el snapshot", () => {
  //   const title = "Hola soy el titulo";
  //   const { container } = render(<App title={title} />); // container es como un nodo del dom

  //   expect(container).toMatchSnapshot(); // Crea una carpeta de snapshots en el mismo nivel donde se ejecuta la instruccion. La primera vez que se ejecuta el snapshot se toma la instantanea del componente y lo deja almacenado en la carpeta. Esto sirve para que si se cambia el componente, y se vuelve a ejecutar la prueba se va a comparar el resultado de la renderizacion del componente con el snapshot almacenado para ver los cambios y si es diferente, bota error. Si sale el error se puede presionar la tecla "u" para guardar los cambios en el archivo .snap
  // });

  test("Debe mostrar el titulo en un h1", () => {
    const title = "Hola soy el titulo";
    const { container, getByText, getByTestId } = render(<App title={title} />); // getByText es una funcion de react-testing-library para conseguir algo por el texto del componente pero falla cuando hay mas de un elemento con el mismo texto, para eso esta getAllByText

    expect(getByText(title)).toBeTruthy(); // El componente renderizado debe contener el texto title

    // const h1 = container.querySelector("h1"); // querySelector me trae solo una etiqueta h1, aunque tambien podria usar getElementById y mas ya que container es un nodo del dom

    // expect(h1.innerHTML).toContain(title); // Depronto en el html el title se imprima con espacios como ' Hola soy el titulo ' entonces el toBe fallaria porque la const title no tiene los espacios, para eso esta el metodo de jest que es toContain que solo evalua que lo contenga
    // El metodo innerHTML muestra el contenido de la etiqueta
    
    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe mostrar el subtitulo enviado por props", () => {
    const title = "Hola soy el titulo";
    const subTitle = "Hola soy el subtitulo";
    const { getByText, getAllByText } = render(
      <App title={title} subtitulo={subTitle} />
    );

    expect(getAllByText(subTitle).length).toBe(2); // getAllByText devuelve un array y se espera que sea de tamaño 2 porque en el componente hay dos etiquetas con el subtitulo
  });
});
