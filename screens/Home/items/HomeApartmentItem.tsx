import React from "react";
import { Image, Text, XStack, YStack } from "tamagui";
import { Colors, devide_with } from "@/constants";
import { formatVND, TApt } from "@/utils";
import { useRouter } from "expo-router";

const default_img =
  "https://images.unsplash.com/photo-1735857749394-703e8a4d926b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8";

type Props = { apt?: TApt };
export function HomeApartmentItem({ apt }: Props) {
  const router = useRouter();
  return (
    <XStack
      borderBottomWidth={1}
      borderBlockColor={Colors.light.borderapp}
      mx={10}
      py={5}
      gap={10}
      flex={1}
      onPress={() => {
        router.push({
          pathname: "/aptAvaiableDetail",
          params: { apt_id: apt?._id },
        });
      }}
    >
      <Image
        source={{ uri: apt?.thumbnail || default_img }}
        width={devide_with / 3.3}
        aspectRatio={3 / 4}
        borderRadius={2}
      />
      <YStack flex={1}>
        <Text fos={16}>
          Mã: <Text ff={"$bold"}>{apt?.code}</Text>{" "}
          <Text fos={16}>
            ({apt?.floorNumber} tầng, {apt?.area} m2)
          </Text>
        </Text>
        <Text fos={16}>
          Giá thuê: <Text ff={"$bold"}>{formatVND(apt?.rentPrice)}</Text>
        </Text>
        <Text fos={16}>
          Giá bán: <Text ff={"$bold"}>{formatVND(apt?.sellPrice)}</Text>
        </Text>
        {/* <Text color={"#4b5264"} fos={16} mt={5} numberOfLines={3}>
          Tamagui UI is an open source collection of "compound components " that
          all work on both on web and React Native.
        </Text> */}
      </YStack>
    </XStack>
  );
}
