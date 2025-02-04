import { ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Text, XStack } from "tamagui";
import { useQueryAptAvaiableDetail } from "./modules/useQueryAptAvaiableDetail";
import { AppLoading } from "@/elements";
import { AptInformation } from "@/screens/admin/AptDetail/items/AptInformation";
import { AptImages } from "@/screens/admin/AptDetail/items/AptImages";
import { AptStatus } from "@/screens/admin/Apts/items/AptStatus";
import { Colors } from "@/constants";
import { formatVND } from "@/utils";
import { MyAptDetailUtilities } from "@/screens/MyAptDetail/items/MyAptDetailUtilities";
import { useQueryAptDetailUtilities } from "@/screens/MyAptDetail/modules/useQueryAptDetailUtilities";

export function AptAvaiableDetailScreen() {
  const { apt_id } = useLocalSearchParams();
  const { data, isLoading } = useQueryAptAvaiableDetail(apt_id);
  console.log("apt_id ~ ", apt_id);
  // console.log("data ~ ", data);
   const { data: utilities } = useQueryAptDetailUtilities(apt_id);
    console.log('data utility ~ ',utilities);
  if (isLoading) return <AppLoading />;
  if (!data) return null;
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
      <AptInformation label={"Tầng:"} content={`Tầng ${data?.floorNumber}`} />
      <AptInformation label={"Diện tích:"} content={`${data?.area}m2`} />
      <AptInformation
        label={"Giá thuê:"}
        content={formatVND(data?.rentPrice)}
      />
      <AptInformation label={"Giá bán:"} content={formatVND(data?.sellPrice)} />
      {/* <MyAptDetailUtilities /> */}
      <AptImages imageUrls={data?.imageUrls} />
    </ScrollView>
  );
}
