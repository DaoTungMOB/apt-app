import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useQueryMyUtility } from "./modules/useQueryMyUtility";
import { AptInformation } from "../admin/AptDetail/items/AptInformation";
import { MyUtilityDetailInvoice } from "./items/MyUtilityDetailInvoice";

export function MyAptUtilityDetailScreen() {
  const { utility_id } = useLocalSearchParams();
  const { data } = useQueryMyUtility(utility_id);
  console.log("utility_id ~ ", utility_id);
  console.log("data ~ ", data);

  return (
    <ScrollView style={{ backgroundColor: Colors.light.background }}>
      <AptInformation label={"Tên dịch vụ:"} content={data?.title} />
      <AptInformation label={"Giá dịch vụ:"} content={data?.price} />
      <AptInformation label={"Mô tả dịch vụ:"} content={data?.description} />
      <MyUtilityDetailInvoice />
    </ScrollView>
  );
}
