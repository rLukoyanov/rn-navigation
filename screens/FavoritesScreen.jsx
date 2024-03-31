import React, { useContext } from "react";
import { Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MealItem } from "../components/MealItem";
import { MealsList } from "../components/MealsList";
import { MEALS } from "../data/dummy-data";

export const FavoritesScreen = () => {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />;
};
