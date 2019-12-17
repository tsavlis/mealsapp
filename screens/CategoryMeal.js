import React from "react";
import { MEALS } from "../data/dummy-data ";
import MealList from "../components/MealList";

const CategoryMeal = props => {
  const { navigation, route } = props;
  const catId = route.params.Id;
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList data={displayedMeals} navigation={navigation} />;
};

export default CategoryMeal;
