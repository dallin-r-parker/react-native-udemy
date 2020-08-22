import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

export const List: React.FC = () => (
  <Container>
    <Text>List component</Text>
  </Container>
);

const Container = styled.View`
  flex: 1;
  color: white;
  background-color: lightblue;
  align-items: center;
  justify-content: center;
`;
