import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = props => {
  const { navigation, route } = props;

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
        data={props.data}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MealList;
