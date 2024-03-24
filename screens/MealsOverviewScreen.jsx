import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealItem } from "../components/MealItem";

export const MealsOverviewScreen = ({ route }) => {
  const cardId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(cardId) >= 0;
  });

  function renderMealItem({ item }) {
    const props = {
      title: item.title,
      imageURL: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...props} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(meal) => meal.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
