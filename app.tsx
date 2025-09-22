import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./app/(tabs)/explore";
import DoctorRegisterScreen from "./app/(tabs)/iRegister"; // 👈 your register form

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterPractitioner"
          component={DoctorRegisterScreen}
          options={{ title: "Register Practitioner" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
