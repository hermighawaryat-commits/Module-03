import Header from "./components/Header/Header";
import Menu from "./Menu";
import DeliveryForm from "./components/Footer/DeliveryForm";
import CartProvider from "./cart/CartProvider";
import Cart from "./Cart";

import "./App.css";

function App() {
  return (
    <CartProvider>

      <div className="app">

        <Header />

        <div className="page-layout">

          <Menu />

          <aside className="right-sidebar">

            <Cart />

            <DeliveryForm />

          </aside>

        </div>

      </div>

    </CartProvider>
  );
}

export default App;