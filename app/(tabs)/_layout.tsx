import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import Ionicons from "@expo/vector-icons/Ionicons";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LogIn, OctagonAlert, UserPlus } from "lucide-react-native";

import { AuthProvider, useAuth } from "@/hooks/AuthContext"; // ✅ add provider

function TabLayoutInner() {
  const colorScheme = useColorScheme();
  const { userType } = useAuth(); // now it works ✅

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      {/* Common Tabs */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <LogIn size={28} color={color} />,
        }}
      />

      {/* Show different dashboards */}
      {userType === "practitioner" && (
        <Tabs.Screen
          name="Dashboard"
          options={{
            title: "Dashboard",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
      )}

      {/* Client dashboard */}
      {userType === "client" && (
        <Tabs.Screen
          name="clientDashboard"
          options={{
            title: "Dashboard",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
      )}

      {/* Shared tabs */}
      <Tabs.Screen
        name="iRegister"
        options={{
          title: "iRegister",
          tabBarIcon: ({ color }) => <UserPlus size={28} color={color} />,
        }}
      />

      {userType === "practitioner" && (
        <>
          <Tabs.Screen
            name="cpd"
            options={{
              title: "CPD",
              tabBarIcon: ({ color }) => (
                <Ionicons name="stats-chart" size={28} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="payments"
            options={{
              title: "Payments",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="payment" size={28} color={color} />
              ),
            }}
          />
        </>
      )}

      <Tabs.Screen
        name="complaints"
        options={{
          title: "Complaints",
          tabBarIcon: ({ color }) => <OctagonAlert size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}

export default function TabLayout() {
  return (
    <AuthProvider>
      <TabLayoutInner />
    </AuthProvider>
  );
}
