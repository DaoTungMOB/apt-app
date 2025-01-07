import { AppContainer } from "@/elements";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, YStack } from "tamagui";
import { RegisterContent } from "./items/RegisterContent";
import { RegisterSubmit } from "./items/RegisterSubmit";
import { Link } from "expo-router";
import { Colors, devide_height } from "@/constants";
import { ScrollView } from "react-native";

export function RegisterScreen() {
  const form = useForm();
  return (
    <AppContainer {...form}>
      <ScrollView
        style={{ paddingTop: 50, paddingBottom: 100 }}
        contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <Text fow={"bold"} fos={24} pb={10} ta={"center"} color={"$tint"}>
          Đăng Ký
        </Text>
        <Text fow={"500"} fos={16} ta={"center"} pb={30} mx={30}>
          Chào mừng bạn đến với ứng dụng quản lý căn hộ
        </Text>
        <YStack gap={20}>
          <RegisterContent />
          <RegisterSubmit />
        </YStack>

        <Text color={"$tint"} ta={"center"} pt={10}>
          Bạn đã có tài khoản?{" "}
          <Link
            href={"/(auth)"}
            style={{
              fontWeight: "600",
              textDecorationColor: Colors.light.tint,
              textDecorationStyle: "dashed",
              textDecorationLine: "underline",
            }}
          >
            Đăng nhập
          </Link>
        </Text>
      </ScrollView>
    </AppContainer>
  );
}
