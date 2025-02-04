import { AppButtonNormal, AppTextInput } from "@/elements";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import { FetchApi } from "@/utils";
import { useRouter } from "expo-router";
import React from "react";
import { useFormContext } from "react-hook-form";
import Toast from "react-native-toast-message";
import { Text, View } from "tamagui";

export function ResetPassword() {
  const router = useRouter();
  const { control, getValues, setError, handleSubmit, setValue } =
    useFormContext();

  const resetPassword = async (data) => {
    try {
      console.log("data ~ ", data);
      appGlobalLoadingRef.current?.show();
      await FetchApi.resetPassword({
        newPassword: data?.newPassword,
        token: data?.token,
      });
      Toast.show({
        type: "success",
        text1: "Đổi mật khẩu thành công",
        text2: "Vui lòng đăng nhập lại tài khoản",
      });
      router.replace('/(auth)')
    } catch (error) {
      Toast.show({ type: "error", text1: "Xảy ra lỗi trong quá trình xử lý" });
    } finally {
      appGlobalLoadingRef.current?.hide();
    }
  };
  return (
    <View gap={30}>
      <Text ff={"$bold"} fos={16} textAlign="center" mx={20}>
        Bạn vui lòng đổi mật khẩu mới
      </Text>
      <View gap={20}>
        <AppTextInput
          control={control}
          name="newPassword"
          placeholder="Nhập mật khẩu mới"
          rules={{
            required: { value: true, message: "Không được để trống" },
          }}
          secureTextEntry
        />
        <AppButtonNormal onPress={handleSubmit(resetPassword)}>
          Đổi mật khẩu
        </AppButtonNormal>
      </View>
    </View>
  );
}
