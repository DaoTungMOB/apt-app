import { Colors } from "@/constants";
import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.light.tint },
        headerTitleStyle: { color: Colors.light.background },
        headerRightContainerStyle: { paddingRight: 15 },
        headerTintColor: Colors.light.background,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Thêm hóa đơn mới",
        }}
      />
    </Stack>
  );
}
