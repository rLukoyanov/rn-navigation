import React, { useContext, useLayoutEffect } from "react";
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
import { IconBtn } from "../components/IconBtn";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

export const MealDetailScreen = ({ route, navigation }) => {
  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => mealId === meal.id);

  function changeFAvoritesMealHandler() {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  const mealIsFavorite = favoriteMealIds.includes(mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconBtn
            icon={mealIsFavorite ? "star" : "star-outline"}
            onPress={changeFAvoritesMealHandler}
          />
        );
      },
    });
  }, [navigation, changeFAvoritesMealHandler]);

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
