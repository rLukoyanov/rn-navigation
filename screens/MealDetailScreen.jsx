import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

export const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => mealId === meal.id);
  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
        <Text style={styles.detailItem}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
