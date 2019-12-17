import React, { useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data ";

const MealDetailScreen = props => {
  const { navigation, route } = props;
  const catId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === catId);
  return (
    <View style={styles.container}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="go back to categories"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default MealDetailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
