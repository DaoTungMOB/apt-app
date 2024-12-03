import React from "react";
import { Image, Text, XStack, YStack } from "tamagui";

type Props = {
  apt: {
    id: number;
    image: string;
    totalFloor: number;
    totalRooms: number;
    area: number;
    "Owner's name": string;
  };
};

export function MyAptItem({ apt }: Props) {
  return (
    <YStack bg={"#0a7ea41a"} br={12}>
      <Image
        source={{ uri: apt.image }}
        width={"100%"}
        aspectRatio={3 / 2}
        borderRadius={12}
      />
      <YStack p={15}>
        <XStack alignItems="center">
          <Text fow={"bold"} fos={16}>
            Chủ sở hữu:{" "}
          </Text>
          <Text fos={16}>{apt["Owner's name"]}</Text>
        </XStack>
        <XStack alignItems="center">
          <Text fow={"bold"} fos={16}>
            Số tầng:{" "}
          </Text>
          <Text fos={16}>{apt.totalFloor}</Text>
        </XStack>
        <XStack alignItems="center">
          <Text fow={"bold"} fos={16}>
            Số phòng:{" "}
          </Text>
          <Text fos={16}>{apt.totalRooms}</Text>
        </XStack>
        <XStack alignItems="center">
          <Text fow={"bold"} fos={16}>
            Diện tích:{" "}
          </Text>
          <Text fos={16}>{apt.area}m2</Text>
        </XStack>
      </YStack>
    </YStack>
  );
}
