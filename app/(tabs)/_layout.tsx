import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { LogIn, OctagonAlert, User, UserPlus } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      {/* Home */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <LogIn size={28} color={color} />
          ),
        }}
      />

      {/* Explore (if you still want it) */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      {/* Practitioner (you can rename/remove if not needed) */}
      <Tabs.Screen
        name="practitioner"
        options={{
          title: 'Practitioner',
          tabBarIcon: ({ color }) => (
            <User size={24} color={color} />
          ),
        }}
      />

      {/* iRegister (Public) */}
      <Tabs.Screen
        name="iRegister"
        options={{
          title: 'iRegister',
          tabBarIcon: ({ color }) => (
            <UserPlus size={28}  color={color} />
          ),
        }}
      />

      {/* CPD Compliance (Authenticated) */}
      <Tabs.Screen
        name="cpd"
        options={{
          title: 'CPD',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="chart.bar.fill" color={color} />
          ),
        }}
      />

      {/* Account & Payments (Authenticated) */}
      <Tabs.Screen
        name="payments"
        options={{
          title: 'Payments',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="creditcard.fill" color={color} />
          ),
        }}
      />

      {/* Log a Complaint (Public + Authenticated) */}
      <Tabs.Screen
        name="complaints"
        options={{
          title: 'Complaints',
          tabBarIcon: ({ color }) => (
            <OctagonAlert size={28}  color={color} />
          ),
        }}
      />
      {/*Login page */} 


    </Tabs>
  );
}
