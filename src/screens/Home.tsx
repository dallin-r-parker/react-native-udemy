import React from "react";
import { Text, View, Button } from "react-native";
import styled from "styled-components/native";

export const Home = ({ navigation }) => (
  <Container>
    <Text>Hello from Home Page</Text>
    <Button title="Login" onPress={() => navigation.navigate("Login")} />
  </Container>
);

const Container: React.FC = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
