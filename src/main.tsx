import React from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { registerRootComponent } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "@screen/Home";
import { Login } from "@screen/Login";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
);

registerRootComponent(App);
