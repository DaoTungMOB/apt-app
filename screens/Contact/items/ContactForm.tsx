import { View, Text } from "react-native";
import React from "react";
import { AppTextare, AppTextInput } from "@/elements";
import { useFormContext } from "react-hook-form";

export function ContactForm() {
  const { control } = useFormContext();
  return (
    <>
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
        name="phone"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Số điện thoại"}
        placeholder="Số điện thoại"
      />
      <AppTextare
        name="content"
        control={control}
        rules={{
          required: { value: true, message: "Vui lòng tạo thông tin này" },
        }}
        label={"Nội dung"}
        placeholder="Nội dung"
      />
    </>
  );
}
