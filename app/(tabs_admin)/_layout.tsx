import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Building2, CircleUserRound, Mails } from "@tamagui/lucide-icons";
import { HeaderRightApt } from "@/screens";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: "absolute",
          },
          default: {},
        }),
        headerStyle: { backgroundColor: Colors.light.tint },
        headerTitleStyle: { color: Colors.light.background },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Trang chủ admin",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={24} name="house.fill" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="apt"
        options={{
          title: "Căn hộ",
          tabBarIcon: ({ color }) => <Building2 size={24} color={color} />,
          headerShown: false
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Liên hệ",
          tabBarIcon: ({ color }) => <Mails size={24} color={color} />,
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
