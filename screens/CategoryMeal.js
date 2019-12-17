import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data ";
import MealItem from "../components/MealItem";

const CategoryMeal = props => {
  const { navigation, route } = props;
  const catId = route.params.Id;
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  const renderMealItem = itemData => {
    return (
      <MealItem
        onSelect={() => {
          navigation.navigate("MealDetailScreen", {
            mealId: itemData.item.id,
            title: itemData.item.title
          });
        }}
        item={itemData.item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default CategoryMeal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});
