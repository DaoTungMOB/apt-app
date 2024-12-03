import { View, Text } from "react-native";
import React from "react";
import { AppButtonNormal } from "@/elements";
import { useFormContext } from "react-hook-form";
import { useRouter } from "expo-router";

type TData = { email: String; password: string };

export function LoginSubmit() {
  const router = useRouter();
  const { handleSubmit } = useFormContext();

  const onSubmit = (data: TData) => {
    console.log("data ~ ", data);
    router.replace("/(tabs)/account");
  };
  return (
    <AppButtonNormal onPress={handleSubmit(onSubmit)}>
      Đăng nhập
    </AppButtonNormal>
  );
}
