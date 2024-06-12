// data/heroes.js crea carpeta data y archivo js heroes

const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];

const owners = ["DC", "Marvel"];

// Se puede hacer un export default directamente del array

// export default heroes [ ... ] // Sin const
// export default [ ... ]
// export default heroes

// El export default puede tener cualquier nombre en la importacion ya que solo es 1 export default

export { heroes as default, owners };
