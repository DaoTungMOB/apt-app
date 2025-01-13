import React from "react";
import { useFormContext } from "react-hook-form";
import { AppSelectDate, AppTextInput } from "@/elements";
import { YStack } from "tamagui";
import { LoginInputPassword } from "./LoginInputPassword";

export function LoginContent() {
  const { control } = useFormContext();
  return (
    <YStack gap={20}>
      <AppTextInput
        name="email"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Email"}
        placeholder="Email"
      />
      <LoginInputPassword />
    </YStack>
  );
}
