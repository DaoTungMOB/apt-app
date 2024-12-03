import { AppButtonNormal } from "@/elements";
import React from "react";
import { Avatar, H4, H6, Heading, Text, XStack, YStack } from "tamagui";

export function HomeHeader() {
  return (
    <XStack
      bg={"$tint"}
      py={10}
      px={15}
      justifyContent="space-between"
      alignItems="center"
    >
      <YStack gap={5} flex={1}>
        <H4 fow={"bold"} color={"$background"}>
          Xin chào 👋
        </H4>
        <XStack alignItems="center" gap={10}>
          <Avatar circular size={40}>
            <Avatar.Image
              accessibilityLabel="Cam"
              src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
            />
            <Avatar.Fallback backgroundColor="$blue10" />
          </Avatar>
          <Text color={"$background"} fow={"bold"} fos={18}>
            Nguyen Van A
          </Text>
        </XStack>
      </YStack>
      <AppButtonNormal bg={"$background"} color={'$tint'} fow={'bold'} fos={18} px={14}>Liên hệ</AppButtonNormal>
    </XStack>
  );
}
