import { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./Menu";
import DeliveryForm from "./components/Footer/DeliveryForm";
import "./App.css";

function App() {
  const [totalItems, setTotalItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddToCart = (price) => {
    setTotalItems((previous) => previous + 1);
    setTotalAmount((previous) => previous + price);
  };

  return (
    <div className="app">

      <Header
        totalItems={totalItems}
        totalAmount={totalAmount}
      />

      <div className="page-layout">

        {/* LEFT + CENTER */}
        <Menu onAddToCart={handleAddToCart} />

        {/* RIGHT */}
        <aside className="right-sidebar">

          <section className="cart">
            <h2>🛒 Cart</h2>

            <p>
              Items: <strong>{totalItems}</strong>
            </p>

            <p>
              Total: <strong>{totalAmount} ETB</strong>
            </p>
          </section>

          <DeliveryForm
            totalAmount={totalAmount}
          />

        </aside>

      </div>

    </div>
  );
}

export default App;