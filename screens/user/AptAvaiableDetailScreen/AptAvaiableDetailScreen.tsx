import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Text, View, XStack } from "tamagui";
import { useQueryAptAvaiableDetail } from "./modules/useQueryAptAvaiableDetail";
import { AppLoading } from "@/elements";
import { AptInformation } from "@/screens/admin/AptDetail/items/AptInformation";
import { AptImages } from "@/screens/admin/AptDetail/items/AptImages";
import { AptStatus } from "@/screens/admin/Apts/items/AptStatus";
import { Colors } from "@/constants";
import { FetchApi, formatVND, TUtility } from "@/utils";
import { MyAptDetailUtilities } from "@/screens/MyAptDetail/items/MyAptDetailUtilities";
import { useQueryAptDetailUtilities } from "@/screens/MyAptDetail/modules/useQueryAptDetailUtilities";
import { Collapsible } from "@/components/Collapsible";

export function AptAvaiableDetailScreen() {
  const { apt_id } = useLocalSearchParams();
  const { data, isLoading } = useQueryAptAvaiableDetail(apt_id);
  console.log("apt_id ~ ", apt_id);
  // console.log("data ~ ", data);
  const { data: utilities } = useQueryAptDetailUtilities(apt_id);
  console.log("data utility ~ ", utilities);

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
      <Collapsible title={"Dịch vụ phòng"}>
        <View pb={10} gap={10}>
          {utilities?.map((item) => {
            return (
              <View
                // onPress={() =>
                //   router.push({
                //     pathname: "/(tabs_user)/myApt/utilityDetail",
                //     params: { utility_id: item._id },
                //   })
                // }
                key={item._id}
                borderBottomWidth={1}
                borderBottomColor={"$borderapp"}
                mx={15}
                px={15}
                py={10}
                backgroundColor={"#fff"}
                elevationAndroid={3}
                borderRadius={12}
              >
                <Text>
                  Dịch vụ: <Text ff={"$bold"}>{item.title}</Text>
                </Text>
                <Text>
                  Giá dịch vụ: <Text ff={"$bold"}>{formatVND(item.price)}</Text>
                </Text>
                <Text>
                  Mô tả dịch vụ: <Text ff={"$bold"}>{item.description}</Text>
                </Text>
              </View>
            );
          })}
        </View>
      </Collapsible>
      <AptImages imageUrls={data?.imageUrls} />
    </ScrollView>
  );
}
