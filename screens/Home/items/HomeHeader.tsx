import { AppButtonNormal } from "@/elements";
import { useAppAccount } from "@/utils";
import { useRouter } from "expo-router";
import React from "react";
import { Avatar, H4, H6, Heading, Text, XStack, YStack } from "tamagui";

const defaultAvatar = require("@/utils/images/th.jpg");
export function HomeHeader() {
  const router = useRouter();
  const account = useAppAccount();
  return (
    <XStack
      bg={"$tint"}
      pt={5}
      pb={15}
      px={15}
      justifyContent="space-between"
      alignItems="center"
    >
      <YStack gap={5} flex={1}>
        <H4 ff={"$bold"} color={"$background"}>
          Xin chào 👋
        </H4>
        <XStack alignItems="center" gap={10}>
          <Avatar circular size={40}>
            <Avatar.Image
              accessibilityLabel="Cam"
              src={account?.userProlile?.avatar || defaultAvatar}
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <Text color={"$background"} ff={"$semiBold"} fos={16}>
            {account?.userProlile?.lastName} {account?.userProlile?.firstName}
          </Text>
        </XStack>
      </YStack>
      <AppButtonNormal
        bg={"$background"}
        color={"$tint"}
        ff={"$bold"}
        fos={16}
        px={12}
        height={38}
        onPress={() => router.push("/createContact")}
      >
        Liên hệ
      </AppButtonNormal>
    </XStack>
  );
}
