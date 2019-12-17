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
import FiltersScreen from "../screens/FiltersScreen";

import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const FilterStack = createStackNavigator();

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
        headerTitleStyle: { color: "white", fontFamily: "open-sans-bold" },
        headerTintColor: "#fff"
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meals Categories",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={26}
              color="white"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
          headerLeftContainerStyle: { marginLeft: 30 }
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
          headerTitleStyle: { maxWidth: 300, fontFamily: "open-sans" },
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

const FavoriteStackNav = ({ navigation, route }) => {
  return (
    <FavoriteStack.Navigator
      headerMode="float"
      animation="fade"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: Colors.accent
        },
        headerTitleStyle: { color: "white", fontFamily: "open-sans-bold" },
        headerTintColor: "#fff"
      }}
    >
      <FavoriteStack.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Your Favorites",
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={26}
              color="white"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
          headerLeftContainerStyle: { marginLeft: 30 }
        }}
      />
      <FavoriteStack.Screen
        name="MealDetailScreen"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: getHeaderTitle(route),
          headerTitleStyle: { maxWidth: 300, fontFamily: "open-sans" },
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
    </FavoriteStack.Navigator>
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
    <Tab.Screen name="Favorites" component={FavoriteStackNav} />
  </Tab.Navigator>
);
const FilterStackNav = ({ navigation, route }) => {
  return (
    <FilterStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: Colors.accent
        },
        headerTitleStyle: { color: "white", fontFamily: "open-sans-bold" },
        headerTintColor: "#fff"
      }}
    >
      <FilterStack.Screen
        component={FiltersScreen}
        name="Filters"
        options={{
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={26}
              color="white"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="ios-save"
              size={26}
              color="white"
              onPress={() => {
                console.log(route.state.routes[route.state.index].params);
              }}
            />
          ),
          headerRightContainerStyle: { marginRight: 30 },
          headerLeftContainerStyle: { marginLeft: 30 }
        }}
      />
    </FilterStack.Navigator>
  );
};
const DrawerNav = () => (
  <Drawer.Navigator
    drawerContentOptions={{
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: "open-sans"
      }
    }}
  >
    <Drawer.Screen name="MealsFav" component={HomeTabNavigator} />
    <Drawer.Screen name="Filters" component={FilterStackNav} />
  </Drawer.Navigator>
);
const AppNavigator = () => {
  return (
    <NavigationNativeContainer>
      <AppStack.Navigator>
        <Stack.Screen
          name="Home"
          component={DrawerNav}
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
