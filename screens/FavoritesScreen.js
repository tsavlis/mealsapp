import React from "react";
import { View, StyleSheet } from "react-native";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import DefaultText from "../components/DefaultText";
const FavoritesScreen = props => {
  const { navigation, route } = props;
  const favMeals = useSelector(state => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.container}>
        <DefaultText>No favorites found.Start adding some!</DefaultText>
      </View>
    );
  }
  return <MealList data={favMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default FavoritesScreen;
