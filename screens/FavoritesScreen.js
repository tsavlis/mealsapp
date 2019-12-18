import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
const FavoritesScreen = props => {
  const { navigation, route } = props;
  const favMeals = useSelector(state => state.meals.favoriteMeals);
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
