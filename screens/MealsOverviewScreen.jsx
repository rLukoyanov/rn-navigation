import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealsList } from "../components/MealsList";

export const MealsOverviewScreen = ({ route, navigation }) => {
  const cardId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cardId) >= 0;
  });
  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES.find((item) => cardId === item.id).title,
    });
  }, [navigation, cardId]);

  return <MealsList items={displayedMeals} />;
};
