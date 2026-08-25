import Dish from "./Dish";

const menu = [
  { id: 1, name: "Doro Wat", price: 240 },
  { id: 2, name: "Shiro", price: 120 },
  { id: 3, name: "Tibs", price: 280 },
  { id: 4, name: "Pasta", price: 180 },
];

function Header() {
  return (
    <header>
      <h1>Addis Eats</h1>
      <p>Order great food across Addis.</p>
    </header>
  );
}

function Menu() {
  return (
    <div>
      {menu.map((dish) => (
        <Dish
          key={dish.id}
          name={dish.name}
          price={dish.price}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <h2>Our Menu</h2>
      <Menu />
    </div>
  );
}

export default App;