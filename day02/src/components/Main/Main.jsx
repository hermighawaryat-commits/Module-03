import Products from "./Products/Products";
import SideBar from "./SideBar/SideBar";
import "./Main.css";

function Main() {
  return (
    <main className="main">
      <SideBar />

      <Products />
    </main>
  );
}

export default Main;