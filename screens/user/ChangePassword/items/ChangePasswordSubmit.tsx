import { View, Text } from "react-native";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AppButtonNormal } from "@/elements";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import Toast from "react-native-toast-message";
import { AccountService, FetchApi } from "@/utils";
import { useRouter } from "expo-router";

export function ChangePasswordSubmit() {
  const router = useRouter();
  const {
    handleSubmit,
    formState: { isSubmitting },
    setError,
  } = useFormContext();

  const onSubmit = async (data: {
    newPassword: String;
    oldPassword: String;
    confirmNewPassword: string;
  }) => {
    try {
      if (data.newPassword === data.confirmNewPassword) {
        const { newPassword, oldPassword } = data;
        appGlobalLoadingRef.current?.show();
        await FetchApi.changePassword({ newPassword, oldPassword });
        await AccountService.remove();
        router.replace("/(auth)");
        Toast.show({
          type: "success",
          text1: "Đổi mật khẩu thành công",
          text2: "Bạn vui lòng đăng nhập lại tài khoản",
        });
      } else
        setError("confirmNewPassword", {
          message: "Xác nhận mật khẩu mới không trùng khớp",
        });
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
      Đổi mật khẩu
    </AppButtonNormal>
  );
}
