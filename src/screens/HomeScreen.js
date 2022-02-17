import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomNavigator from "./../components/BottomNavigator";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Home Screen</Text>
      </View>
      <BottomNavigator screen="Home" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  main: {
    flex: 9,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
