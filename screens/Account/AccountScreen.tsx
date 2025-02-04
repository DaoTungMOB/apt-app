import React from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Avatar, Image, Text, View, XStack, YStack } from "tamagui";
import { ChevronRightSquare, LogOut } from "@tamagui/lucide-icons";
import { AppContainer, AppLoading } from "@/elements";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AccountService } from "@/utils";
import { Colors } from "@/constants";
import { AccountInfoField } from "./items/AccountInfoField";
import { useQueryMyProfile } from "../UpdateProfile/modules/useQueryMyProfile";
import { AccountHero } from "./items/AccountHero";

export function AccountScreen() {
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const { isLoading } = useQueryMyProfile();
  const logout = async () => {
    await AccountService.remove();
    router.push("/(auth)");
  };
  if (isLoading) return <AppLoading />;
  return (
    <AppContainer>
      <AccountHero />
      <View
        mt={20}
        mx={10}
        borderTopWidth={1}
        borderTopColor={Colors.light.borderapp}
      >
        <AccountInfoField
          label={"Thay đổi thông tin tài khoản"}
          Icon={ChevronRightSquare}
          onPress={() => router.push("/updateProfile")}
        />
        <AccountInfoField
          label={"Đổi mật khẩu"}
          Icon={ChevronRightSquare}
          onPress={() => router.push("/changePassword")}
        />
        <AccountInfoField
          label={"Đăng xuất tài khoản"}
          Icon={LogOut}
          onPress={logout}
        />
      </View>
    </AppContainer>
  );
}
