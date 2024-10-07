import PropTypes from "prop-types";

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

GifItem.propTypes = {
  // Es necesario especificar el tipo de dato esperado para cada prop
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
