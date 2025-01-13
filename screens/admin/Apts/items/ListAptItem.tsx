import React from "react";
import { TApt } from "@/utils";
import { Image, Text, XStack, YStack } from "tamagui";
import { Colors, devide_with } from "@/constants";
import { AptOwner } from ".";
import { AptStatus } from "./AptStatus";
import { Link, useRouter } from "expo-router";

const defaultImage =
  "https://images.unsplash.com/photo-1733964341082-d3d7dda341ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D";
type Props = { data: TApt };
export function ListAptItem({ data }: Props) {
  const router = useRouter();
  const {
    code,
    area,
    floorNumber,
    rentPrice,
    sellPrice,
    status,
    thumbnail,
    _id: apt_id,
  } = data;

  return (
    <Link
      asChild
      href={{
        pathname: "/(tabs_admin)/apt/aptDetail",
        params: {
          apt_id,
        },
      }}
    >
      <XStack
        alignItems="flex-start"
        borderBottomWidth={1}
        borderBottomColor={Colors.light.borderapp}
      >
        <Image
          source={{
            uri: thumbnail || defaultImage,
          }}
          width={devide_with / 3}
          aspectRatio={4/5}
        />
        <YStack gap={5} flex={1}>
          <AptStatus status={status} />
          <YStack gap={5} pl={10}>
            <XStack alignItems="center" justifyContent="space-between">
              <Text>
                Mã căn hộ: <Text fontFamily={"$bold"}>{code}</Text>
              </Text>
            </XStack>
            <Text>
              Thông tin căn hộ:{" "}
              <Text fontFamily={"$bold"}>
                {floorNumber} tầng | {area} m2
              </Text>
            </Text>
            <AptOwner userProlile={data?.userProfile} />
          </YStack>
        </YStack>
      </XStack>
    </Link>
  );
}
