import { Colors } from "@/constants";
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
          headerTitle: "Lịch sử thuê/mua căn hộ",
        }}
      />
    </Stack>
  );
}
