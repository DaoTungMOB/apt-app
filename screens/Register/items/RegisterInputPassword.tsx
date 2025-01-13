import { View, Text } from "react-native";
import React, { useState } from "react";
import { AppInputMask, AppTextInput } from "@/elements";
import { useFormContext } from "react-hook-form";
import { Eye, EyeOff } from "@tamagui/lucide-icons";
import { Colors } from "@/constants";

export function RegisterInputPassword() {
  const { control } = useFormContext();
  const [isShowPass, setIsShowPass] = useState(false);
  const IconRight = { true: Eye, false: EyeOff }[`${isShowPass}`];
  const toogleShowPass = () => setIsShowPass(!isShowPass);

  return (
    <AppInputMask
      name="password"
      control={control}
      label={"Mật khẩu"}
      placeholder="Mật khẩu"
      secureTextEntry={!isShowPass}
      iconRight={() => (
        <IconRight
          size={20}
          color={Colors.light.grey999}
          onPress={toogleShowPass}
          hitSlop={10}
        />
      )}
    />
  );
}
