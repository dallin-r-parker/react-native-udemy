import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

export const Login = () => (
  <Container>
    <Text>Hello from Login Page</Text>
  </Container>
);

const Container: React.FC = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
