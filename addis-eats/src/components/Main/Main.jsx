import "./Main.css";
import Products from "./Products/Products";
import SideBar from "./SideBar/SideBar";

function Main() {
  return (
    <main className="main">
      <SideBar />
      <Products />
    </main>
  );
}

export default Main;
