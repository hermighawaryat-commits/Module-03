import { useContext } from "react";
import PropTypes from "prop-types";

import { CartContext } from "../../../../cart/CartProvider";

import "./Dish.css";

function Dish({
  id,
  name,
  price,
  category,
  spicy,
  currency = "ETB",
}) {
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = () => {
    dispatch({
      type: "add",
      dish: {
        id,
        name,
        price,
        category,
        spicy,
      },
    });
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

        {typeof spicy === "boolean" &&
          spicy && (
            <span className="spicy">
              🌶️ Spicy
            </span>
          )}

        <button onClick={handleAddToCart}>
          Add to Cart
        </button>

      </div>

    </div>
  );
}

Dish.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string,
  spicy: PropTypes.bool,
  currency: PropTypes.string,
};

export default Dish;