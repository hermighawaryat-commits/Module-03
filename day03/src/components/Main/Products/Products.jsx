import PropTypes from "prop-types";
import Dish from "./Dish/Dish";
import menu from "../../../data/menu.json";
import "./Products.css";

function Products({ category, onAddToCart }) {

  const filteredDishes = menu.filter(
    (dish) => dish.category === category
  );

  if (filteredDishes.length === 0) {
    return (
      <section className="products">
        <p>No {category} dishes found.</p>
      </section>
    );
  }

  return (
    <section className="products">

      {filteredDishes.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
          category={dish.category}
          spicy={dish.spicy}
          onAddToCart={onAddToCart}
        />
      ))}

    </section>
  );
}

Products.propTypes = {
  category: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Products;