import React, { useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { List } from "../components/MealDetail/List";

export const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => mealId === meal.id);

  function headerBtnHandler() {}

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="tap" onPress={headerBtnHandler} />;
      },
    });
  }, [navigation, headerBtnHandler]);

  return (
    <ScrollView style={{ marginBottom: 32 }}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedMeal.duration}m</Text>
        <Text style={styles.detailItem}>
          {selectedMeal.complexity.toUpperCase()}
        </Text>
        <Text style={styles.detailItem}>
          {selectedMeal.affordability.toUpperCase()}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ width: "80%" }}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingredients</Text>
          </View>
          <List data={selectedMeal.ingredients} />

          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps</Text>
          </View>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
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
    color: "#fff",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "#fff",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subtitleContainer: {
    margin: 4,
    padding: 6,
    marginHorizontal: 12,
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
  },
});
