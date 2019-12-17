import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data ";
const FavoritesScreen = props => {
  const { navigation, route } = props;

  const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealList data={favMeals} navigation={navigation} />;
};

export default FavoritesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
