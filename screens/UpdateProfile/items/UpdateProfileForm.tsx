import { View, Text } from "react-native";
import React from "react";
import { AppInputMask, AppTextInput } from "@/elements";
import { XStack } from "tamagui";
import { useFormContext } from "react-hook-form";
import { Masks } from "react-native-mask-input";

export function UpdateProfileForm() {
  const { control } = useFormContext();
  return (
    <>
      <AppTextInput
        name="lastName"
        control={control}
        label={"Họ"}
        placeholder="Họ"
      />
      <AppTextInput
        name="firstName"
        control={control}
        label={"Tên"}
        placeholder="Tên"
      />
      <AppTextInput
        name="phone"
        control={control}
        label={"Số điện thoại"}
        placeholder="Số điện thoại"
      />
      <AppInputMask
        name="birthDay"
        control={control}
        label={"Ngày sinh"}
        placeholder="DD/MM/YYYY"
        mask={Masks.DATE_DDMMYYYY}
      />
      <AppTextInput
        name="cccd"
        control={control}
        label={"Số căn cước công dân"}
        placeholder="Số căn cước công dân"
      />
    </>
  );
}
