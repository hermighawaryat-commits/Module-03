import PropTypes from "prop-types";
import Dish from "./components/Main/Products/Dish/Dish";

function DishList({ dishes }) {
  if (dishes.length === 0) {
    return <p>No dishes found.</p>;
  }

  return (
    <div className="dish-list">
      {dishes.map((dish) => (
        <Dish
          key={dish.id}
          {...dish}
        />
      ))}
    </div>
  );
}

DishList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};

export default DishList;