import React, { useState, useEffect, useCallback } from "react";
import { View, Button, StyleSheet, Switch } from "react-native";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals.action";
const FilterSwitch = props => {
  return (
    <View style={styles.filterContent}>
      <DefaultText>{props.label}</DefaultText>
      <Switch
        trackColor={{ true: Colors.accent }}
        thumbColor={"white"}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};
const FiltersScreen = props => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  useEffect(() => {
    const array = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      isVegetarian: isVegetarian
    };
    dispatch(setFilters(array));
    navigation.setParams({ filters: array });
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  return (
    <View style={styles.container}>
      <DefaultText style={styles.title}>
        Available Filters / Restrictions
      </DefaultText>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={newValue => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={newValue => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={newValue => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={newValue => setIsVegetarian(newValue)}
      />
    </View>
  );
};

export default FiltersScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center"
  },
  filterContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 20
  },
  title: {
    margin: 20,
    fontSize: 22,
    textAlign: "center"
  }
});
