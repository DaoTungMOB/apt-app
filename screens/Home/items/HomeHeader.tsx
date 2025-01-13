import { AppButtonNormal } from "@/elements";
import { useRouter } from "expo-router";
import React from "react";
import { Avatar, H4, H6, Heading, Text, XStack, YStack } from "tamagui";

export function HomeHeader() {
  const router = useRouter()
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
        <H4 ff={'$bold'} color={"$background"}>
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
          <Text color={"$background"} ff={"$semiBold"} fos={16}>
            Nguyen Van A
          </Text>
        </XStack>
      </YStack>
      <AppButtonNormal
        bg={"$background"}
        color={"$tint"}
        ff={'$bold'}
        fos={16}
        px={12}
        height={38} onPress={() => router.push('/contact')}
      >
        Liên hệ
      </AppButtonNormal>
    </XStack>
  );
}
