import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

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
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />

      {/* Explore (if you still want it) */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />

      {/* Practitioner (you can rename/remove if not needed) */}
      <Tabs.Screen
        name="practitioner"
        options={{
          title: 'Practitioner',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />

      {/* iRegister (Public) */}
      <Tabs.Screen
        name="iRegister"
        options={{
          title: 'iRegister',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="magnifyingglass" color={color} />
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
            <IconSymbol size={28} name="exclamationmark.bubble.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
