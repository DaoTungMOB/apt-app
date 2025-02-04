import React from "react";
import { useFormContext } from "react-hook-form";
import { AppInputMask, AppTextInput } from "@/elements";
import { XStack, YStack } from "tamagui";
import { ScrollView } from "react-native";
import { Masks } from "react-native-mask-input";
import { RegisterInputPassword } from "./RegisterInputPassword";

export function RegisterContent() {
  const { control } = useFormContext();
  return (
    <YStack gap={10}>
      <AppTextInput
        name="email"
        control={control}
        label={"Email"}
        placeholder="Email"
      />
      <XStack gap={10}>
        <AppTextInput
          containerStyle={{ flex: 0.5 }}
          name="lastName"
          control={control}
          label={"Họ"}
          placeholder="Họ"
        />
        <AppTextInput
          containerStyle={{ flex: 0.5 }}
          name="firstName"
          control={control}
          label={"Tên"}
          placeholder="Tên"
        />
      </XStack>
      <XStack gap={10}>
        <AppTextInput
          containerStyle={{ flex: 0.5 }}
          name="phone"
          control={control}
          label={"Số điện thoại"}
          placeholder="Số điện thoại"
        />
        <AppInputMask
          containerStyle={{ flex: 0.5 }}
          name="birthDay"
          control={control}
          label={"Ngày sinh"}
          placeholder="MM/DD/YYYY"
          mask={Masks.DATE_MMDDYYYY}
        />
      </XStack>
      <AppTextInput
        name="cccd"
        control={control}
        label={"Số căn cước công dân"}
        placeholder="Số căn cước công dân"
      />

      <RegisterInputPassword />
    </YStack>
  );
}
