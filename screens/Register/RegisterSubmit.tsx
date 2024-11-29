import { View, Text } from "react-native";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AppButtonNormal } from "@/elements";

type TData = { email: String; password: string };

export function RegisterSubmit() {
    const { handleSubmit } = useFormContext();

    const onSubmit = (data: TData) => {
      console.log("data ~ ", data);
    };
    return (
      <AppButtonNormal onPress={handleSubmit(onSubmit)}>
        Đăng ký
      </AppButtonNormal>
    );
}
