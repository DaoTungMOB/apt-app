import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TamaguiProvider } from "tamagui";
import tamaguiConfig from "@/tamagui.config";
import {
  AppGlobalLoading,
  appGlobalLoadingRef,
} from "@/elements/AppGlobalLoading";
import Toast from "react-native-toast-message";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "@/constants";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Nunito: require("../assets/fonts/Nunito-Regular.ttf"),
    NunitoMedium: require("../assets/fonts/Nunito-Medium.ttf"),
    NunitoSemiBold: require("../assets/fonts/Nunito-SemiBold.ttf"),
    NunitoBold: require("../assets/fonts/Nunito-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <Stack
                screenOptions={{
                  headerShown: false,
                  headerStyle: { backgroundColor: Colors.light.tint },
                  headerTitleStyle: { color: Colors.light.background },
                  headerTintColor: Colors.light.background,
                }}
              >
                <Stack.Screen name="(auth)" />
                <Stack.Screen
                  name="updateProfile"
                  options={{
                    headerShown: true,
                    title: "Cập nhật thông tin tài khoản",
                  }}
                />
                <Stack.Screen
                  name="createContact"
                  options={{ headerShown: true, title: "Liên hệ" }}
                />
                <Stack.Screen
                  name="changePassword"
                  options={{ headerShown: true, title: "Đổi mật khẩu" }}
                />
                <Stack.Screen
                  name="aptAvaiableDetail"
                  options={{ headerShown: true, title: "Chi tiết căn hộ" }}
                />
                <Stack.Screen
                  name="payment"
                  options={{ headerShown: true, title: "Thanh toán hóa đơn" }}
                />
                <Stack.Screen
                  name="forgotPassword"
                  options={{ headerShown: true, title: 'Quên mật khẩu'}}
                />
                <Stack.Screen name="(tabs_user)" />
                <Stack.Screen name="(tabs_admin)" />
                <Stack.Screen name="+not-found" />
              </Stack>

              <AppGlobalLoading ref={appGlobalLoadingRef} />
              <Toast />
              <StatusBar style="light" backgroundColor={Colors.light.tint} />
            </ThemeProvider>
          </TamaguiProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
