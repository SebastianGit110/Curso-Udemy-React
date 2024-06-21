const GifItem = ({ id, title, url, deleteImage }) => {
  // { image: { id, title, url } } En caso de que se pase el img ya que se desestructura las props que es un obj y image es un obj
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      <button
        onClick={() => {
          deleteImage(id);
        }}
      >
        Eliminar
      </button>
    </div>
  );
};

export default GifItem;
