import React from "react";
import { Image, Text, XStack, YStack } from "tamagui";
import { Colors, devide_with } from "@/constants";
import { formatVND, TApt } from "@/utils";

const default_img =
  "https://images.unsplash.com/photo-1735857749394-703e8a4d926b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8";

type Props = { apt?: TApt };
export function HomeApartmentItem({ apt }: Props) {
  return (
    <XStack
      borderBottomWidth={1}
      borderBlockColor={Colors.light.borderapp}
      gap={10}
    >
      <Image
        source={{ uri: apt?.thumbnail || default_img }}
        width={devide_with / 3}
        aspectRatio={1}
        borderRadius={4}
      />
      <YStack py={5} justifyContent="space-between">
        <Text fos={16}>
          Mã căn hộ: <Text fow={"bold"}>{apt?.code}</Text>
        </Text>
        <Text fos={16}>
          Số tầng: <Text fow={"bold"}>{apt?.floorNumber} tầng</Text>
        </Text>
        <Text fos={16}>
          Diện tích: <Text fow={"bold"}>{apt?.area}m2</Text>
        </Text>
        <Text fos={16}>
          Giá thuê: <Text fow={"bold"}>{formatVND(apt?.rentPrice)}</Text>
        </Text>
        <Text fos={16}>
          Giá bán: <Text fow={"bold"}>{formatVND(apt?.sellPrice)}</Text>
        </Text>
      </YStack>
    </XStack>
  );
}
