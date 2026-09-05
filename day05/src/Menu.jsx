import {
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";

import useFetch from "./hooks/useFetch";
import DishList from "./DishList";

import "./Menu.css";

function Menu() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const searchRef = useRef(null);

  const {
    data: dishes,
    loading,
    error,
  } = useFetch("/menu.json");

  useEffect(() => {
    if (!loading) {
      searchRef.current?.focus();
    }
  }, [loading]);

  const shownDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory =
        category === "All" ||
        dish.category === category;

      const matchesSearch =
        dish.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [dishes, category, search]);

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

        <aside className="categories">
          <h2>Categories</h2>

          <button
            className={
              category === "All" ? "active" : ""
            }
            onClick={() => setCategory("All")}
          >
            All
          </button>

          <button
            className={
              category === "Main" ? "active" : ""
            }
            onClick={() => setCategory("Main")}
          >
            Main
          </button>

          <button
            className={
              category === "Vegetarian"
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory("Vegetarian")
            }
          >
            Vegetarian
          </button>

          <button
            className={
              category === "Breakfast"
                ? "active"
                : ""
            }
            onClick={() =>
              setCategory("Breakfast")
            }
          >
            Breakfast
          </button>

          <button
            className={
              category === "Side" ? "active" : ""
            }
            onClick={() => setCategory("Side")}
          >
            Side
          </button>
        </aside>

        <main className="menu-content">
          <h2>Addis Eats Menu</h2>

          <DishList dishes={shownDishes} />
        </main>

      </div>

    </section>
  );
}

export default Menu;