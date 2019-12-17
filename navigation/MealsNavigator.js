import React from "react";
import { NavigationNativeContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMeal from "../screens/CategoryMeal";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

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

const MealsNavigator = ({ navigation, route }) => {
  return (
    <Stack.Navigator
      headerMode="float"
      animation="fade"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: { backgroundColor: Colors.accent },
        headerTitleStyle: { color: "white" },
        headerTintColor: "#fff"
      }}
      headerMode="float"
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meals Categories"
        }}
      />
      <Stack.Screen
        name="CategoryMeal"
        component={CategoryMeal}
        options={({ route }) => ({
          title: getHeaderTitle(route)
          // headerShown: shouldheaderBeShown(route)
        })}
      />
      <Stack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: getHeaderTitle(route),
          headerTitleStyle: { maxWidth: 300 },
          headerRight: () => (
            <Ionicons
              size={23}
              color={"white"}
              name={"ios-star"}
              onPress={() => {
                alert("123");
              }}
            />
          ),
          headerRightContainerStyle: {
            marginRight: 20
          }
          // headerShown: shouldheaderBeShown(route)
        })}
      />
    </Stack.Navigator>
  );
};
const HomeTabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "white",
      activeBackgroundColor: Colors.accent,
      inactiveTintColor: Colors.accent,
      labelStyle: { paddingBottom: 3 }
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Meals") {
          iconName = "ios-restaurant";
        } else if (route.name === "Favorites") {
          iconName = "ios-star";
        } else if (route.name === "Settings") {
          iconName = "ios-settings";
        }
        return <Ionicons name={iconName} size={23} color={color} />;
      }
    })}
  >
    <Tab.Screen name="Meals" component={MealsNavigator} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
  </Tab.Navigator>
);
const AppNavigator = () => {
  return (
    <NavigationNativeContainer>
      <AppStack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={({ route }) => ({
            headerShown: false
            // title: getHeaderTitle(route),
            //  headerShown: shouldheaderBeShown(route)
          })}
        />
      </AppStack.Navigator>
    </NavigationNativeContainer>
  );
};

export default AppNavigator;
