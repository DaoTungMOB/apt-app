import { View, Text } from "react-native";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AppButtonNormal } from "@/elements";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import Toast from "react-native-toast-message";

export function EditAptSubmit() {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext();
  const onSubmit = async (data) => {
    try {
      appGlobalLoadingRef.current?.show();
      Toast.show({ type: "success", text1: "Chỉnh sửa căn hộ thành công" });
    } catch (error) {
      console.log(error);
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    } finally {
      appGlobalLoadingRef.current?.hide();
    }
  };
  return (
    <AppButtonNormal isLoading={isSubmitting} onPress={handleSubmit(onSubmit)}>
      Chỉnh sửa
    </AppButtonNormal>
  );
}
