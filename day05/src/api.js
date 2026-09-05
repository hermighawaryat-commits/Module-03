// src/api.js

export async function loadDishes(category, signal) {
  const response = await fetch("/menu.json", {
    signal,
  });

  if (!response.ok) {
    throw new Error("Could not load the menu.");
  }

  const dishes = await response.json();

  if (category === "All") {
    return dishes;
  }

  return dishes.filter(
    (dish) => dish.category === category
  );
}