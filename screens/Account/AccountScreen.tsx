import React from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { Image, Text, XStack, YStack } from "tamagui";
import { ClipboardEdit } from "@tamagui/lucide-icons";

export function AccountScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1732823170284-0d3da1fce106?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          w={"100%"}
          h={"100%"}
          objectFit="cover"
        />
      }
    >
      <YStack px={15} gap={20}>
        <XStack alignItems="center" justifyContent="space-between">
          <Text fow={"bold"} fontSize={20} flex={1}>
            Thông tin Tài khoản
          </Text>
          <XStack>
            <ClipboardEdit size={20} color={"$tint"} />
          </XStack>
        </XStack>
        <YStack gap={10}>
          <XStack bbc={"$gray1"} bbw={1}>
            <Text fow={"bold"} fos={16}>
              Họ và tên:{" "}
            </Text>
            <Text fos={16}>Nguyễn Văn A</Text>
          </XStack>
          <XStack bbc={"$gray1"} bbw={1}>
            <Text fow={"bold"} fos={16}>
              Số căn cước công dân:{" "}
            </Text>
            <Text fos={16}>0123456789</Text>
          </XStack>
          <XStack bbc={"$gray1"} bbw={1}>
            <Text fow={"bold"} fos={16}>
              Số điện thoại:{" "}
            </Text>
            <Text fos={16}>01234567</Text>
          </XStack>
          <XStack bbc={"$gray1"} bbw={1}>
            <Text fow={"bold"} fos={16}>
              Email:{" "}
            </Text>
            <Text fos={16}>abc@gmail.com</Text>
          </XStack>
        </YStack>
      </YStack>
    </ParallaxScrollView>
  );
}
