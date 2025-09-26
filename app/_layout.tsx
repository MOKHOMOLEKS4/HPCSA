import { Stack } from "expo-router";
import React from "react";
import { AuthProvider } from "../hooks/AuthContext"; // 👈 import our context

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AuthProvider>
  );
}
