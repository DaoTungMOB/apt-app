import React from "react";
import { AppContainer } from "@/elements";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Avatar, Text, XStack, YStack } from "tamagui";
import { AccountService, useAppAccount } from "@/utils";
import { Colors } from "@/constants";
import { ChevronRight, LogOut } from "@tamagui/lucide-icons";
import { useRouter } from "expo-router";

export default function MyProfile() {
  const router = useRouter();
  const { top } = useSafeAreaInsets();
  const account = useAppAccount();
  const logout = async () => {
    await AccountService.remove();
    router.push("/(auth)");
  };
  return (
    <AppContainer>
      <XStack alignItems="center" justifyContent="center" pt={20}>
        <Avatar circular size="$14">
          <Avatar.Image
            accessibilityLabel="Cam"
            src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
          />
          <Avatar.Fallback backgroundColor="$blue10" />
        </Avatar>
      </XStack>
      <YStack py={20} gap={5}>
        <Text fos={16} fow={"bold"} textAlign="center">
          {account?.userProlile?.email}
        </Text>
        <Text fos={18} fow={"bold"} textAlign="center">
          {account?.userProlile?.lastName} {account?.userProlile?.firstName}
        </Text>
      </YStack>
      <XStack
        onPress={logout}
        borderBottomWidth={1}
        borderTopWidth={1}
        borderBottomColor={Colors.light.borderapp}
        borderTopColor={Colors.light.borderapp}
        px={20}
        py={10}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fos={16} fow={"bold"}>
          Đăng xuất tài khoản
        </Text>
        <LogOut />
      </XStack>
      <XStack
        borderBottomWidth={1}
        borderBottomColor={Colors.light.borderapp}
        px={20}
        py={10}
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fos={16} fow={"bold"}>
          Thông tin tài khoản
        </Text>
        <ChevronRight />
      </XStack>
    </AppContainer>
  );
}
