import React from "react";
import { AppButtonNormal, AppTextInput } from "@/elements";
import { Text, View } from "tamagui";
import { useFormContext } from "react-hook-form";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import Toast from "react-native-toast-message";
import { FetchApi } from "@/utils";

export function VerifyForgotPassword() {
  const { control, getValues, setError, handleSubmit, setValue } =
    useFormContext();

  const verifyOtp = async () => {
    try {
      appGlobalLoadingRef.current?.show();
      const email = getValues("email");
      const otp = getValues("otp");
      const res = await FetchApi.verifyForgotPassword({ email, otp });
      console.log('res ~ ', res)
      if (res.canResetPassword && res?.token) {
        console.log('abc')
        setValue("token", res?.token);
        setValue("step", "reset_password");
      } else {
        Toast.show({
          type: "error",
          text1: "Xảy ra lỗi trong quá trình xử lý",
        });
      }
    } catch (error) {
        console.log('error verify otp ~ ', error)
      Toast.show({ type: "error", text1: "Mã otp không hợp lệ" });
    } finally {
      appGlobalLoadingRef.current?.hide();
    }
  };
  return (
    <View gap={30}>
      <Text ff={"$bold"} fos={16} textAlign="center" mx={20}>
        Bạn vui lòng nhập mã otp của mình
      </Text>
      <View gap={20}>
        <AppTextInput
          control={control}
          name="otp"
          placeholder="Nhập mã otp của bạn"
          rules={{
            required: { value: true, message: "Không được để trống" },
          }}
        />
        <AppButtonNormal onPress={handleSubmit(verifyOtp)}>
          Gửi mã
        </AppButtonNormal>
      </View>
    </View>
  );
}
