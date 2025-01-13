import { View, Text } from "react-native";
import React from "react";
import { AppButtonNormal } from "@/elements";
import { useFormContext } from "react-hook-form";
import Toast from "react-native-toast-message";
import { FetchApi } from "@/utils";
import { useNavigation } from "expo-router";

export function ContactSubmit() {
  const navigation = useNavigation();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext();
  const onSubmit = async (data) => {
    try {
      await FetchApi.sendContact(data);
      Toast.show({
        type: "success",
        text1: "Liên hệ với admin thành công",
        text2:
          "Bạn hãy chờ phản hồi từ admin, admin sẽ liên hệ với bạn sớm nhất có thể",
      });
      navigation.goBack();
    } catch (error) {
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    }
  };
  return (
    <AppButtonNormal
      mt={10}
      isLoading={isSubmitting}
      onPress={handleSubmit(onSubmit)}
    >
      Liên hệ
    </AppButtonNormal>
  );
}
