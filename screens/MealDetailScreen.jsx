import React from "react";
import { Text, View } from "react-native";

export const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  return (
    <View>
      <Text>{mealId}</Text>
    </View>
  );
};
