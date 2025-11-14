import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AppProvider } from "./src/contexts/AppContext";

import HomeScreen from "./src/screens/HomeScreen";
import New1Screen from "./src/screens/New1Screen";
import New2Screen from "./src/screens/New2Screen";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="New1" component={New1Screen} />
          <Tab.Screen name="New2" component={New2Screen} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}
