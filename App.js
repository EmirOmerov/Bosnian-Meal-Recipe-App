import React, { useState } from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MealDetailsScreen from "./Screens/MealsDetailsScreen";
import DessertScreen from "./Screens/DesertScreen";
import CategoriesScreen from "./Screens/CategoryScreen";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import DessertDetailScreen from "./Screens/DessertDetailScreen";
import SearchScreen from "./Screens/SearchScreen";
import FoundMealScreen from "./Screens/FoundMealScreen";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "OpenSans-Bold": {
      uri: require("./assets/fonts/OpenSans-Bold.ttf"),
    },
    "bold-italic": {
      uri: require("./assets/fonts/OpenSans-BoldItalic.ttf"),
    },
    "sans-italic": {
      uri: require("./assets/fonts/OpenSans-Italic.ttf"),
    },
  });
};

const navOptionHandler = () => ({
  headerShown: false,
  cardStyle: {
    backgroundColor: "white",
  },
});

const mealsOptionHandler = () => ({
  headerShown: false,
  cardStyle: {
    backgroundColor: "white",
    marginTop: 0,
    position: "relative",
    height: "100%",
  },
});

const dessertOptionHandler = () => ({
  headerShown: false,
  cardStyle: {
    backgroundColor: "white",
  },
});
const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};
const Mealstack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={mealsOptionHandler}
      />
      <Stack.Screen
        name="MealsDetail"
        component={MealDetailsScreen}
        options={dessertOptionHandler}
      />
    </Stack.Navigator>
  );
};

const Dessertstack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DessertScreen"
        component={DessertScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="DessertDetailScreen"
        component={DessertDetailScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};

const Searchstack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="FoundMealScreen"
        component={FoundMealScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => console.log("Error!")}
      />
    );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? require("./src/Images/homedarkNew.png")
                : require("./src/Images/homenew.png");
            } else if (route.name === "Meals") {
              iconName = focused
                ? require("./src/Images/mealnew.png")
                : require("./src/Images/mealblacknew.png");
            } else if (route.name === "Dessert") {
              iconName = focused
                ? require("./src/Images/cakeblack.png")
                : require("./src/Images/cake.png");
            } else if (route.name === "Search") {
              iconName = focused
                ? require("./src/Images/loupe.png")
                : require("./src/Images/search.png");
            }

            // You can return any component that you like here!
            return (
              <Image
                source={iconName}
                style={{ width: 27, height: 27, marginTop: 10 }}
                resizeMode="contain"
                size={40}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: "red",
          inactiveTintColor: "black",
          labelStyle: {
            fontSize: 12,
            fontFamily: "OpenSans-Bold",
            paddingTop: 5,
          },
          style: {
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "transparent",
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Meals" component={Mealstack} />
        <Tab.Screen name="Dessert" component={Dessertstack} />
        <Tab.Screen name="Search" component={Searchstack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
