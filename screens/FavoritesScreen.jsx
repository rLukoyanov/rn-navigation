import React from "react";
import { MealsList } from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export const FavoritesScreen = () => {
  const favoriteMealids = useSelector((state) => state.favoriteMeals.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealids.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
};
