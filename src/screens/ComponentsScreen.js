import React from "react";
import { Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return <Text style={StyleSheet.textStyle}>This is the screen</Text>;
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30
  }
});

export default ComponentsScreen;
