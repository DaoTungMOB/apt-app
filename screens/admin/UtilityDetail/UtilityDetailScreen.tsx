import { ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Colors } from "@/constants";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text } from "tamagui";
import { TUtility } from "@/utils";
import { AptInformation } from "../AptDetail/items/AptInformation";
import { UtilityDetailHeaderRight } from "./items/UtilityDetailHeaderRight";
import { useQueryUtiityDetail } from "./modules/useQueryUtiityDetail";
import { UtilityDetailInvoice } from "./items/UtilityDetailInvoice";

export function UtilityDetailScreen() {
  const { utility_id } = useLocalSearchParams();
  const { data } = useQueryUtiityDetail(utility_id);
  console.log(data);
  const navigation = useNavigation();
  console.log("utility_id ~ ", utility_id);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <UtilityDetailHeaderRight utility_id={utility_id} />,
    });
  }, [navigation]);
  return (
    <ScrollView style={{ backgroundColor: Colors.light.background }}>
      <AptInformation label={"Tên dịch vụ:"} content={data?.title} />
      <AptInformation label={"Giá dịch vụ:"} content={data?.price} />
      <AptInformation label={"Mô tả dịch vụ:"} content={data?.description} />
      <UtilityDetailInvoice />
    </ScrollView>
  );
}
