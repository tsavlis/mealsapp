import React from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeal from "../screens/CategoryMeal";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";
const Stack = createStackNavigator();

function getHeaderTitle(route) {
  const routeName = route.params ? route.params.title : "Categories";
  return routeName;
}
function shouldheaderBeShown(route) {
  const routeName = route.params ? route.params.title : "Categories";

  switch (routeName) {
    case "Categories":
      return false;
  }
}
const MealsNavigator = () => {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        headerMode="float"
        animation="fade"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "home",
            headerStyle: { backgroundColor: Colors.accent }
          }}
        />
        <Stack.Screen
          name="CategoryMeal"
          component={CategoryMeal}
          options={({ route }) => ({
            title: getHeaderTitle(route),
            headerStyle: { backgroundColor: Colors.primary }
            // headerShown: shouldheaderBeShown(route)
          })}
        />
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
};

export default MealsNavigator;
