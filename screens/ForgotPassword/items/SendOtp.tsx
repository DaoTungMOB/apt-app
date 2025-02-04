import { AppButtonNormal, AppTextInput } from "@/elements";
import { appGlobalLoadingRef } from "@/elements/AppGlobalLoading";
import { FetchApi } from "@/utils";
import React from "react";
import { useFormContext } from "react-hook-form";
import Toast from "react-native-toast-message";
import { Text, View } from "tamagui";

export function SendOtp() {
  const { control, getValues, setError, handleSubmit, setValue } =
    useFormContext();

  const sendOtp = async () => {
    try {
      const email = getValues("email");
      console.log("email ~ ", email);
      appGlobalLoadingRef.current?.show();
      const res = await FetchApi.forgotPassword(email);
      Toast.show({ type: "success", text1: res.message });
      setValue("step", "verify_otp");
    } catch (error) {
      console.log((error as Error).message);
      Toast.show({ type: "error", text1: "Email không tồn tại" });
    } finally {
      appGlobalLoadingRef.current?.hide();
    }
  };
  return (
    <View gap={30}>
      <Text ff={"$bold"} fos={16} textAlign="center" mx={20}>
        Bạn vui lòng nhập email của mình, chúng tôi sẽ gửi mã otp vào email của
        bạn
      </Text>
      <View gap={20}>
        <AppTextInput
          control={control}
          name="email"
          placeholder="example@gmail.com"
          rules={{
            required: { value: true, message: "Không được để trống" },
            pattern: {
              value:
                /^(?!\.)[a-zA-Z0-9._%+-]+(?<!\.)@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
              message: "Email không hợp lệ",
            },
          }}
        />
        <AppButtonNormal onPress={handleSubmit(sendOtp)}>
          Gửi email
        </AppButtonNormal>
      </View>
    </View>
  );
}
