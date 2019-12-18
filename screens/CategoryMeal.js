import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
import { View, StyleSheet } from "react-native";

const CategoryMeal = props => {
  const { navigation, route } = props;
  const catId = route.params.Id;
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.container}>
        <DefaultText>No meals found.Maybe check your filters</DefaultText>
      </View>
    );
  }
  return <MealList data={displayedMeals} navigation={navigation} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoryMeal;
