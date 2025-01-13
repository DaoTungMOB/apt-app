import { Stack } from "expo-router";
import { Colors } from "@/constants";

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
        name="myapt"
        options={{
          headerTitle: "Căn hộ của tôi",
        }}
      />
      <Stack.Screen
        name="myAptDetail"
        options={{
          headerTitle: "Chi tiết căn hộ của tôi",
        }}
      />
      <Stack.Screen
        name="utilityDetail"
        options={{
          headerTitle: "Chi tiết hóa đơn dịch vụ",
        }}
      />
    </Stack>
  );
}
