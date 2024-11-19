// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserAutentication from "../screens/Authentication/UserAutentication";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({ colorScheme }) {
  //   const [isLoggedIn, setIsLoggedIn] = useState(null);

  //   useEffect(() => {
  //     const checkLoginStatus = async () => {
  //       try {
  //         const userData = await AsyncStorage.getItem("user_data");
  //         if (userData !== null) {
  //           setIsLoggedIn(true);
  //         } else {
  //           setIsLoggedIn(false);
  //         }
  //       } catch (error) {
  //         console.error("Error checking AsyncStorage:", error);
  //         setIsLoggedIn(false);
  //       }
  //     };

  //     checkLoginStatus();
  //   }, []);

  //   if (isLoggedIn === null) {
  //     return null;
  //   }

  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"UserAuthentication"}
    >
      <Stack.Screen
        name="UserAuthentication"
        component={UserAutentication}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
