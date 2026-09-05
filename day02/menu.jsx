import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { loadDishes } from "./api";
import DishList from "./DishList";

function Menu({ onAddToCart }) {
  // -----------------------------
  // STATE
  // -----------------------------

  const [category, setCategory] = useState("All");

  const [dishes, setDishes] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  // -----------------------------
  // REF
  // -----------------------------

  const searchRef = useRef(null);

  // -----------------------------
  // EFFECT 1
  // Focus search input on mount
  // -----------------------------

  useEffect(() => {
    searchRef.current?.focus();
  }, []);

  // -----------------------------
  // EFFECT 2
  // Fetch dishes when category changes
  // -----------------------------

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    setError(null);

    async function loadMenu() {
      try {
        const data = await loadDishes(
          category,
          controller.signal
        );

        setDishes(data);
      } catch (error) {
        // Ignore errors caused by cancelling a request
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    loadMenu();

    // Cleanup
    return () => {
      controller.abort();
    };
  }, [category]);

  // -----------------------------
  // LOADING STATE
  // -----------------------------

  if (loading) {
    return (
      <section className="menu">
        <p>Loading the menu...</p>
      </section>
    );
  }

  // -----------------------------
  // ERROR STATE
  // -----------------------------

  if (error) {
    return (
      <section className="menu">
        <p className="error-message">
          {error}
        </p>
      </section>
    );
  }

  // -----------------------------
  // MAIN UI
  // -----------------------------

  return (
    <section className="menu">

      <div className="menu-header">
        <h2>Addis Eats Menu</h2>

        <input
          ref={searchRef}
          type="text"
          placeholder="Search dishes..."
        />
      </div>

      {/* Category Filter */}
      <div className="category-buttons">

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

      </div>

      {/* Dish List */}
      <DishList
        dishes={dishes}
        onAddToCart={onAddToCart}
      />

    </section>
  );
}

Menu.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default Menu;