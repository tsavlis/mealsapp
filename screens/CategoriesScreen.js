import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data ";
import { Colors } from "../constants/Colors";
import CategoryGridTittle from "../components/CategoryGridTittle";

const CategoriesScreen = props => {
  const { navigation } = props;

  const renderGridItem = itemData => {
    return (
      <CategoryGridTittle
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate("CategoryMeal", {
            title: itemData.item.title,
            Id: itemData.item.id
          });
        }}
      />
    );
  };
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item, index) => item.id}
    />
  );
};

export default CategoriesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});
