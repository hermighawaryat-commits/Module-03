import { useContext } from "react";

import { CartContext } from "./cart/CartProvider";

function Cart() {
  const {
    items,
    total,
    dispatch,
  } = useContext(CartContext);

  return (
    <section className="cart">
      <h2>🛒 Cart</h2>

      <p>
        Items: <strong>{items.length}</strong>
      </p>

      <p>
        Total: <strong>{total} ETB</strong>
      </p>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((dish, index) => (
            <div
              key={`${dish.id}-${index}`}
              className="cart-item"
            >
              <div>
                <strong>{dish.name}</strong>
                <span> {dish.price} ETB</span>
              </div>

              <button
                onClick={() =>
                  dispatch({
                    type: "remove",
                    id: dish.id,
                  })
                }
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={() =>
              dispatch({
                type: "clear",
              })
            }
          >
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
}

export default Cart;