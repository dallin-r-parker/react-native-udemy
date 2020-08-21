import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
  return <Title>Howdy from ComponentScreen</Title>;
};

const Title = styled.Text`
  color: red;
  text-align: center;
  font-size: 16px;
`;

// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 20,
//   },
// });

export default ComponentScreen;
