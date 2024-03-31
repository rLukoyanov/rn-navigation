import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MealItem } from "./MealItem";

export const MealsList = ({ items }) => {
  function renderMealItem({ item }) {
    const props = {
      id: item.id,
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
        data={items}
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
