import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "@/constants";
import { HeaderRightApt } from "@/screens";
import HeaderRightAptDetail from "@/screens/admin/AptDetail/items/HeaderRightAptDetail";

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
          headerTitle: "Danh sách căn hộ",
          headerRight: HeaderRightApt,
        }}
      />
      <Stack.Screen
        name="addApt"
        options={{ headerTitle: "Thêm mới căn hộ" }}
      />
      <Stack.Screen
        name="aptDetail"
        options={{
          headerTitle: "Chi tiết căn hộ",
        }}
      />
      <Stack.Screen
        name="editApt"
        options={{
          headerTitle: "Chỉnh sửa căn hộ",
        }}
      />
    </Stack>
  );
}
