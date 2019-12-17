import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetailScreen = props => {
  return (
    <View style={styles.container}>
      <Text>MealDetailScreen</Text>
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
