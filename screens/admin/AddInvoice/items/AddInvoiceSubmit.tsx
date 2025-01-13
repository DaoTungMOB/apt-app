import { View, Text } from "react-native";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AppButtonNormal } from "@/elements";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import Toast from "react-native-toast-message";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { FetchApi } from "@/utils";

export function AddInvoiceSubmit() {
  const { utility_id } = useLocalSearchParams();
  const navigation = useNavigation();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext();
  const onSubmit = async (data) => {
    try {
      appGlobalLoadingRef.current?.show();
      await FetchApi.addInvoice({ utility_id, ...data });
      Toast.show({ type: "success", text1: "Thêm mới thành công" });
      navigation.goBack();
    } catch (error) {
      console.log(error);
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
      Thêm mới
    </AppButtonNormal>
  );
}
