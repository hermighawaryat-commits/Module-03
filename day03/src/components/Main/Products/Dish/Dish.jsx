import PropTypes from "prop-types";
import "./Dish.css";

function Dish({
  name,
  price,
  category,
  spicy,
  currency = "ETB",
  onAddToCart,
}) {
  const handleCount = () => {
    onAddToCart(price);
  };

  return (
    <div className="dish">

      <div className="dish-image">
        <h2>{name}</h2>
      </div>

      <div className="dish-info">

        <div>
          <div className="category">
            {category}
          </div>

          <div className="price">
            {price} {currency}
          </div>
        </div>

        {typeof spicy === "boolean" && spicy && (
          <span className="spicy">
            🌶️ Spicy
          </span>
        )}

        <button onClick={handleCount}>
          Add
        </button>

      </div>
    </div>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
  onAddToCart: PropTypes.func.isRequired,
};

export default Dish;