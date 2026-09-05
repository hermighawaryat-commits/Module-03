import { useContext } from "react";

import { CartContext } from "../../cart/CartProvider";

import "./Header.css";

function Header() {
  const {
    items,
    total,
  } = useContext(CartContext);

  return (
    <header className="header">
      <h1>Addis Eats</h1>

      <div className="cart-summary">
        🛒 Items: {items.length}
      </div>

      <div className="total-price">
        Total: {total} ETB
      </div>
    </header>
  );
}

export default Header;