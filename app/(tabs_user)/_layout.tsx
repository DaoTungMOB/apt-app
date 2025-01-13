import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Building2, CircleUserRound } from "@tamagui/lucide-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerStyle: { backgroundColor: Colors.light.tint },
        headerTitleStyle: { color: Colors.light.background },
        headerTintColor: Colors.light.background,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="house.fill" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="myApt"
        options={{
          title: "Căn hộ của tôi",
          tabBarIcon: ({ color }) => <Building2 size={24} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Người dùng",
          tabBarIcon: ({ color }) => (
            <CircleUserRound size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
