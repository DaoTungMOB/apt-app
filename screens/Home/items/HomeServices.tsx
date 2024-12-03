import React from "react";
import { H4, H5, Square, Text, XStack, YStack } from "tamagui";
import { devide_with } from "@/constants";
import { Trash2 } from "@tamagui/lucide-icons";

const box_size = (devide_with - 15 * 3) / 2;

export function HomeServices() {
  return (
    <YStack p={15} gap={10}>
      <H4 fow={"bold"}>Dịch vụ căn hộ</H4>
      <XStack justifyContent="space-between">
        <Square
          bg={"#fff"}
          borderWidth={1}
          borderColor={"$borderapp"}
          size={box_size}
          borderRadius={12}
          gap={20}
          elevation={2}
        >
          <Trash2 size={36} color={"$tint"} />
          <Text
            fow={"bold"}
            fos={16}
            color={"$tint"}
            width={"80%"}
            ta={"center"}
          >
            Dịch vụ vệ sinh căn hộ
          </Text>
        </Square>
        <Square
          bg={"#fff"}
          borderWidth={1}
          borderColor={"$borderapp"}
          size={box_size}
          borderRadius={12}
          gap={20}
          elevation={2}
        >
          <Trash2 size={36} color={"$tint"} />
          <Text
            fow={"bold"}
            fos={16}
            color={"$tint"}
            ta={"center"}
            width={"80%"}
          >
            Dịch vụ sửa chữa bảo trì đồ dung
          </Text>
        </Square>
      </XStack>
    </YStack>
  );
}
