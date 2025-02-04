import { AppContainer } from "@/elements";
import React from "react";
import { useForm } from "react-hook-form";
import { Text, YStack } from "tamagui";
import { RegisterContent } from "./items/RegisterContent";
import { RegisterSubmit } from "./items/RegisterSubmit";
import { Link } from "expo-router";
import { Colors, devide_height } from "@/constants";
import { ScrollView } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  CCCD_MESSAGE,
  CCCD_RULE,
  ONLY_UNICODE_MESSAGE,
  ONLY_UNICODE_RULE,
  PASSWORD_RULE,
  PASSWORD_RULE_MESSAGE,
  PHONE_MESSAGE,
  PHONE_RULE,
} from "./modules/validate";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Vui lòng tạo thông tin này")
      .email("Không đúng định dạng email"),
    firstName: yup
      .string()
      .required("Vui lòng tạo thông tin này")
      .matches(ONLY_UNICODE_RULE, ONLY_UNICODE_MESSAGE),
    lastName: yup
      .string()
      .required("Vui lòng tạo thông tin này")
      .matches(ONLY_UNICODE_RULE, ONLY_UNICODE_MESSAGE),
    cccd: yup
      .string()
      .required("Vui lòng tạo thông tin này")
      .matches(CCCD_RULE, CCCD_MESSAGE),
    phone: yup
      .string()
      .required("Vui lòng tạo thông tin này")
      .matches(PHONE_RULE, PHONE_MESSAGE),
    birthDay: yup.string().required("Vui lòng tạo thông tin này"),
    password: yup
      .string()
      .required("Vui lòng tạo thông tin này")
      .matches(PASSWORD_RULE, PASSWORD_RULE_MESSAGE),
  })
  .required();
export function RegisterScreen() {
  const form = useForm({ resolver: yupResolver(schema) });
  return (
    <AppContainer form={form}>
      <ScrollView
        style={{ paddingHorizontal: 15 }}
        contentContainerStyle={{ paddingVertical: 35 }}
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
