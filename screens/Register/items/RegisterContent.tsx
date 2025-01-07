import React from "react";
import { useFormContext } from "react-hook-form";
import { AppInputMask, AppTextInput } from "@/elements";
import { YStack } from "tamagui";
import { ScrollView } from "react-native";
import { Masks } from "react-native-mask-input";

export function RegisterContent() {
  const { control } = useFormContext();
  return (
    <YStack gap={10}>
      <AppTextInput
        name="email"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Email"}
        placeholder="Email"
      />
      <AppTextInput
        name="lastName"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Họ"}
        placeholder="Họ"
      />
      <AppTextInput
        name="firstName"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Tên"}
        placeholder="Tên"
      />
      <AppTextInput
        name="cccd"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Số căn cước công dân"}
        placeholder="Số căn cước công dân"
      />
      <AppTextInput
        name="phone"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Số điện thoại"}
        placeholder="Số điện thoại"
      />
      <AppInputMask
        name="birthDay"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Ngày sinh"}
        placeholder="MM/DD/YYYY"
        mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
      />
      <AppTextInput
        name="password"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Mật khẩu"}
        placeholder="Mật khẩu"
        secureTextEntry
      />
    </YStack>
  );
}
