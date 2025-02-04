import { View, Text } from "react-native";
import React from "react";
import { AppButtonNormal } from "@/elements";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import Toast from "react-native-toast-message";
import { FetchApi } from "@/utils";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useFormContext } from "react-hook-form";

export function EditUltilitySubmit() {
  const { utility_id } = useLocalSearchParams();
  const navigation = useNavigation();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext();
  const onSubmit = async (data) => {
    try {
      appGlobalLoadingRef.current?.show();
      await FetchApi.updateUtility({
        id: utility_id,
        ...data,price: Number(data.price)
      });
      Toast.show({ type: "success", text1: "Chỉnh sửa thành công" });
      navigation.goBack();
    } catch (error) {
      console.log("error ~ ", error);
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
      Chỉnh sửa
    </AppButtonNormal>
  );
}
