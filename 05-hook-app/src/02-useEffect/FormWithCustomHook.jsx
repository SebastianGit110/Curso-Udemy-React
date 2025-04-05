import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, handleOnChange, username, email, password } = useForm({
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
        onChange={handleOnChange}
      ></input>

      <input
        type="email"
        className="form-control mt-2"
        placeholder="email@email.com"
        name="email"
        value={email}
        onChange={handleOnChange}
      ></input>

      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={handleOnChange}
      ></input>
    </>
  );
};
