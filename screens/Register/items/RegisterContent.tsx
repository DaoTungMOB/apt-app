import React from "react";
import { useFormContext } from "react-hook-form";
import { AppTextInput } from "@/elements";
import { YStack } from "tamagui";

export function RegisterContent() {
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
      <AppTextInput
        name="password"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Email"}
        placeholder="Email"
      />
    </YStack>
  );
}
