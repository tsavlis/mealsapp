import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import DefaultText from "./DefaultText";

const MealItem = props => {
  const { item } = props;
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: item.imageUrl }}
              style={styles.bgimage}
            >
              <View style={styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>
                  {item.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{item.duration}m</DefaultText>
            <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;
const styles = StyleSheet.create({
  mealRow: {
    flexDirection: "row"
  },
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "lightgray",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10
  },
  mealHeader: {
    height: "85%"
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%"
  },
  bgimage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center"
  }
});
