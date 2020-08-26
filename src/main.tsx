import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { registerRootComponent } from "expo";
import { List } from "@ui/list";

const App = () => {
  return (
    <Container>
      <Text>Working</Text>
      <List />

      <StatusBar style="auto" />
    </Container>
  );
};

const Container: React.FC = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

registerRootComponent(App);
