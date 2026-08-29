
import "./Dish.css";

function Dish({ name, price }) {
  return (
    <div className="dish">
      <div className="dish-image">
        <h2>{name}</h2>
      </div>

      <div className="dish-info">
        <div className="price">
          {price} ETB
        </div>
      </div>
    </div>
  );
}

export default Dish;
