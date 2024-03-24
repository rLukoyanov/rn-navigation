import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

export const MealsOverviewScreen = ({ route }) => {
  const cardId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meal Overview Screen {cardId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
