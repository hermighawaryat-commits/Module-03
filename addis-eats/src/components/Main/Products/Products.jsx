
import menu from "../../../data/menu.json";
import Dish from "./Dish/Dish";
import "./Products.css";

function Products() {
  return (
    <section className="products">
      {menu.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
        />
      ))}
    </section>
  );
}

export default Products;

