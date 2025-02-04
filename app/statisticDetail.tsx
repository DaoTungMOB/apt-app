import { ScrollView } from "react-native";
import React from "react";
import { useStatistics } from "@/screens/admin/DashboardScreen/modules/useStatistics ";
import { Colors } from "@/constants";
import { Text, View, XStack } from "tamagui";
import { formatVND } from "@/utils";
import dayjs = require("dayjs");

export default function StatisticDetail() {
  const { data, isLoading } = useStatistics();
  console.log("data statucusdvh ~~~~~~~~~~~~~~ ", data);
  const renderStatus = (status: boolean) => {
    const statusStyle = {
      false: {
        color: "rgb(229, 9, 20)",
        backgroundColor: "rgba(229, 9, 20, 0.4)",
        text: "Chưa thanh toán",
      },
      true: {
        color: "rgb(46, 124, 255)",
        backgroundColor: "rgba(46, 124, 255, 0.4)",
        text: "Đã thanh toán",
      },
    }[`${status}`];
    return (
      <View
        backgroundColor={statusStyle.backgroundColor}
        px={5}
        py={3}
        borderRadius={5}
      >
        <Text color={statusStyle.color}>{statusStyle.text}</Text>
      </View>
    );
  };
  if (!data?.paidStatistic) return null;
  return (
    <ScrollView
      style={{ backgroundColor: Colors.light.background }}
      contentContainerStyle={{ paddingVertical: 15, gap: 15 }}
    >
      {data.paidStatistic.map((item) => {
        return (
          <View
            // borderBottomWidth={1}
            // borderBottomColor={"$borderapp"}
            px={15}
            py={10}
            mx={15}
            backgroundColor={"#fff"}
            elevationAndroid={3}
            borderRadius={12}
          >
            <XStack alignItems="center" justifyContent="space-between">
              <Text ff={"$bold"}>{item.title}</Text>{" "}
              {renderStatus(item?.status)}
            </XStack>
            <Text>
              <Text ff={"$bold"}>Giá: </Text>
              {formatVND(item?.unitPrice)}
            </Text>
            <Text>
              <Text ff={"$bold"}>Số lượng: </Text>
              {item?.quantity}
            </Text>
            <Text>
              <Text ff={"$bold"}>Tổng hóa đơn: </Text>
              {formatVND(item?.totalPrice)}
            </Text>
            <Text>
              <Text ff={"$bold"}>Ngày tạo hóa đơn: </Text>
              <Text>{dayjs(item?.createdAt).format("DD/MM/YYYY")}</Text>
            </Text>
          </View>
        );
      })}
    </ScrollView>
  );
}
