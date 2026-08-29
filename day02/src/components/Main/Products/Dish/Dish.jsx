import { useState } from "react";
import PropTypes from "prop-types";
import "./Dish.css";

function Dish({
  name,
  price,
  category,
  spicy,
  currency = "ETB",
}) {
  // Count for this individual dish
  const [count, setCount] = useState(0);

  // Runs when "Add to Cart" is clicked
  const handleCount = () => {
    // Increase this dish's count
    setCount((prev) => prev + 1);
  };

  return (
    <div className="dish">
      <div className="dish-image">
        <h2>{name}</h2>
      </div>

      <div className="dish-info">
        <div>
          <div className="category">{category}</div>

          <div className="price">
            {price} {currency}
          </div>
        </div>

        {typeof spicy === "boolean" && spicy && (
          <span className="spicy">
            🌶️ Spicy
          </span>
        )}
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
  setTotalItems: PropTypes.func.isRequired,
};

export default Dish;