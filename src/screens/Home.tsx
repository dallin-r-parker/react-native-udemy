import React from "react";
import { Text, Button } from "react-native";
import styled from "styled-components/native";
import { List } from "@ui/list";

export const Home: React.FC<{ navigation: any }> = ({ navigation }) => (
  <Container>
    <Text>Hello from Home Page</Text>
    <List />
    <Button title="Login" onPress={() => navigation.navigate("Login")} />
  </Container>
);

const Container: React.FC = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
