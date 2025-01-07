import { View, Text } from "react-native";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AppButtonNormal } from "@/elements";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";
import { FetchApi } from "@/utils";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";

export function RegisterSubmit() {
  const router = useRouter();
  const { handleSubmit } = useFormContext();

  const onSubmit = async (data: any) => {
    try {
      appGlobalLoadingRef?.current?.show();
      console.log("data ~ ", data);
      await FetchApi.register(data);
      Toast.show({ type: "success", text1: "Đăng ký tài khoản thành công" });
      router.replace("/(auth)");
    } catch (error) {
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    } finally {
      appGlobalLoadingRef?.current?.hide();
    }
  };
  return (
    <AppButtonNormal onPress={handleSubmit(onSubmit)}>Đăng ký</AppButtonNormal>
  );
}
