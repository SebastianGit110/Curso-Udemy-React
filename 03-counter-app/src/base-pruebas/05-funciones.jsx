export const getUser = () => {
  return {
    uid: 123,
    nombre: "Sebas",
  };
};

export const getUsuarioActivo = (nombre) => ({
  uid: "Abc123",
  username: nombre,
});
