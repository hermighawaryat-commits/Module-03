import PropTypes from "prop-types";
import "./Header.css";

function Header({ totalItems, totalAmount }) {
  return (
    <header className="header">

      <h1>Addis Eats</h1>

      <div className="cart-summary">
        🛒 Items: {totalItems}
      </div>

      <div className="total-price">
        Total: {totalAmount} ETB
      </div>

    </header>
  );
}

Header.propTypes = {
  totalItems: PropTypes.number.isRequired,

  totalAmount: PropTypes.number.isRequired,
};

export default Header;