import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Dallin";
  return (
    <View>
      <Text style={styles.header}>Getting started with React Native!</Text>
      <Text style={styles.subHeader}>My name is {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 45
  },
  subHeader: {
    fontSize: 30
  }
});

export default ComponentsScreen;
