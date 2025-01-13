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

export function AccountScreen() {
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const { data, isLoading } = useQueryMyProfile();
  const logout = async () => {
    await AccountService.remove();
    router.push("/(auth)");
  };
  if (isLoading) return <AppLoading />;
  return (
    <AppContainer>
      <XStack alignItems="center" justifyContent="center" pt={50}>
        <Avatar circular size="$14">
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
      </XStack>
      <YStack py={20} gap={5}>
        <Text fos={16} ff={"$bold"} textAlign="center">
          {data?.email}
        </Text>
        <Text fos={18} ff={"$bold"} textAlign="center">
          {data?.lastName} {data?.firstName}
        </Text>
      </YStack>
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
        <AccountInfoField label={"Đổi mật khẩu"} Icon={ChevronRightSquare} />
        <AccountInfoField
          label={"Đăng xuất tài khoản"}
          Icon={LogOut}
          onPress={logout}
        />
      </View>
    </AppContainer>
  );
}
