import React from "react";
import { Image, Text, XStack, YStack } from "tamagui";
import { Colors, devide_with } from "@/constants";
import { formatVND, TApt } from "@/utils";
import { useRouter } from "expo-router";

const default_img =
  "https://images.unsplash.com/photo-1735857749394-703e8a4d926b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8";

type Props = { apt?: TApt };
export function MyAptItem({ apt }: Props) {
  const router = useRouter();
  return (
    <XStack
      onPress={() =>
        router.push({
          pathname: "/(tabs_user)/myApt/myAptDetail",
          params: { apt_id: apt?._id },
        })
      }
      borderBottomWidth={1}
      borderBlockColor={Colors.light.borderapp}
      gap={10}
    >
      <Image
        source={{ uri: apt?.thumbnail || default_img }}
        width={devide_with / 3}
        aspectRatio={3 / 4}
        borderRadius={4}
      />
      <YStack py={5} gap={5}>
        <Text fos={16}>
          Mã căn hộ: <Text ff={"$bold"}>{apt?.code}</Text>
        </Text>
        <Text fos={16}>
          Số tầng: <Text ff={"$bold"}>{apt?.floorNumber} tầng</Text>
        </Text>
        <Text fos={16}>
          Diện tích: <Text ff={"$bold"}>{apt?.area}m2</Text>
        </Text>
        <Text fos={16}>
          Giá thuê: <Text ff={"$bold"}>{formatVND(apt?.rentPrice)}</Text>
        </Text>
        <Text fos={16}>
          Giá bán: <Text ff={"$bold"}>{formatVND(apt?.sellPrice)}</Text>
        </Text>
      </YStack>
    </XStack>
  );
}
