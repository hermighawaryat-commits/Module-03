import React, {usestate} from 'react'
import menu from "../../../data/menu.json";
import Card from "./Card/Card";
import Dish from "./Dish/Dish";
import "./Products.css";

function Products() {
  const category = "Main";
  


  const shownDishes = menu.filter(
    (dish) => dish.category === category
  );

  if (shownDishes.length === 0) {
    return (
      <section className="products">
        <p className="empty-state">
          No {category} dishes found.
        </p>
      </section>
    );
  }

  return (
    <section className="products">
      {shownDishes.map((dish) => (
        <Card key={dish.id}>
          <Dish
            name={dish.name}
            price={dish.price}
            category={dish.category}
            spicy={dish.spicy}
          />
        </Card>
      ))}
    </section>
  );
}

export default Products;