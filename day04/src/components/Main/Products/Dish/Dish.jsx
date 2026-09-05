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
  const handleAddToCart = () => {
    onAddToCart(price);
  };

  return (
    <article className="dish">

      <div className="dish-image">
        <h2>{name}</h2>
      </div>

      <div className="dish-info">

        <div className="dish-details">

          <span className="category">
            {category}
          </span>

          <span className="price">
            {price} {currency}
          </span>

        </div>

        {typeof spicy === "boolean" && spicy && (
          <span className="spicy">
            🌶️ Spicy
          </span>
        )}

        <button onClick={handleAddToCart}>
          Add to Cart
        </button>

      </div>

    </article>
  );
}

Dish.propTypes = {
  name: PropTypes.string.isRequired,

  price: PropTypes.number.isRequired,

  category: PropTypes.string.isRequired,

  spicy: PropTypes.bool,

  currency: PropTypes.string,

  onAddToCart: PropTypes.func.isRequired,
};

export default Dish;