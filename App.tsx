import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";

const App = () => (
  <Container>
    <Text>Working</Text>
    <StatusBar style="auto" />
  </Container>
);

const Container: React.FC = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default App;
