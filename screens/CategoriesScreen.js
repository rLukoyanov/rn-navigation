import React from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryGridTile } from "../components/CategoryGridTile";

function renderCategoryItem({ item }) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

export const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
};
