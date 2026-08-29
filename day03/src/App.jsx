import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  // Selected category
  const [category, setCategory] = useState("Main");

  // Total number of dishes added
  const [totalItems, setTotalItems] = useState(0);

  // Total price in ETB
  const [totalAmount, setTotalAmount] = useState(0);

  // Add a dish to the order
  const handleAddToCart = (price) => {
    setTotalItems((prev) => prev + 1);
    setTotalAmount((prev) => prev + price);
  };

  return (
    <>
      <Header
        totalItems={totalItems}
        totalAmount={totalAmount}
      />

      <Main
  category={category}
  setCategory={setCategory}
  onAddToCart={handleAddToCart}
  totalAmount={totalAmount}
/>
    </>
  );
}

export default App;