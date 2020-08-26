import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native-gesture-handler";
import { Text } from "react-native";

// NOTE: FlatList react-native docs https://tinyurl.com/y4cg2lxp

export const List: React.FC = () => {
  // NOTE: alternatively to using the 'key' property is the "keyExtractor" prop on <FlatList />
  // the downside to the "keyExtractor" is that it's happening at runtime as opposed to in advance
  // "key" property must be UNIQUE & String
  const friends = [
    { name: "Mikayda", key: "1" },
    { name: "Trevor", key: "2" },
    { name: "Hayley", key: "3" },
    { name: "Cameron", key: "4" },
  ];
  return (
    <>
      <Text>Here is my Friend List</Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => <Friend>{item.name}</Friend>}
      />
    </>
  );
};

const Friend = styled.Text`
  margin-vertical: 25;
  height: 30;
  width: 100;
  text-align: center;
  border: 3px solid lightblue;
`;
