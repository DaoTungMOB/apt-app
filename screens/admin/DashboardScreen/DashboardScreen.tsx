import { ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants";
import { useStatistics } from "./modules/useStatistics ";
import { AppLoading } from "@/elements";
import { Text, View } from "tamagui";
import dayjs = require("dayjs");
import { formatVND } from "@/utils";
import { useRouter } from "expo-router";

export function DashboardScreen() {
  const router = useRouter();
  const { data, isLoading } = useStatistics();
  console.log("data ~ ", data);
  if (isLoading) return <AppLoading />;
  return (
    <ScrollView
      style={{ backgroundColor: Colors.light.background }}
      contentContainerStyle={{ padding: 15, gap: 20 }}
    >
      <View
        gap={15}
        padding={20}
        borderWidth={1}
        borderColor={"rgb(117, 186, 117)"}
        borderRadius={12}
        backgroundColor={"rgba(117, 186, 117, 0.2)"}
      >
        <Text ff={"$bold"} fos={20}>
          Số tài khoản mới trong tháng {dayjs().format("MM")}
        </Text>
        <Text ff={"$bold"} fos={36} color={"rgb(117, 186, 117)"}>
          {data?.signedStatistic.length}
        </Text>
      </View>
      <View
        onPress={() => router.push("/statisticDetail")}
        gap={15}
        padding={20}
        borderWidth={1}
        borderColor={"rgb(117, 186, 117)"}
        borderRadius={12}
        backgroundColor={"rgba(117, 186, 117, 0.2)"}
      >
        <Text ff={"$bold"} fos={20}>
          Số hóa đơn thanh toán trong tháng {dayjs().format("MM")}
        </Text>
        <Text ff={"$bold"} fos={36} color={"rgb(117, 186, 117)"}>
          {data?.paidStatistic.length}
        </Text>
      </View>
      <View
        onPress={() => router.push("/statisticDetail")}
        gap={15}
        padding={20}
        borderWidth={1}
        borderColor={"rgb(117, 186, 117)"}
        borderRadius={12}
        backgroundColor={"rgba(117, 186, 117, 0.2)"}
      >
        <Text ff={"$bold"} fos={20}>
          Tổng số tiền hóa đơn thanh toán trong tháng {dayjs().format("MM")}
        </Text>
        <Text ff={"$bold"} fos={36} color={"rgb(117, 186, 117)"}>
          {formatVND(
            data?.paidStatistic.reduce(
              (sum, invoice) => sum + invoice.totalPrice,
              0
            ) || 0
          )}
        </Text>
      </View>
    </ScrollView>
  );
}
