import { View, Text } from "react-native";
import React from "react";
import { AppButtonNormal } from "@/elements";
import { useFormContext } from "react-hook-form";
import Toast from "react-native-toast-message";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import { FetchApi, QUERY_KEY } from "@/utils";
import { TAccount } from "@/utils";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigation } from "expo-router";

export type TDataUpdateProfile = Pick<
  TAccount,
  "birthDay" | "cccd" | "firstName" | "lastName" | "phone"
>;
export function UpdateProfileSubmit() {
  const queryClient = useQueryClient();
  const navigation = useNavigation();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext();
  const onSubmit = async (data: TData) => {
    try {
      appGlobalLoadingRef.current?.show();
      await FetchApi.updateProfile(data);
      queryClient.refetchQueries({
        queryKey: [QUERY_KEY.APP, QUERY_KEY.ACCOUNT, QUERY_KEY.MY_PROFILE],
      });
      navigation.goBack();
      Toast.show({ type: "success", text1: "Chỉnh sửa thành công" });
    } catch (error) {
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    } finally {
      appGlobalLoadingRef.current?.hide();
    }
  };
  return (
    <AppButtonNormal
      mt={10}
      isLoading={isSubmitting}
      onPress={handleSubmit(onSubmit)}
    >
      Cập nhật
    </AppButtonNormal>
  );
}
