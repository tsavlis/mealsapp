import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
const CategoryMeal = props => {
  const { navigation, route } = props;
  const catId = route.params.Id;
  const availableMeals = useSelector(state => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList data={displayedMeals} navigation={navigation} />;
};

export default CategoryMeal;
