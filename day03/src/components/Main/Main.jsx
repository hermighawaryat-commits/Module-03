import PropTypes from "prop-types";
import SideBar from "./SideBar/SideBar";
import Products from "./Products/Products";
import DeliveryForm from "../Footer/DeliveryForm";
import "./Main.css";

function Main({
  category,
  setCategory,
  onAddToCart,
  totalAmount,
}) {
  return (
    <main className="main">

      <SideBar
        category={category}
        setCategory={setCategory}
      />

      <div className="main-content">

        <Products
          category={category}
          onAddToCart={onAddToCart}
        />

        <DeliveryForm
          totalAmount={totalAmount}
        />

      </div>

    </main>
  );
}

Main.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default Main;