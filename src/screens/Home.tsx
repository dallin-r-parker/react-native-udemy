import React from "react";
import { Text } from "react-native";

export const Home: React.FC<{ title: string }> = ({ title }) => (
  <Text>Hello {title}</Text>
);
