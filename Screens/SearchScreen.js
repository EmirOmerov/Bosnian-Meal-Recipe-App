import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import CustomHeader from "../components/CustomHeader";
import { DESSERT, MEALS } from "../data/data";
const image = {
  uri: "https://wallpaperaccess.com/full/260161.jpg",
};

const SearchScreen = (props) => {
  const [search, setSearch] = useState("");
  const combineData = [...DESSERT, ...MEALS];
  const [isLoad, setLoad] = useState(false);
  const [dataName, setDataName] = useState([]);

  const handleSearchUpdate = (search) => {
    setSearch(search);
    const foundMeal = combineData.find((element) => {
      if (element.title === search) {
        setDataName(element);
        setLoad(true);
        return true;
      } else if (element.title != search) setLoad(false);
      return false;
    });
  };

  return (
    <View style={styles.screen}>
      <CustomHeader title="Search" style={styles.headerComponent} />
      <ImageBackground source={image} style={styles.imageContainer}>
        <View style={styles.searchBar}>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={handleSearchUpdate}
            value={search}
            lightTheme={true}
          />
          {isLoad ? (
            <TouchableOpacity
              style={styles.foundMealContainer}
              onPress={() => {
                props.navigation.navigate({
                  name: "FoundMealScreen",
                  params: {
                    foundMealName: search,
                  },
                });
              }}
            >
              <Text style={styles.textFoundMeal}>{search} </Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.foundMealContainer}>
              <Text style={styles.textNotFoundMeal}>Not Found!</Text>
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  searchBar: {
    position: "absolute",
    top: 30,
    width: "100%",
  },
  listMeals: {
    justifyContent: "center",
    alignItems: "center",
  },
  foundMealContainer: {
    borderWidth: 3,
    alignSelf: "center",
    top: 6,
    height: 50,
    width: 200,
    borderRadius: 8,
    flex: 1,
    justifyContent: "center",
    paddingLeft: 30,
  },
  textFoundMeal: {
    fontSize: 20,
  },
  textNotFoundMeal: {
    fontSize: 15,
    justifyContent: "center",
  },
});

export default SearchScreen;
