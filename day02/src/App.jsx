
import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  const [totalItems, setTotalItems] = useState(0);

  return (
    <>
      <Header totalItems={totalItems} />

      <Main setTotalItems={setTotalItems} />

      <Footer />
    </>
  );
}

export default App;