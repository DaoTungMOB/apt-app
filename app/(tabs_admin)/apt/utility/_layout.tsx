import { Colors } from "@/constants";
import { UtilityDetailHeaderRight } from "@/screens/admin/UtilityDetail/items/UtilityDetailHeaderRight";
import { Stack } from "expo-router";

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
          headerTitle: "Thêm mới dịch vụ",
        }}
      />
      <Stack.Screen
        name="utilityDetail"
        options={{
          headerTitle: "Chi tiết dịch vụ",
        }}
      />
      <Stack.Screen
        name="editUtility"
        options={{
          headerTitle: "Chỉnh sửa dịch vụ",
        }}
      />
    </Stack>
  );
}
