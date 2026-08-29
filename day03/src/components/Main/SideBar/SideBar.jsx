import PropTypes from "prop-types";
import "./SideBar.css";

function SideBar({ category, setCategory }) {

  const categories = [
    "Main",
    "Vegetarian",
    "Breakfast",
    "Side",
  ];

  return (
    <aside className="sidebar">

      <h2>Categories</h2>

      {categories.map((item) => (
        <button
          key={item}
          className={category === item ? "active" : ""}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}

    </aside>
  );
}

SideBar.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default SideBar;