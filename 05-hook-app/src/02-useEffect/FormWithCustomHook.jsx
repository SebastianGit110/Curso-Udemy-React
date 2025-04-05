import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const {
    formState,
    onInputChange,
    username,
    email,
    password,
    onResetForm,
    onDefaultEmail,
  } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState; // Lo puedo desestructurar desde el useState pero es mejor esparciendo las props

  return (
    <>
      <h1>Form With Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      ></input>

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@email.com"
        name="email"
        value={email}
        onChange={onInputChange}
      ></input>

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      ></input>

      <button className="btn btn-primary mt-2" onClick={onResetForm}>
        Borrar
      </button>

      <button
        className="btn btn-primary mt-2"
        onClick={() => onDefaultEmail("email")} // Mando el nombre de la prop como String para despues usar props computadas
      >
        Email
      </button>
    </>
  );
};
