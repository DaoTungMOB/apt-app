import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Colors } from "@/constants";
import { useQueryApt } from "../admin/AptDetail/modules/useQueryApt";
import { AptInformation } from "../admin/AptDetail/items/AptInformation";
import { XStack } from "tamagui";
import { AptStatus } from "../admin/Apts/items/AptStatus";
import { AptImages } from "../admin/AptDetail/items/AptImages";
import { AppLoading } from "@/elements";
import { formatVND } from "@/utils";
import { useQueryAptDetail } from "./modules/useQueryAptDetail";
import { MyAptDetailOwner } from "./items/MyAptDetailOwner";
import { MyAptDetailUtilities } from "./items/MyAptDetailUtilities";

export function MyAptDetailScreen() {
  const { apt_id } = useLocalSearchParams();
  const { data, isLoading } = useQueryAptDetail(apt_id);
  console.log("daat ~ ", data);
  if (isLoading) return <AppLoading />;
  return (
    <ScrollView style={{ backgroundColor: Colors.light.background }}>
      <AptInformation label={"Mã căn hộ:"} content={data?.code} />
      <XStack
        borderBottomWidth={1}
        borderBlockColor={Colors.light.borderapp}
        py={10}
        px={15}
      >
        <Text flex={0.4} fos={16} ff={"$bold"}>
          Trạng thái:
        </Text>
        <XStack flex={0.6}>
          <AptStatus status={data?.status} />
        </XStack>
      </XStack>
      <AptInformation
        label={"Số tầng:"}
        content={`${data?.floorNumber} tầng`}
      />
      <AptInformation label={"Diện tích:"} content={`${data?.area}m2`} />
      <AptInformation
        label={"Giá thuê:"}
        content={formatVND(data?.rentPrice)}
      />
      <AptInformation label={"Giá bán:"} content={formatVND(data?.sellPrice)} />
      <MyAptDetailOwner
        status={data?.status}
        userProfile={data?.userProfile}
        userId={data?.userId}
      />
      <MyAptDetailUtilities />
      <AptImages imageUrls={data?.imageUrls} />
      {/* <AppDetailContracts /> */}
    </ScrollView>
  );
}
