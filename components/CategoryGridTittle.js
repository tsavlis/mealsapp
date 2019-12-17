import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from "react-native";

const CategoryGridTittle = props => {
  return (
    <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
      <View
        style={{ ...{ backgroundColor: props.color }, ...styles.container }}
      >
        <Text style={styles.title} numberOfLines={2}>
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryGridTittle;
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
    height: 150,
    elevation: 5,
    overflow: "hidden",
    borderRadius: 10
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  title: {
    fontFamily: "open-sans",
    fontSize: 22,
    textAlign: "right"
  }
});
