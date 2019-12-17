import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FiltersScreen = props => {
  return (
    <View style={styles.container}>
      <Text>FiltersScreen</Text>
    </View>
  );
};

export default FiltersScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
