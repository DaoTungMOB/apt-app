import { View, Text } from "react-native";
import React from "react";
import { AppButtonNormal } from "@/elements";
import { useFormContext } from "react-hook-form";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { FetchApi, ROLE } from "@/utils";

type TData = { email: String; password: string };

export function LoginSubmit() {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { isLoading },
  } = useFormContext();

  const onSubmit = async (data: TData) => {
    try {
      console.log("data ~ ", data);
      const response = await FetchApi.login(data);
      Toast.show({type: 'success', text1: 'Đăng nhập thành công'})
      if (response?.userProlile?.role === ROLE.ADMIN)
        router.replace("/(tabs_admin)");
      else if (response?.userProlile?.role === ROLE.USER)
        router.replace("/(tabs_user)");
      //
    } catch (error) {
      console.log(error);
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    }
  };
  return (
    <AppButtonNormal isLoading={isLoading} onPress={handleSubmit(onSubmit)}>
      Đăng nhập
    </AppButtonNormal>
  );
}
