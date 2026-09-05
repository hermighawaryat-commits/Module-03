import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { loadDishes } from "./api";
import DishList from "./DishList";
import "./Menu.css";

function Menu({ onAddToCart }) {
  const [category, setCategory] = useState("All");
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchRef = useRef(null);

  // 1. Automatically focus the search field
  useEffect(() => {
  if (!loading) {
    searchRef.current?.focus();
  }
}, [loading]);

  // 2. Load dishes whenever category changes
  useEffect(() => {
    const controller = new AbortController();

    async function loadMenu() {
      try {
        setLoading(true);
        setError(null);

        const data = await loadDishes(
          category,
          controller.signal
        );

        setDishes(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadMenu();

    // 3. Cleanup
    return () => {
      controller.abort();
    };
  }, [category]);

  // 4. Search filtering
  const filteredDishes = dishes.filter((dish) =>
    dish.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <p className="menu-message">
        Loading the menu...
      </p>
    );
  }

  if (error) {
    return (
      <p className="menu-message error-message">
        {error}
      </p>
    );
  }

  return (
    <section className="menu">

      {/* Search */}
      <div className="menu-search">
        <input
          ref={searchRef}
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />
      </div>

      <div className="menu-layout">

        {/* LEFT SIDE */}
        <aside className="categories">
          <h2>Categories</h2>

          <button
            className={category === "All" ? "active" : ""}
            onClick={() => setCategory("All")}
          >
            All
          </button>

          <button
            className={category === "Main" ? "active" : ""}
            onClick={() => setCategory("Main")}
          >
            Main
          </button>

          <button
            className={
              category === "Vegetarian" ? "active" : ""
            }
            onClick={() => setCategory("Vegetarian")}
          >
            Vegetarian
          </button>

          <button
            className={
              category === "Breakfast" ? "active" : ""
            }
            onClick={() => setCategory("Breakfast")}
          >
            Breakfast
          </button>

          <button
            className={category === "Side" ? "active" : ""}
            onClick={() => setCategory("Side")}
          >
            Side
          </button>
        </aside>

        {/* CENTER */}
        <main className="menu-content">
          <h2>Addis Eats Menu</h2>

          <DishList
            dishes={filteredDishes}
            onAddToCart={onAddToCart}
          />
        </main>

      </div>

      {filteredDishes.length === 0 && (
        <p className="menu-message">
          No dishes found.
        </p>
      )}

    </section>
  );
}

Menu.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default Menu;